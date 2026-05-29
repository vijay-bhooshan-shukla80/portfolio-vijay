"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import Link from "next/link"
import { ArrowRight, Bot, Code2, Palette } from "lucide-react"
import { buttonTap, fadeDown, fadeUp, iconBounce, scaleUp, slideRight, staggerContainer, staggerFast } from "@/lib/motion"

function ActionLink({ href, label, primary }) {
  const isExternal = href.startsWith("http") || href.startsWith("mailto:")
  const className = primary
    ? "responsive-button inline-flex w-full items-center justify-center gap-2 rounded-full bg-primary px-6 py-3.5 font-semibold text-white shadow-[0_12px_32px_rgba(255,140,75,0.28)] transition-transform hover:scale-[1.02] sm:w-auto sm:px-7"
    : "responsive-button inline-flex w-full items-center justify-center rounded-full border border-white/14 bg-white/[0.08] px-6 py-3.5 font-semibold text-white transition-colors hover:bg-white/[0.1] sm:w-auto sm:px-7"

  if (isExternal) {
    return (
      <motion.a {...buttonTap} variants={scaleUp} href={href} target={href.startsWith("http") ? "_blank" : undefined} rel={href.startsWith("http") ? "noopener noreferrer" : undefined} className={className}>
        {label}
        {primary ? <ArrowRight size={18} /> : null}
      </motion.a>
    )
  }

  return (
    <motion.div variants={scaleUp} {...buttonTap}>
      <Link href={href} className={className}>
        {label}
        {primary ? <ArrowRight size={18} /> : null}
      </Link>
    </motion.div>
  )
}

const servicePills = [
  { icon: Code2, label: "Web Development", className: "right-0 top-[18%] sm:right-[2%]" },
  { icon: Palette, label: "UI/UX Systems", className: "-left-2 top-[48%] sm:left-[4%]" },
  { icon: Bot, label: "AI Automation", className: "right-[4%] bottom-[16%]" },
]

export function ServicesHero({
  eyebrow,
  title,
  highlight,
  description,
  primaryHref,
  primaryLabel,
  secondaryHref,
  secondaryLabel,
}) {
  return (
    <section className="relative overflow-hidden pt-28 pb-16 sm:pt-32 sm:pb-20">
      <motion.div variants={fadeDown} initial="hidden" animate="show" className="absolute inset-0 animated-gradient opacity-90" />
      <motion.div initial={{ opacity: 0, y: -28 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.1 }} className="absolute -top-10 right-12 h-64 w-64 rounded-full bg-primary/20 blur-3xl animate-float-delay" />
      <motion.div initial={{ opacity: 0, y: 28 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.18 }} className="absolute bottom-0 left-12 h-72 w-72 rounded-full bg-accent/20 blur-3xl animate-float-slow" />

      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6">
        <motion.div variants={staggerContainer} initial="hidden" animate="show" className="glass motion-border relative overflow-hidden rounded-[1.35rem] border border-white/10 px-4 py-7 sm:rounded-[2.2rem] sm:px-8 sm:py-12 md:px-10 lg:px-12 lg:py-14">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(255,95,178,0.14),transparent_28%),radial-gradient(circle_at_bottom_right,rgba(198,140,255,0.16),transparent_28%)]" />

          <div className="relative grid items-center gap-12 lg:grid-cols-[0.94fr_1.06fr] lg:gap-14">
            <motion.div variants={staggerContainer}>
              <motion.span variants={fadeUp} className="inline-flex max-w-full rounded-full border border-primary/45 bg-white/[0.08] px-3.5 py-2 text-xs font-semibold text-white shadow-[0_8px_20px_rgba(2,8,24,0.18)] sm:px-4 sm:text-sm">
                {eyebrow}
              </motion.span>
              <motion.h1 variants={fadeUp} className="mt-5 max-w-3xl text-[clamp(2rem,9vw,3.65rem)] font-bold leading-tight text-balance text-white sm:mt-6">
                {title} <span className="gradient-text">{highlight}</span>
              </motion.h1>
              <motion.p variants={fadeUp} className="mt-4 max-w-2xl text-base leading-relaxed text-white/88 text-pretty sm:mt-6 sm:text-lg">
                {description}
              </motion.p>

              {(primaryHref || secondaryHref) && (
                <motion.div variants={staggerFast} className="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap sm:gap-4">
                  {primaryHref && primaryLabel ? <ActionLink href={primaryHref} label={primaryLabel} primary /> : null}
                  {secondaryHref && secondaryLabel ? <ActionLink href={secondaryHref} label={secondaryLabel} /> : null}
                </motion.div>
              )}
            </motion.div>

            <motion.div
              variants={slideRight}
              className="relative mx-auto w-full max-w-[22rem] sm:max-w-[34rem]"
            >
              <div className="relative min-h-[18rem] sm:min-h-[25rem] lg:min-h-[31rem]">
                <div className="absolute inset-x-[12%] top-[8%] h-[68%] rounded-full bg-[radial-gradient(circle,rgba(120,176,255,0.26)_0%,rgba(131,113,255,0.18)_34%,rgba(255,120,196,0.16)_60%,rgba(8,23,46,0)_78%)] blur-3xl" />
                <div className="absolute inset-x-[18%] bottom-[5%] h-16 rounded-full bg-[radial-gradient(circle,rgba(255,196,107,0.22)_0%,rgba(8,23,46,0)_72%)] blur-2xl" />

                <div className="absolute left-1/2 top-1/2 w-[74%] -translate-x-1/2 -translate-y-1/2 overflow-hidden rounded-[2rem] border border-white/12 bg-[linear-gradient(180deg,rgba(255,255,255,0.09)_0%,rgba(255,255,255,0.03)_100%)] px-4 pt-6 shadow-[0_30px_80px_rgba(2,8,24,0.42)] backdrop-blur-sm sm:w-[68%] sm:px-5 sm:pt-8">
                  <Image
                    src="/placeholder-user.jpg"
                    alt="Services hero visual"
                    width={520}
                    height={640}
                    className="mx-auto h-[17rem] w-auto object-contain sm:h-[21rem] lg:h-[25rem]"
                    priority
                  />
                </div>

                {servicePills.map((pill, index) => (
                  <motion.div
                    key={pill.label}
                    initial={{ opacity: 0, y: 16 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.45, delay: 0.28 + index * 0.1 }}
                    whileHover={{ y: -6, scale: 1.03 }}
                    className={`absolute z-10 hidden items-center gap-2 rounded-full border border-white/12 bg-[#0b2347]/88 px-2.5 py-2 text-xs font-medium text-white shadow-[0_16px_38px_rgba(2,8,24,0.28)] backdrop-blur-md min-[430px]:flex sm:gap-3 sm:px-3 sm:py-2.5 sm:text-sm ${pill.className}`}
                  >
                    <motion.span variants={iconBounce} initial="rest" whileHover="hover" className="icon-highlight flex h-8 w-8 items-center justify-center rounded-full">
                      <pill.icon className="h-4 w-4" />
                    </motion.span>
                    <span className="whitespace-nowrap">{pill.label}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}


