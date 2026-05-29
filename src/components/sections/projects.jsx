"use client"

import { motion, useInView } from "framer-motion"
import { useRef, useState } from "react"
import { ExternalLink, Github } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import { ProjectShowcaseModal } from "@/components/project-showcase-modal"
import { projects } from "@/data/site-content"
import { buttonTap, fadeIn, fadeUp, iconBounce, sectionReveal, staggerContainer, staggerFast, viewportOnce } from "@/lib/motion"

export function ProjectsSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, viewportOnce)
  const [selectedProject, setSelectedProject] = useState(null)

  const openProject = (project) => {
    setSelectedProject(project)
  }

  return (
    <motion.section id="projects" className="relative overflow-hidden py-24" {...sectionReveal}>
      <div className="absolute right-0 top-1/3 h-96 w-96 rounded-full bg-primary/10 blur-3xl animate-float-delay" />
      <div className="mx-auto max-w-7xl px-6" ref={ref}>
        <motion.div variants={staggerContainer} initial="hidden" animate={isInView ? "show" : "hidden"} className="mb-16 text-center">
          <motion.span variants={fadeUp} className="text-sm font-medium uppercase tracking-wider text-white">Projects</motion.span>
          <motion.h2 variants={fadeUp} className="mt-4 text-3xl font-bold text-balance text-white md:text-4xl lg:text-5xl">Selected work with <span className="gradient-text">real project outcomes</span></motion.h2>
          <motion.p variants={fadeUp} className="mx-auto mt-6 max-w-2xl text-lg text-white/84 text-pretty">Websites, platforms, and automation tools built around business usability, responsive design, and reliable delivery.</motion.p>
        </motion.div>
        <motion.div variants={staggerFast} initial="hidden" animate={isInView ? "show" : "hidden"} className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((project) => (
            <motion.button
              key={project.title}
              type="button"
              variants={fadeIn}
              whileHover={{ y: -12, scale: 1.05, rotate: 1 }}
              whileTap={{ scale: 0.98 }}
              onClick={() => openProject(project)}
              className="group text-left md:[perspective:1200px]"
            >
              <div className="project-card-tilt glass motion-border overflow-hidden rounded-3xl border border-white/10 transition-colors hover:border-primary/40 hover:bg-[#0c2550]">
                <div className="image-hover-zoom relative h-56 overflow-hidden">
                  <Image src={project.image} alt={project.title} fill className="object-cover" />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#07162b] via-[#07162b]/20 to-transparent" />
                  <div className="absolute bottom-5 left-5 right-5 flex items-center justify-between gap-3">
                    <span className="rounded-full border border-white/10 bg-[#07162b]/85 px-4 py-2 text-sm font-medium text-white backdrop-blur-sm">{project.tags[0]}</span>
                    <div className="flex gap-2">
                      {project.liveUrl ? <motion.span variants={iconBounce} initial="rest" whileHover="hover" className="icon-highlight flex h-11 w-11 items-center justify-center rounded-full backdrop-blur-sm transition-transform duration-300 group-hover:scale-110"><ExternalLink size={18} /></motion.span> : null}
                      {project.githubUrl ? <motion.span variants={iconBounce} initial="rest" whileHover="hover" className="icon-highlight flex h-11 w-11 items-center justify-center rounded-full backdrop-blur-sm transition-transform duration-300 group-hover:scale-110"><Github size={18} /></motion.span> : null}
                    </div>
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="mb-2 text-xl font-bold text-white transition-colors group-hover:text-[#ffb067]">{project.title}</h3>
                  <p className="mb-4 text-sm leading-relaxed text-white/82">{project.description}</p>
                  <div className="flex flex-wrap gap-2">{project.tags.map((tag) => <motion.span key={tag} variants={fadeUp} className="rounded-full border border-white/10 bg-white/[0.06] px-3 py-1 text-xs font-medium text-white/92">{tag}</motion.span>)}</div>
                  <div className="mt-5 inline-flex items-center gap-2 font-semibold text-[#ffb067]">
                    View Details <ExternalLink size={16} className="transition-transform duration-300 group-hover:translate-x-1" />
                  </div>
                </div>
              </div>
            </motion.button>
          ))}
        </motion.div>
        <motion.div variants={fadeUp} initial="hidden" animate={isInView ? "show" : "hidden"} className="mt-12 text-center">
          <motion.div {...buttonTap} className="inline-flex">
            <Link href="/projects" className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.05] px-8 py-4 font-medium text-white transition-colors hover:bg-white/[0.08]">
              View All Projects <ExternalLink size={18} />
            </Link>
          </motion.div>
        </motion.div>
      </div>
      <ProjectShowcaseModal project={selectedProject} isOpen={Boolean(selectedProject)} onClose={() => setSelectedProject(null)} />
    </motion.section>
  )
}
