import Turnstile, { TESTING_SITE_KEY } from "../common/Turnstile";
import { useContactForm } from "../../hooks/useContactForm";

const TURNSTILE_SITE_KEY =
  import.meta.env.VITE_TURNSTILE_SITE_KEY || TESTING_SITE_KEY;

const INITIAL_VALUES = {
  name: "",
  phone: "",
  email: "",
  subject: "",
  message: "",
};

export default function ContactForm() {
  const {
    turnstileRef,
    values,
    fieldErrors,
    status,
    setTurnstileToken,
    setStatus,
    handleChange,
    handleSubmit,
  } = useContactForm("general", INITIAL_VALUES);

  const isSubmitting = status === "submitting";

  return (
    <section
      id="contact"
      data-reveal
      className="newenche reveal-up mt-16 sm:mt-24 rounded-[32px] card-soft p-6 sm:p-8 md:p-10 overflow-hidden"
    >
      <div className="grid grid-cols-1 gap-10 md:grid-cols-2 md:items-start">
        <div className="min-w-0">
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
              <span className="text-body pt-1.5">contacto@centronewenche.cl</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="icon-chip mt-0.5 flex h-9 w-9 shrink-0 items-center justify-center rounded-full">
                📞
              </span>
              <span className="text-body pt-1.5">+56 9 7805 9311</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="icon-chip mt-0.5 flex h-9 w-9 shrink-0 items-center justify-center rounded-full">
                📍
              </span>
              <span className="text-body pt-1.5">Santiago, Chile</span>
            </li>
          </ul>
        </div>

        <div className="card-soft min-w-0 rounded-[24px] p-6">
          <form className="space-y-4" onSubmit={handleSubmit} noValidate>
            <div className="grid gap-4 sm:grid-cols-2">
              <div>
                <label className="field-label mb-1 block text-sm font-medium">
                  Nombre
                </label>
                <input
                  type="text"
                  name="name"
                  required
                  value={values.name}
                  onChange={handleChange}
                  placeholder="Tu nombre"
                  className="field-input w-full rounded-lg px-4 py-2.5 text-sm transition"
                />
                {fieldErrors.name && (
                  <p className="mt-1 text-xs" style={{ color: "var(--clay)" }}>
                    {fieldErrors.name}
                  </p>
                )}
              </div>
              <div>
                <label className="field-label mb-1 block text-sm font-medium">
                  Teléfono
                </label>
                <input
                  type="tel"
                  name="phone"
                  required
                  value={values.phone}
                  onChange={handleChange}
                  placeholder="+56 9 0000 0000"
                  className="field-input w-full rounded-lg px-4 py-2.5 text-sm transition"
                />
                {fieldErrors.phone && (
                  <p className="mt-1 text-xs" style={{ color: "var(--clay)" }}>
                    {fieldErrors.phone}
                  </p>
                )}
              </div>
            </div>
            <div>
              <label className="field-label mb-1 block text-sm font-medium">
                Correo electrónico
              </label>
              <input
                type="email"
                name="email"
                required
                value={values.email}
                onChange={handleChange}
                placeholder="tu@correo.com"
                className="field-input w-full rounded-lg px-4 py-2.5 text-sm transition"
              />
              {fieldErrors.email && (
                <p className="mt-1 text-xs" style={{ color: "var(--clay)" }}>
                  {fieldErrors.email}
                </p>
              )}
            </div>
            <div>
              <label className="field-label mb-1 block text-sm font-medium">
                Asunto
              </label>
              <input
                type="text"
                name="subject"
                required
                value={values.subject}
                onChange={handleChange}
                placeholder="¿En qué podemos ayudarte?"
                className="field-input w-full rounded-lg px-4 py-2.5 text-sm transition"
              />
              {fieldErrors.subject && (
                <p className="mt-1 text-xs" style={{ color: "var(--clay)" }}>
                  {fieldErrors.subject}
                </p>
              )}
            </div>
            <div>
              <label className="field-label mb-1 block text-sm font-medium">
                Mensaje
              </label>
              <textarea
                name="message"
                rows={4}
                required
                value={values.message}
                onChange={handleChange}
                placeholder="Escribe tu mensaje aquí..."
                className="field-input w-full resize-none rounded-lg px-4 py-2.5 text-sm transition"
              />
              {fieldErrors.message && (
                <p className="mt-1 text-xs" style={{ color: "var(--clay)" }}>
                  {fieldErrors.message}
                </p>
              )}
            </div>

            <div>
              <Turnstile
                ref={turnstileRef}
                siteKey={TURNSTILE_SITE_KEY}
                onVerify={(token) => {
                  setTurnstileToken(token);
                  if (status === "missing-captcha") setStatus("idle");
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

            {status === "error" && (
              <p className="text-sm font-medium" style={{ color: "var(--clay)" }}>
                Ocurrió un problema al enviar tu mensaje. Por favor intenta
                nuevamente en unos minutos.
              </p>
            )}

            <button
              type="submit"
              disabled={isSubmitting}
              className="btn-primary w-full rounded-lg px-6 py-3 font-semibold transition hover:-translate-y-0.5 disabled:cursor-not-allowed disabled:opacity-50 disabled:hover:translate-y-0"
            >
              {isSubmitting ? "Enviando..." : "Enviar mensaje"}
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}