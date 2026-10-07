"use client"

import { motion, useReducedMotion } from "framer-motion"
import { ExternalLink, Github } from "lucide-react"
import { GlassModal } from "@/components/glass-modal"
import { buttonTap } from "@/lib/motion"

export function ProjectShowcaseModal({ project, isOpen, onClose }) {
  const prefersReducedMotion = useReducedMotion()

  if (!project) {
    return null
  }

  const isAutomationProject = project.tags?.some((tag) => tag.toLowerCase().includes("automation"))

  return (
    <GlassModal isOpen={isOpen} onClose={onClose} titleId="project-modal-title" panelClassName="max-w-4xl">
      <div className="grid gap-6 lg:grid-cols-2 lg:items-start text-white">
        <div className="overflow-hidden rounded-2xl border border-white/10 bg-zinc-900 aspect-[4/3] relative">
          <img src={project.image} alt={project.title} className="h-full w-full object-cover" />
        </div>

        <div className="space-y-4">
          <div className="framer-badge">
            <span>✽ PROJECT SHOWCASE</span>
          </div>

          <h3 id="project-modal-title" className="font-heading text-2xl font-bold">
            {project.title}
          </h3>

          <p className="text-sm text-zinc-300 leading-relaxed font-medium">{project.description}</p>

          <div className="flex flex-wrap gap-2 pt-2">
            {project.tags?.map((tag) => (
              <span key={tag} className="rounded-md border border-white/10 bg-white/5 px-2.5 py-1 text-xs font-semibold text-zinc-300">
                {tag}
              </span>
            ))}
          </div>

          <div className="pt-4 flex flex-col gap-3 sm:flex-row">
            {project.liveUrl ? (
              <motion.a
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                {...buttonTap}
                className="inline-flex flex-1 items-center justify-center gap-2 rounded-xl bg-[#D84B20] px-5 py-3 font-bold text-white shadow-lg hover:bg-[#C43F16] transition-colors text-sm"
              >
                <ExternalLink size={16} />
                <span>{project.demoLabel || (isAutomationProject ? "Live Demo" : "Visit Project")}</span>
              </motion.a>
            ) : null}

            {project.githubUrl ? (
              <motion.a
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                {...buttonTap}
                className="inline-flex flex-1 items-center justify-center gap-2 rounded-xl border border-white/20 bg-white/10 px-5 py-3 font-bold text-white hover:bg-white/20 transition-colors text-sm"
              >
                <Github size={16} />
                <span>View Code</span>
              </motion.a>
            ) : null}
          </div>
        </div>
      </div>
    </GlassModal>
  )
}
