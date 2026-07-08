import { FaArrowLeft, FaImage } from "react-icons/fa";
import { Link } from "react-router-dom";

/**
 * Shared building blocks for individual program pages
 * (/programas/:slug). Every program page — Atención Adolescente,
 * Rehabilitación, Acompañamiento, Orientación Familiar, Colegios y
 * Redes, Capacitaciones — should compose these pieces so the six
 * pages read as one family while still allowing each program's
 * content to have a different shape (some need two lists, some need
 * an "enfoque" quote block, etc).
 *
 * Suggested page skeleton (see TeenCarePage.jsx / RehabPage.jsx):
 *   <div className="newenche space-y-24">
 *     <ProgramBreadcrumb />
 *     <ProgramHero .../>
 *     <ProgramSection ...>
 *       <ProgramListSection .../>
 *       <ProgramListSection .../>
 *     </ProgramSection>
 *     <ProgramHighlight .../>          (optional)
 *     <ProgramClosing .../>
 *     <ContactForm />
 *   </div>
 */

export function ImagePlaceholder({ caption, className = "" }) {
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

export function ProgramBreadcrumb({ label = "Volver a programas" }) {
  return (
    <Link
      to="/programas"
      data-reveal
      className="reveal-up nav-link inline-flex items-center gap-2 text-sm font-semibold"
    >
      <FaArrowLeft className="text-xs" />
      {label}
    </Link>
  );
}

function Eyebrow({ children }) {
  return (
    <p className="eyebrow mb-3 ml-1 flex items-center gap-2 text-sm font-semibold uppercase tracking-[0.14em]">
      <span className="eyebrow-tick" aria-hidden="true" />
      {children}
    </p>
  );
}

/** Top hero: eyebrow + title + intro paragraph(s) + image placeholder. */
export function ProgramHero({
  eyebrow,
  title,
  intro = [],
  icon,
  imageCaption,
}) {
  return (
    <section
      data-reveal
      className="reveal-up card-soft grid gap-8 rounded-[32px] lg:grid-cols-12 lg:gap-8 lg:items-stretch lg:min-h-[65vh]"
    >
      <div className="relative p-6 lg:col-span-6 flex flex-col justify-center">
        <Eyebrow>{eyebrow}</Eyebrow>
        <h1
          className="font-display relative mb-6 ml-1 flex items-start gap-4 max-w-xl text-3xl font-semibold leading-[1.15] md:text-[2.4rem]"
          style={{ color: "var(--pine)" }}
        >
          {icon && (
            <span
              className="icon-chip mt-1 flex h-12 w-12 shrink-0 items-center justify-center rounded-full text-xl"
              aria-hidden="true"
            >
              {icon}
            </span>
          )}
          <span>{title}</span>
        </h1>
        {intro.map((paragraph, i) => (
          <p
            key={i}
            className="text-body mb-4 ml-1 max-w-xl text-lg text-justify last:mb-0"
          >
            {paragraph}
          </p>
        ))}
      </div>
      <div className="lg:col-span-6 mt-2 lg:mt-0 flex items-stretch">
        <ImagePlaceholder
          caption={imageCaption}
          className="min-h-[40vh] lg:min-h-[65vh]"
        />
      </div>
    </section>
  );
}

/**
 * Two-column content section: a card-soft block (title + children,
 * usually one or more ProgramListSection) paired with an image
 * placeholder. Set imagePosition="left" to flip the order.
 */
export function ProgramSection({
  title,
  children,
  imageCaption,
  imagePosition = "right",
}) {
  const textCol = (
    <div className="card-soft p-6 sm:p-10 lg:col-span-7 rounded-[32px]">
      {title && (
        <h2
          className="font-display mb-6 text-xl font-semibold md:text-2xl"
          style={{ color: "var(--pine)" }}
        >
          {title}
        </h2>
      )}
      {children}
    </div>
  );

  const imageCol = (
    <div className="lg:col-span-5 mt-2 lg:mt-0 flex items-stretch">
      <ImagePlaceholder
        caption={imageCaption}
        className="min-h-[40vh] lg:min-h-full"
      />
    </div>
  );

  return (
    <section
      data-reveal
      className="reveal-up grid gap-8 lg:grid-cols-12 lg:gap-8 lg:items-stretch"
    >
      {imagePosition === "left" ? (
        <>
          {imageCol}
          {textCol}
        </>
      ) : (
        <>
          {textCol}
          {imageCol}
        </>
      )}
    </section>
  );
}

/** A titled dot-list, meant to live inside a ProgramSection. */
export function ProgramListSection({ title, items = [], columns = 2 }) {
  return (
    <div className="mb-8 last:mb-0">
      {title && (
        <h3
          className="font-display mb-3 text-lg font-semibold"
          style={{ color: "var(--pine)" }}
        >
          {title}
        </h3>
      )}
      <ul
        className={`dot-list grid grid-cols-1 gap-x-6 gap-y-2 ${
          columns === 2 ? "sm:grid-cols-2" : ""
        }`}
      >
        {items.map((item) => (
          <li key={item} className="text-base text-slate-600">
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
}

/** Gradient highlight block for a program's "enfoque" or guiding idea. */
export function ProgramHighlight({ eyebrow, title, text }) {
  return (
    <section
      data-reveal
      className="reveal-up relative overflow-hidden rounded-[32px] p-8 text-center md:p-14"
      style={{
        background:
          "linear-gradient(155deg, var(--pine-dark) 0%, var(--pine) 60%, var(--pine-light) 100%)",
      }}
    >
      <div className="relative z-10 mx-auto max-w-2xl">
        {eyebrow && (
          <p
            className="mb-3 flex items-center justify-center gap-2 text-sm font-semibold uppercase tracking-[0.14em]"
            style={{ color: "var(--clay-light)" }}
          >
            <span
              className="eyebrow-tick"
              aria-hidden="true"
              style={{ background: "var(--clay-light)" }}
            />
            {eyebrow}
          </p>
        )}
        {title && (
          <h2 className="font-display mb-4 text-xl font-semibold text-white md:text-2xl">
            {title}
          </h2>
        )}
        {text && (
          <p
            className="pull-quote text-xl md:text-2xl"
            style={{ color: "var(--sand)" }}
          >
            {text}
          </p>
        )}
      </div>
    </section>
  );
}

/**
 * Centered text-only block, no image — for short explanatory text like
 * "¿Para qué sirve este programa?" or "Nuestro enfoque con las familias".
 */
export function ProgramTextBlock({ title, paragraphs = [], icon }) {
  return (
    <section
      data-reveal
      className="reveal-up card-soft rounded-[32px] p-8 md:p-10"
    >
      {icon && (
        <div className="icon-chip mb-5 flex h-12 w-12 items-center justify-center rounded-full text-xl">
          {icon}
        </div>
      )}
      {title && (
        <h2
          className="font-display mb-3 text-xl font-semibold md:text-2xl"
          style={{ color: "var(--pine)" }}
        >
          {title}
        </h2>
      )}
      {paragraphs.map((paragraph, i) => (
        <p
          key={i}
          className="text-body mb-4 text-lg text-justify last:mb-0"
        >
          {paragraph}
        </p>
      ))}
    </section>
  );
}

/**
 * Single-column card wrapper, no image — for sections that are just a
 * title + list/paragraphs (e.g. "Modalidades") and don't need the
 * two-column ProgramSection layout.
 */
export function ProgramCard({ title, children }) {
  return (
    <section
      data-reveal
      className="reveal-up card-soft rounded-[32px] p-6 sm:p-10"
    >
      {title && (
        <h2
          className="font-display mb-6 text-xl font-semibold md:text-2xl"
          style={{ color: "var(--pine)" }}
        >
          {title}
        </h2>
      )}
      {children}
    </section>
  );
}

/**
 * Grid of named topics/lines of work, each with a short description
 * (e.g. "Líneas de capacitación"). Different shape from ProgramListSection,
 * which is for flat one-line items.
 */
export function ProgramTopicList({ title, intro, topics = [] }) {
  return (
    <section
      data-reveal
      className="reveal-up card-soft rounded-[32px] p-6 sm:p-10"
    >
      {title && (
        <h2
          className="font-display mb-3 text-xl font-semibold md:text-2xl"
          style={{ color: "var(--pine)" }}
        >
          {title}
        </h2>
      )}
      {intro && <p className="text-body mb-8 max-w-2xl text-lg text-justify">{intro}</p>}
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {topics.map((topic) => (
          <div
            key={topic.title}
            className="rounded-2xl p-5"
            style={{ background: "var(--sand)", border: "1px solid var(--line)" }}
          >
            <p
              className="font-display mb-2 text-base font-semibold"
              style={{ color: "var(--pine)" }}
            >
              {topic.title}
            </p>
            <p className="text-sm text-slate-600">{topic.text}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

/** Closing CTA block, mirrors AboutPage's cierre section. */
export function ProgramClosing({ title, text, ctaLabel, ctaHref = "/contacto" }) {
  return (
    <section
      data-reveal
      className="reveal-up card-soft rounded-[32px] p-8 text-center md:p-14"
    >
      <h2
        className="font-display mx-auto mb-4 max-w-2xl text-xl font-semibold leading-snug md:text-2xl"
        style={{ color: "var(--pine)" }}
      >
        {title}
      </h2>
      {text && (
        <p className="text-body mx-auto mb-8 max-w-2xl text-lg text-justify">
          {text}
        </p>
      )}
      {ctaLabel && (
        <div className="flex flex-wrap justify-center gap-4">
          <Link
            to={ctaHref}
            className="btn-primary inline-block rounded-lg px-7 py-3 font-semibold transition hover:-translate-y-0.5"
          >
            {ctaLabel}
          </Link>
        </div>
      )}
    </section>
  );
}
