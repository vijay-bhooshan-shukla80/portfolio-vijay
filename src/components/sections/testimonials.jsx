"use client"

import { motion, useInView } from "framer-motion"
import { ArrowRight, Quote, Star } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import { useMemo, useRef } from "react"
import { testimonials } from "@/data/site-content"
import { buttonTap, fadeUp, iconBounce, scaleUp, sectionReveal, staggerContainer, viewportOnce } from "@/lib/motion"

function TestimonialCard({ item, index }) {
  const palette = [
    "from-[#0b2446]/96 via-[#0a1d3a]/98 to-[#07162b]/98",
    "from-[#111f45]/96 via-[#0b203f]/98 to-[#07162b]/98",
    "from-[#0d2a4c]/96 via-[#111d3d]/98 to-[#07162b]/98",
  ][index % 3]

  return (
    <article
      className={`testimonial-square-card motion-border group relative flex aspect-square w-[min(76vw,14.25rem)] shrink-0 flex-col items-center justify-between overflow-hidden rounded-[1.35rem] border border-white/10 bg-gradient-to-br ${palette} p-4 text-center shadow-[0_18px_48px_rgba(2,8,24,0.34)] sm:w-[16.25rem] sm:p-5`}
    >
      <div className="absolute inset-x-7 top-0 h-px bg-gradient-to-r from-transparent via-primary/50 to-transparent" />
      <div className="absolute -right-12 -top-12 h-28 w-28 rounded-full bg-accent/16 blur-3xl" />
      <div className="absolute -bottom-12 left-1/2 h-24 w-36 -translate-x-1/2 rounded-full bg-primary/14 blur-3xl" />

      <motion.div variants={iconBounce} initial="rest" whileHover="hover" className="icon-highlight relative z-10 flex h-11 w-11 items-center justify-center rounded-full text-[#ffd66f]">
        <Quote className="h-5 w-5 fill-current stroke-current" />
      </motion.div>

      <p className="testimonial-quote relative z-10 mt-3 text-[0.82rem] font-medium leading-6 text-white/88">
        &ldquo;{item.quote}&rdquo;
      </p>

      <div className="relative z-10 mt-3 flex items-center justify-center gap-1 text-[#ffd66f]">
        {Array.from({ length: 5 }).map((_, starIndex) => (
          <Star key={starIndex} className="h-3 w-3 fill-[#ffd66f] stroke-[#ffd66f]" />
        ))}
        <span className="ml-1 text-[0.72rem] font-semibold text-white/82">{item.rating.toFixed(1)}</span>
      </div>

      <div className="relative z-10 mt-3 flex flex-col items-center">
        <div className="relative h-12 w-12 overflow-hidden rounded-full border-[3px] border-white/12 bg-white/[0.06] shadow-[0_10px_24px_rgba(2,8,24,0.28)]">
          <Image src={item.image} alt={item.name} fill className="object-cover transition-transform duration-700 group-hover:scale-110" />
        </div>
        <h3 className="mt-2 max-w-[12rem] truncate text-sm font-bold text-white">{item.name}</h3>
        <p className="max-w-[12rem] truncate text-[0.72rem] text-white/62">{item.role}</p>
      </div>
    </article>
  )
}

export function TestimonialsSection({ compact = false }) {
  const ref = useRef(null)
  const isInView = useInView(ref, viewportOnce)
  const items = useMemo(() => testimonials.slice(0, 6), [])
  const marqueeItems = useMemo(() => [...items, ...items], [items])

  return (
    <motion.section id="testimonials" className="relative overflow-hidden py-20 sm:py-24" {...sectionReveal}>
      <div className="absolute inset-0">
        <div className="absolute left-0 top-0 h-56 w-56 rounded-full bg-accent/14 blur-3xl animate-float-delay sm:h-72 sm:w-72" />
        <div className="absolute bottom-0 right-0 h-64 w-64 rounded-full bg-primary/12 blur-3xl animate-float-slow sm:h-80 sm:w-80" />
      </div>

      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6" ref={ref}>
        <motion.div variants={staggerContainer} initial="hidden" animate={isInView ? "show" : "hidden"} className="mx-auto mb-10 text-center lg:w-8/12">
          <motion.span variants={fadeUp} className="text-[0.68rem] font-semibold uppercase tracking-[0.32em] text-white/76">
            Testimonials
          </motion.span>
          <motion.h2 variants={fadeUp} className="mt-3 text-3xl font-bold leading-tight text-balance text-white sm:text-4xl lg:text-5xl">
            What people say about <span className="gradient-text">the work.</span>
          </motion.h2>
          <motion.p variants={fadeUp} className="mx-auto mt-4 max-w-2xl text-sm leading-6 text-white/72 sm:text-base">
            Compact, premium feedback cards for automation, MERN delivery, AI resume tools, and responsive software work.
          </motion.p>
        </motion.div>

        <motion.div variants={scaleUp} initial="hidden" animate={isInView ? "show" : "hidden"} className="mx-auto lg:w-8/12">
          <div className="testimonial-marquee-shell">
            <div className="testimonial-marquee-track">
              {marqueeItems.map((item, index) => (
                <TestimonialCard key={`${item.name}-${index}`} item={item} index={index} />
              ))}
            </div>
          </div>

          <motion.div variants={fadeUp} initial="hidden" animate={isInView ? "show" : "hidden"} className="mt-8 text-center">
            <p className="text-sm font-semibold text-white">No two projects are alike.</p>
            <p className="mx-auto mt-2 max-w-lg text-sm leading-6 text-white/66">
              Each build is shaped around product goals, workflow speed, automation needs, and clean user experience.
            </p>
            {compact ? (
              <motion.div {...buttonTap} className="mt-6 inline-flex">
                <Link href="/testimonials" className="inline-flex items-center justify-center gap-2 rounded-full bg-primary px-6 py-3 text-sm font-semibold text-white shadow-[0_14px_34px_rgba(255,140,75,0.28)]">
                  View All Testimonials <ArrowRight size={16} />
                </Link>
              </motion.div>
            ) : null}
          </motion.div>
        </motion.div>
      </div>
    </motion.section>
  )
}
