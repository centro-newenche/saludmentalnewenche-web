import {
  FaBars,
  FaChevronDown,
  FaEnvelope,
  FaUserShield,
} from "react-icons/fa";
import { Link } from "react-router-dom";
import { useAdminAuth } from "../../context/AdminAuthContext";
import { ADMIN_DASHBOARD_PATH } from "../../config/adminRoutes";

const programas = [
  { name: "Atención Adolescente", href: "/programas/adolescente" },
  { name: "Rehabilitación", href: "/programas/rehabilitacion" },
  { name: "Acompañamiento", href: "/programas/acompanamiento" },
  { name: "Orientación Familiar", href: "/programas/orientacion" },
  { name: "Colegios y Redes", href: "/programas/colegios-redes" },
  { name: "Capacitaciones", href: "/programas/capacitaciones" },
];

export default function SiteHeader({
  isScrolled,
  menuOpen,
  onToggleMenu,
  onCloseMenu,
}) {
  const { admin } = useAdminAuth();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const handleMobileNavClick = () => {
    onCloseMenu();
    scrollToTop();
  };

  return (
    <div className="newenche">
      <header
        className={`fixed left-0 top-0 z-50 w-full px-6 py-3 backdrop-blur-xl transition-all duration-300 ${isScrolled ? "border-b border-[var(--line)] bg-white shadow-sm" : "border-b border-transparent bg-white"}`}
      >
        <div className="mx-auto flex w-full max-w-6xl items-center justify-between">
          <Link
            to="/"
            className="flex items-center gap-3 cursor-pointer"
            onClick={scrollToTop}
          >
            <div className="flex h-14 w-14 items-center justify-center">
              <img
                src="/logo-newenche-no-text.png"
                alt="Logo newenche"
                className=""
              />
            </div>
            <span
              className="text-lg font-semibold tracking-wide"
              style={{ color: "var(--pine)" }}
            >
              Centro Newenche
            </span>
          </Link>

          <nav className="hidden items-center gap-6 text-sm lg:flex">
            <Link to="/" className="nav-link" onClick={scrollToTop}>
              Inicio
            </Link>
            <Link
              to="/quienes-somos"
              className="nav-link"
              onClick={scrollToTop}
            >
              Quiénes somos
            </Link>

            <div className="group relative">
              <Link
                to="/programas"
                className="nav-link flex items-center gap-1.5"
                onClick={scrollToTop}
              >
                Programas
                <FaChevronDown className="text-[10px] transition-transform duration-200 group-hover:rotate-180" />
              </Link>

              <div className="invisible absolute left-1/2 top-full w-64 -translate-x-1/2 pt-3 opacity-0 transition-all duration-150 group-hover:visible group-hover:opacity-100">
                <div className="rounded-xl border border-[var(--line)] bg-white p-2 shadow-lg">
                  {programas.map((item) => (
                    <Link
                      key={item.href}
                      to={item.href}
                      className="dropdown-link block rounded-lg px-3 py-2 text-sm"
                      onClick={scrollToTop}
                    >
                      {item.name}
                    </Link>
                  ))}
                </div>
              </div>
            </div>

            <Link to="/recursos" className="nav-link" onClick={scrollToTop}>
              Recursos
            </Link>
            <Link to="/contacto" className="nav-link" onClick={scrollToTop}>
              Contacto
            </Link>
            {/* <Link to="/faq" className="nav-link" onClick={scrollToTop}>
              FAQ
            </Link> */}
          </nav>

          <button
            onClick={onToggleMenu}
            className="mr-2 cursor-pointer rounded-lg border border-[var(--line)] px-3 py-2 text-xs text-slate-600 transition hover:border-[var(--clay)] hover:text-[var(--clay)] lg:hidden"
          >
            <span className="flex items-center gap-2">
              <FaBars />
              Menu
            </span>
          </button>

          <Link
            to="/contacto"
            className="btn-primary hidden cursor-pointer rounded-lg px-5 py-2 text-sm font-medium transition lg:inline-flex lg:items-center lg:gap-2"
          >
            <FaEnvelope />
            Agenda tu consulta
          </Link>

          {admin && (
            <Link
              to={ADMIN_DASHBOARD_PATH}
              title="Panel de administración"
              aria-label="Panel de administración"
              className="mr-2 hidden h-10 w-10 cursor-pointer items-center justify-center rounded-lg border transition lg:inline-flex"
              style={{ borderColor: "var(--line)", color: "var(--pine)" }}
            >
              <FaUserShield />
            </Link>
          )}
        </div>
      </header>

      {menuOpen && (
        <div className="fixed left-0 top-[57px] z-40 w-full border-b border-[var(--line)] bg-white/95 p-4 shadow-lg backdrop-blur-xl lg:hidden">
          <div className="mx-auto flex max-w-6xl flex-col gap-3 pt-4 text-sm">
            <Link to="/" onClick={handleMobileNavClick} className="nav-link">
              Inicio
            </Link>
            <Link
              to="/quienes-somos"
              onClick={handleMobileNavClick}
              className="nav-link"
            >
              Quiénes somos
            </Link>

            <div>
              <Link
                to="/programas"
                onClick={handleMobileNavClick}
                className="nav-link font-semibold"
              >
                Programas
              </Link>
              <div
                className="mt-2 ml-3 flex flex-col gap-2.5 border-l-2 pl-3"
                style={{ borderColor: "var(--line)" }}
              >
                {programas.map((item) => (
                  <Link
                    key={item.href}
                    to={item.href}
                    onClick={handleMobileNavClick}
                    className="nav-link text-[13px]"
                  >
                    {item.name}
                  </Link>
                ))}
              </div>
            </div>

            <Link
              to="/recursos"
              onClick={handleMobileNavClick}
              className="nav-link"
            >
              Recursos
            </Link>
            <Link
              to="/contacto"
              onClick={handleMobileNavClick}
              className="nav-link"
            >
              Contacto
            </Link>
            {/* <Link to="/faq" onClick={handleMobileNavClick} className="nav-link">
              FAQ
            </Link> */}

            {admin && (
              <Link
                to={ADMIN_DASHBOARD_PATH}
                onClick={handleMobileNavClick}
                className="nav-link inline-flex items-center gap-2 font-semibold"
              >
                <FaUserShield />
                Panel de administración
              </Link>
            )}

            <Link
              to="/contacto"
              onClick={handleMobileNavClick}
              className="btn-primary mt-2 inline-flex items-center justify-center gap-2 rounded-lg px-4 py-2 font-semibold transition"
            >
              <FaEnvelope />
              Agenda tu consulta
            </Link>
          </div>
        </div>
      )}
    </div>
  );
}
