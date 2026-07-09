import { FaLeaf } from "react-icons/fa";
import ContactForm from "../sections/ContactForm";
import {
  ProgramBreadcrumb,
  ProgramHero,
  ProgramSection,
  ProgramListSection,
  ProgramHighlight,
  ProgramClosing,
} from "../layout/ProgramPageLayout";

const incluye = [
  "Evaluación inicial",
  "Plan de acompañamiento individual",
  "Atención adolescente",
  "Orientación y psicoeducación familiar",
  "Prevención de recaídas",
  "Reducción de riesgos",
  "Fortalecimiento de rutinas",
  "Apoyo a la adherencia",
  "Visitas domiciliarias cuando corresponda",
  "Coordinación con colegio, previa autorización familiar",
  "Derivación psiquiátrica o especializada si es necesario",
  "Seguimiento del proceso",
];

export default function RehabPage() {
  return (
    <div className="newenche space-y-16">
      <ProgramBreadcrumb />

      <ProgramHero
        eyebrow="Programas · Rehabilitación de Drogas y Alcohol"
        title="Acompañamiento especializado en consumo de alcohol, marihuana y otras drogas"
        icon={<FaLeaf />}
        imageCaption=""
        intro={[
          "El consumo adolescente no siempre es solo una conducta aislada. Muchas veces puede relacionarse con sufrimiento emocional, presión de pares, conflictos familiares, búsqueda de pertenencia, evasión, falta de sentido, dificultades escolares o problemas para regular lo que se vive internamente.",
          "En Newenche ofrecemos un acompañamiento ambulatorio especializado para adolescentes de 12 a 18 años que presentan consumo problemático de alcohol, marihuana u otras drogas, integrando apoyo individual, orientación familiar, psicoeducación, prevención de recaídas y coordinación con redes cuando corresponde.",
        ]}
      />

      <ProgramSection
        title="¿Qué incluye el programa?"
        imagePosition="left"
        imageCaption=""
      >
        <ProgramListSection items={incluye} />
      </ProgramSection>

      <ProgramHighlight
        eyebrow="Enfoque del programa"
        text="No trabajamos desde el castigo ni la moralización. Buscamos comprender qué lugar está ocupando el consumo en la vida del adolescente y construir, junto a la familia, estrategias reales de cuidado, límites, apoyo y cambio."
      />

      <ProgramClosing
        title="Un proceso de acompañamiento, no de sanción"
        text="Cada plan se construye a la medida del adolescente y su familia, con seguimiento continuo y coordinación con redes de apoyo cuando es necesario."
        ctaLabel="Solicitar evaluación inicial"
      />

      <ContactForm />
    </div>
  );
}
