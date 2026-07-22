import { FaArrowRight } from "react-icons/fa";

export default function BackToTopButton({ show }) {
  return (
    <button
      onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
      className={`fixed bottom-20 right-6 z-50 flex h-11 w-11 items-center justify-center rounded-xl border border-[#b77d5c] bg-white text-[#b77d5c] shadow-lg shadow-emerald-500/20 transition-all duration-300 cursor-pointer ${show ? "translate-y-0 opacity-100" : "pointer-events-none translate-y-4 opacity-0"}`}
      aria-label="Back to top"
    >
      <FaArrowRight className="-rotate-90" />
    </button>
  );
}
