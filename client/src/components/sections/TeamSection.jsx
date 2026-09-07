import { useState } from "react";
import {
  FaChevronDown,
  FaClock,
  FaLaptop,
  FaImage,
  FaCalendarCheck,
} from "react-icons/fa";
import team from "../../data/team";

function Eyebrow({ children }) {
  return (
    <p className="eyebrow mb-3 ml-1 flex items-center gap-2 text-sm font-semibold uppercase tracking-[0.14em]">
      <span className="eyebrow-tick" aria-hidden="true" />
      {children}
    </p>
  );
}

function PersonPhoto({ photo, label }) {
  const [failed, setFailed] = useState(!photo);

  if (failed) {
    return (
      <div className="placeholder-frame relative flex aspect-[4/5] w-full items-center justify-center rounded-t-[26px]">
        <span
          className="flex h-12 w-12 items-center justify-center rounded-full bg-white/70 text-xl"
          style={{ color: "var(--pine)" }}
        >
          <FaImage />
        </span>
      </div>
    );
  }

  return (
    <img
      src={photo}
      alt={label}
      onError={() => setFailed(true)}
      className="aspect-[4/5] w-full rounded-t-[26px] object-cover"
    />
  );
}

function ProfessionalCard({ person }) {
  const [open, setOpen] = useState(false);
  const panelId = `equipo-${person.id}`;
  const displayName = person.name?.trim() || "Nombre por confirmar";

  return (
    <div className="card-soft flex w-full flex-col overflow-hidden rounded-[26px] sm:w-[calc(50%-0.75rem)] lg:w-[calc(33.333%-1rem)]">
      <PersonPhoto
        photo={person.photo}
        label={`Fotografía de ${displayName}, ${person.title}`}
      />

      <div className="flex flex-1 flex-col p-6">
        <h3
          className={`font-display text-lg font-semibold ${
            person.name?.trim() ? "" : "italic opacity-60"
          }`}
          style={{ color: "var(--pine)" }}
        >
          {displayName}
        </h3>
        <p className="text-body mb-4 text-sm">{person.title}</p>

        <button
          type="button"
          onClick={() => setOpen((prev) => !prev)}
          aria-expanded={open}
          aria-controls={panelId}
          className="btn-secondary mt-auto flex items-center justify-center gap-2 rounded-lg px-5 py-2.5 text-sm font-semibold transition"
        >
          {open ? "Ver menos" : "Más información"}
          <FaChevronDown
            className={`text-xs transition-transform duration-300 ${
              open ? "rotate-180" : ""
            }`}
            aria-hidden="true"
          />
        </button>

        <div id={panelId} className={`faq-content mt-2 ${open ? "faq-open" : ""}`}>
          <div>
            <p className="text-body pt-4 text-sm leading-relaxed text-justify">
              {person.bio}
            </p>

            {person.topics?.length > 0 && (
              <>
                <h4
                  className="font-display mb-2 mt-4 text-sm font-semibold"
                  style={{ color: "var(--pine)" }}
                >
                  Puede acompañar en:
                </h4>
                <ul className="dot-list space-y-1.5">
                  {person.topics.map((topic) => (
                    <li key={topic} className="text-sm text-slate-600">
                      {topic}
                    </li>
                  ))}
                </ul>
              </>
            )}

            <div className="mt-5 space-y-2 border-t pt-4 text-sm" style={{ borderColor: "var(--line)" }}>
              <p className="font-semibold" style={{ color: "var(--pine)" }}>
                {person.modality}
              </p>
              <p className="text-body flex items-center gap-2">
                <FaLaptop className="shrink-0" style={{ color: "var(--clay)" }} aria-hidden="true" />
                {person.attention}
              </p>
              <p className="text-body flex items-center gap-2">
                <FaClock className="shrink-0" style={{ color: "var(--clay)" }} aria-hidden="true" />
                {person.schedule}
              </p>
              <p className="font-semibold" style={{ color: "var(--pine)" }}>
                {person.price}
              </p>
            </div>

            <a
              href={person.bookingUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary mt-5 flex items-center justify-center gap-2 rounded-lg px-6 py-3 text-sm font-semibold transition hover:-translate-y-0.5"
            >
              <FaCalendarCheck aria-hidden="true" />
              Agendar sesión
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function TeamSection() {
  return (
    <section
      id="equipo-profesional"
      data-reveal
      className="reveal-up scroll-mt-12"
    >
      <div className="mb-10 max-w-2xl">
        <Eyebrow>Equipo profesional</Eyebrow>
        <h2
          className="font-display mb-4 text-2xl font-semibold leading-snug md:text-3xl"
          style={{ color: "var(--pine)" }}
        >
          Un equipo multidisciplinario para acompañar cada proceso
        </h2>
        <p className="text-body text-lg text-justify">
          Revisa el perfil de cada profesional para conocer su
          enfoque, horarios y valor de sesión.
        </p>
      </div>

      <div className="flex flex-wrap items-start justify-center gap-6">
        {team.map((person) => (
          <ProfessionalCard key={person.id} person={person} />
        ))}
      </div>
    </section>
  );
}