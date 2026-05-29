"use client"

import { motion, useInView } from "framer-motion"
import Image from "next/image"
import Link from "next/link"
import { useRef } from "react"
import { ArrowRight } from "lucide-react"
import { services } from "@/data/site-content"
import { buttonTap, fadeUp, iconBounce, scaleUp, sectionReveal, staggerContainer, staggerFast, viewportOnce } from "@/lib/motion"

export function ServicesSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, viewportOnce)

  return (
    <motion.section id="services" className="relative overflow-hidden py-24" {...sectionReveal}>
      <div className="absolute bottom-0 right-0 h-96 w-96 rounded-full bg-accent/10 blur-3xl animate-float-slow" />
      <div className="absolute left-0 top-1/2 h-64 w-64 rounded-full bg-primary/10 blur-3xl animate-float-delay" />

      <div className="mx-auto max-w-7xl px-6" ref={ref}>
        <motion.div variants={staggerContainer} initial="hidden" animate={isInView ? "show" : "hidden"} className="mb-16 text-center">
          <motion.span variants={fadeUp} className="text-sm font-medium uppercase tracking-wider text-white">Services</motion.span>
          <motion.h2 variants={fadeUp} className="mt-4 text-3xl font-bold text-balance text-white md:text-4xl lg:text-5xl">
            Built for <span className="gradient-text">software delivery and client trust</span>
          </motion.h2>
          <motion.p variants={fadeUp} className="mx-auto mt-6 max-w-2xl text-lg text-white/84 text-pretty">
            Flexible services for startups, founders, agencies, and clients who need clean execution and modern product thinking.
          </motion.p>
        </motion.div>

        <motion.div variants={staggerFast} initial="hidden" animate={isInView ? "show" : "hidden"} className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {services.map((service) => (
            <motion.div key={service.title} variants={scaleUp} whileHover={{ y: -12, scale: 1.02 }} className="group">
              <div className="glass motion-border overflow-hidden rounded-3xl border border-white/10 transition-all duration-300 hover:border-primary/40 hover:bg-[#0c2550]">
                <div className="image-hover-zoom relative h-52 overflow-hidden">
                  <Image src={service.image} alt={service.title} fill className="object-cover" />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#07162b] via-[#07162b]/30 to-transparent" />
                  <div className="absolute left-5 top-5 rounded-full border border-white/10 bg-[#07162b]/85 px-4 py-2 text-sm font-medium text-white backdrop-blur-sm">
                    {service.title}
                  </div>
                </div>
                <div className="p-7">
                  <p className="mb-6 leading-relaxed text-white/82">{service.description}</p>
                  <div className="mb-6 flex flex-wrap gap-2">
                    {service.features.map((feature) => (
                      <motion.span key={feature} variants={fadeUp} className="rounded-full border border-white/10 bg-white/[0.06] px-3 py-1 text-xs font-medium text-white/92">
                        {feature}
                      </motion.span>
                    ))}
                  </div>
                  <motion.div {...buttonTap} className="inline-flex">
                    <Link href={service.href} className="inline-flex items-center gap-2 font-semibold text-[#ffb067]">
                      Learn More
                      <motion.span variants={iconBounce} initial="rest" whileHover="hover">
                        <ArrowRight size={16} className="transition-transform duration-300 group-hover:translate-x-1.5" />
                      </motion.span>
                    </Link>
                  </motion.div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </motion.section>
  )
}
