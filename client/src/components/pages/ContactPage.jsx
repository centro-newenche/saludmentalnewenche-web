import { FaWhatsapp, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";
import Turnstile, { TESTING_SITE_KEY } from "../common/Turnstile";
import { useContactForm } from "../../hooks/useContactForm";

const TURNSTILE_SITE_KEY =
  import.meta.env.VITE_TURNSTILE_SITE_KEY || TESTING_SITE_KEY;

const motivos = [
  "Orientación inicial (aún no estoy seguro/a)",
  "Atención Adolescente (ansiedad, ánimo bajo, conducta, escuela)",
  "Rehabilitación (consumo de alcohol u otras drogas)",
  "Acompañamiento familiar y territorial",
  "Orientación Familiar y psicoeducación",
  "Colegios y Redes (coordinación institucional)",
  "Capacitaciones (para equipos o instituciones)",
  "Otro",
];

const modalidades = ["Online", "Presencial", "Domiciliaria", "Institucional"];

const pasos = [
  {
    step: "1",
    title: "Cuéntanos tu situación",
    text: "Completa el formulario con la información general de tu consulta.",
  },
  {
    step: "2",
    title: "Te contactamos",
    text: "Un profesional del equipo se comunicará contigo a la brevedad.",
  },
  {
    step: "3",
    title: "Definimos el apoyo",
    text: "Evaluamos juntos qué modalidad y programa se ajustan mejor a tu situación.",
  },
];

const INITIAL_VALUES = {
  name: "",
  phone: "",
  email: "",
  age: "",
  comuna: "",
  reason: "",
  modality: "",
  message: "",
};

export default function ContactPage() {
  const {
    turnstileRef,
    values,
    fieldErrors,
    status,
    setTurnstileToken,
    setStatus,
    handleChange,
    handleSubmit,
  } = useContactForm("orientacion", INITIAL_VALUES);

  const isSubmitting = status === "submitting";

  return (
    <main className="newenche space-y-16 pb-24 pt-28">
      <section
        data-reveal
        className="reveal-up card-soft mx-auto max-w-4xl rounded-[32px] p-8 text-center md:p-14"
      >
        <p className="eyebrow mb-3 flex items-center justify-center gap-2 text-sm font-semibold uppercase tracking-[0.14em]">
          <span className="eyebrow-tick" aria-hidden="true" />
          Contacto
        </p>
        <h1
          className="font-display mb-6 text-3xl font-semibold leading-tight md:text-4xl"
          style={{ color: "var(--pine)" }}
        >
          Solicita tu orientación inicial
        </h1>
        <p className="text-body mx-auto mb-4 max-w-2xl text-lg text-justify">
          Si un/a adolescente de tu familia está atravesando dificultades
          emocionales, familiares, escolares, conductuales o relacionadas con el
          consumo de alcohol u otras drogas, puedes escribirnos para recibir una
          primera orientación.
        </p>
        <p className="text-body mx-auto mb-8 max-w-2xl text-lg text-justify">
          En esta primera instancia buscamos comprender la situación general,
          orientar los pasos posibles y evaluar, junto a ti, qué tipo de apoyo
          puede ser más adecuado para tu hijo/a y tu familia.
        </p>
        <p
          className="pull-quote mx-auto max-w-xl text-xl md:text-2xl"
          style={{ color: "var(--pine)" }}
        >
          "No buscamos solo contener una crisis. Buscamos acompañar procesos."
        </p>
      </section>

      <section
        data-reveal
        className="reveal-up mx-auto grid max-w-4xl gap-4 sm:grid-cols-3"
      >
        {pasos.map((p) => (
          <div key={p.step} className="card-soft rounded-2xl p-6">
            <div
              className="font-display mb-3 flex h-9 w-9 items-center justify-center rounded-full text-sm font-semibold text-white"
              style={{ background: "var(--clay)" }}
            >
              {p.step}
            </div>
            <p
              className="mb-1 text-base font-semibold"
              style={{ color: "var(--pine)" }}
            >
              {p.title}
            </p>
            <p className="text-sm text-slate-600">{p.text}</p>
          </div>
        ))}
      </section>

      <section
        data-reveal
        className="reveal-up mx-auto grid max-w-5xl gap-10 md:grid-cols-2 md:items-start"
      >
        <div className="card-soft rounded-[32px] p-8 md:p-10">
          <h2
            className="font-display mb-3 text-xl font-semibold md:text-2xl"
            style={{ color: "var(--pine)" }}
          >
            Otras formas de contactarnos
          </h2>
          <p className="text-body mb-6 text-base leading-relaxed">
            Si prefieres un contacto más directo, también puedes escribirnos por
            estos canales.
          </p>
          <ul className="space-y-4 text-sm">
            <li className="flex items-start gap-3">
              <span className="icon-chip mt-0.5 flex h-9 w-9 shrink-0 items-center justify-center rounded-full">
                <FaWhatsapp />
              </span>
              <span className="text-body pt-1.5">+56 9 1234 5678</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="icon-chip mt-0.5 flex h-9 w-9 shrink-0 items-center justify-center rounded-full">
                <FaEnvelope />
              </span>
              <span className="text-body pt-1.5">contacto@newenche.cl</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="icon-chip mt-0.5 flex h-9 w-9 shrink-0 items-center justify-center rounded-full">
                <FaMapMarkerAlt />
              </span>
              <span className="text-body pt-1.5">Santiago, Chile</span>
            </li>
          </ul>
          <p className="text-body mt-8 text-sm leading-relaxed opacity-80">
            Tu información será tratada con confidencialidad. Escribirnos no te
            compromete a nada: es un primer paso para conversar y ver cómo
            podemos ayudarte.
          </p>
        </div>

        <div className="card-soft rounded-[32px] p-8">
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

            <div className="grid gap-4 sm:grid-cols-2">
              <div>
                <label className="field-label mb-1 block text-sm font-medium">
                  Edad del adolescente
                </label>
                <input
                  type="number"
                  name="age"
                  min="12"
                  max="18"
                  required
                  value={values.age}
                  onChange={handleChange}
                  placeholder="Ej: 15"
                  className="field-input w-full rounded-lg px-4 py-2.5 text-sm transition"
                />
                {fieldErrors.age && (
                  <p className="mt-1 text-xs" style={{ color: "var(--clay)" }}>
                    {fieldErrors.age}
                  </p>
                )}
              </div>
              <div>
                <label className="field-label mb-1 block text-sm font-medium">
                  Comuna
                </label>
                <input
                  type="text"
                  name="comuna"
                  required
                  value={values.comuna}
                  onChange={handleChange}
                  placeholder="Tu comuna"
                  className="field-input w-full rounded-lg px-4 py-2.5 text-sm transition"
                />
                {fieldErrors.comuna && (
                  <p className="mt-1 text-xs" style={{ color: "var(--clay)" }}>
                    {fieldErrors.comuna}
                  </p>
                )}
              </div>
            </div>

            <div>
              <label className="field-label mb-1 block text-sm font-medium">
                Motivo de consulta
              </label>
              <select
                name="reason"
                required
                value={values.reason}
                onChange={handleChange}
                className="field-input w-full rounded-lg px-4 py-2.5 text-sm transition"
              >
                <option value="" disabled>
                  Selecciona un motivo
                </option>
                {motivos.map((m) => (
                  <option key={m} value={m}>
                    {m}
                  </option>
                ))}
              </select>
              {fieldErrors.reason && (
                <p className="mt-1 text-xs" style={{ color: "var(--clay)" }}>
                  {fieldErrors.reason}
                </p>
              )}
            </div>

            <div>
              <label className="field-label mb-1 block text-sm font-medium">
                Modalidad de preferencia
              </label>
              <select
                name="modality"
                required
                value={values.modality}
                onChange={handleChange}
                className="field-input w-full rounded-lg px-4 py-2.5 text-sm transition"
              >
                <option value="" disabled>
                  Selecciona una modalidad
                </option>
                {modalidades.map((m) => (
                  <option key={m} value={m}>
                    {m}
                  </option>
                ))}
              </select>
              {fieldErrors.modality && (
                <p className="mt-1 text-xs" style={{ color: "var(--clay)" }}>
                  {fieldErrors.modality}
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
                value={values.message}
                onChange={handleChange}
                placeholder="Cuéntanos brevemente tu situación..."
                className="field-input w-full resize-none rounded-lg px-4 py-2.5 text-sm transition"
              />
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
      </section>
    </main>
  );
}