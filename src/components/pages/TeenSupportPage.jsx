import { FaMapMarkerAlt } from "react-icons/fa";
import ContactForm from "../sections/ContactForm";
import {
  ProgramBreadcrumb,
  ProgramHero,
  ProgramSection,
  ProgramListSection,
  ProgramTextBlock,
  ProgramHighlight,
  ProgramClosing,
} from "../layout/ProgramPageLayout";

const acompanamiento = [
  "Atención individual adolescente",
  "Orientación familiar",
  "Psicoeducación para cuidadores",
  "Visitas domiciliarias",
  "Acompañamiento en terreno",
  "Coordinación con colegios",
  "Reuniones con redes de apoyo",
  "Seguimiento profesional",
  "Plan de objetivos familiares y adolescentes",
  "Apoyo frente a crisis",
];

export default function TeenSupportPage() {
  return (
    <div className="newenche space-y-16">
      <ProgramBreadcrumb />

      <ProgramHero
        eyebrow="Programas · Acompañamiento Adolescente, Familiar y Territorial"
        title="Cuando la consulta tradicional no es suficiente"
        icon={<FaMapMarkerAlt />}
        imageCaption=""
        intro={[
          "Algunas situaciones adolescentes requieren un acompañamiento más cercano, flexible y conectado con la vida real del joven y su familia.",
          "Este programa está orientado a adolescentes que presentan crisis familiares, aislamiento, desmotivación escolar, baja adherencia a tratamientos, problemas conductuales, consumo inicial, riesgo psicosocial o dificultades para sostener procesos de ayuda.",
        ]}
      />

      <ProgramSection
        title="¿Cómo trabajamos?"
        imageCaption=""
      >
        <p className="text-body mb-6 text-lg text-justify">
          Integramos al adolescente, su familia, el colegio y las redes
          relevantes para construir un proceso de apoyo contextualizado. El
          acompañamiento puede incluir:
        </p>
        <ProgramListSection items={acompanamiento} />
      </ProgramSection>

      <ProgramTextBlock
        title="¿Para qué sirve este programa?"
        paragraphs={[
          "Para ordenar situaciones complejas, fortalecer el rol de la familia, mejorar la comunicación, apoyar la adherencia, reducir riesgos y construir condiciones más favorables para el proceso adolescente.",
        ]}
      />

      <ProgramHighlight
        text="La vida adolescente no ocurre solo en una consulta. Ocurre en la casa, en el colegio, en el barrio, en internet, en los vínculos y en la comunidad."
      />

      <ProgramClosing
        title="Un acompañamiento que llega hasta donde ocurre la vida adolescente"
        ctaLabel="Solicitar orientación inicial"
      />

      <ContactForm />
    </div>
  );
}
