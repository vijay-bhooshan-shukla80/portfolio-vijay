"use client"

import { useEffect, useRef } from "react"
import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import { ArrowUpRight, Plus } from "lucide-react"
import { Link } from "react-router-dom"
import { profile } from "@/data/site-content"

gsap.registerPlugin(ScrollTrigger)

export function HeroSection() {
  const containerRef = useRef(null)
  const watermarkRef = useRef(null)
  const imageContainerRef = useRef(null)
  const floatingCardRef = useRef(null)
  const headlineRef = useRef(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      // 1. GSAP Master Cinematic Entrance Timeline
      const tl = gsap.timeline({ defaults: { ease: "power4.out", duration: 1.1 } })

      // Animate badge & subtitle lines with mask reveal
      tl.fromTo(".hero-badge", { opacity: 0, y: 20 }, { opacity: 1, y: 0, duration: 0.7 })
        .fromTo(
          ".hero-mask-inner",
          { yPercent: 110, opacity: 0 },
          { yPercent: 0, opacity: 1, stagger: 0.1, duration: 1 },
          "-=0.4"
        )
        .fromTo(
          imageContainerRef.current,
          { opacity: 0, scale: 0.9, y: 40 },
          { opacity: 1, scale: 1, y: 0, duration: 1.1, ease: "power3.out" },
          "-=0.8"
        )
        .fromTo(
          floatingCardRef.current,
          { opacity: 0, scale: 0.8, x: 30 },
          { opacity: 1, scale: 1, x: 0, duration: 0.8, ease: "back.out(1.7)" },
          "-=0.6"
        )
        .fromTo(
          ".hero-title-line",
          { opacity: 0, yPercent: 100 },
          { opacity: 1, yPercent: 0, stagger: 0.12, duration: 0.9 },
          "-=0.7"
        )
        .fromTo(
          ".hero-cta-card",
          { opacity: 0, y: 30 },
          { opacity: 1, y: 0, duration: 0.8, ease: "power3.out" },
          "-=0.5"
        )

      // 2. GSAP ScrollTrigger Scrub for Watermark & Image Parallax
      gsap.to(watermarkRef.current, {
        xPercent: -20,
        ease: "none",
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top top",
          end: "bottom top",
          scrub: true,
        },
      })

      gsap.to(imageContainerRef.current, {
        y: 45,
        ease: "none",
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top top",
          end: "bottom top",
          scrub: true,
        },
      })

      // 3. 2.5D Mouse Tilt Parallax
      const handleMouseMove = (e) => {
        if (!containerRef.current || window.innerWidth < 768) return
        const { clientX, clientY } = e
        const { innerWidth, innerHeight } = window

        const xPos = (clientX / innerWidth - 0.5) * 20
        const yPos = (clientY / innerHeight - 0.5) * 20

        gsap.to(imageContainerRef.current, {
          rotationY: xPos * 0.4,
          rotationX: -yPos * 0.4,
          x: xPos * 0.6,
          duration: 0.8,
          ease: "power2.out",
        })
      }

      window.addEventListener("mousemove", handleMouseMove)

      return () => {
        window.removeEventListener("mousemove", handleMouseMove)
      }
    }, containerRef)

    return () => ctx.revert()
  }, [])

  return (
    <section
      ref={containerRef}
      id="home"
      className="relative min-h-screen bg-[#D84B20] text-white pt-28 pb-20 overflow-hidden grid-crosshair-bg"
    >
      {/* Grid Intersection Crosshairs (+) */}
      <div className="pointer-events-none absolute top-28 left-6 sm:left-12 text-white/30"><Plus size={20} /></div>
      <div className="pointer-events-none absolute top-28 right-6 sm:right-12 text-white/30"><Plus size={20} /></div>
      <div className="pointer-events-none absolute bottom-12 left-6 sm:left-12 text-white/30"><Plus size={20} /></div>
      <div className="pointer-events-none absolute bottom-12 right-6 sm:right-12 text-white/30"><Plus size={20} /></div>

      {/* Massive Background Display Watermark */}
      <div className="absolute inset-0 flex items-center justify-center overflow-hidden pointer-events-none select-none">
        <span
          ref={watermarkRef}
          className="watermark-display text-[24vw] tracking-tighter opacity-15"
        >
          VIJAY
        </span>
      </div>

      <div className="relative z-10 mx-auto max-w-7xl px-6 lg:px-10 h-full flex flex-col justify-between">
        <div className="grid gap-12 lg:grid-cols-12 items-center pt-8">
          {/* Left Column: Subtitle Copy with Mask Reveal */}
          <div className="lg:col-span-4 space-y-6">
            <div className="framer-badge hero-badge text-white">
              <span>✽ FULL STACK & AUTOMATION</span>
            </div>

            <div className="overflow-hidden">
              <p className="hero-mask-inner font-heading text-lg sm:text-xl font-extrabold leading-relaxed text-white tracking-wide text-balance uppercase">
                I BUILD PRODUCTION-READY WEB APPLICATIONS AND BROWSER AUTOMATION SYSTEMS THAT ARE SIMPLE, SMART AND IMPACTFUL.
              </p>
            </div>

            <div className="pt-2 text-xs font-bold text-white/80 uppercase tracking-widest">
              ©2026 VIJAY BHOOSHAN SHUKLA
            </div>
          </div>

          {/* Center Column: Real User Portrait Image Card with 2.5D Parallax */}
          <div className="lg:col-span-5 relative flex justify-center perspective-1000">
            <div
              ref={imageContainerRef}
              className="relative w-full max-w-sm sm:max-w-md aspect-[3/4] rounded-3xl overflow-hidden shadow-2xl border-2 border-white/30 bg-zinc-900 transform-gpu"
            >
              <img
                src={profile.heroImage}
                alt={profile.name}
                className="h-full w-full object-cover object-top hover:scale-105 transition-transform duration-700"
              />
            </div>

            {/* Floating Top-Right Project Card */}
            <div
              ref={floatingCardRef}
              className="absolute -right-2 top-8 hidden sm:block p-3.5 rounded-2xl bg-white text-black shadow-2xl border border-white/40 max-w-[170px]"
            >
              <div className="aspect-square rounded-xl overflow-hidden bg-orange-100 mb-2">
                <img src="/img/jobs.jpg" alt="Rover Resume" className="h-full w-full object-cover" />
              </div>
              <div className="flex items-center justify-between text-[10px] font-bold text-zinc-800 uppercase tracking-wider">
                <span>✽ ROVER RESUME</span>
                <span className="text-zinc-400">AI & ATS</span>
              </div>
            </div>
          </div>

          {/* Right Column: Large Display Heading & Floating CTA */}
          <div className="lg:col-span-3 space-y-8 flex flex-col justify-between h-full">
            <div ref={headlineRef} className="hidden lg:block overflow-hidden">
              <div className="overflow-hidden">
                <span className="hero-title-line font-heading text-5xl xl:text-6xl font-extrabold text-white leading-none block uppercase">
                  VIJAY
                </span>
              </div>
              <div className="overflow-hidden mt-1">
                <span className="hero-title-line font-heading text-5xl xl:text-6xl font-extrabold text-white/40 leading-none block uppercase">
                  SHUKLA
                </span>
              </div>
            </div>

            {/* Floating Bottom-Right "Let's Talk" Card */}
            <div className="hero-cta-card p-4 rounded-2xl bg-black text-white border border-white/20 shadow-2xl flex items-center justify-between gap-4">
              <div className="flex items-center gap-3">
                <div className="h-11 w-11 rounded-xl overflow-hidden border border-white/30 bg-zinc-800 shrink-0">
                  <img
                    src={profile.heroImage}
                    alt="Avatar"
                    className="h-full w-full object-cover object-top"
                  />
                </div>
                <div>
                  <span className="text-[10px] font-extrabold text-zinc-400 uppercase tracking-wider block">Let's Talk</span>
                  <span className="text-sm font-extrabold text-white block">Vijay Bhooshan Shukla</span>
                  <span className="text-[11px] text-zinc-400 font-semibold block">Full Stack Developer</span>
                </div>
              </div>

              <Link
                to="/contact"
                className="h-10 w-10 rounded-xl bg-white text-black flex items-center justify-center hover:bg-[#D84B20] hover:text-white transition-all shrink-0 shadow-md"
              >
                <ArrowUpRight size={18} />
              </Link>
            </div>
          </div>
        </div>

        {/* Bottom Banner Title */}
        <div className="mt-12 pt-8 border-t border-white/20 flex flex-col md:flex-row items-center justify-between gap-4">
          <h2 className="font-heading text-3xl sm:text-5xl lg:text-6xl font-black text-white tracking-tighter uppercase leading-none">
            FULL STACK ENGINEER
          </h2>
          <div className="flex items-center gap-3 text-xs font-extrabold uppercase tracking-wider text-white/90">
            <span>MERN STACK</span>
            <span>•</span>
            <span>PYTHON AUTOMATION</span>
            <span>•</span>
            <span>AI APIS</span>
          </div>
        </div>
      </div>
    </section>
  )
}
