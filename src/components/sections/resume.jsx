"use client"

import { useEffect, useRef } from "react"
import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import { Briefcase, GraduationCap, Award, CheckCircle2 } from "lucide-react"

gsap.registerPlugin(ScrollTrigger)

const experiences = [
  {
    title: "Automation Engineer & MERN Stack Developer",
    company: "9JOBS Application Services, Delhi",
    period: "Oct 2024 – Present",
    desc: "Develop and maintain the 9JOBS corporate and job-services website, build and enhance Modern Property real-estate platform, build full-stack web applications using React.js, Next.js, Node.js, Express.js, MongoDB, JavaScript, HTML5, CSS3, and REST APIs, apply Prompt Engineering for AI-assisted development, design authentication flows and database operations, and optimize websites for performance, SEO, cross-browser compatibility, and server deployment.",
    highlights: ["9JOBS & Modern Property", "MERN Stack & REST APIs", "Prompt Engineering & Deployment"],
  },
]

const education = [
  {
    degree: "Master of Computer Application (MCA)",
    institution: "Galgotias University – Greater Noida",
    period: "July 2022 – June 2024",
    desc: "Master's degree focused on computer application architecture, advanced web development, and software engineering.",
  },
  {
    degree: "Bachelor of Computer Application (BCA)",
    institution: "Integral University, Lucknow",
    period: "June 2019 – July 2022",
    desc: "Bachelor's degree covering computer science fundamentals, programming languages, database management, and web technologies.",
  },
]

const certs = [
  "Microsoft Azure",
  "Advanced MERN Stack with Generative AI",
]

