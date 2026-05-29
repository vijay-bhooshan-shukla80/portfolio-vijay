"use client"

import { motion, useInView } from "framer-motion"
import { useRef } from "react"
import { Download, Briefcase, GraduationCap, Award, FileText, ArrowRight } from "lucide-react"
import Link from "next/link"
import { profile, resumeHighlights } from "@/data/site-content"
import { buttonTap, fadeUp, iconBounce, scaleUp, sectionReveal, slideLeft, slideRight, staggerContainer, staggerFast, viewportOnce } from "@/lib/motion"

const experience = [
  {
    title: "Automation Engineer & MERN Stack Developer",
    company: "9JOBS Application Services",
    period: "Dec 2025 - Present",
    description: "Developed Python and Selenium WebDriver automation systems, web scraping and data extraction workflows, and responsive MERN applications with optimized REST APIs.",
  },
  {
    title: "MERN Stack Developer",
    company: "Pragallabh Private Limited (OPC), Indore",
    period: "Nov 2024 - Nov 2025",
    description: "Designed React.js interfaces, implemented Node.js and Express.js backend APIs, optimized MongoDB CRUD operations, and supported debugging, testing, and deployment.",
  },
]

const education = [
  {
    degree: "Master of Computer Application",
    institution: "Galgotias University, Greater Noida",
    period: "July 2022 - June 2024",
    description: "Advanced computer application study with practical focus on software development, web technologies, and application architecture.",
  },
  {
    degree: "Bachelor of Computer Application",
    institution: "Integral University, Lucknow",
    period: "June 2019 - July 2022",
    description: "Built the foundation for programming, databases, web development, and problem-solving through computer application coursework.",
  },
]

const certifications = [
  "Microsoft Azure",
  "Advanced MERN Stack with Generative AI",
  "Browser automation with Selenium WebDriver and ChromeDriver",
  "Git, GitHub, Postman, VS Code, debugging, and web scraping workflows",
]

const skills = [
  { name: "React.js / Next.js", level: 90 },
  { name: "Node.js / Express.js", level: 86 },
  { name: "MongoDB", level: 84 },
  { name: "Python / Selenium", level: 86 },
  { name: "REST APIs / API Integration", level: 84 },
  { name: "Responsive UI / SEO", level: 90 },
]

function SectionIcon({ children }) {
  return <div className="icon-highlight flex h-12 w-12 items-center justify-center rounded-xl">{children}</div>
}

