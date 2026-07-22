import nodemailer from "nodemailer";

let transporter = null;

function getTransporter() {
  if (transporter) return transporter;

  transporter = nodemailer.createTransport({
    host: process.env.SMTP_HOST,
    port: Number(process.env.SMTP_PORT || 587),
    secure: process.env.SMTP_SECURE === "true", // true para puerto 465, false para 587/25
    auth: {
      user: process.env.SMTP_USER,
      pass: process.env.SMTP_PASS,
    },
  });

  return transporter;
}

export async function sendContactEmail({ subject, html, replyTo }) {
  const mailer = getTransporter();

  await mailer.sendMail({
    from: process.env.MAIL_FROM || '"Newenche Web" <no-reply@centronewenche.cl>',
    to: process.env.CONTACT_EMAIL_TO || "saludmentalnewenche@gmail.com",
    replyTo,
    subject,
    html,
  });
}