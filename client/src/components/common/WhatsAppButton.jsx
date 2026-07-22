import { FaWhatsapp } from "react-icons/fa";

const PHONE_NUMBER = "56978059311";
const DEFAULT_MESSAGE = "Hola, quisiera más información.";

export default function WhatsAppButton() {
  const encodedMessage = encodeURIComponent(DEFAULT_MESSAGE);
  const href = `https://wa.me/${PHONE_NUMBER}?text=${encodedMessage}`;

  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 flex h-11 w-11 items-center justify-center rounded-xl border border-[#25D366] bg-[#25D366] text-white shadow-lg shadow-emerald-500/20 transition-all duration-300 hover:scale-105"
      aria-label="Chatear por WhatsApp"
    >
      <FaWhatsapp size={20} />
    </a>
  );
}