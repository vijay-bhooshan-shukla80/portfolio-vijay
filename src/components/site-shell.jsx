"use client"

import { useEffect, useState } from "react"
import { useLocation } from "react-router-dom"
import { CustomCursor } from "@/components/custom-cursor"
import { ScrollProgress } from "@/components/scroll-progress"

export function SiteShell({ children }) {
  const location = useLocation()
  const [isMounted, setIsMounted] = useState(false)
  const [isMobile, setIsMobile] = useState(false)

  useEffect(() => {
    setIsMounted(true)

    const checkMobile = () => {
      setIsMobile(window.matchMedia("(pointer: coarse)").matches || window.innerWidth < 768)
    }

    checkMobile()
    window.addEventListener("resize", checkMobile)
    return () => window.removeEventListener("resize", checkMobile)
  }, [])

  useEffect(() => {
    if (typeof window === "undefined") {
      return undefined
    }

    const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)")
    if (reducedMotion.matches) {
      return undefined
    }

    const selectors = [
      "section h1",
      "section h2",
      "section h3",
      "section p",
      "section article",
      "section img",
      "section a",
      "section button",
      "footer a",
      "footer li",
    ]

    const elements = Array.from(document.querySelectorAll(selectors.join(","))).filter(
      (element) => !element.closest("[data-motion-skip]"),
    )

    elements.forEach((element, index) => {
      element.classList.add("motion-reveal")
      element.style.setProperty("--motion-delay", `${Math.min((index % 8) * 45, 315)}ms`)

      if (!element.dataset.motion) {
        const tagName = element.tagName.toLowerCase()
        if (tagName === "section" || tagName === "footer") {
          element.dataset.motion = "fade-up"
        } else if (tagName === "h1" || tagName === "h2") {
          element.dataset.motion = "heading"
        } else if (tagName === "img") {
          element.dataset.motion = "zoom"
        } else if (tagName === "a" || tagName === "button") {
          element.dataset.motion = "pop"
        } else {
          element.dataset.motion = index % 3 === 0 ? "fade-left" : index % 3 === 1 ? "fade-right" : "fade-up"
        }
      }
    })

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible")
            observer.unobserve(entry.target)
          }
        })
      },
      { threshold: 0.12, rootMargin: "0px 0px -8% 0px" },
    )

    elements.forEach((element) => observer.observe(element))

    return () => observer.disconnect()
  }, [location.pathname])

  return (
    <>
      <ScrollProgress />
      {isMounted && !isMobile ? <CustomCursor /> : null}
      {children}
    </>
  )
}
