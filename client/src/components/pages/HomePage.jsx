import Seo from "../common/Seo";
import LandingSection from "../sections/LandingSection";
import ContactForm from "../sections/ContactForm";
import { programs } from "../../data/landingData";

export default function HomePage() {
  return (
    <>
      <Seo
        title="Salud mental adolescente en Santiago"
        description="Centro Newenche: acompañamiento terapéutico especializado para adolescentes de 12 a 19 años y sus familias. Atención individual, familiar, en colegios y comunidades."
        path="/"
      />
      <div className="newenche">
        <LandingSection programs={programs} />
        <ContactForm />
      </div>
    </>
  );
}
