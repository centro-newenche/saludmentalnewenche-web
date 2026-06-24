import { useState } from 'react'
import BackToTopButton from './components/common/BackToTopButton'
import SiteFooter from './components/layout/SiteFooter'
import SiteHeader from './components/layout/SiteHeader'
import LandingSection from './components/sections/LandingSection'
import {
  faqs,
  features,
  pricing,
  services,
  showcases,
  stats,
  team,
  testimonials,
  workflowSteps,
} from './data/landingData'
import { useAutoRotate } from './hooks/useAutoRotate'
import { useRevealOnScroll } from './hooks/useRevealOnScroll'
import { useScrollState } from './hooks/useScrollState'

function App() {
  const [annualBilling, setAnnualBilling] = useState(true)
  const [openFaq, setOpenFaq] = useState(0)
  const [menuOpen, setMenuOPen] = useState(false)
  const [activeTestimonial, setActiveTestimonial] = useState(0)
  const [activeShowcase, setActiveShowcase] = useState(0)

  useRevealOnScroll()
  const { isScrolled, showTopButton } = useScrollState()
  useAutoRotate(setActiveTestimonial, testimonials.length, 4500)
  useAutoRotate(setActiveShowcase, showcases.length, 3600)

  return (
    <div className="relative min-h-screen overflow-hidden bg-sky-200 text-blue-900">
      
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top, rgba(255,255,255,0.08),transparent_45%)]" />
      
      <div className="mx-auto w-[90%] px-6 py-24 lg:px-8">
        <SiteHeader isScrolled={isScrolled} menuOpen={menuOpen} onToggleMenu={() => setMenuOPen((prev) => !prev)} onCloseMenu={() => setMenuOPen(false)} />

        <LandingSection stats={stats} workflowSteps={workflowSteps} services={services} showcases={showcases} activeShowcase={activeShowcase} setActiveShowcase={setActiveShowcase} features={features} testimonials={testimonials} activeTestimonial={activeTestimonial} setActiveTestimonial={setActiveTestimonial} pricing={pricing} annualBilling={annualBilling} setAnnualBilling={setAnnualBilling} team={team} faqs={faqs} openFaq={openFaq} setOpenFaq={setOpenFaq} />

        <SiteFooter />
      </div>
      <BackToTopButton show={showTopButton} />
    </div>
  )
}

export default App
