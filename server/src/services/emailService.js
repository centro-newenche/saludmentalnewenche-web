const RESEND_API_URL = "https://api.resend.com/emails";

export async function sendContactEmail({ subject, html, replyTo }) {
  const res = await fetch(RESEND_API_URL, {
    method: "POST",
    headers: {
      Authorization: `Bearer ${process.env.RESEND_API_KEY}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      from: process.env.MAIL_FROM || "Newenche Web <no-reply@centronewenche.cl>",
      to: process.env.CONTACT_EMAIL_TO || "contacto@centronewenche.cl",
      reply_to: replyTo,
      subject,
      html,
    }),
  });

  if (!res.ok) {
    const errorBody = await res.text().catch(() => "");
    throw new Error(`Resend API error (${res.status}): ${errorBody}`);
  }

  return res.json();
}