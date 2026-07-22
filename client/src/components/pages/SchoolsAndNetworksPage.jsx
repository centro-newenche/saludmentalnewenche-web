import { FaSchool } from "react-icons/fa";
import ContactForm from "../sections/ContactForm";
import {
  ProgramBreadcrumb,
  ProgramHero,
  ProgramSection,
  ProgramListSection,
  ProgramTextBlock,
  ProgramClosing,
} from "../layout/ProgramPageLayout";

const servicios = [
  "Orientación técnica para casos adolescentes",
  "Coordinación con equipos de convivencia escolar",
  "Reuniones con equipos psicosociales",
  "Acompañamiento de casos complejos",
  "Capacitaciones en salud mental adolescente",
  "Capacitaciones en consumo problemático",
  "Primeros Auxilios Psicológicos",
  "Intervención familiar",
  "Trabajo territorial y visitas domiciliarias",
  "Autocuidado de equipos",
];

export default function SchoolsAndNetworksPage() {
  return (
    <div className="newenche space-y-16">
      <ProgramBreadcrumb />

      <ProgramHero
        eyebrow="Programas · Colegios y Redes"
        title="Coordinación con colegios, equipos psicosociales e instituciones"
        icon={<FaSchool />}
        image={{
          src: "/schools1.jpg",
          alt: "",
        }}
        intro={[
          "La salud mental adolescente requiere respuestas compartidas. Muchas veces, las dificultades emocionales, conductuales o familiares también se expresan en el espacio escolar y comunitario.",
          "Por eso, cuando la situación lo requiere y con autorización de la familia, Newenche puede coordinar acciones con colegios, equipos psicosociales, municipios, programas sociales, redes de salud u otras instituciones relevantes.",
        ]}
      />

      <ProgramSection
        title="Servicios para colegios e instituciones"
        imagePosition="left"
        image={{
          src: "/schools2.jpg",
          alt: "",
        }}
      >
        <ProgramListSection items={servicios} />
      </ProgramSection>

      <ProgramTextBlock
        title="Enfoque de trabajo"
        paragraphs={[
          "Buscamos construir respuestas coordinadas, cuidadosas y realistas. La idea no es sobreintervenir, sino ordenar la información, cuidar la confidencialidad, definir roles y fortalecer las redes que pueden apoyar al adolescente.",
        ]}
      />

      <ProgramClosing
        title="Los procesos adolescentes necesitan continuidad, coherencia y adultos que trabajen en red"
        ctaLabel="Solicitar coordinación institucional"
      />

      <ContactForm />
    </div>
  );
}
