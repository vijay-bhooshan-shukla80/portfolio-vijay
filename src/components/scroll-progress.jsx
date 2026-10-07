"use client"

import { motion, useScroll, useSpring } from "framer-motion"

export function ScrollProgress() {
  const { scrollYProgress } = useScroll()
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 200,
    damping: 30,
    mass: 0.1,
  })

  return (
    <motion.div
      className="fixed inset-x-0 top-0 z-[120] h-1 origin-left bg-gradient-to-r from-[#D84B20] via-[#E65A2C] to-[#D84B20] shadow-[0_0_15px_rgba(216,75,32,0.6)]"
      style={{ scaleX }}
    />
  )
}
