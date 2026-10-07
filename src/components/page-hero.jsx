"use client"

import { Link } from "react-router-dom"
import { ArrowRight } from "lucide-react"
import { motion } from "framer-motion"
import { buttonTap, fadeUp, scaleUp, staggerContainer } from "@/lib/motion"

function ActionLink({ href, label, primary }) {
  const isExternal = href.startsWith("http") || href.startsWith("mailto:")
  const isDownload = href.endsWith(".pdf")
  const className = primary
    ? "responsive-button inline-flex w-full items-center justify-center gap-2 rounded-xl bg-[#D84B20] px-6 py-3.5 font-bold text-white shadow-xl hover:bg-[#C43F16] transition-colors sm:w-auto sm:px-7 uppercase tracking-wider text-sm"
    : "responsive-button inline-flex w-full items-center justify-center rounded-xl border border-white/20 bg-white/10 px-6 py-3.5 font-bold text-white transition-colors hover:bg-white/20 sm:w-auto sm:px-7 uppercase tracking-wider text-sm"

  if (isExternal || isDownload) {
    return (
      <motion.a
        {...buttonTap}
        variants={scaleUp}
        href={href}
        download={isDownload ? true : undefined}
        target={isExternal ? "_blank" : undefined}
        rel={isExternal ? "noopener noreferrer" : undefined}
        className={className}
      >
        {label}
        {primary ? <ArrowRight size={18} /> : null}
      </motion.a>
    )
  }

  return (
    <motion.div variants={scaleUp} {...buttonTap}>
      <Link to={href} className={className}>
        {label}
        {primary ? <ArrowRight size={18} /> : null}
      </Link>
    </motion.div>
  )
}

export function PageHero({ eyebrow, title, highlight, description, primaryHref, primaryLabel, secondaryHref, secondaryLabel }) {
  return (
    <section className="relative overflow-hidden pt-32 pb-16 bg-[#0A0A0C] text-white">
      <div className="relative z-10 mx-auto max-w-6xl px-4 sm:px-6">
        <motion.div variants={staggerContainer} initial="hidden" animate="show" className="p-8 sm:p-12 rounded-3xl bg-[#141417] border border-white/10">
          <motion.span variants={fadeUp} className="framer-badge bg-white/10 text-white border-white/20">
            <span>✽ {eyebrow}</span>
          </motion.span>
          <motion.h1 variants={fadeUp} className="mt-6 font-heading max-w-4xl text-2xl sm:text-4xl lg:text-5xl font-extrabold text-white leading-tight uppercase tracking-tight">
            {title} <span className="text-[#D84B20]">{highlight}</span>
          </motion.h1>
          <motion.p variants={fadeUp} className="mt-4 max-w-3xl text-base sm:text-lg text-zinc-400 font-medium leading-relaxed">
            {description}
          </motion.p>
          {(primaryHref || secondaryHref) && (
            <motion.div variants={staggerContainer} className="mt-8 flex flex-col gap-3 sm:flex-row sm:gap-4">
              {primaryHref && primaryLabel ? <ActionLink href={primaryHref} label={primaryLabel} primary /> : null}
              {secondaryHref && secondaryLabel ? <ActionLink href={secondaryHref} label={secondaryLabel} /> : null}
            </motion.div>
          )}
        </motion.div>
      </div>
    </section>
  )
}
