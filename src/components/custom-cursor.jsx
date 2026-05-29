"use client"

import { useEffect, useState, useRef } from "react"
import { motion, useSpring, useMotionValue } from "framer-motion"

export function CustomCursor() {
  const [isHovering, setIsHovering] = useState(false)
  const [isClicking, setIsClicking] = useState(false)
  const [isVisible, setIsVisible] = useState(false)
  const cursorRef = useRef(null)

  const cursorX = useMotionValue(-100)
  const cursorY = useMotionValue(-100)

  const springConfig = { damping: 25, stiffness: 400 }
  const cursorXSpring = useSpring(cursorX, springConfig)
  const cursorYSpring = useSpring(cursorY, springConfig)

  useEffect(() => {
    const moveCursor = (e) => {
      setIsVisible(true)
      cursorX.set(e.clientX)
      cursorY.set(e.clientY)
    }

    const hideCursor = () => setIsVisible(false)

    const handleMouseDown = () => setIsClicking(true)
    const handleMouseUp = () => setIsClicking(false)

    const handleMouseOver = (e) => {
      const target = e.target
      if (
        target.tagName === "A" ||
        target.tagName === "BUTTON" ||
        target.closest("a") ||
        target.closest("button") ||
        target.classList.contains("cursor-pointer") ||
        target.closest(".cursor-pointer")
      ) {
        setIsHovering(true)
      }
    }

    const handleMouseOut = (e) => {
      const target = e.target
      if (
        target.tagName === "A" ||
        target.tagName === "BUTTON" ||
        target.closest("a") ||
        target.closest("button") ||
        target.classList.contains("cursor-pointer") ||
        target.closest(".cursor-pointer")
      ) {
        setIsHovering(false)
      }
    }

    window.addEventListener("mousemove", moveCursor)
    window.addEventListener("mouseleave", hideCursor)
    document.addEventListener("visibilitychange", hideCursor)
    window.addEventListener("mousedown", handleMouseDown)
    window.addEventListener("mouseup", handleMouseUp)
    document.addEventListener("mouseover", handleMouseOver)
    document.addEventListener("mouseout", handleMouseOut)

    return () => {
      window.removeEventListener("mousemove", moveCursor)
      window.removeEventListener("mouseleave", hideCursor)
      document.removeEventListener("visibilitychange", hideCursor)
      window.removeEventListener("mousedown", handleMouseDown)
      window.removeEventListener("mouseup", handleMouseUp)
      document.removeEventListener("mouseover", handleMouseOver)
      document.removeEventListener("mouseout", handleMouseOut)
    }
  }, [cursorX, cursorY])

  return (
    <>
      <motion.div ref={cursorRef} className="fixed top-0 left-0 pointer-events-none z-[9999]" style={{ x: cursorXSpring, y: cursorYSpring }}>
        <motion.div
          className="relative -translate-x-1/2 -translate-y-1/2"
          animate={{ scale: isClicking ? 0.8 : isHovering ? 1.35 : 1, opacity: isVisible ? 1 : 0 }}
          transition={{ duration: 0.15 }}
        >
          <motion.div className="h-10 w-10 rounded-full border-2 border-white/80" animate={{ scale: isHovering ? 1.15 : 1, opacity: isHovering ? 0.75 : 0.55 }} transition={{ duration: 0.2 }} />
          <motion.div className="absolute top-1/2 left-1/2 h-2 w-2 -translate-x-1/2 -translate-y-1/2 rounded-full bg-white" animate={{ scale: isHovering ? 0 : 1 }} transition={{ duration: 0.15 }} />
        </motion.div>
      </motion.div>
      <motion.div className="fixed top-0 left-0 pointer-events-none z-[9998]" style={{ x: useSpring(cursorX, { damping: 50, stiffness: 200 }), y: useSpring(cursorY, { damping: 50, stiffness: 200 }) }}>
        <motion.div
          className="h-6 w-6 -translate-x-1/2 -translate-y-1/2 rounded-full"
          style={{ background: "radial-gradient(circle, oklch(0.7 0.25 285 / 0.22) 0%, transparent 72%)" }}
          animate={{ scale: isHovering ? 1.6 : 1, opacity: isVisible ? (isHovering ? 0.45 : 0.24) : 0 }}
          transition={{ duration: 0.25 }}
        />
      </motion.div>
    </>
  )
}
