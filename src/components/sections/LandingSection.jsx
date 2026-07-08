import {
  FaArrowLeft,
  FaArrowRight,
  FaCheckCircle,
  FaSmile,
} from "react-icons/fa";
import { Link } from "react-router-dom";

export default function LandingSection({ programs }) {
  return (
    <div className="newenche space-y-24">
      {/* Hero */}
      <section
        id="home"
        data-reveal
        className="reveal-up card-soft grid gap-8 rounded-[32px] lg:grid-cols-12 lg:gap-8 lg:items-stretch lg:min-h-[85vh]"
      >
        <div className="p-6 lg:col-span-5 flex flex-col justify-center">
          <img
            src="/logo-newenche.png"
            alt="Logo Salud Mental Newenche"
            className="mb-8 ml-10 w-full max-w-md object-contain"
          />

          <p className="text-body mb-6 ml-7 max-w-xl text-lg">
            Acompañamos la adolescencia en los lugares donde se construyen sus
            vínculos, sus conflictos y sus posibilidades de cambio.
          </p>

          <p
            className="pull-quote mb-8 ml-7 max-w-xl text-2xl"
            style={{ color: "var(--pine)" }}
          >
            Comprender antes de juzgar. <br/>Acompañar antes de etiquetar.
          </p>

          <div className="flex flex-wrap gap-4 ml-7 justify-center lg:justify-start">
            <Link to="/contacto" className="btn-primary rounded-lg px-6 py-3 font-semibold transition hover:-translate-y-0.5">
              Comienza ahora
            </Link>
            <Link to="/programas" className="btn-secondary rounded-lg px-6 py-3 font-semibold transition">
              Ver los programas
            </Link>
          </div>
        </div>
        <div className="lg:col-span-7 mt-8 lg:mt-0 lg:min-h-[85vh] flex items-stretch">
          <img
            src="/landing-image.png"
            alt="Fotografía de un adulto con jovenes charlando"
            className="img-frame w-full h-full min-h-[50vh] lg:min-h-[85vh] object-cover rounded-[28px]"
          />
        </div>
      </section>

      {/* About */}
      <section
        data-reveal
        className="reveal-up grid gap-8 lg:grid-cols-12 lg:gap-8 lg:items-stretch lg:min-h-[85vh]"
      >
        <div className="lg:col-span-6 mt-8 lg:mt-0 lg:min-h-[85vh] flex items-stretch">
          <img
            src="/counseling.jpg"
            alt="Fotografía de jovenes en terapia"
            className="img-frame w-full h-full max-h-[75vh] md:max-h-[80vh] lg:max-h-[85vh] object-cover rounded-[28px]"
          />
        </div>
        <div className="card-soft p-6 sm:p-10 lg:col-span-6 max-w-3xl mx-auto rounded-[32px] text-center">
          <p className="eyebrow mb-3 flex items-center justify-center gap-2 text-sm font-semibold uppercase tracking-[0.14em]">
            <span className="eyebrow-tick" aria-hidden="true" />
            Sobre nosotros
          </p>
          <h2 className="font-display mb-4 text-xl font-semibold md:text-2xl" style={{ color: "var(--pine)" }}>
            ¿Quiénes somos?
          </h2>
          <p className="text-body mb-4 text-lg text-justify">
            Somos una institución orientada a la salud mental integral, el
            acompañamiento familiar y el trabajo comunitario con
            adolescentes.
          </p>
          <p className="text-body mb-6 text-lg text-justify">
            Entendemos que el malestar adolescente no ocurre de manera
            aislada. Muchas veces se expresa en la familia, el colegio, el
            barrio, el consumo, la soledad, la desmotivación o las
            dificultades para pedir ayuda.
          </p>

          <h2 className="font-display mb-4 text-xl font-semibold md:text-xl" style={{ color: "var(--pine)" }}>
            ¿A quiénes acompañamos?
          </h2>
          <p className="text-body mb-2 text-lg text-justify">
            A adolescentes y familias que enfrentan situaciones como:
          </p>
          <ul className="dot-list mb-6 grid grid-cols-1 gap-y-2 pt-2 text-left sm:grid-cols-2 sm:gap-x-6">
            <li className="text-lg text-slate-600">Ansiedad, estrés o desregulación emocional.</li>
            <li className="text-lg text-slate-600">Ánimo bajo, aislamiento o desmotivación.</li>
            <li className="text-lg text-slate-600">Conflictos familiares.</li>
            <li className="text-lg text-slate-600">Dificultades escolares.</li>
            <li className="text-lg text-slate-600">Problemas conductuales.</li>
            <li className="text-lg text-slate-600">Baja adherencia a tratamientos.</li>
            <li className="text-lg text-slate-600">Consumo problemático de alcohol, marihuana u otras drogas.</li>
            <li className="text-lg text-slate-600">Crisis emocionales o riesgo psicosocial.</li>
            <li className="text-lg text-slate-600">Familias que necesitan orientación para saber cómo actuar.</li>
          </ul>

          <p className="pull-quote mb-6 text-xl md:text-2xl" style={{ color: "var(--pine)" }}>
            No buscamos solo contener una crisis.
            <br /> Buscamos acompañar procesos.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Link to="/contacto" className="btn-primary rounded-lg px-6 py-3 font-semibold transition hover:-translate-y-0.5">
              Comienza ahora
            </Link>
            <Link to="/quienes-somos" className="btn-secondary rounded-lg px-6 py-3 font-semibold transition">
              Conocer más
            </Link>
          </div>
        </div>
      </section>

      {/* Programs */}
      <section
        id="programas"
        data-reveal
        className="reveal-up grid gap-8 lg:grid-cols-2 lg:items-start"
      >
        {/* Left column: header */}
        <div
          className="relative flex flex-col justify-end overflow-hidden rounded-[32px] p-8 min-h-[420px]"
          style={{
            background:
              "linear-gradient(155deg, var(--pine-dark) 0%, var(--pine) 60%, var(--pine-light) 100%)",
          }}
        >
          <div className="relative z-10">
            <p className="mb-3 flex items-center gap-2 text-sm font-semibold uppercase tracking-[0.14em]" style={{ color: "var(--clay-light)" }}>
              <span className="eyebrow-tick" aria-hidden="true" style={{ background: "var(--clay-light)" }} />
              Programas
            </p>
            <h2 className="font-display mb-4 text-2xl font-semibold leading-snug text-white md:text-3xl">
              Programas especializados para el bienestar adolescente
            </h2>
            <p className="mb-6 text-sm leading-relaxed" style={{ color: "var(--moss)" }}>
              Trabajamos con adolescentes, familias, colegios y comunidades
              desde un enfoque integral y territorial.
            </p>
            <a
              href="/programas"
              className="btn-primary inline-flex items-center gap-2 rounded-lg px-5 py-2.5 text-sm font-semibold transition hover:-translate-y-0.5"
            >
              Ver todos los programas
            </a>
          </div>
        </div>

        {/* Right column: programs */}
        <div className="flex flex-col gap-3">
          {programs.map((program) => (
            <a
              key={program.slug}
              href={"/programas/" + program.slug}
              className="program-row group flex items-center gap-4 rounded-xl p-4 transition-all hover:translate-x-1"
            >
              <div className="icon-chip flex h-11 w-11 shrink-0 items-center justify-center rounded-full text-xl">
                {program.icon}
              </div>
              <div className="min-w-0 flex-1">
                <p className="text-lg font-semibold leading-snug text-slate-800">
                  {program.name}
                </p>
              </div>
              <span className="program-arrow shrink-0 transition-transform group-hover:translate-x-0.5">
                &#8594;
              </span>
            </a>
          ))}
        </div>
      </section>
    </div>
  );
}
