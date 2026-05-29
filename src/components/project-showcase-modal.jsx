"use client"

import { motion, useReducedMotion } from "framer-motion"
import { ExternalLink, Github } from "lucide-react"
import Image from "next/image"
import { GlassModal } from "@/components/glass-modal"
import { buttonTap, iconBounce } from "@/lib/motion"

export function ProjectShowcaseModal({ project, isOpen, onClose }) {
  const prefersReducedMotion = useReducedMotion()

  if (!project) {
    return null
  }

  const isAutomationProject = project.tags?.some((tag) => tag.toLowerCase().includes("automation"))

  return (
    <GlassModal isOpen={isOpen} onClose={onClose} titleId="project-modal-title" panelClassName="max-w-4xl">
      <div className="grid gap-5 lg:grid-cols-[1.02fr_0.98fr] lg:items-start lg:gap-6">
        <div className="overflow-hidden rounded-[1.5rem] border border-white/10 bg-white/[0.04]">
          <div className="relative aspect-[4/3] sm:aspect-[1.08/1]">
            <Image src={project.image} alt={project.title} fill className="object-cover" />
            <div className="absolute inset-0 bg-gradient-to-t from-[#07162b]/90 via-[#07162b]/15 to-transparent" />
          </div>
        </div>

        <div className="pr-0 sm:pr-12">
          <div className="inline-flex max-w-full rounded-full border border-primary/30 bg-white/[0.06] px-3 py-2 text-[0.68rem] font-semibold uppercase tracking-[0.2em] text-white/80 sm:px-4 sm:text-xs sm:tracking-[0.24em]">
            Project Showcase
          </div>

          <h3 id="project-modal-title" className="mt-4 text-xl font-bold text-white sm:text-3xl">
            {project.title}
          </h3>

          <p className="mt-4 text-sm leading-7 text-white/82 sm:text-base">{project.description}</p>

          <div className="mt-5 flex flex-wrap gap-2">
            {project.tags?.map((tag) => (
              <span key={tag} className="rounded-full border border-white/10 bg-white/[0.05] px-3 py-1.5 text-xs font-medium text-white/88">
                {tag}
              </span>
            ))}
          </div>

          <div className="mt-6 grid gap-3 text-sm text-white/76">
            <div className="rounded-2xl border border-white/10 bg-white/[0.04] px-4 py-3">
              Recruiter note: built around practical delivery, polished UI, and production-style responsiveness.
            </div>
            <div className="rounded-2xl border border-white/10 bg-white/[0.04] px-4 py-3">
              Best fit for clients hiring for MERN, automation, APIs, and responsive business websites.
            </div>
          </div>

          <div className="mt-7 flex flex-col gap-3 sm:flex-row">
            {project.liveUrl ? (
              <motion.a
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                {...buttonTap}
                whileHover={prefersReducedMotion ? undefined : { y: -3, scale: 1.02 }}
                whileTap={prefersReducedMotion ? undefined : { scale: 0.98 }}
                className="inline-flex flex-1 items-center justify-center gap-2 rounded-2xl bg-primary px-5 py-3.5 font-semibold text-white shadow-[0_14px_38px_rgba(255,140,75,0.32)]"
              >
                <motion.span variants={iconBounce} initial="rest" whileHover="hover"><ExternalLink size={18} /></motion.span>
                {project.demoLabel || (isAutomationProject ? "Live Demo" : "Visit Project")}
              </motion.a>
            ) : null}

            {project.githubUrl ? (
              <motion.a
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                {...buttonTap}
                whileHover={prefersReducedMotion ? undefined : { y: -3, scale: 1.02 }}
                whileTap={prefersReducedMotion ? undefined : { scale: 0.98 }}
                className="inline-flex flex-1 items-center justify-center gap-2 rounded-2xl border border-white/12 bg-white/[0.06] px-5 py-3.5 font-semibold text-white transition-colors hover:bg-white/[0.1]"
              >
                <motion.span variants={iconBounce} initial="rest" whileHover="hover"><Github size={18} /></motion.span>
                View Code
              </motion.a>
            ) : null}
          </div>
        </div>
      </div>
    </GlassModal>
  )
}
