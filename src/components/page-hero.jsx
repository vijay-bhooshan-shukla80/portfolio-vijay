import Link from "next/link"
import { ArrowRight } from "lucide-react"
import { motion } from "framer-motion"
import { buttonTap, fadeDown, fadeUp, scaleUp, staggerContainer } from "@/lib/motion"

function ActionLink({ href, label, primary }) {
  const isExternal = href.startsWith("http") || href.startsWith("mailto:")
  const isDownload = href.endsWith(".pdf")
  const className = primary
    ? "responsive-button inline-flex w-full items-center justify-center gap-2 rounded-full bg-primary px-6 py-3.5 font-semibold text-white shadow-[0_12px_32px_rgba(255,140,75,0.28)] transition-transform hover:scale-[1.02] sm:w-auto sm:px-7"
    : "responsive-button inline-flex w-full items-center justify-center rounded-full border border-white/14 bg-white/[0.08] px-6 py-3.5 font-semibold text-white transition-colors hover:bg-white/[0.1] sm:w-auto sm:px-7"

  if (isExternal || isDownload) {
    return <motion.a {...buttonTap} variants={scaleUp} href={href} download={isDownload ? true : undefined} target={isExternal ? "_blank" : undefined} rel={isExternal ? "noopener noreferrer" : undefined} className={className}>{label}{primary ? <ArrowRight size={18} /> : null}</motion.a>
  }

  return <motion.div variants={scaleUp} {...buttonTap}><Link href={href} className={className}>{label}{primary ? <ArrowRight size={18} /> : null}</Link></motion.div>
}

export function PageHero({ eyebrow, title, highlight, description, primaryHref, primaryLabel, secondaryHref, secondaryLabel }) {
  return (
    <section className="relative overflow-hidden pt-28 pb-16 sm:pt-32 sm:pb-20">
      <motion.div variants={fadeDown} initial="hidden" animate="show" className="absolute inset-0 animated-gradient opacity-90" />
      <motion.div initial={{ opacity: 0, y: -30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.12 }} className="absolute -top-10 right-12 h-64 w-64 rounded-full bg-primary/20 blur-3xl animate-float-delay" />
      <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.2 }} className="absolute bottom-0 left-12 h-72 w-72 rounded-full bg-accent/20 blur-3xl animate-float-slow" />
      <div className="relative z-10 mx-auto max-w-6xl px-4 sm:px-6">
        <motion.div variants={staggerContainer} initial="hidden" animate="show" className="glass motion-border rounded-[1.35rem] border border-white/10 px-4 py-7 sm:rounded-[2rem] sm:px-8 sm:py-12 md:px-12 md:py-16">
          <motion.span variants={fadeUp} className="inline-flex max-w-full rounded-full border border-primary/45 bg-white/[0.08] px-3.5 py-2 text-xs font-semibold text-white shadow-[0_8px_20px_rgba(2,8,24,0.18)] sm:px-4 sm:text-sm">{eyebrow}</motion.span>
          <motion.h1 variants={fadeUp} className="mt-5 max-w-4xl text-[clamp(2rem,9vw,3.65rem)] font-bold leading-tight text-balance text-white sm:mt-6">{title} <span className="gradient-text">{highlight}</span></motion.h1>
          <motion.p variants={fadeUp} className="mt-4 max-w-3xl text-base leading-relaxed text-white/88 text-pretty sm:mt-6 sm:text-lg">{description}</motion.p>
          {(primaryHref || secondaryHref) && <motion.div variants={staggerContainer} className="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap sm:gap-4">{primaryHref && primaryLabel ? <ActionLink href={primaryHref} label={primaryLabel} primary /> : null}{secondaryHref && secondaryLabel ? <ActionLink href={secondaryHref} label={secondaryLabel} /> : null}</motion.div>}
        </motion.div>
      </div>
    </section>
  )
}
