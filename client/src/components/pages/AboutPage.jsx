import {
  FaUserFriends,
  FaHome,
  FaMapMarkerAlt,
  FaUsers,
  FaClipboardCheck,
  FaBullseye,
  FaEye,
  FaImage,
} from "react-icons/fa";
import ContactForm from "../sections/ContactForm";
import { Link } from "react-router-dom";

const enfoque = [
  {
    icon: <FaUserFriends />,
    title: "Adolescente",
    text: "Escuchamos al joven sin reducirlo a un diagnóstico o una conducta.",
  },
  {
    icon: <FaHome />,
    title: "Familiar",
    text: "Acompañamos también a madres, padres y cuidadores.",
  },
  {
    icon: <FaMapMarkerAlt />,
    title: "Territorial",
    text: "Consideramos la casa, el colegio, el barrio y las redes.",
  },
  {
    icon: <FaUsers />,
    title: "Comunitaria",
    text: "Articulamos apoyos cuando la situación lo requiere.",
  },
  {
    icon: <FaClipboardCheck />,
    title: "Profesional",
    text: "Construimos procesos con objetivos, seguimiento y criterios claros.",
  },
];

const motivos = [
  "Ansiedad, angustia o estrés",
  "Desregulación emocional",
  "Ánimo bajo o aislamiento",
  "Desmotivación escolar",
  "Conflictos familiares",
  "Problemas de conducta",
  "Consumo de alcohol, marihuana u otras sustancias",
  "Baja adherencia a tratamientos",
  "Crisis emocionales",
  "Trastornos alimenticios",
  "Dificultades en la relación con adultos o pares",
  "Riesgo psicosocial",
  "Neurodivergencias",
];

const modalidades = [
  "Atención individual adolescente",
  "Orientación familiar",
  "Sesiones online",
  "Atención presencial",
  "Visitas domiciliarias",
  "Acompañamiento en terreno",
  "Coordinación con colegios",
  "Articulación con redes de apoyo",
];

function Eyebrow({ children }) {
  return (
    <p className="eyebrow mb-3 ml-1 flex items-center gap-2 text-sm font-semibold uppercase tracking-[0.14em]">
      <span className="eyebrow-tick" aria-hidden="true" />
      {children}
    </p>
  );
}

function ImagePlaceholder({ caption, className = "" }) {
  return (
    <div
      className={`placeholder-frame relative flex w-full items-center justify-center overflow-hidden rounded-[28px] p-8 text-center ${className}`}
    >
      <span className="corner corner-tl" aria-hidden="true" />
      <span className="corner corner-br" aria-hidden="true" />
      <div className="relative z-10 flex max-w-xs flex-col items-center gap-3">
        <span
          className="flex h-11 w-11 items-center justify-center rounded-full bg-white/70 text-lg"
          style={{ color: "var(--pine)" }}
        >
          <FaImage />
        </span>
        <p
          className="font-display text-sm italic leading-relaxed"
          style={{ color: "var(--pine)" }}
        >
          {caption}
        </p>
      </div>
    </div>
  );
}

