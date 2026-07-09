import { FaHome } from "react-icons/fa";
import ContactForm from "../sections/ContactForm";
import {
  ProgramBreadcrumb,
  ProgramHero,
  ProgramSection,
  ProgramListSection,
  ProgramTextBlock,
  ProgramClosing,
} from "../layout/ProgramPageLayout";

const temas = [
  "Cómo comunicarse con un adolescente que no quiere hablar",
  "Cómo establecer límites sin romper el vínculo",
  "Qué hacer frente a una crisis emocional",
  "Cómo actuar ante sospecha o presencia de consumo",
  "Cómo organizar rutinas y acuerdos familiares",
  "Cómo acompañar tratamientos",
  "Cómo prevenir recaídas",
  "Cómo identificar señales de alerta",
  "Cuándo pedir ayuda profesional",
  "Cuándo acudir a urgencias",
];

export default function FamilyCounselingPage() {
  return (
    <div className="newenche space-y-16">
      <ProgramBreadcrumb />

      <ProgramHero
        eyebrow="Programas · Orientación Familiar y Psicoeducación"
        title="Apoyo para madres, padres y cuidadores"
        icon={<FaHome />}
        imageCaption=""
        intro={[
          "Acompañar a un adolescente en crisis puede ser difícil. Muchas familias llegan a pedir ayuda cuando ya se sienten cansadas, confundidas, sobrepasadas o sin saber cómo actuar.",
          "En Newenche ofrecemos espacios de orientación familiar y psicoeducación para entregar herramientas concretas a madres, padres y cuidadores.",
        ]}
      />

      <ProgramSection
        title="¿Qué trabajamos?"
        imagePosition="left"
        imageCaption=""
      >
        <ProgramListSection items={temas} />
      </ProgramSection>

      <ProgramTextBlock
        title="Nuestro enfoque con las familias"
        paragraphs={[
          "No buscamos culpar a las familias. Buscamos acompañarlas, orientarlas y fortalecer sus capacidades para sostener procesos de cambio.",
          "Muchas veces, cuando la familia comprende mejor lo que ocurre, puede responder con más calma, claridad y efectividad.",
        ]}
      />

      <ProgramClosing
        title="Una familia orientada puede convertirse en una red de apoyo fundamental para el proceso adolescente"
        ctaLabel="Solicitar orientación familiar"
      />

      <ContactForm />
    </div>
  );
}
