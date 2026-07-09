import { FaUserFriends } from "react-icons/fa";
import ContactForm from "../sections/ContactForm";
import {
  ProgramBreadcrumb,
  ProgramHero,
  ProgramSection,
  ProgramListSection,
  ProgramClosing,
} from "../layout/ProgramPageLayout";

const motivos = [
  "Ansiedad, angustia o estrés",
  "Desregulación emocional",
  "Ánimo bajo o aislamiento",
  "Desmotivación escolar",
  "Conflictos familiares",
  "Problemas de conducta",
  "Consumo de alcohol, marihuana u otras sustancias",
  "Baja adherencia a tratamientos",
  "Crisis emocionales",
  "Trastornos alimenticios",
  "Dificultades en la relación con adultos o pares",
  "Riesgo psicosocial",
  "Neurodivergencias",
];

const modalidades = [
  "Atención individual adolescente",
  "Orientación familiar",
  "Sesiones online",
  "Atención presencial",
  "Visitas domiciliarias",
  "Acompañamiento en terreno",
  "Coordinación con colegios",
  "Articulación con redes de apoyo",
];

export default function TeenCarePage() {
  return (
    <div className="newenche space-y-16">
      <ProgramBreadcrumb />

      <ProgramHero
        eyebrow="Programas · Atención Adolescente"
        title="Atención especializada para adolescentes de 12 a 18 años"
        icon={<FaUserFriends />}
        imageCaption=""
        intro={[
          "En Newenche acompañamos a adolescentes que están atravesando dificultades emocionales, familiares, escolares, conductuales o vinculadas al consumo de alcohol y otras drogas.",
          "Sabemos que muchas veces pedir ayuda no es fácil. Algunos adolescentes no quieren hablar, se aíslan, se enojan, abandonan tratamientos, bajan su rendimiento escolar o expresan su malestar a través de conductas que preocupan a la familia.",
          "Nuestro objetivo es construir un espacio de escucha, comprensión y acompañamiento, donde el adolescente pueda ordenar lo que está viviendo y donde su familia pueda recibir orientación para apoyar el proceso.",
        ]}
      />

      <ProgramSection imageCaption="">
        <ProgramListSection
          title="Motivos frecuentes de consulta"
          items={motivos}
        />
        <ProgramListSection
          title="Modalidades de atención"
          items={modalidades}
        />
      </ProgramSection>

      <ProgramClosing
        title="Cada adolescente necesita ser comprendido en su contexto"
        text="Por eso, en Newenche no trabajamos solo con síntomas: trabajamos con historias, vínculos, rutinas, conflictos y posibilidades de cambio."
        ctaLabel="Solicitar orientación inicial"
      />

      <ContactForm />
    </div>
  );
}
