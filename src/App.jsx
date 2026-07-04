import { useState } from 'react'
import BackToTopButton from './components/common/BackToTopButton'
import SiteFooter from './components/layout/SiteFooter'
import SiteHeader from './components/layout/SiteHeader'
import LandingSection from './components/pages/LandingPage'
import {
  programs,
} from './data/landingData'
import { useAutoRotate } from './hooks/useAutoRotate'
import { useRevealOnScroll } from './hooks/useRevealOnScroll'
import { useScrollState } from './hooks/useScrollState'

function App() {
  const [menuOpen, setMenuOPen] = useState(false)
  
  useRevealOnScroll()
  const { isScrolled, showTopButton } = useScrollState()
  
  return (
    <div className="relative min-h-screen overflow-hidden bg-[#e2f3d9] text-emerald-900">
      
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top, rgba(255,255,255,0.08),transparent_45%)]" />
      
      <div className="mx-auto w-[90%] px-6 py-24 lg:px-8">
        <SiteHeader isScrolled={isScrolled} menuOpen={menuOpen} onToggleMenu={() => setMenuOPen((prev) => !prev)} onCloseMenu={() => setMenuOPen(false)} />

        <LandingSection programs={programs} />

        <SiteFooter />
      </div>
      <BackToTopButton show={showTopButton} />
    </div>
  )
}

export default App
