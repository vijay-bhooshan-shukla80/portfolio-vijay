"use client"

import { motion, useInView } from "framer-motion"
import { useRef } from "react"
import { ExternalLink, Calendar, Download, Phone } from "lucide-react"
import { contactMethods } from "@/data/site-content"
import { buttonTap, fadeUp, iconBounce, scaleUp, sectionReveal, staggerContainer, staggerFast, viewportOnce } from "@/lib/motion"

export function CTASection() {
  const ref = useRef(null)
  const isInView = useInView(ref, viewportOnce)

  return (
    <motion.section id="contact" className="relative overflow-hidden py-24" {...sectionReveal}>
      <div className="absolute inset-0 animated-gradient" />
      <div className="absolute left-1/4 top-1/4 h-96 w-96 rounded-full bg-primary/30 blur-3xl animate-float-slow" />
      <div className="absolute bottom-1/4 right-1/4 h-96 w-96 rounded-full bg-accent/30 blur-3xl animate-float-delay" />
      <div className="relative z-10 mx-auto max-w-6xl px-4 sm:px-6" ref={ref}>
        <motion.div variants={staggerContainer} initial="hidden" animate={isInView ? "show" : "hidden"} className="glass motion-border relative overflow-hidden rounded-[1.75rem] border border-white/10 p-5 text-center sm:rounded-3xl sm:p-8 md:p-16">
          <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-transparent to-accent/10" />
          <div className="relative z-10">
            <motion.div variants={fadeUp} className="inline-flex rounded-full border border-primary/30 bg-primary/10 px-3.5 py-2 text-xs text-white sm:px-4 sm:text-sm">Need a website or automation help?</motion.div>
            <motion.h2 variants={fadeUp} className="mt-5 text-2xl font-bold text-balance text-white sm:mt-6 sm:text-3xl md:text-4xl lg:text-5xl">Work with <span className="gradient-text glow-text">a MERN automation developer</span></motion.h2>
            <motion.p variants={fadeUp} className="mx-auto mt-4 max-w-2xl text-sm text-white/84 text-pretty sm:mt-6 sm:text-lg">Reach out for business websites, MERN development, API integration, and practical automation solutions that need clean implementation.</motion.p>
            <motion.div variants={staggerFast} className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
              {contactMethods.map((method, index) => {
                const isExternal = method.href.startsWith("http")
                const isDownload = method.href.endsWith(".pdf")
                return (
                  <motion.a key={method.title} variants={scaleUp} {...buttonTap} whileHover={{ y: -8, scale: 1.03 }} href={method.href} download={isDownload ? true : undefined} target={isExternal ? "_blank" : undefined} rel={isExternal ? "noopener noreferrer" : undefined} className="motion-border rounded-2xl border border-white/10 bg-white/[0.04] p-6 text-left backdrop-blur-sm transition-colors hover:border-primary/40 hover:bg-white/[0.06]">
                    <motion.div variants={iconBounce} initial="rest" whileHover="hover" className="icon-highlight mb-3 flex h-12 w-12 items-center justify-center rounded-xl">{index === 0 ? <ExternalLink size={20} /> : index === 1 ? <Calendar size={20} /> : index === 2 ? <Download size={20} /> : <Phone size={20} />}</motion.div>
                    <h3 className="mb-2 text-lg font-semibold text-white">{method.title}</h3>
                    <p className="text-sm leading-relaxed text-white/82">{method.description}</p>
                  </motion.a>
                )
              })}
            </motion.div>
          </div>
        </motion.div>
      </div>
    </motion.section>
  )
}
