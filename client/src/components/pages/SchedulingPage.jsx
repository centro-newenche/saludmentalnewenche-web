import Seo from "../common/Seo";
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

export default function SchedulingPage() {
  return (
    <div className="newenche space-y-16">
      <Seo
        title="Agenda tu sesión"
        description="Conoce a nuestro equipo profesional y agenda tu sesión directamente con el especialista que necesitas."
        path="/agendar"
      />

      <section data-reveal className="reveal-up">
        <div className="mx-auto mb-12 max-w-2xl text-center">
          <div className="flex justify-center">
            <Eyebrow>Agenda tu sesión</Eyebrow>
          </div>
          <h1
            className="font-display mb-4 text-3xl font-semibold leading-[1.15] md:text-[2.6rem]"
            style={{ color: "var(--pine)" }}
          >
            Encuentra al profesional adecuado para ti
          </h1>
          <p className="text-body text-lg text-justify">
            Conoce a nuestro equipo, revisa la experiencia y especialidad de cada profesional y elige a quien mejor se adapte a tus necesidades o las de tu familia.
          </p>
          <br></br>
          <p className="text-body text-lg text-justify">
            Cuando encuentres la opción adecuada, puedes agendar tu sesión directamente de forma simple y segura.
          </p>
        </div>

        <div className="flex flex-wrap items-start justify-center gap-6">
          {team.map((person) => (
            <ProfessionalCard key={person.id} person={person} inlineBooking />
          ))}
        </div>
      </section>
    </div>
  );
}