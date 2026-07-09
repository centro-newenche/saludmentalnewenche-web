import {
  FaUserFriends,
  FaLeaf,
  FaMapMarkerAlt,
  FaHome,
  FaSchool,
  FaChalkboardTeacher,
} from "react-icons/fa";

const programs = [
  {
    slug: "adolescente",
    title: "Atención Adolescente",
    icon: <FaUserFriends />,
    image: "/card-program1.jpg",
  },
  {
    slug: "rehabilitacion",
    title: "Rehabilitación de Drogas y Alcohol",
    icon: <FaLeaf />,
    image: "/card-program2.jpg",
  },
  {
    slug: "acompanamiento",
    title: "Acompañamiento Adolescente, Familiar y Territorial",
    icon: <FaMapMarkerAlt />,
    image: "/card-program3.jpg",
  },
  {
    slug: "orientacion",
    title: "Orientación Familiar y Psicoeducación",
    icon: <FaHome />,
    image: "/card-program4.jpg",
  },
  {
    slug: "colegios-redes",
    title: "Colegios y Redes",
    icon: <FaSchool />,
    image: "/card-program5.jpg",
  },
  {
    slug: "capacitaciones",
    title: "Capacitaciones Newenche",
    icon: <FaChalkboardTeacher />,
    image: "/card-program6.jpg",
  },
];

function Eyebrow({ children }) {
  return (
    <p className="eyebrow mb-3 ml-1 flex items-center gap-2 text-sm font-semibold uppercase tracking-[0.14em]">
      <span className="eyebrow-tick" aria-hidden="true" />
      {children}
    </p>
  );
}

function ProgramCard({ href, icon, title, image }) {
  return (
    <a
      href={href}
      className="program-card group relative isolate flex aspect-square flex-col justify-end overflow-hidden rounded-[32px] p-6 transition-transform duration-300 hover:-translate-y-1 sm:p-7"
    >
      <div
        className="absolute inset-0 -z-10 bg-cover bg-center transition-transform duration-500 group-hover:scale-105"
        style={{ backgroundImage: `url(${image})` }}
        aria-hidden="true"
      />

      <div
        className="absolute inset-0 -z-10"
        style={{
          background:
            "linear-gradient(to top, rgba(27,49,40,0.85) 0%, rgba(27,49,40,0.38) 48%, transparent 78%)",
        }}
        aria-hidden="true"
      />

      <div className="flex items-center gap-3">
        <span
          className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full text-xl"
          style={{ background: "rgba(253,252,249,0.92)", color: "var(--pine)" }}
        >
          {icon}
        </span>
        <h2 className="font-display text-lg font-semibold leading-snug text-white sm:text-xl">
          {title}
        </h2>
      </div>

      <span className="mt-4 inline-flex items-center gap-2 text-sm font-semibold text-white/90 transition-transform duration-300 group-hover:translate-x-1">
        Ver programa <span aria-hidden="true">→</span>
      </span>
    </a>
  );
}

export default function ProgramsPage() {
  return (
    <div className="newenche space-y-16">
      <section data-reveal className="reveal-up max-w-3xl">
        <Eyebrow>Programas</Eyebrow>
        <h1
          className="font-display mb-5 ml-1 text-3xl font-semibold leading-[1.15] md:text-[2.4rem]"
          style={{ color: "var(--pine)" }}
        >
          Programas especializados para el bienestar adolescente
        </h1>
        <p className="text-body ml-1 max-w-2xl text-lg text-justify">
          Trabajamos con adolescentes, familias, colegios y comunidades desde un
          enfoque integral y territorial. Cada programa responde a una necesidad
          distinta, pero todos comparten la misma forma de mirar: comprender
          antes de juzgar, acompañar antes de etiquetar.
        </p>
      </section>

      <section
        data-reveal
        className="reveal-up grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3"
      >
        {programs.map((program) => (
          <ProgramCard
            key={program.slug}
            href={`/programas/${program.slug}`}
            icon={program.icon}
            title={program.title}
            image={program.image}
          />
        ))}
      </section>
    </div>
  );
}
