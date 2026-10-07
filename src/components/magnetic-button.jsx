"use client"

import { useEffect, useRef } from "react"
import gsap from "gsap"

export function MagneticButton({ children, className = "", distance = 0.35, ...props }) {
  const buttonRef = useRef(null)

  useEffect(() => {
    const el = buttonRef.current
    if (!el) return

    const xTo = gsap.quickTo(el, "x", { duration: 0.4, ease: "power3.out" })
    const yTo = gsap.quickTo(el, "y", { duration: 0.4, ease: "power3.out" })

    const handleMouseMove = (e) => {
      const { clientX, clientY } = e
      const { left, top, width, height } = el.getBoundingClientRect()
      const middleX = clientX - (left + width / 2)
      const middleY = clientY - (top + height / 2)

      // Clamp movement within 5-12px
      const targetX = Math.max(-12, Math.min(12, middleX * distance))
      const targetY = Math.max(-12, Math.min(12, middleY * distance))

      xTo(targetX)
      yTo(targetY)
    }

    const handleMouseLeave = () => {
      xTo(0)
      yTo(0)
    }

    el.addEventListener("mousemove", handleMouseMove)
    el.addEventListener("mouseleave", handleMouseLeave)

    return () => {
      el.removeEventListener("mousemove", handleMouseMove)
      el.removeEventListener("mouseleave", handleMouseLeave)
    }
  }, [distance])

  return (
    <div ref={buttonRef} className={`inline-block ${className}`} {...props}>
      {children}
    </div>
  )
}
