import LandingSection from "../sections/LandingSection";
import ContactForm from "../sections/ContactForm";
import { programs } from "../../data/landingData";

export default function HomePage() {
  return (
    <>
      <div className="newenche">
        <LandingSection programs={programs} />
        <ContactForm />
      </div>
    </>
  );
}
