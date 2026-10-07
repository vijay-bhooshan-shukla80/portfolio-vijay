"use client"

import { useEffect } from "react"
import Lenis from "lenis"
import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import "lenis/dist/lenis.css"

gsap.registerPlugin(ScrollTrigger)

export function SmoothScrollProvider({ children }) {
  useEffect(() => {
    const media = gsap.matchMedia()
    media.add('(min-width: 768px) and (pointer: fine) and (prefers-reduced-motion: no-preference)', () => {
      const lenis = new Lenis({
        anchors: true,
        duration: .9,
        easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
        smoothWheel: true,
        wheelMultiplier: 1,
        touchMultiplier: 1.5,
      })

      lenis.on("scroll", ScrollTrigger.update)

      const updateLenis = (time) => {
        lenis.raf(time * 1000)
      }

      gsap.ticker.add(updateLenis)
      const reset = () => lenis.scrollTo(0, { immediate: true, force: true })
      window.addEventListener('portfolio-route', reset)
      // Respect the existing navigation dialog's scroll lock.
      const syncLock = () => document.body.style.overflow === 'hidden' ? lenis.stop() : lenis.start()
      const observer = new MutationObserver(syncLock)
      observer.observe(document.body, { attributes: true, attributeFilter: ['style'] })
      syncLock()

      return () => {
        lenis.destroy()
        window.removeEventListener('portfolio-route', reset)
        gsap.ticker.remove(updateLenis)
        observer.disconnect()
      }
    })
    return () => media.revert()
  }, [])

  return <>{children}</>
}
