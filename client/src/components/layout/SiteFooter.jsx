import {
  FaEnvelope,
  FaPhone,
  FaTwitter,
  FaInstagram,
  FaFacebook,
} from "react-icons/fa";

export default function SiteFooter() {
  return (
    <footer className="mt-20 border-t border-zinc-800 py-8 text-sm text-zinc-400">
      <div className="flex flex-col items-center gap-4 sm:flex-row sm:justify-between">
        <div className="flex flex-col items-center gap- sm:items-start">
          <div className="flex items-center justify-center gap-5">
            <a
              href="mailto:hello@example.com"
              className="inline-flex items-center gap-2 hover:text-blue-300"
            >
              <FaEnvelope />
              correo@correo.com
            </a>
            <a
              href="tel:+5691234567"
              className="inline-flex items-center gap-2 hover:text-blue-300"
            >
              <FaPhone />
              +5691234567
            </a>
          </div>
          <div className="flex items-center justify-center gap-5">
            <a
              href="#"
              className="inline-flex items-center gap-2 hover:text-blue-300"
            >
              <FaInstagram />
              Instagram
            </a>
            <a
              href="#"
              className="inline-flex items-center gap-2 hover:text-blue-300"
            >
              <FaTwitter />X / Twitter
            </a>
            <a
              href="#"
              className="inline-flex items-center gap-2 hover:text-blue-300"
            >
              <FaFacebook />
              Facebook
            </a>
          </div>
        </div>
        <p className="text-center sm:text-right">
          {" "}
          2026 Salud Mental Newenche, © Todos los derechos reservados.
        </p>
      </div>
    </footer>
  );
}
