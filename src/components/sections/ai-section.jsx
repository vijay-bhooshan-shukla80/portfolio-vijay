"use client"

import { useEffect, useRef } from "react"
import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import { Sparkles, Bot, Zap } from "lucide-react"

gsap.registerPlugin(ScrollTrigger)

export function AISection() {
  const sectionRef = useRef(null)
  const cardRef = useRef(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        cardRef.current,
        { opacity: 0, scale: 0.94, y: 50 },
        {
          opacity: 1,
          scale: 1,
          y: 0,
          duration: 0.9,
          ease: "power3.out",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 80%",
            once: true,
          },
        }
      )
    }, sectionRef)

    return () => ctx.revert()
  }, [])

  return (
    <section ref={sectionRef} id="ai" className="relative py-28 bg-[#0A0A0C] text-white">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <div
          ref={cardRef}
          className="relative p-8 sm:p-14 rounded-3xl bg-[#141417] border border-white/10 overflow-hidden shadow-2xl"
        >
          {/* Subtle Ambient Background Gradient Glow */}
          <div className="pointer-events-none absolute -right-20 -top-20 h-80 w-80 rounded-full bg-[#D84B20]/15 blur-3xl" />

          <div className="relative z-10 grid gap-8 lg:grid-cols-12 items-center">
            <div className="lg:col-span-8 space-y-6">
              <div className="framer-badge bg-white/10 text-white border-white/20">
                <span>✽ AI & GENERATIVE CAPABILITIES</span>
              </div>

              <h2 className="font-heading text-3xl sm:text-5xl font-extrabold uppercase tracking-tight">
                AI-ENABLED WEB TOOLS & <span className="text-[#D84B20]">INTELLIGENT APIS</span>
              </h2>

              <p className="text-zinc-300 text-base sm:text-lg leading-relaxed font-medium">
                Engineered production tools like <strong className="text-white">Rover Resume</strong> (AI ATS Resume Builder) combining React user experiences with OpenAI & Google Gemini APIs for intelligent document optimization and analysis.
              </p>

              <div className="flex flex-wrap gap-3 pt-2">
                <div className="flex items-center gap-2 px-3 py-1.5 rounded-lg bg-white/5 border border-white/10 text-xs font-bold text-zinc-300">
                  <Sparkles size={14} className="text-[#D84B20]" />
                  <span>ATS Score Analyzer</span>
                </div>
                <div className="flex items-center gap-2 px-3 py-1.5 rounded-lg bg-white/5 border border-white/10 text-xs font-bold text-zinc-300">
                  <Bot size={14} className="text-[#D84B20]" />
                  <span>Automated Content Tailoring</span>
                </div>
                <div className="flex items-center gap-2 px-3 py-1.5 rounded-lg bg-white/5 border border-white/10 text-xs font-bold text-zinc-300">
                  <Zap size={14} className="text-[#D84B20]" />
                  <span>Fast API Response Processing</span>
                </div>
              </div>
            </div>

            <div className="lg:col-span-4 flex justify-center">
              <div className="p-6 rounded-2xl bg-black/60 border border-white/20 text-center space-y-3 w-full max-w-xs shadow-xl">
                <div className="h-12 w-12 rounded-xl bg-[#D84B20] text-white flex items-center justify-center mx-auto shadow-md">
                  <Sparkles size={24} />
                </div>
                <span className="font-heading text-xl font-bold block text-white">Rover Resume AI</span>
                <span className="text-xs text-zinc-400 font-semibold block">Production Web Application</span>
                <a
                  href="https://rover-resume.vercel.app/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block mt-2 px-4 py-2 rounded-xl bg-white text-black font-bold text-xs uppercase tracking-wider hover:bg-[#D84B20] hover:text-white transition-all"
                >
                  Launch App ↗
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
