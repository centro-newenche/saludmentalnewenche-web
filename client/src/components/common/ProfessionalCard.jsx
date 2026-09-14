import { useState } from "react";
import {
  FaChevronDown,
  FaClock,
  FaLaptop,
  FaImage,
  FaCalendarCheck,
} from "react-icons/fa";

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

function BookingButton({ bookingUrl, className = "" }) {
  return (
    <a
      href={bookingUrl}
      target="_blank"
      rel="noopener noreferrer"
      className={`btn-primary flex items-center justify-center gap-2 rounded-lg px-6 py-3 text-sm font-semibold transition hover:-translate-y-0.5 ${className}`}
    >
      <FaCalendarCheck aria-hidden="true" />
      Agendar sesión
    </a>
  );
}

export default function ProfessionalCard({ person, inlineBooking = false }) {
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

        <div
          className={`mt-auto flex gap-3 ${inlineBooking ? "flex-row" : ""}`}
        >
          <button
            type="button"
            onClick={() => setOpen((prev) => !prev)}
            aria-expanded={open}
            aria-controls={panelId}
            className={`btn-secondary flex items-center justify-center gap-2 rounded-lg px-5 py-2.5 text-sm font-semibold transition ${
              inlineBooking ? "flex-1" : "w-full"
            }`}
          >
            {open ? "Ver menos" : "Más información"}
            <FaChevronDown
              className={`text-xs transition-transform duration-300 ${
                open ? "rotate-180" : ""
              }`}
              aria-hidden="true"
            />
          </button>

          {inlineBooking && (
            <BookingButton bookingUrl={person.bookingUrl} className="flex-1" />
          )}
        </div>

        <div
          id={panelId}
          className={`faq-content mt-2 ${open ? "faq-open" : ""}`}
        >
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

            <div
              className="mt-5 space-y-2 border-t pt-4 text-sm"
              style={{ borderColor: "var(--line)" }}
            >
              <p className="font-semibold" style={{ color: "var(--pine)" }}>
                {person.modality}
              </p>
              <p className="text-body flex items-center gap-2">
                <FaLaptop
                  className="shrink-0"
                  style={{ color: "var(--clay)" }}
                  aria-hidden="true"
                />
                {person.attention}
              </p>
              <p className="text-body flex items-center gap-2">
                <FaClock
                  className="shrink-0"
                  style={{ color: "var(--clay)" }}
                  aria-hidden="true"
                />
                {person.schedule}
              </p>
              <p className="font-semibold" style={{ color: "var(--pine)" }}>
                {person.price}
              </p>
            </div>

            {!inlineBooking && (
              <BookingButton
                bookingUrl={person.bookingUrl}
                className="mt-5 w-full"
              />
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
