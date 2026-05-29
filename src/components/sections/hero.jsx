"use client"

import { motion, useScroll, useSpring, useTransform } from "framer-motion"
import { ArrowRight, Bot, Code2, Globe, Play } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import { heroStats, profile } from "@/data/site-content"
import { buttonTap, fadeIn, iconBounce, scaleUp, slideLeft, slideRight, staggerContainer, staggerFast } from "@/lib/motion"

const focusAreas = ["React.js", "Node.js", "MongoDB", "Automation", "Responsive Websites"]

const heroVisualPills = [
  { icon: Code2, label: "Full Stack Projects", className: "right-[1%] top-[13%] sm:right-[8%]", animation: "animate-float-soft" },
  { icon: Globe, label: "Live Client Websites", className: "left-0 top-[58%] sm:left-[2%]", animation: "animate-float-delay" },
  { icon: Bot, label: "Automation Workflows", className: "right-[2%] bottom-[8%] sm:right-[10%]", animation: "animate-float-slow" },
]

export function HeroSection() {
  const { scrollY } = useScroll()
  const yParallax = useSpring(useTransform(scrollY, [0, 500], [0, 70]), { stiffness: 120, damping: 30 })
  const floatingY = useSpring(useTransform(scrollY, [0, 500], [0, -40]), { stiffness: 120, damping: 24 })

  return (
    <section id="home" className="relative overflow-hidden pt-24 pb-16 sm:pt-28 sm:pb-20 md:pt-32">
      <motion.div variants={fadeIn} initial="hidden" animate="show" className="absolute inset-0 animated-gradient" />
      <motion.div variants={fadeIn} initial="hidden" animate="show" transition={{ delay: 0.15 }} className="absolute inset-0 opacity-60 [background-image:radial-gradient(circle_at_1px_1px,rgba(255,255,255,0.08)_1px,transparent_0)] [background-size:28px_28px]" />
      <motion.div style={{ y: floatingY }} className="absolute -left-20 top-20 h-80 w-80 rounded-full bg-accent/18 blur-3xl animate-float-slow" />
      <motion.div style={{ y: yParallax }} className="absolute right-0 top-0 h-[24rem] w-[24rem] rounded-full bg-primary/12 blur-3xl animate-float-delay" />
      <div className="hero-particles absolute inset-0 opacity-70" />

      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6">
        <motion.div
          initial={{ opacity: 0, y: 36 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="motion-border relative overflow-hidden rounded-[1.5rem] border border-white/10 bg-[linear-gradient(135deg,rgba(8,23,46,0.98)_0%,rgba(10,29,58,0.97)_45%,rgba(9,24,48,0.98)_100%)] px-4 py-6 shadow-[0_30px_80px_rgba(2,8,24,0.42)] sm:rounded-[2.2rem] sm:px-6 sm:py-8 md:px-10 md:py-10 lg:px-12 lg:py-12"
        >
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(255,95,178,0.14),transparent_30%),radial-gradient(circle_at_bottom_right,rgba(195,133,255,0.18),transparent_32%)]" />
          <div className="absolute inset-x-12 bottom-6 h-24 rounded-full bg-[radial-gradient(circle,rgba(255,255,255,0.18)_0%,rgba(8,23,46,0)_70%)] blur-2xl" />

          <div className="relative grid gap-7 lg:grid-cols-[0.62fr_0.38fr] lg:items-center lg:justify-between lg:gap-10">
            <motion.div variants={staggerContainer} initial="hidden" animate="show" className="order-2 text-center lg:order-1 lg:text-left">
              <motion.div variants={fadeIn} className="inline-flex max-w-full items-center rounded-full border border-primary/35 bg-white/[0.06] px-3.5 py-2 text-center text-xs font-semibold text-white shadow-sm backdrop-blur-sm sm:px-4 sm:text-sm">
                {profile.title}
              </motion.div>

              <motion.h1
                initial={{ opacity: 0, y: -40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.12 }}
                className="mx-auto mt-5 max-w-xl text-[clamp(2.2rem,10vw,3.25rem)] font-bold leading-[1.05] text-balance text-white sm:mt-6 sm:text-5xl lg:mx-0 lg:text-[3.7rem]"
              >
                <span className="gradient-text">Build automation</span> systems and scalable MERN applications.
              </motion.h1>

              <motion.div variants={fadeIn} className="mt-5 inline-flex min-h-12 w-full max-w-[18rem] items-center justify-center rounded-full border border-white/12 bg-white/[0.05] px-4 py-2 text-center text-sm font-semibold text-white/92 shadow-[0_12px_30px_rgba(2,8,24,0.24)] sm:w-auto sm:max-w-full sm:text-base">
                Build automation
              </motion.div>

              <motion.div variants={staggerFast} className="mt-8 flex flex-col gap-4 sm:flex-row sm:flex-wrap sm:justify-center lg:justify-start">
                <motion.a variants={scaleUp} {...buttonTap} whileHover={{ y: -3, scale: 1.05 }} href={profile.resumeUrl} download className="responsive-button hero-cta-glow inline-flex w-full items-center justify-center gap-2 rounded-xl bg-primary px-6 py-3.5 font-semibold text-white shadow-[0_12px_32px_rgba(255,140,75,0.28)] sm:w-auto sm:px-7">
                  Download Resume <ArrowRight size={17} />
                </motion.a>
                <motion.div variants={scaleUp} {...buttonTap}>
                  <Link href="/projects" className="responsive-button hero-cta-glow inline-flex w-full items-center justify-center gap-2 rounded-xl border border-white/12 bg-white/[0.06] px-4 py-3.5 font-semibold text-white transition-colors hover:bg-white/[0.1] sm:w-auto">
                    <motion.span variants={iconBounce} initial="rest" whileHover="hover" className="flex h-6 w-6 items-center justify-center rounded-full bg-white/14 text-white">
                      <Play size={10} fill="currentColor" />
                    </motion.span>
                    View Projects
                  </Link>
                </motion.div>
              </motion.div>

              <motion.div variants={staggerFast} className="mt-8 grid gap-4 sm:mt-10 md:grid-cols-3">
                {heroStats.map((stat) => (
                  <motion.div key={stat.label} variants={scaleUp} whileHover={{ y: -6 }} className="soft-panel motion-border rounded-3xl border border-white/10 px-5 py-5 text-center shadow-[0_20px_40px_rgba(2,8,24,0.32)] lg:text-left">
                    <div className="text-3xl font-bold gradient-text">{stat.number}</div>
                    <div className="mt-1 text-sm font-medium text-white/88">{stat.label}</div>
                  </motion.div>
                ))}
              </motion.div>

              <motion.div variants={staggerFast} className="mt-8 flex flex-wrap justify-center gap-2.5 sm:mt-10 sm:gap-3 lg:justify-start">
                {focusAreas.map((item) => (
                  <motion.span key={item} variants={scaleUp} whileHover={{ y: -4 }} className="rounded-full border border-white/12 bg-white/[0.06] px-3.5 py-2 text-sm font-medium text-white shadow-sm backdrop-blur-sm ring-1 ring-white/5 sm:px-4">
                    {item}
                  </motion.span>
                ))}
              </motion.div>
            </motion.div>

            <motion.div variants={slideRight} initial="hidden" animate="show" style={{ y: floatingY }} className="relative order-1 mx-auto w-full max-w-[18rem] sm:max-w-[26rem] lg:order-2 lg:max-w-[24rem] lg:justify-self-center lg:-translate-x-2">
              <div className="relative min-h-[15rem] sm:min-h-[26rem] lg:min-h-[31rem]">
                <div className="absolute inset-x-[10%] top-[10%] h-[66%] rounded-full bg-[radial-gradient(circle,rgba(110,182,255,0.28)_0%,rgba(131,113,255,0.18)_34%,rgba(255,120,196,0.16)_62%,rgba(8,23,46,0)_80%)] blur-3xl animate-float-soft" />
                <div className="absolute inset-x-[20%] bottom-[8%] h-16 rounded-full bg-[radial-gradient(circle,rgba(255,196,107,0.22)_0%,rgba(8,23,46,0)_72%)] blur-2xl animate-float-delay" />
                <div className="absolute left-1/2 top-1/2 w-[72%] -translate-x-1/2 -translate-y-1/2 sm:w-[64%] lg:w-[60%]">
                  <div className="animate-float-slow">
                    <motion.div variants={scaleUp} whileHover={{ scale: 1.02 }} className="rounded-full bg-[linear-gradient(135deg,rgba(255,255,255,0.22),rgba(255,255,255,0.04))] p-[1px] shadow-[0_34px_80px_rgba(2,8,24,0.45)]">
                      <div className="relative aspect-square overflow-hidden rounded-full border border-white/10 bg-[linear-gradient(180deg,rgba(12,30,58,0.7)_0%,rgba(7,20,42,0.8)_100%)] backdrop-blur-md">
                        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(255,255,255,0.16),transparent_55%)]" />
                        <Image src={profile.heroImage} alt="Build automation illustration" width={520} height={520} className="relative h-full w-full object-cover" priority />
                        <div className="absolute inset-x-6 bottom-2 h-8 rounded-full bg-[radial-gradient(circle,rgba(255,255,255,0.2)_0%,rgba(8,23,46,0)_70%)] blur-2xl" />
                      </div>
                    </motion.div>
                  </div>
                </div>
                {heroVisualPills.map((pill) => (
                  <motion.div key={pill.label} variants={slideLeft} initial="hidden" animate="show" whileHover={{ y: -6, scale: 1.03 }} className={`absolute z-10 hidden items-center gap-2 rounded-full border border-white/12 bg-[#0b2347]/88 px-2.5 py-2 text-xs font-medium text-white shadow-[0_16px_38px_rgba(2,8,24,0.28)] backdrop-blur-md min-[430px]:flex sm:gap-3 sm:px-3 sm:py-2.5 sm:text-sm ${pill.className} ${pill.animation}`}>
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
