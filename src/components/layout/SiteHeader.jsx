import { FaBars, FaBrain, FaEnvelope } from "react-icons/fa";

export default function SiteHeader({
  isScrolled,
  menuOpen,
  onToggleMenu,
  onCloseMenu,
}) {
  return (
    <>
      <header
        className={`fixed left-0 top-0 z-50 w-full px-6 py-3 backdrop-blur-xl transition-all duration-300 ${isScrolled ? "border-b border-white bg-white shadow-md shadow-gray/90" : "border-b border-transparent bg-white"}`}
      >
        <div className="mx-auto flex w-full max-w-6xl items-center justify-between">
          <a href="/" className="flex items-center gap-3 cursor-pointer">
            <div className="flex h-14 w-14 items-center justify-center">
              <img
                src="/logo-newenche-no-text.png"
                alt="Logo newenche"
                className=""
              />
            </div>
            <span className="text-lg font-semibold tracking-wide text-slate-800">
              Centro Newenche
            </span>
          </a>

          <nav className="hidden items-center gap-6 text-sm text-slate-500 lg:flex">
            <a href="#home" className="transition hover:text-emerald-600">
              Inicio
            </a>
            <a href="#quienes-somos" className="transition hover:text-emerald-600">
              Quiénes somos
            </a>
            <a href="#programas" className="transition hover:text-emerald-600">
              Programas
            </a>
            <a href="#recursos" className="transition hover:text-emerald-600">
              Recursos
            </a>
            <a href="#contacto" className="transition hover:text-emerald-600">
              Contacto
            </a>
            <a href="#faq" className="transition hover:text-emerald-600">
              FAQ
            </a>
          </nav>

          <button
            onClick={onToggleMenu}
            className="mr-2 cursor-pointer rounded-lg border border-slate-200 px-3 py-2 text-xs text-slate-600 transition hover:border-emerald-400 hover:text-emerald-500 lg:hidden"
          >
            <span className="flex items-center gap-2">
              <FaBars />
              Menu
            </span>
          </button>

          <button className="hidden cursor-pointer rounded-lg bg-emerald-200 px-5 py-2 text-sm font-medium text-gray-500 shadow-sm shadow-sky-200 transition hover:bg-emerald-400 hover:text-white lg:inline-flex lg:items-center lg:gap-2">
            <FaEnvelope />
            Agenda tu consulta
          </button>
        </div>
      </header>

      {menuOpen && (
        <div className="fixed left-0 top-[57px] z-40 w-full border-b border-sky-100 bg-white/95 p-4 shadow-lg shadow-sky-100/40 backdrop-blur-xl lg:hidden">
          <div className="mx-auto flex max-w-6xl flex-col gap-3 pt-4 text-sm text-slate-500">
            <a
              href="#home"
              onClick={onCloseMenu}
              className="transition hover:text-emerald-600"
            >
              Inicio
            </a>
            <a
              href="#quienes-somos"
              onClick={onCloseMenu}
              className="transition hover:text-emerald-600"
            >
              Quiénes somos
            </a>
            <a
              href="#programas"
              onClick={onCloseMenu}
              className="transition hover:text-emerald-600"
            >
              Programas
            </a>
            <a
              href="#recursos"
              onClick={onCloseMenu}
              className="transition hover:text-emerald-600"
            >
              Recursos
            </a>
            <a
              href="#contacto"
              onClick={onCloseMenu}
              className="transition hover:text-emerald-600"
            >
              Contacto
            </a>
            <a
              href="#faq"
              onClick={onCloseMenu}
              className="transition hover:text-emerald-600"
            >
              FAQ
            </a>
            <button
              onClick={onCloseMenu}
              className="mt-2 inline-flex items-center justify-center gap-2 rounded-lg bg-emerald-500 px-4 py-2 font-semibold text-white shadow-sm shadow-emerald-200"
            >
              <FaEnvelope />
              Agenda tu consulta
            </button>
          </div>
        </div>
      )}
    </>
  );
}
