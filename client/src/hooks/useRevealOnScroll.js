import { useEffect } from "react";
import { useLocation } from "react-router-dom";

export function useRevealOnScroll(){
  const location = useLocation();

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      const elements = document.querySelectorAll('[data-reveal]:not(.reveal-visible)')
      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting){
              entry.target.classList.add('reveal-visible')
            }
          })
        },
        { threshold: 0.16 }
      )

      elements.forEach((element) => observer.observe(element))

      cleanup = () => observer.disconnect()
    }, 0)

    let cleanup = () => {}

    return () => {
      clearTimeout(timeoutId)
      cleanup()
    }
  }, [location.pathname])
}