"use client"

import { useEffect, useRef, useState } from "react"
import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import { ArrowUpRight } from "lucide-react"
import { projects } from "@/data/site-content"
import { ProjectShowcaseModal } from "@/components/project-showcase-modal"

gsap.registerPlugin(ScrollTrigger)

export function ProjectsSection() {
  const [selectedProject, setSelectedProject] = useState(null)
  const sectionRef = useRef(null)
  const gridRef = useRef(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      // 1. GSAP ScrollTrigger Stagger Reveal for Cards
      const cards = gsap.utils.toArray(".project-card-item")
      gsap.fromTo(
        cards,
        { opacity: 0, y: 60, scale: 0.96 },
        {
          opacity: 1,
          y: 0,
          scale: 1,
          duration: 0.85,
          stagger: 0.15,
          ease: "power3.out",
          scrollTrigger: {
            trigger: gridRef.current,
            start: "top 80%",
            once: true,
          },
        }
      )

      // 2. GSAP Internal Image Parallax & Clip-Path Reveal (Rule 20 & 21)
      cards.forEach((card) => {
        const imgInner = card.querySelector(".project-img-inner")
        const imgClip = card.querySelector(".project-img-clip")

        if (imgClip) {
          gsap.fromTo(
            imgClip,
            { clipPath: "inset(100% 0% 0% 0%)" },
            {
              clipPath: "inset(0% 0% 0% 0%)",
              duration: 1,
              ease: "power3.inOut",
              scrollTrigger: {
                trigger: card,
                start: "top 85%",
                once: true,
              },
            }
          )
        }

        if (imgInner) {
          gsap.fromTo(
            imgInner,
            { yPercent: -12, scale: 1.1 },
            {
              yPercent: 12,
              scale: 1,
              ease: "none",
              scrollTrigger: {
                trigger: card,
                start: "top bottom",
                end: "bottom top",
                scrub: true,
              },
            }
          )
        }
      })
    }, sectionRef)

    return () => ctx.revert()
  }, [])

  return (
    <section ref={sectionRef} id="projects" className="relative py-28 bg-[#F6F1E5] text-[#1A1A1A] grid-crosshair-cream">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-20 gap-8">
          <div className="space-y-4 max-w-2xl">
            <div className="framer-badge-dark">
              <span>✽ FEATURED WORK</span>
            </div>

            <h2 className="font-heading text-3xl sm:text-5xl font-extrabold tracking-tight uppercase">
              SELECTED <span className="text-[#D84B20]">PROJECTS</span>
            </h2>

            <p className="text-zinc-700 text-base sm:text-lg font-medium leading-relaxed">
              Full-stack MERN products, AI ATS resume platforms, and browser automation systems engineered for real-world reliability.
            </p>
          </div>

          <div>
            <button
              onClick={() => setSelectedProject(projects[0])}
              className="inline-flex items-center gap-2 rounded-full border border-zinc-900 bg-zinc-900 px-6 py-3 text-xs font-bold text-white uppercase tracking-wider hover:bg-[#D84B20] hover:border-[#D84B20] transition-colors"
            >
              <span>Explore All Works</span>
              <ArrowUpRight size={16} />
            </button>
          </div>
        </div>

        {/* Offset Framer Card Grid Layout with Internal Image Parallax */}
        <div ref={gridRef} className="grid gap-12 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((project, idx) => {
            const isOffset = idx % 2 === 1
            return (
              <div
                key={project.title}
                onClick={() => setSelectedProject(project)}
                data-cursor-text="VIEW"
                data-project-card="true"
                className={`project-card-item group cursor-pointer flex flex-col justify-between ${
                  isOffset ? "md:translate-y-12" : ""
                }`}
              >
                {/* Image Container with Internal Parallax & Clip Reveal */}
                <div className="relative aspect-[4/3] rounded-3xl overflow-hidden bg-[#EBDDBE] p-4 shadow-xl border border-black/10 group-hover:shadow-2xl group-hover:-translate-y-2 transition-all duration-500">
                  <div className="project-img-clip h-full w-full rounded-2xl overflow-hidden relative">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="project-img-inner h-[120%] w-full object-cover group-hover:scale-105 transition-transform duration-700"
                    />
                  </div>
                </div>

                {/* Tag Badge & Title */}
                <div className="mt-4 flex items-center justify-between px-2">
                  <span className="font-heading text-xs font-bold uppercase tracking-wider text-zinc-900 flex items-center gap-1">
                    <span className="text-[#D84B20]">✽</span>
                    {project.title.split(" ")[0]}
                  </span>
                  <span className="text-xs font-semibold text-zinc-500 uppercase tracking-wider">
                    {project.tags[0]}
                  </span>
                </div>

                {/* Description */}
                <p className="mt-2 text-xs text-zinc-600 font-medium line-clamp-2 px-2">
                  {project.description}
                </p>
              </div>
            )
          })}
        </div>
      </div>

      <ProjectShowcaseModal
        project={selectedProject}
        isOpen={Boolean(selectedProject)}
        onClose={() => setSelectedProject(null)}
      />
    </section>
  )
}
