import ProfessionalCard from "../common/ProfessionalCard";
import team from "../../data/team";

function Eyebrow({ children }) {
  return (
    <p className="eyebrow mb-3 ml-1 flex items-center gap-2 text-sm font-semibold uppercase tracking-[0.14em]">
      <span className="eyebrow-tick" aria-hidden="true" />
      {children}
    </p>
  );
}

export default function TeamSection() {
  return (
    <section
      id="equipo-profesional"
      data-reveal
      className="reveal-up scroll-mt-28"
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
          Revisa el perfil de cada profesional para conocer su enfoque, horarios
          y valor de sesión.
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
