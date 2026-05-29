"use client"

import { motion, useScroll, useSpring } from "framer-motion"

export function ScrollProgress() {
  const { scrollYProgress } = useScroll()
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 160,
    damping: 28,
    mass: 0.22,
  })

  return <motion.div className="fixed inset-x-0 top-0 z-[120] h-1 origin-left bg-[linear-gradient(90deg,#74b7ff_0%,#a77bff_48%,#ff73c6_100%)] shadow-[0_0_18px_rgba(167,123,255,0.4)]" style={{ scaleX }} />
}
