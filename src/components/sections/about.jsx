"use client"

import { motion } from "framer-motion"
import { Code2, Database, Globe, Server, Workflow, Wrench } from "lucide-react"
import { profile } from "@/data/site-content"
import { fadeUp, iconBounce, scaleUp, sectionReveal, slideLeft, slideRight, staggerContainer, staggerFast, viewportOnce } from "@/lib/motion"

const skills = [
  { name: "React.js / Next.js", level: 90, category: "Frontend" },
  { name: "Node.js / Express.js", level: 86, category: "Backend" },
  { name: "MongoDB", level: 84, category: "Database" },
  { name: "Python Automation", level: 84, category: "Automation" },
  { name: "Selenium WebDriver", level: 86, category: "Automation" },
  { name: "REST API Integration", level: 84, category: "Backend" },
]

const technologies = [
  { icon: Code2, name: "Frontend", items: ["React", "Next.js", "Tailwind", "Bootstrap"] },
  { icon: Server, name: "Backend", items: ["Node.js", "Express", "REST APIs", "Postman"] },
  { icon: Database, name: "Database", items: ["MongoDB", "Data models", "Queries", "Collections"] },
  { icon: Globe, name: "Websites", items: ["SEO", "Responsive UI", "Business sites", "Company pages"] },
  { icon: Workflow, name: "Automation", items: ["Selenium", "ChromeDriver", "Scraping", "Workflows"] },
  { icon: Wrench, name: "Tools", items: ["Git", "GitHub", "VS Code", "Debugging"] },
]

export function AboutSection() {
  return (
    <motion.section id="about" className="relative overflow-hidden py-24" {...sectionReveal}>
      <div className="absolute left-1/4 top-0 h-96 w-96 rounded-full bg-accent/14 blur-3xl animate-float-slow" />
      <div className="mx-auto max-w-7xl px-6">
        <motion.div variants={staggerContainer} initial="hidden" whileInView="show" viewport={viewportOnce} className="mb-16 text-center">
          <motion.span variants={fadeUp} className="text-sm font-medium uppercase tracking-wider text-white">About</motion.span>
          <motion.h2 variants={fadeUp} className="mt-4 mb-6 text-3xl font-bold text-balance text-white md:text-4xl lg:text-5xl">Building practical <span className="gradient-text">automation and MERN products</span></motion.h2>
          <motion.p variants={fadeUp} className="mx-auto max-w-2xl text-lg text-white/84 text-pretty">{profile.name} is an {profile.title.toLowerCase()} from {profile.location} focused on full-stack applications, browser automation, AI-powered tools, and responsive business websites.</motion.p>
        </motion.div>
        <div className="grid items-start gap-16 lg:grid-cols-2">
          <motion.div variants={slideLeft} initial="hidden" whileInView="show" viewport={viewportOnce}>
            <div className="glass motion-border mb-8 rounded-3xl border border-white/10 p-8">
              <h3 className="mb-4 text-2xl font-bold text-white">Professional Summary</h3>
              <p className="mb-6 leading-relaxed text-white/82">1.7+ years of experience in designing, developing, and deploying scalable full-stack web applications, browser automation systems, and AI-powered platforms.</p>
              <p className="leading-relaxed text-white/82">His work includes React.js and Next.js interfaces, Node.js and Express.js APIs, MongoDB database operations, Python automation, Selenium WebDriver workflows, web scraping, and REST API integration.</p>
            </div>
            <motion.div variants={staggerFast} initial="hidden" whileInView="show" viewport={viewportOnce} className="space-y-6">
              <motion.h3 variants={fadeUp} className="mb-4 text-xl font-bold text-white">Experience Snapshot</motion.h3>
              {[
                { role: "Automation Engineer & MERN Stack Developer", company: "9JOBS Application Services", period: "Dec 2025 - Present", description: "Developing scalable automation systems, web scraping workflows, data extraction tools, and responsive MERN applications." },
                { role: "MERN Stack Developer", company: "Pragallabh Private Limited (OPC), Indore", period: "Nov 2024 - Nov 2025", description: "Designed React interfaces, implemented Node and Express APIs, optimized MongoDB operations, and supported deployment workflows." },
              ].map((exp) => (
                <motion.div key={exp.role} variants={fadeUp} whileHover={{ x: 6 }} className="relative border-l-2 border-primary/70 pl-6">
                  <div className="absolute -left-2 top-0 h-4 w-4 rounded-full accent-gradient-bg glow-purple" />
                  <h4 className="text-lg font-semibold text-white">{exp.role}</h4>
                  <p className="text-sm font-medium text-[#ffb067]">{exp.company}</p>
                  <p className="mb-2 text-sm text-white/78">{exp.period}</p>
                  <p className="text-sm text-white/80">{exp.description}</p>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
          <motion.div variants={slideRight} initial="hidden" whileInView="show" viewport={viewportOnce}>
            <div className="glass motion-border mb-8 rounded-3xl border border-white/10 p-8">
              <h3 className="mb-6 text-xl font-bold text-white">Technical Skills</h3>
              <div className="space-y-4">
                {skills.map((skill, index) => (
                  <motion.div key={skill.name} variants={fadeUp} custom={index}>
                    <div className="mb-2 flex justify-between"><span className="text-sm font-medium text-white">{skill.name}</span><span className="text-sm font-semibold text-white/86">{skill.level}%</span></div>
                    <div className="skill-track h-2.5 overflow-hidden rounded-full"><motion.div className="skill-fill h-full rounded-full" initial={{ width: 0 }} whileInView={{ width: `${skill.level}%` }} viewport={viewportOnce} transition={{ duration: 1, delay: 0.15 + index * 0.08 }} /></div>
                  </motion.div>
                ))}
              </div>
            </div>
            <motion.div variants={staggerFast} initial="hidden" whileInView="show" viewport={viewportOnce} className="grid grid-cols-2 gap-4 md:grid-cols-3">
              {technologies.map((tech) => (
                <motion.div key={tech.name} variants={scaleUp} whileHover={{ scale: 1.05, y: -6 }} className="group cursor-pointer rounded-2xl border border-white/10 bg-white/[0.06] p-4 text-center shadow-[0_10px_24px_rgba(2,8,24,0.22)] transition-colors hover:border-primary/60 hover:bg-white/[0.08]">
                  <motion.div variants={iconBounce} initial="rest" whileHover="hover" className="icon-highlight mx-auto mb-3 flex h-14 w-14 items-center justify-center rounded-2xl transition-transform duration-300 group-hover:scale-110"><tech.icon className="h-7 w-7" /></motion.div>
                  <h4 className="mb-1 text-sm font-semibold text-white">{tech.name}</h4>
                  <p className="text-xs text-white/78">{tech.items.slice(0, 2).join(", ")}</p>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </div>
    </motion.section>
  )
}
