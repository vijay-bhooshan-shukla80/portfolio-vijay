"use client"

import { useEffect, useRef } from "react"
import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import { Compass, FileCode, Layers, TestTube, Rocket, RefreshCw } from "lucide-react"

gsap.registerPlugin(ScrollTrigger)

const processSteps = [
  { step: "01", icon: Compass, title: "DISCOVER", desc: "Requirements analysis & scope definition" },
  { step: "02", icon: FileCode, title: "PLAN", desc: "Architecture design & stack selection" },
  { step: "03", icon: Layers, title: "BUILD", desc: "Iterative MERN & automation development" },
  { step: "04", icon: TestTube, title: "TEST", desc: "Validation, edge cases & exception handling" },
  { step: "05", icon: Rocket, title: "DEPLOY", desc: "Production deployment & server setup" },
  { step: "06", icon: RefreshCw, title: "IMPROVE", desc: "Performance monitoring & optimization" },
]

export function ProcessSection() {
  const sectionRef = useRef(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      const steps = gsap.utils.toArray(".process-card-item")
      gsap.fromTo(
        steps,
        { opacity: 0, y: 40, scale: 0.94 },
        {
          opacity: 1,
          y: 0,
          scale: 1,
          duration: 0.75,
          stagger: 0.12,
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
    <section ref={sectionRef} id="process" className="relative py-28 bg-[#0A0A0C] text-white">
      <div className="mx-auto max-w-7xl px-6 lg:px-10 space-y-16">
        {/* Header */}
        <div className="space-y-4">
          <div className="framer-badge bg-white/10 text-white border-white/20">
            <span>✽ WORKFLOW METHODOLOGY</span>
          </div>

          <h2 className="font-heading text-4xl sm:text-6xl font-extrabold uppercase tracking-tight">
            MY DEVELOPMENT <span className="text-[#D84B20]">PROCESS</span>
          </h2>

          <p className="text-zinc-400 text-base sm:text-lg max-w-2xl font-medium">
            Structured 6-phase engineering workflow delivering predictable, high-quality software outcomes.
          </p>
        </div>

        {/* Steps Grid */}
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {processSteps.map((s) => {
            const Icon = s.icon
            return (
              <div
                key={s.step}
                className="process-card-item p-6 rounded-2xl bg-[#141417] border border-white/10 hover:border-[#D84B20] transition-colors group flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-6">
                    <span className="font-heading text-xs font-bold text-[#D84B20] tracking-wider">
                      PHASE {s.step}
                    </span>
                    <div className="h-10 w-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-zinc-300 group-hover:bg-[#D84B20] group-hover:text-white transition-all">
                      <Icon size={18} />
                    </div>
                  </div>

                  <h3 className="font-heading text-lg font-bold text-white mb-2 uppercase group-hover:text-[#D84B20] transition-colors">
                    {s.title}
                  </h3>
                  <p className="text-xs text-zinc-400 font-medium leading-relaxed">{s.desc}</p>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