export function ResumeSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, viewportOnce)

  return (
    <motion.section id="resume" className="relative overflow-hidden py-24" {...sectionReveal}>
      <div className="absolute bottom-0 right-1/4 h-96 w-96 rounded-full bg-primary/10 blur-3xl animate-float-delay" />
      <div className="mx-auto max-w-7xl px-4 sm:px-6" ref={ref}>
        <motion.div variants={staggerContainer} initial="hidden" animate={isInView ? "show" : "hidden"} className="mb-16 text-center">
          <motion.span variants={fadeUp} className="text-sm font-medium uppercase tracking-wider text-white">Resume</motion.span>
          <motion.h2 variants={fadeUp} className="mt-4 text-3xl font-bold text-balance text-white md:text-4xl lg:text-5xl">{profile.name} with a <span className="gradient-text">MERN and automation delivery mindset</span></motion.h2>
          <motion.p variants={fadeUp} className="mx-auto mt-6 max-w-2xl text-lg text-white/84 text-pretty">Focused on scalable full-stack web applications, browser automation systems, AI-powered platforms, responsive UI, REST APIs, and reliable deployment workflows.</motion.p>
        </motion.div>
        <motion.div variants={staggerFast} initial="hidden" animate={isInView ? "show" : "hidden"} className="mb-10 grid gap-4 md:grid-cols-2 xl:grid-cols-4">{resumeHighlights.map((item) => <motion.div key={item} variants={scaleUp} whileHover={{ y: -6 }} className="glass motion-border rounded-2xl border border-white/10 p-5 text-sm text-white/82">{item}</motion.div>)}</motion.div>
        <div className="grid gap-12 lg:grid-cols-2"><motion.div variants={slideLeft} initial="hidden" animate={isInView ? "show" : "hidden"} className="space-y-12"><div><div className="mb-6 flex items-center gap-3"><motion.div variants={iconBounce} initial="rest" whileHover="hover"><SectionIcon><Briefcase className="h-6 w-6" /></SectionIcon></motion.div><h3 className="text-2xl font-bold text-white">Experience</h3></div><motion.div variants={staggerFast} initial="hidden" animate={isInView ? "show" : "hidden"} className="space-y-6">{experience.map((item) => <motion.div key={item.title} variants={fadeUp} whileHover={{ x: 4 }} className="glass motion-border rounded-2xl border border-white/10 p-6"><div className="mb-2 flex flex-col gap-3 sm:flex-row sm:items-start sm:justify-between"><h4 className="text-lg font-semibold text-white">{item.title}</h4><span className="w-fit rounded-full bg-white/[0.08] px-3 py-1 text-sm font-semibold text-white ring-1 ring-white/8">{item.period}</span></div><p className="mb-2 text-sm text-white/80">{item.company}</p><p className="text-sm text-white/82">{item.description}</p></motion.div>)}</motion.div></div><div><div className="mb-6 flex items-center gap-3"><motion.div variants={iconBounce} initial="rest" whileHover="hover"><SectionIcon><GraduationCap className="h-6 w-6" /></SectionIcon></motion.div><h3 className="text-2xl font-bold text-white">Education</h3></div><motion.div variants={staggerFast} initial="hidden" animate={isInView ? "show" : "hidden"} className="space-y-6">{education.map((item) => <motion.div key={item.degree} variants={fadeUp} whileHover={{ x: 4 }} className="glass motion-border rounded-2xl border border-white/10 p-6"><div className="mb-2 flex flex-col gap-3 sm:flex-row sm:items-start sm:justify-between"><h4 className="text-lg font-semibold text-white">{item.degree}</h4><span className="w-fit rounded-full bg-white/[0.08] px-3 py-1 text-sm font-semibold text-white ring-1 ring-white/8">{item.period}</span></div><p className="mb-2 text-sm text-white/80">{item.institution}</p><p className="text-sm text-white/82">{item.description}</p></motion.div>)}</motion.div></div></motion.div><motion.div variants={slideRight} initial="hidden" animate={isInView ? "show" : "hidden"} className="space-y-12"><div className="glass motion-border rounded-3xl border border-white/10 p-8"><div className="mb-6 flex items-center gap-3"><motion.div variants={iconBounce} initial="rest" whileHover="hover"><SectionIcon><FileText className="h-6 w-6" /></SectionIcon></motion.div><h3 className="text-2xl font-bold text-white">Skills</h3></div><div className="space-y-5">{skills.map((skill, index) => <motion.div key={skill.name} variants={fadeUp} initial="hidden" animate={isInView ? "show" : "hidden"}><div className="mb-2 flex justify-between gap-4"><span className="font-medium text-white">{skill.name}</span><span className="shrink-0 text-white/86">{skill.level}%</span></div><div className="skill-track h-3 overflow-hidden rounded-full"><motion.div className="skill-fill h-full rounded-full" initial={{ width: 0 }} whileInView={{ width: `${skill.level}%` }} viewport={viewportOnce} transition={{ duration: 1, delay: 0.12 + index * 0.08 }} /></div></motion.div>)}</div></div><div className="glass motion-border rounded-3xl border border-white/10 p-8"><div className="mb-6 flex items-center gap-3"><motion.div variants={iconBounce} initial="rest" whileHover="hover"><SectionIcon><Award className="h-6 w-6" /></SectionIcon></motion.div><h3 className="text-2xl font-bold text-white">Certifications & Tools</h3></div><motion.div variants={staggerFast} initial="hidden" animate={isInView ? "show" : "hidden"} className="space-y-3">{certifications.map((cert) => <motion.div key={cert} variants={fadeUp} whileHover={{ x: 4 }} className="flex items-center gap-3 rounded-xl bg-white/[0.04] p-4 transition-colors hover:bg-white/[0.06]"><div className="accent-gradient-bg h-2.5 w-2.5 rounded-full shadow-[0_0_14px_rgba(255,121,196,0.28)]" /><span className="text-white/84">{cert}</span></motion.div>)}</motion.div></div><motion.div variants={staggerFast} initial="hidden" animate={isInView ? "show" : "hidden"} className="grid gap-4 sm:grid-cols-2"><motion.div variants={scaleUp} {...buttonTap}><Link href="/contact" className="flex items-center justify-center gap-3 rounded-2xl bg-primary px-4 py-4 text-center font-semibold text-white shadow-[0_12px_32px_rgba(255,140,75,0.30)]">Contact Now <ArrowRight size={18} /></Link></motion.div><motion.a variants={scaleUp} {...buttonTap} href={profile.resumeUrl} download className="flex items-center justify-center gap-3 rounded-2xl border border-white/10 bg-white/[0.04] px-4 py-4 text-center font-semibold text-white hover:bg-white/[0.06]"><Download size={20} />Download Resume</motion.a></motion.div></motion.div></div>
      </div>
    </motion.section>
  )
}
