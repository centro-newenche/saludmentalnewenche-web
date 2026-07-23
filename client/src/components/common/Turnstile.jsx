import {
  forwardRef,
  useEffect,
  useImperativeHandle,
  useLayoutEffect,
  useRef,
  useState,
} from "react";

const SCRIPT_ID = "cf-turnstile-script";
const SCRIPT_SRC =
  "https://challenges.cloudflare.com/turnstile/v0/api.js?render=explicit";

const TESTING_SITE_KEY = "1x00000000000000000000AA";

const NORMAL_WIDTH = 300;
const NORMAL_HEIGHT = 65;

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

const Turnstile = forwardRef(function Turnstile(
  {
    siteKey,
    onVerify,
    onExpire,
    onError,
    theme = "light",
    language = "es",
    className = "",
  },
  ref,
) {
  const wrapperRef = useRef(null);
  const containerRef = useRef(null);
  const widgetIdRef = useRef(null);
  const [scale, setScale] = useState(1);

  // Watch the available width and shrink the widget to fit when the
  // container is narrower than its native 300px, never growing past 1.
  useLayoutEffect(() => {
    const wrapper = wrapperRef.current;
    if (!wrapper || typeof ResizeObserver === "undefined") return;

    const updateScale = (width) => {
      if (!width) return;
      setScale(Math.min(1, width / NORMAL_WIDTH));
    };

    updateScale(wrapper.getBoundingClientRect().width);

    const observer = new ResizeObserver(([entry]) => {
      updateScale(entry.contentRect.width);
    });
    observer.observe(wrapper);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    let cancelled = false;

    if (import.meta.env.PROD && siteKey === TESTING_SITE_KEY) {
      console.warn(
        "[Turnstile] Using Cloudflare's public TESTING site key in a production build. " +
          "This always passes and provides no real bot protection. " +
          "Check that VITE_TURNSTILE_SITE_KEY is set correctly (e.g. in .env.production or your host's env settings).",
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

  return (
    <div
      ref={wrapperRef}
      className={className}
      style={{ width: "100%", height: NORMAL_HEIGHT * scale }}
    >
      <div
        ref={containerRef}
        style={{
          width: NORMAL_WIDTH,
          transform: `scale(${scale})`,
          transformOrigin: "top left",
        }}
      />
    </div>
  );
});

export default Turnstile;
export { TESTING_SITE_KEY };