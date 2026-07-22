import { FaChalkboardTeacher } from "react-icons/fa";
import ContactForm from "../sections/ContactForm";
import {
  ProgramBreadcrumb,
  ProgramHero,
  ProgramTopicList,
  ProgramCard,
  ProgramListSection,
  ProgramClosing,
} from "../layout/ProgramPageLayout";

const lineas = [
  {
    title: "Salud mental adolescente",
    text: "Comprensión del malestar adolescente, señales de alerta, factores de riesgo, factores protectores y rutas de apoyo.",
  },
  {
    title: "Consumo problemático",
    text: "Prevención, reducción de riesgos, señales de alerta, familia, colegio, adherencia y acompañamiento.",
  },
  {
    title: "Primeros Auxilios Psicológicos",
    text: "Herramientas iniciales para responder ante crisis emocionales en contextos educativos, familiares o comunitarios.",
  },
  {
    title: "Intervención familiar",
    text: "Comunicación, límites, rutinas, crisis, adherencia, acompañamiento y trabajo con cuidadores.",
  },
  {
    title: "Trabajo territorial",
    text: "Visitas domiciliarias, lectura del contexto, coordinación de redes y acompañamiento en terreno.",
  },
  {
    title: "Autocuidado de equipos",
    text: "Prevención del desgaste profesional, manejo de casos complejos y cuidado psicosocial de equipos.",
  },
];

const modalidades = [
  "Charlas",
  "Talleres",
  "Capacitaciones breves",
  "Programas formativos",
  "Jornadas institucionales",
  "Modalidad online, presencial o mixta",
];

export default function NewencheTrainingPage() {
  return (
    <div className="newenche space-y-16">
      <ProgramBreadcrumb />

      <ProgramHero
        eyebrow="Programas · Capacitaciones Newenche"
        title="Formación aplicada en salud mental adolescente, familia y comunidad"
        icon={<FaChalkboardTeacher />}
        image={{
          src: "/Capacitaciones.webp",
          alt: "",
        }}
        intro={[
          "Newenche desarrolla capacitaciones para colegios, municipios, equipos psicosociales, instituciones educativas, programas sociales y organizaciones comunitarias que trabajan con adolescentes y familias.",
          "Nuestras capacitaciones buscan entregar herramientas prácticas, claras y contextualizadas para comprender mejor el malestar adolescente, responder ante crisis, acompañar a las familias y fortalecer el trabajo en red.",
        ]}
      />

      <ProgramTopicList title="Líneas de capacitación" topics={lineas} />

      <ProgramCard title="Modalidades">
        <ProgramListSection items={modalidades} />
      </ProgramCard>

      <ProgramClosing
        title="Equipos más preparados acompañan mejor a los adolescentes"
        text="Diseñamos cada capacitación a la medida de la institución, su contexto y las necesidades reales de los equipos."
        ctaLabel="Solicitar capacitación"
      />

      <ContactForm />
    </div>
  );
}
