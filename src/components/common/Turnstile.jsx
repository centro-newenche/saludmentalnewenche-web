import { forwardRef, useEffect, useImperativeHandle, useRef } from "react";

const SCRIPT_ID = "cf-turnstile-script";
const SCRIPT_SRC = "https://challenges.cloudflare.com/turnstile/v0/api.js?render=explicit";

// Cloudflare's public "always passes" testing site key. Safe to use as a
// fallback during local development so the widget works before you've
// created your real site key. Never ships real protection — swap it for
// your VITE_TURNSTILE_SITE_KEY before going live.
const TESTING_SITE_KEY = "1x00000000000000000000AA";

let scriptLoadPromise = null;

function loadTurnstileScript() {
  if (typeof window === "undefined") return Promise.resolve();
  if (window.turnstile) return Promise.resolve();
  if (scriptLoadPromise) return scriptLoadPromise;

  scriptLoadPromise = new Promise((resolve, reject) => {
    const existing = document.getElementById(SCRIPT_ID);
    if (existing) {
      existing.addEventListener("load", () => resolve());
      existing.addEventListener("error", reject);
      return;
    }
    const script = document.createElement("script");
    script.id = SCRIPT_ID;
    script.src = SCRIPT_SRC;
    script.async = true;
    script.defer = true;
    script.onload = () => resolve();
    script.onerror = reject;
    document.head.appendChild(script);
  });

  return scriptLoadPromise;
}

/**
 * Cloudflare Turnstile widget for React (explicit rendering).
 *
 * <Turnstile
 *   siteKey={import.meta.env.VITE_TURNSTILE_SITE_KEY}
 *   onVerify={(token) => setToken(token)}
 *   onExpire={() => setToken(null)}
 * />
 *
 * Defaults to Spanish (`language="es"`) since this site is in Spanish.
 * Pass language="auto" to match the visitor's browser language instead,
 * or any other ISO 639-1 code (e.g. "en", "pt-BR").
 *
 * Grab a `ref` if you need to reset the widget after a submit attempt
 * (tokens are single-use and expire after 5 minutes):
 *   const turnstileRef = useRef(null);
 *   ...
 *   turnstileRef.current?.reset();
 */
const Turnstile = forwardRef(function Turnstile(
  { siteKey, onVerify, onExpire, onError, theme = "light", language = "es", className = "" },
  ref
) {
  const containerRef = useRef(null);
  const widgetIdRef = useRef(null);

  useEffect(() => {
    let cancelled = false;

    if (import.meta.env.PROD && siteKey === TESTING_SITE_KEY) {
      console.warn(
        "[Turnstile] Using Cloudflare's public TESTING site key in a production build. " +
          "This always passes and provides no real bot protection. " +
          "Check that VITE_TURNSTILE_SITE_KEY is set correctly (e.g. in .env.production or your host's env settings)."
      );
    }

    loadTurnstileScript().then(() => {
      if (cancelled || !containerRef.current || !window.turnstile) return;
      widgetIdRef.current = window.turnstile.render(containerRef.current, {
        sitekey: siteKey,
        theme,
        language,
        callback: (token) => onVerify?.(token),
        "expired-callback": () => onExpire?.(),
        "error-callback": () => onError?.(),
      });
    });

    return () => {
      cancelled = true;
      if (widgetIdRef.current != null && window.turnstile) {
        window.turnstile.remove(widgetIdRef.current);
        widgetIdRef.current = null;
      }
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [siteKey, theme, language]);

  useImperativeHandle(ref, () => ({
    reset: () => {
      if (widgetIdRef.current != null && window.turnstile) {
        window.turnstile.reset(widgetIdRef.current);
      }
    },
  }));

  return <div ref={containerRef} className={className} />;
});

export default Turnstile;
export { TESTING_SITE_KEY };