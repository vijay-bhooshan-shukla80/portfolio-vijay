"use client"

import { motion } from "framer-motion"
import { ExternalLink, Calendar, Download, Phone } from "lucide-react"
import { contactMethods } from "@/data/site-content"
import { buttonTap, fadeUp, scaleUp, staggerContainer } from "@/lib/motion"

export function CTASection() {
  return (
    <section id="cta" className="relative py-24 bg-[#0A0A0C] text-white">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.15 }}
          className="p-8 sm:p-12 rounded-3xl bg-[#141417] border border-white/10 text-center"
        >
          <motion.div variants={fadeUp} className="framer-badge bg-white/10 text-white border-white/20 mx-auto">
            <span>✽ NEED WEB DEVELOPMENT OR AUTOMATION?</span>
          </motion.div>

          <motion.h2 variants={fadeUp} className="mt-6 font-heading text-2xl sm:text-4xl font-extrabold uppercase tracking-tight text-white">
            WORK WITH A <span className="text-[#D84B20]">MERN & AUTOMATION</span> ENGINEER
          </motion.h2>

          <motion.p variants={fadeUp} className="mx-auto mt-4 max-w-2xl text-base sm:text-lg text-zinc-400 font-medium">
            Reach out for business websites, MERN development, API integration, and practical browser automation solutions.
          </motion.p>

          <motion.div variants={staggerContainer} className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {contactMethods.map((method, index) => {
              const isExternal = method.href.startsWith("http")
              const isDownload = method.href.endsWith(".pdf")
              return (
                <motion.a
                  key={method.title}
                  variants={scaleUp}
                  {...buttonTap}
                  href={method.href}
                  download={isDownload ? true : undefined}
                  target={isExternal ? "_blank" : undefined}
                  rel={isExternal ? "noopener noreferrer" : undefined}
                  className="rounded-2xl border border-white/10 bg-[#1E1E24] p-6 text-left hover:border-[#D84B20] transition-colors group"
                >
                  <div className="h-10 w-10 rounded-xl bg-[#D84B20]/20 text-[#D84B20] flex items-center justify-center mb-4 group-hover:bg-[#D84B20] group-hover:text-white transition-colors">
                    {index === 0 ? <ExternalLink size={18} /> : index === 1 ? <Calendar size={18} /> : index === 2 ? <Download size={18} /> : <Phone size={18} />}
                  </div>
                  <h3 className="font-heading text-base font-bold text-white mb-1 uppercase">{method.title}</h3>
                  <p className="text-xs text-zinc-400 font-medium leading-relaxed">{method.description}</p>
                </motion.a>
              )
            })}
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
