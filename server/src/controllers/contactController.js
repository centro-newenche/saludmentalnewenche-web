import { verifyTurnstileToken } from "../services/turnstileService.js";
import { sendContactEmail } from "../services/emailService.js";

const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

function escapeHtml(str = "") {
  return String(str)
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;");
}

/**
 * Maneja ambos formularios del sitio:
 * - "orientacion": el formulario extendido de ContactPage.jsx
 * - "general": el formulario corto de ContactForm.jsx
 * El campo `formType` en el body distingue cuál es.
 */
export async function submitContactForm(req, res, next) {
  try {
    const {
      formType = "general",
      name,
      phone,
      email,
      message,
      subject,
      age,
      comuna,
      reason,
      modality,
      turnstileToken,
    } = req.body;

    const errors = {};
    if (!name?.trim()) errors.name = "El nombre es obligatorio.";
    if (!phone?.trim()) errors.phone = "El teléfono es obligatorio.";
    if (!email?.trim() || !EMAIL_REGEX.test(email))
      errors.email = "Ingresa un correo electrónico válido.";
    if (!turnstileToken)
      errors.turnstileToken = "Debes completar la verificación.";

    if (formType === "orientacion") {
      if (!age) errors.age = "La edad del adolescente es obligatoria.";
      if (!comuna?.trim()) errors.comuna = "La comuna es obligatoria.";
      if (!reason) errors.reason = "Selecciona un motivo de consulta.";
      if (!modality) errors.modality = "Selecciona una modalidad.";
    } else {
      if (!subject?.trim()) errors.subject = "El asunto es obligatorio.";
      if (!message?.trim()) errors.message = "El mensaje es obligatorio.";
    }

    if (Object.keys(errors).length > 0) {
      return res.status(400).json({ ok: false, errors });
    }

    const isHuman = await verifyTurnstileToken(turnstileToken, req.ip);
    if (!isHuman) {
      return res.status(400).json({
        ok: false,
        errors: {
          turnstileToken:
            "No pudimos verificar que eres humano. Intenta nuevamente.",
        },
      });
    }

    const rows = [
      ["Nombre", name],
      ["Teléfono", phone],
      ["Correo", email],
    ];

    if (formType === "orientacion") {
      rows.push(
        ["Edad del adolescente", age],
        ["Comuna", comuna],
        ["Motivo de consulta", reason],
        ["Modalidad de preferencia", modality],
      );
    } else {
      rows.push(["Asunto", subject]);
    }

    const html = `
      <h2>Nuevo mensaje de contacto (${
        formType === "orientacion"
          ? "Formulario de orientación inicial"
          : "Formulario de contacto general"
      })</h2>
      <table cellpadding="6" cellspacing="0" border="0">
        ${rows
          .map(
            ([label, value]) =>
              `<tr><td><strong>${escapeHtml(label)}</strong></td><td>${escapeHtml(
                String(value ?? ""),
              )}</td></tr>`,
          )
          .join("")}
      </table>
      ${
        message
          ? `<p><strong>Mensaje:</strong></p><p>${escapeHtml(message).replace(/\n/g, "<br/>")}</p>`
          : ""
      }
    `;

    await sendContactEmail({
      subject:
        formType === "orientacion"
          ? `Nueva solicitud de orientación inicial - ${name}`
          : `Nuevo mensaje de contacto - ${name}`,
      html,
      replyTo: email,
    });

    return res.json({ ok: true });
  } catch (err) {
    next(err);
  }
}