export default function AboutPage() {
  return (
    <div className="newenche space-y-24">
      <section
        id="quienes-somos"
        data-reveal
        className="reveal-up card-soft grid gap-8 rounded-[32px] lg:grid-cols-12 lg:gap-8 lg:items-stretch lg:min-h-[70vh]"
      >
        <div className="relative p-6 lg:col-span-6 flex flex-col justify-center">
          <Eyebrow>Quiénes somos</Eyebrow>
          <h1
            className="font-display relative mb-6 ml-1 max-w-xl text-3xl font-semibold leading-[1.15] md:text-[2.6rem]"
            style={{ color: "var(--pine)" }}
          >
            <span className="hero-mark" aria-hidden="true">
              “
            </span>
            <span className="relative">
              Un centro especializado en adolescencia, familia y territorio
            </span>
          </h1>
          <p className="text-body mb-4 ml-1 max-w-xl text-lg text-justify">
            Newenche nace desde una convicción profunda: ningún
            adolescente puede ser comprendido fuera de su historia, su familia,
            su colegio y su contexto.
          </p>
          <p className="text-body ml-1 max-w-xl text-lg text-justify">
            La adolescencia es una etapa decisiva. No es solo una edad de riesgo
            o conflicto: es un periodo donde se construye la identidad, autonomía,
            pertenencia, autoestima, proyectos de vida y formas de relacionarse
            con el mundo.
          </p>
        </div>
        <div className="lg:col-span-6 mt-2 lg:mt-0 flex items-stretch">
          <img
            src="/about-pic1.jpg"
            alt="Fotografía de una terapeuta conversando cercanamente con un dos adolescentes"
            className="w-full h-full min-h-[40vh] lg:min-h-[70vh] object-cover rounded-2xl"
          />
        </div>
      </section>

      <section
        data-reveal
        className="reveal-up grid gap-8 lg:grid-cols-12 lg:gap-8 lg:items-stretch lg:min-h-[60vh]"
      >
        <div className="lg:col-span-5 flex items-stretch">
          <img
            src="/about-pic2.jpg"
            alt="Fotografía de una terapeuta conversando cercanamente con un dos adolescentes"
            className="w-full h-full min-h-[40vh] lg:min-h-[70vh] object-cover rounded-2xl"
          />
        </div>
        <div
          className="relative overflow-hidden p-6 sm:p-10 lg:col-span-7 max-w-3xl mx-auto rounded-[32px] text-center flex flex-col justify-center"
          style={{
            background:
              "linear-gradient(155deg, var(--pine-dark) 0%, var(--pine) 60%, var(--pine-light) 100%)",
          }}
        >
          <h2
            className="pull-quote relative z-10 text-xl md:text-3xl"
            style={{ color: "var(--sand)" }}
          >
            Abordamos la adolescencia de manera integral, desde una mirada salutogénica, fortalecedora, participativa y empoderante.
          </h2>
        </div>
      </section>

      <section data-reveal className="reveal-up grid gap-8 md:grid-cols-2">
        <div className="card-soft rounded-[32px] p-8 md:p-10">
          <div className="icon-chip mb-5 flex h-12 w-12 items-center justify-center rounded-full text-xl">
            <FaBullseye />
          </div>
          <h2
            className="font-display mb-3 text-xl font-semibold md:text-2xl"
            style={{ color: "var(--pine)" }}
          >
            Misión
          </h2>
          <p className="text-body text-lg text-justify">
            Acompañar a adolescentes y familias en procesos de salud mental,
            consumo problemático, crisis familiares, dificultades escolares y
            riesgo psicosocial, entregando una atención profesional, humana,
            territorial y comunitaria.
          </p>
        </div>
        <div className="card-soft rounded-[32px] p-8 md:p-10">
          <div className="icon-chip mb-5 flex h-12 w-12 items-center justify-center rounded-full text-xl">
            <FaEye />
          </div>
          <h2
            className="font-display mb-3 text-xl font-semibold md:text-2xl"
            style={{ color: "var(--pine)" }}
          >
            Visión
          </h2>
          <p className="text-body text-lg text-justify">
            Ser un centro de referencia en salud mental adolescente, reconocido
            por su enfoque integral, familiar, comunitario y cercano a los
            contextos reales donde viven los adolescentes.
          </p>
        </div>
      </section>

      <section
        data-reveal
        className="reveal-up relative overflow-hidden rounded-[32px] p-8 md:p-12"
        style={{
          background:
            "linear-gradient(155deg, var(--pine-dark) 0%, var(--pine) 60%, var(--pine-light) 100%)",
        }}
      >
        <div className="relative z-10">
          <h2 className="font-display mb-2 text-2xl font-semibold text-white md:text-3xl">
            Nuestro enfoque
          </h2>
          <p
            className="mb-10 max-w-2xl text-sm leading-relaxed"
            style={{ color: "var(--moss)" }}
          >
            Trabajamos desde cinco miradas que se sostienen entre sí y guían
            cada proceso de acompañamiento.
          </p>

          <div className="relative">
            <svg
              className="pointer-events-none absolute left-0 right-0 top-[26px] hidden w-full lg:block"
              viewBox="0 0 1000 60"
              preserveAspectRatio="none"
              aria-hidden="true"
            >
              <path
                d="M100,20 C180,55 220,-5 300,25 C380,55 420,-5 500,25 C580,55 620,-5 700,25 C780,55 820,-5 900,20"
                fill="none"
                stroke="rgba(217,138,92,0.55)"
                strokeWidth="2"
                strokeDasharray="1 9"
                strokeLinecap="round"
              />
              {[100, 300, 500, 700, 900].map((cx) => (
                <circle
                  key={cx}
                  cx={cx}
                  cy="22"
                  r="4"
                  fill="var(--clay-light)"
                  opacity="0.7"
                />
              ))}
            </svg>

            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
              {enfoque.map((item) => (
                <div
                  key={item.title}
                  className="approach-card relative z-10 rounded-2xl p-5 transition-all duration-300 hover:-translate-y-1"
                >
                  <div className="icon-chip mb-3 flex h-11 w-11 items-center justify-center rounded-full text-xl">
                    {item.icon}
                  </div>
                  <p className="mb-1 text-base font-semibold text-slate-800">
                    {item.title}
                  </p>
                  <p className="text-sm text-slate-600">{item.text}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section
        id="atencion-adolescente"
        data-reveal
        className="reveal-up grid gap-8 lg:grid-cols-12 lg:gap-8 lg:items-stretch"
      >
        <div className="card-soft p-6 sm:p-10 lg:col-span-7 rounded-[32px]">
          <h2
            className="font-display mb-4 text-xl font-semibold md:text-2xl"
            style={{ color: "var(--pine)" }}
          >
            Atención especializada para adolescentes de 12 a 19 años
          </h2>
          <p className="text-body mb-4 text-lg text-justify">
            Sabemos que muchas veces pedir ayuda no es fácil. Algunos
            adolescentes no quieren hablar, se aíslan, se enojan, abandonan
            tratamientos, bajan su rendimiento escolar o expresan su malestar a
            través de conductas que preocupan a la familia.
          </p>
          <p className="text-body mb-8 text-lg text-justify">
            Nuestro objetivo es construir un espacio de escucha, comprensión y
            acompañamiento, donde el adolescente pueda ordenar lo que está
            viviendo y donde su familia pueda recibir orientación para apoyar el
            proceso.
          </p>

          <h3
            className="font-display mb-3 text-lg font-semibold"
            style={{ color: "var(--pine)" }}
          >
            Motivos frecuentes de consulta
          </h3>
          <ul className="dot-list mb-8 grid grid-cols-1 gap-x-6 gap-y-2 sm:grid-cols-2">
            {motivos.map((motivo) => (
              <li key={motivo} className="text-base text-slate-600">
                {motivo}
              </li>
            ))}
          </ul>

          <h3
            className="font-display mb-3 text-lg font-semibold"
            style={{ color: "var(--pine)" }}
          >
            Modalidades de atención
          </h3>
          <ul className="dot-list grid grid-cols-1 gap-x-6 gap-y-2 sm:grid-cols-2">
            {modalidades.map((modalidad) => (
              <li key={modalidad} className="text-base text-slate-600">
                {modalidad}
              </li>
            ))}
          </ul>
        </div>

        <div className="lg:col-span-5 mt-2 lg:mt-0 flex items-stretch">
          <img
            src="/about-pic3.jpg"
            alt="Fotografía de una terapeuta conversando cercanamente con un dos adolescentes"
            className="w-full h-full min-h-[40vh] lg:min-h-[70vh] object-cover rounded-2xl"
          />
        </div>
      </section>

      <section
        data-reveal
        className="reveal-up card-soft rounded-[32px] p-8 text-center md:p-14"
      >
        <h2
          className="font-display mx-auto mb-4 max-w-2xl text-xl font-semibold leading-snug md:text-2xl"
          style={{ color: "var(--pine)" }}
        >
          Cada adolescente necesita ser comprendido en su contexto
        </h2>
        <p className="text-body mx-auto mb-8 max-w-2xl text-lg text-justify">
          Por eso, en Newenche no trabajamos solo con síntomas: trabajamos con
          historias, vínculos, rutinas, conflictos y posibilidades de cambio.
        </p>
        <div className="flex flex-wrap justify-center gap-4">
          <Link
            to="/contacto"
            className="btn-primary rounded-lg px-7 py-3 font-semibold transition hover:-translate-y-0.5"
          >
            Solicitar orientación inicial
          </Link>
        </div>
      </section>

      <ContactForm />
    </div>
  );
}