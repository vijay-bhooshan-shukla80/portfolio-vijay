"use client"

import { useEffect, useRef } from "react"
import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import { ArrowRight, Workflow } from "lucide-react"

gsap.registerPlugin(ScrollTrigger)

const workflowSteps = [
  { step: "01", name: "INPUT", desc: "Form Inputs / Webhooks / Schedule Triggers" },
  { step: "02", name: "AUTOMATION", desc: "Selenium Driver / n8n Workflow Dispatcher" },
  { step: "03", name: "PROCESSING", desc: "DOM Navigation / Form Fill / Bot Execution" },
  { step: "04", name: "VALIDATION", desc: "DOM Parsing & Exception Handling" },
  { step: "05", name: "OUTPUT", desc: "Extracted Data / Confirmed Submissions" },
]

export function AutomationSection() {
  const sectionRef = useRef(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      const nodes = gsap.utils.toArray(".automation-step-node")
      gsap.fromTo(
        nodes,
        { opacity: 0, scale: 0.88, y: 30 },
        {
          opacity: 1,
          scale: 1,
          y: 0,
          duration: 0.75,
          stagger: 0.15,
          ease: "back.out(1.4)",
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
    <section ref={sectionRef} id="automation" className="relative py-28 bg-[#FFFFFF] text-[#111111]">
      <div className="mx-auto max-w-7xl px-6 lg:px-10 space-y-12">
        {/* Header */}
        <div className="space-y-4">
          <div className="framer-badge-dark">
            <span>✽ AUTOMATION ENGINE</span>
          </div>

          <h2 className="font-heading text-4xl sm:text-6xl font-extrabold uppercase tracking-tight">
            AUTOMATION THAT <span className="text-[#D84B20]">SAVES TIME</span>
          </h2>

          <p className="text-zinc-600 text-base sm:text-lg max-w-2xl font-medium">
            Building headless browser automation scripts and autonomous workflow pipelines that eliminate hundreds of hours of manual labor.
          </p>
        </div>

        {/* Workflow Diagram */}
        <div className="p-8 rounded-3xl bg-[#FAFAF7] border border-zinc-200">
          <h3 className="font-heading text-xl font-bold text-black mb-8 flex items-center gap-2 uppercase">
            <Workflow className="text-[#D84B20]" size={20} />
            <span>Automated Execution Pipeline</span>
          </h3>

          <div className="grid gap-4 md:grid-cols-5 relative">
            {workflowSteps.map((item, index) => (
              <div
                key={item.step}
                className="automation-step-node relative p-5 rounded-2xl bg-white border border-zinc-200 flex flex-col justify-between hover:border-[#D84B20] transition-colors"
              >
                <div>
                  <span className="font-heading text-xs font-bold text-[#D84B20] tracking-wider block mb-2">
                    STEP {item.step}
                  </span>
                  <h4 className="font-heading text-sm font-bold text-black mb-1">
                    {item.name}
                  </h4>
                  <p className="text-xs text-zinc-500 font-medium leading-relaxed">{item.desc}</p>
                </div>

                {index < workflowSteps.length - 1 && (
                  <div className="hidden md:block absolute -right-3 top-1/2 -translate-y-1/2 z-10 text-zinc-400">
                    <ArrowRight size={16} />
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
