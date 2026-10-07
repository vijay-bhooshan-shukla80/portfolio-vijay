"use client"

import { useEffect, useRef } from "react"
import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import { Zap } from "lucide-react"
import { testimonials } from "@/data/site-content"

gsap.registerPlugin(ScrollTrigger)

export function TestimonialsSection({ compact = false }) {
  const sectionRef = useRef(null)
  const workspaceImgRef = useRef(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      // 1. 3-Card Stagger Reveal
      const cards = gsap.utils.toArray(".testimonial-card-item")
      gsap.fromTo(
        cards,
        { opacity: 0, y: 50, scale: 0.94 },
        {
          opacity: 1,
          y: 0,
          scale: 1,
          duration: 0.8,
          stagger: 0.15,
          ease: "power3.out",
          scrollTrigger: {
            trigger: ".testimonial-grid-container",
            start: "top 80%",
            once: true,
          },
        }
      )

      // 2. Workspace Image Internal Parallax (Rule 21)
      if (workspaceImgRef.current) {
        gsap.fromTo(
          workspaceImgRef.current,
          { yPercent: -10, scale: 1.08 },
          {
            yPercent: 10,
            scale: 1,
            ease: "none",
            scrollTrigger: {
              trigger: ".workspace-card-container",
              start: "top bottom",
              end: "bottom top",
              scrub: true,
            },
          }
        )
      }
    }, sectionRef)

    return () => ctx.revert()
  }, [])

  return (
    <section ref={sectionRef} id="testimonials" className="relative py-28 bg-[#F6F1E5] text-[#1A1A1A]">
      <div className="mx-auto max-w-7xl px-6 lg:px-10 space-y-16">
        {/* Top 3-Column Layout (Matching Screenshot 5) */}
        <div className="testimonial-grid-container grid gap-6 md:grid-cols-3 items-stretch">
          {/* Column 1: Stat Block (Matching Screenshot 5: 98%) */}
          <div className="testimonial-card-item p-8 rounded-3xl bg-white border border-black/10 shadow-sm flex flex-col justify-between">
            <div>
              <span className="font-heading text-6xl font-black text-black tracking-tight block mb-4">
                98%
              </span>
              <p className="text-xs font-semibold text-zinc-600 uppercase tracking-wider leading-relaxed">
                Focused on delivering results that meet both user needs and business requirements.
              </p>
            </div>
          </div>

          {/* Column 2: Testimonial Card (Matching Screenshot 5: Quote & Author) */}
          <div className="testimonial-card-item p-8 rounded-3xl bg-[#EBE4D5] border border-black/10 shadow-sm flex flex-col justify-between">
            <p className="text-xs font-semibold text-zinc-800 italic leading-relaxed mb-6">
              "{testimonials[0]?.quote || "Vijay delivered an outstanding full-stack build and automation system that perfectly matched our vision. Attention to speed and user experience was exceptional."}"
            </p>

            <div className="flex items-center gap-3">
              <img
                src={testimonials[0]?.image || "/images/testimonial-sophia.svg"}
                alt="Client Avatar"
                className="h-10 w-10 rounded-full object-cover border border-black/10"
              />
              <div>
                <span className="text-xs font-bold text-black block">{testimonials[0]?.name || "Olivia Davis"}</span>
                <span className="text-[10px] font-semibold text-zinc-600 block">{testimonials[0]?.role || "Product Manager"}</span>
              </div>
            </div>
          </div>

          {/* Column 3: Fast & Reliable Icon Block (Matching Screenshot 5) */}
          <div className="testimonial-card-item p-8 rounded-3xl bg-white border border-black/10 shadow-sm flex flex-col justify-between">
            <div>
              <div className="text-[#D84B20] mb-4">
                <Zap size={28} />
              </div>
              <h4 className="font-heading text-sm font-bold text-black uppercase tracking-wider mb-2">
                FAST & RELIABLE
              </h4>
              <p className="text-xs text-zinc-600 font-semibold leading-relaxed">
                I maintain an efficient workflow that ensures smooth collaboration, clear communication, and timely delivery.
              </p>
            </div>
          </div>
        </div>

        {/* Bottom Large Developer Workspace Photo/Video Card with GSAP Parallax */}
        <div className="workspace-card-container relative aspect-[16/9] max-h-[500px] w-full rounded-3xl overflow-hidden shadow-2xl border border-black/15 bg-zinc-900">
          <img
            ref={workspaceImgRef}
            src="/images/laptop_developer.png"
            alt="Vijay Shukla Workspace"
            className="h-[120%] w-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />
          <div className="absolute bottom-6 left-6 right-6 flex items-center justify-between text-white">
            <div>
              <span className="framer-badge bg-black/70 border-white/20">
                <span>✽ WORKSPACE & DEVELOPMENT</span>
              </span>
              <h3 className="font-heading text-xl sm:text-2xl font-bold mt-2">
                Production-Ready Engineering Environment
              </h3>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
