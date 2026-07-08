import { useState } from "react";
import { Routes, Route } from "react-router-dom";
import BackToTopButton from "./components/common/BackToTopButton";
import SiteFooter from "./components/layout/SiteFooter";
import SiteHeader from "./components/layout/SiteHeader";
import HomePage from "./components/pages/HomePage";
import AboutPage from "./components/pages/AboutPage"
import ProgramsPage from "./components/pages/ProgramsPage";
import TeenCarePage from "./components/pages/TeenCarePage";
import RehabPage from "./components/pages/RehabPage";
import TeenSupportPage from "./components/pages/TeenSupportPage";
import FamilyCounselingPage from "./components/pages/FamilyCounselingPage";
import SchoolsAndNetworksPage from "./components/pages/SchoolsAndNetworksPage";
import NewencheTrainingPage from "./components/pages/NewencheTrainingPage";
import ContactPage from "./components/pages/ContactPage";
import { useAutoRotate } from "./hooks/useAutoRotate";
import { useRevealOnScroll } from "./hooks/useRevealOnScroll";
import { useScrollState } from "./hooks/useScrollState";
import { useScrollToTop } from "./hooks/useScrollToTop";


function App() {
  const [menuOpen, setMenuOPen] = useState(false);

  useRevealOnScroll();
  useScrollToTop();
  const { isScrolled, showTopButton } = useScrollState();

  return (
    <div className="relative min-h-screen overflow-hidden bg-[#e2f3d9] text-emerald-900">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top, rgba(255,255,255,0.08),transparent_45%)]" />

      <div className="mx-auto w-[90%] px-6 py-24 lg:px-8">
        <SiteHeader
          isScrolled={isScrolled}
          menuOpen={menuOpen}
          onToggleMenu={() => setMenuOPen((prev) => !prev)}
          onCloseMenu={() => setMenuOPen(false)}
        />

        <Routes>
          <Route path="/" element={<HomePage/>}/>
          <Route path="/quienes-somos" element={<AboutPage/>}/>
          <Route path="/programas" element={<ProgramsPage/>}/>
          <Route path="/programas/adolescente" element={<TeenCarePage/>}/>
          <Route path="/programas/rehabilitacion" element={<RehabPage/>}/>
          <Route path="/programas/acompanamiento" element={<TeenSupportPage/>}/>
          <Route path="/programas/orientacion" element={<FamilyCounselingPage/>}/>
          <Route path="/programas/colegios-redes" element={<SchoolsAndNetworksPage/>}/>
          <Route path="/programas/capacitaciones" element={<NewencheTrainingPage/>}/>
          <Route path="/contacto" element={<ContactPage/>}/>
        </Routes>

        <SiteFooter />
      </div>
      <BackToTopButton show={showTopButton} />
    </div>
  );
}

export default App;
