import { useRef, useState } from "react";
import Turnstile, { TESTING_SITE_KEY } from "../common/Turnstile";

const TURNSTILE_SITE_KEY =
  import.meta.env.VITE_TURNSTILE_SITE_KEY || TESTING_SITE_KEY;

export default function ContactForm() {
  const turnstileRef = useRef(null);
  const [turnstileToken, setTurnstileToken] = useState(null);
  const [status, setStatus] = useState(null);

  function handleSubmit(e) {
    e.preventDefault();

    if (!turnstileToken) {
      setStatus("missing-captcha");
      return;
    }

    setStatus("success");
    turnstileRef.current?.reset();
    setTurnstileToken(null);
  }

  return (
    <section
      id="contact"
      data-reveal
      className="newenche reveal-up mt-24 rounded-[32px] card-soft p-8 md:p-10"
    >
      <div className="grid gap-10 md:grid-cols-2 md:items-start">
        <div>
          <p className="eyebrow mb-3 flex items-center gap-2 text-sm font-semibold uppercase tracking-[0.14em]">
            <span className="eyebrow-tick" aria-hidden="true" />
            Hablemos
          </p>
          <h2
            className="font-display mb-4 text-2xl font-semibold md:text-3xl"
            style={{ color: "var(--pine)" }}
          >
            Contáctanos
          </h2>
          <p className="text-body mb-6 text-base leading-relaxed">
            Envíanos un mensaje y te responderemos a la brevedad. Estamos
            dispuestos para ayudarte en cada momento.
          </p>
          <ul className="space-y-4 text-sm">
            <li className="flex items-start gap-3">
              <span className="icon-chip mt-0.5 flex h-9 w-9 shrink-0 items-center justify-center rounded-full">
                ✉
              </span>
              <span className="text-body pt-1.5">contacto@newenche.cl</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="icon-chip mt-0.5 flex h-9 w-9 shrink-0 items-center justify-center rounded-full">
                📞
              </span>
              <span className="text-body pt-1.5">+56 9 1234 5678</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="icon-chip mt-0.5 flex h-9 w-9 shrink-0 items-center justify-center rounded-full">
                📍
              </span>
              <span className="text-body pt-1.5">Santiago, Chile</span>
            </li>
          </ul>
        </div>

        <div className="card-soft rounded-[24px] p-6">
          <form className="space-y-4" onSubmit={handleSubmit} noValidate>
            <div className="grid gap-4 sm:grid-cols-2">
              <div>
                <label className="field-label mb-1 block text-sm font-medium">
                  Nombre
                </label>
                <input
                  type="text"
                  required
                  placeholder="Tu nombre"
                  className="field-input w-full rounded-lg px-4 py-2.5 text-sm transition"
                />
              </div>
              <div>
                <label className="field-label mb-1 block text-sm font-medium">
                  Teléfono
                </label>
                <input
                  type="tel"
                  required
                  placeholder="+56 9 0000 0000"
                  className="field-input w-full rounded-lg px-4 py-2.5 text-sm transition"
                />
              </div>
            </div>
            <div>
              <label className="field-label mb-1 block text-sm font-medium">
                Correo electrónico
              </label>
              <input
                type="email"
                required
                placeholder="tu@correo.com"
                className="field-input w-full rounded-lg px-4 py-2.5 text-sm transition"
              />
            </div>
            <div>
              <label className="field-label mb-1 block text-sm font-medium">
                Asunto
              </label>
              <input
                type="text"
                required
                placeholder="¿En qué podemos ayudarte?"
                className="field-input w-full rounded-lg px-4 py-2.5 text-sm transition"
              />
            </div>
            <div>
              <label className="field-label mb-1 block text-sm font-medium">
                Mensaje
              </label>
              <textarea
                rows={4}
                required
                placeholder="Escribe tu mensaje aquí..."
                className="field-input w-full resize-none rounded-lg px-4 py-2.5 text-sm transition"
              />
            </div>

            <div>
              <Turnstile
                ref={turnstileRef}
                siteKey={TURNSTILE_SITE_KEY}
                onVerify={(token) => {
                  setTurnstileToken(token);
                  if (status === "missing-captcha") setStatus(null);
                }}
                onExpire={() => setTurnstileToken(null)}
                onError={() => setTurnstileToken(null)}
              />
              {status === "missing-captcha" && (
                <p className="mt-2 text-sm" style={{ color: "var(--clay)" }}>
                  Por favor completa la verificación antes de enviar.
                </p>
              )}
            </div>

            {status === "success" && (
              <p
                className="text-sm font-medium"
                style={{ color: "var(--pine)" }}
              >
                ¡Gracias! Tu mensaje quedó registrado, te contactaremos pronto.
              </p>
            )}

            <button
              type="submit"
              disabled={!turnstileToken}
              className="btn-primary w-full rounded-lg px-6 py-3 font-semibold transition hover:-translate-y-0.5 disabled:cursor-not-allowed disabled:opacity-50 disabled:hover:translate-y-0"
            >
              Enviar mensaje
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