export function ResumeSection() {
  const sectionRef = useRef(null)
  const lineRef = useRef(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      // 1. GSAP ScrollTrigger Scrubbed Vertical Line Growth (Rule 34)
      if (lineRef.current) {
        gsap.fromTo(
          lineRef.current,
          { scaleY: 0 },
          {
            scaleY: 1,
            ease: "none",
            scrollTrigger: {
              trigger: ".timeline-container",
              start: "top 75%",
              end: "bottom 75%",
              scrub: true,
            },
          }
        )
      }

      // 2. Timeline Card Stagger Reveal
      const cards = gsap.utils.toArray(".timeline-card-item")
      gsap.fromTo(
        cards,
        { opacity: 0, x: -35 },
        {
          opacity: 1,
          x: 0,
          duration: 0.7,
          stagger: 0.2,
          ease: "power3.out",
          scrollTrigger: {
            trigger: ".timeline-container",
            start: "top 80%",
            once: true,
          },
        }
      )

      // 3. Education Card Stagger Reveal
      const eduCards = gsap.utils.toArray(".edu-card-item")
      gsap.fromTo(
        eduCards,
        { opacity: 0, x: 35 },
        {
          opacity: 1,
          x: 0,
          duration: 0.7,
          stagger: 0.2,
          ease: "power3.out",
          scrollTrigger: {
            trigger: ".edu-container",
            start: "top 80%",
            once: true,
          },
        }
      )
    }, sectionRef)

    return () => ctx.revert()
  }, [])

  return (
    <section ref={sectionRef} id="resume" className="relative py-28 bg-[#0A0A0C] text-white">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        {/* Header */}
        <div className="space-y-4 mb-16">
          <div className="framer-badge bg-white/10 text-white border-white/20">
            <span>✽ CAREER JOURNEY</span>
          </div>

          <h2 className="font-heading text-3xl sm:text-5xl font-extrabold uppercase tracking-tight">
            EXPERIENCE & <span className="text-[#D84B20]">EDUCATION</span>
          </h2>

          <p className="text-zinc-400 text-base sm:text-lg font-medium max-w-2xl">
            My professional background across full-stack software engineering, browser automation, and computer application studies.
          </p>
        </div>

        <div className="grid gap-12 lg:grid-cols-2">
          {/* Work Experience Timeline */}
          <div>
            <div className="flex items-center gap-3 mb-8">
              <div className="h-10 w-10 rounded-xl bg-[#D84B20]/20 text-[#D84B20] flex items-center justify-center">
                <Briefcase size={20} />
              </div>
              <h3 className="font-heading text-2xl font-bold text-white uppercase">Work Experience</h3>
            </div>

            <div className="timeline-container space-y-8 relative pl-6 border-l border-white/10">
              {/* Scroll-driven Glowing Line overlay */}
              <div
                ref={lineRef}
                className="absolute left-0 top-0 bottom-0 w-[2px] bg-gradient-to-b from-[#D84B20] via-[#D84B20]/80 to-transparent origin-top"
              />

              {experiences.map((exp) => (
                <div key={exp.title} className="timeline-card-item relative group">
                  {/* Timeline Dot */}
                  <span className="absolute -left-[31px] top-1.5 h-4 w-4 rounded-full border-2 border-[#D84B20] bg-[#0A0A0C] group-hover:bg-[#D84B20] transition-colors" />

                  <div className="p-6 rounded-2xl bg-[#141417] border border-white/10 group-hover:border-white/30 transition-all">
                    <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-2">
                      <h4 className="font-heading text-base font-bold text-white group-hover:text-[#D84B20] transition-colors">
                        {exp.title}
                      </h4>
                      <span className="text-xs font-semibold px-2.5 py-1 rounded-md bg-[#D84B20]/20 text-[#D84B20] w-fit">
                        {exp.period}
                      </span>
                    </div>

                    <p className="text-xs font-bold text-zinc-300 mb-3">{exp.company}</p>
                    <p className="text-zinc-400 text-xs leading-relaxed font-medium mb-4">{exp.desc}</p>

                    <div className="flex flex-wrap gap-2">
                      {exp.highlights.map((h) => (
                        <span key={h} className="text-[11px] font-semibold px-2 py-0.5 rounded bg-white/5 text-zinc-300 border border-white/10">
                          {h}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Education & Certifications */}
          <div className="edu-container space-y-12">
            <div>
              <div className="flex items-center gap-3 mb-8">
                <div className="h-10 w-10 rounded-xl bg-[#D84B20]/20 text-[#D84B20] flex items-center justify-center">
                  <GraduationCap size={20} />
                </div>
                <h3 className="font-heading text-2xl font-bold text-white uppercase">Education</h3>
              </div>

              <div className="space-y-6">
                {education.map((edu) => (
                  <div
                    key={edu.degree}
                    className="edu-card-item p-6 rounded-2xl bg-[#141417] border border-white/10 hover:border-white/30 transition-all"
                  >
                    <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-2">
                      <h4 className="font-heading text-base font-bold text-white">{edu.degree}</h4>
                      <span className="text-xs font-semibold px-2.5 py-1 rounded-md bg-white/10 text-zinc-300 w-fit">
                        {edu.period}
                      </span>
                    </div>
                    <p className="text-xs font-bold text-[#D84B20] mb-2">{edu.institution}</p>
                    <p className="text-zinc-400 text-xs leading-relaxed font-medium">{edu.desc}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Certifications */}
            <div>
              <div className="flex items-center gap-3 mb-6">
                <div className="h-10 w-10 rounded-xl bg-[#D84B20]/20 text-[#D84B20] flex items-center justify-center">
                  <Award size={20} />
                </div>
                <h3 className="font-heading text-2xl font-bold text-white uppercase">Credentials</h3>
              </div>

              <div className="grid gap-3 sm:grid-cols-2">
                {certs.map((c) => (
                  <div key={c} className="flex items-center gap-2.5 p-3.5 rounded-xl bg-[#141417] border border-white/10">
                    <CheckCircle2 size={16} className="text-[#D84B20] shrink-0" />
                    <span className="text-xs font-bold text-zinc-200">{c}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
