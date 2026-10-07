"use client"

import { useEffect, useRef } from "react"
import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import { Code2, Cpu, Database, Server } from "lucide-react"

gsap.registerPlugin(ScrollTrigger)

const skillCategories = [
  {
    title: "LANGUAGES & FRONTEND",
    icon: Code2,
    items: ["JavaScript", "Python", "SQL", "HTML5", "CSS3", "React.js", "Next.js", "React Native", "Tailwind CSS", "Bootstrap", "Framer Motion"],
  },
  {
    title: "BACKEND & DATABASE",
    icon: Server,
    items: ["Node.js", "Express.js", "REST APIs", "API Integration", "MongoDB", "MongoDB Atlas"],
  },
  {
    title: "AI, PROMPT & AUTOMATION",
    icon: Cpu,
    items: ["Prompt Engineering", "Generative AI", "AI API Integration", "Prompt Optimization", "AI-Assisted Development", "Selenium", "ChromeDriver", "Web Scraping", "Browser Automation", "Python Automation"],
  },
  {
    title: "INTEGRATIONS, DEPLOYMENT & TOOLS",
    icon: Database,
    items: ["Clerk", "Supabase", "DocuSign", "Stripe", "Google Sign-In", "Figma", "Google Stitch", "Responsive Design", "Vercel", "Render", "Railway", "Netlify", "DigitalOcean", "Postman", "Git", "GitHub", "Debugging", "Testing", "Performance Optimization", "SEO", "Cross-Browser Compatibility"],
  },
]

export function SkillsSection() {
  const sectionRef = useRef(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      const cards = gsap.utils.toArray(".skill-card-item")
      gsap.fromTo(
        cards,
        { opacity: 0, scale: 0.94, y: 40 },
        {
          opacity: 1,
          scale: 1,
          y: 0,
          duration: 0.8,
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
    <section ref={sectionRef} id="skills" className="relative py-28 bg-[#0A0A0C] text-white">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        {/* Header */}
        <div className="space-y-4 mb-16">
          <div className="framer-badge bg-white/10 text-white border-white/20">
            <span>✽ TECHNICAL CAPABILITIES</span>
          </div>

          <h2 className="font-heading text-3xl sm:text-5xl font-extrabold uppercase tracking-tight">
            CORE SKILLS & <span className="text-[#D84B20]">TECHNOLOGIES</span>
          </h2>

          <p className="text-zinc-400 text-base sm:text-lg font-medium max-w-2xl">
            A comprehensive breakdown of tools, frameworks, and automation libraries I use daily.
          </p>
        </div>

        {/* 4-Card Skills Grid (Matching Screenshot 4) */}
        <div className="grid gap-6 md:grid-cols-2">
          {skillCategories.map((cat) => {
            const Icon = cat.icon
            return (
              <div
                key={cat.title}
                className="skill-card-item p-8 rounded-3xl bg-[#141417] border border-white/10 hover:border-[#D84B20] transition-colors group flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-6">
                    <h3 className="font-heading text-xl font-bold text-white uppercase group-hover:text-[#D84B20] transition-colors">
                      {cat.title}
                    </h3>
                    <div className="h-12 w-12 rounded-2xl bg-[#1E1E24] border border-white/10 flex items-center justify-center text-[#D84B20] group-hover:bg-[#D84B20] group-hover:text-white transition-all">
                      <Icon size={22} />
                    </div>
                  </div>

                  <div className="flex flex-wrap gap-2 pt-2">
                    {cat.items.map((item) => (
                      <span
                        key={item}
                        className="text-xs font-bold px-3 py-1.5 rounded-lg bg-white/5 text-zinc-300 border border-white/10 group-hover:border-white/20 transition-all"
                      >
                        {item}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
