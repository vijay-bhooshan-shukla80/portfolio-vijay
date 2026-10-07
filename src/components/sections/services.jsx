"use client"

import { useEffect, useRef } from "react"
import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import { ArrowUpRight, Check } from "lucide-react"

gsap.registerPlugin(ScrollTrigger)

const servicesList = [
  {
    num: "01",
    title: "Full Stack Web Development",
    desc: "Develop full-stack web applications using React.js, Next.js, Node.js, Express.js, MongoDB, JavaScript, and REST APIs.",
    tags: ["MERN Stack", "React & Next.js", "Node & MongoDB"],
  },
  {
    num: "02",
    title: "AI Development & Integration",
    desc: "Integrate Generative AI models, AI APIs, and apply structured Prompt Engineering for intelligent applications.",
    tags: ["Generative AI", "AI APIs", "Prompt Engineering"],
  },
  {
    num: "03",
    title: "AI Automation & Scraping",
    desc: "Browser automation, form processing, and data extraction using Python, Selenium WebDriver, and ChromeDriver.",
    tags: ["Python Automation", "Selenium WebDriver", "Browser Workflows"],
  },
  {
    num: "04",
    title: "Responsive Web Design",
    desc: "Build responsive, user-friendly web interfaces with reusable components, technical SEO, and cross-browser support.",
    tags: ["Responsive Design", "SEO Optimization", "Reusable Components"],
  },
  {
    num: "05",
    title: "Deployment & Optimization",
    desc: "Deploy production-ready applications on Vercel, Render, Railway, Netlify, and DigitalOcean with hosting setup.",
    tags: ["Vercel & Render", "Railway & Netlify", "DigitalOcean Deployment"],
  },
  {
    num: "06",
    title: "API & Backend Architecture",
    desc: "Design and integrate RESTful APIs, authentication flows, database operations, form handling, validation, and Postman testing.",
    tags: ["RESTful APIs", "Authentication", "Postman & Debugging"],
  },
]

export function ServicesSection() {
  const sectionRef = useRef(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      const cards = gsap.utils.toArray(".service-card-item")
      gsap.fromTo(
        cards,
        { opacity: 0, y: 50, scale: 0.95 },
        {
          opacity: 1,
          y: 0,
          scale: 1,
          duration: 0.8,
          stagger: 0.12,
          ease: "power3.out",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 75%",
            once: true,
          },
        }
      )
    }, sectionRef)

    return () => ctx.revert()
  }, [])

  return (
    <section ref={sectionRef} id="services" className="relative py-28 bg-[#FAFAF7] text-[#111111]">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        {/* Header */}
        <div className="space-y-4 mb-16">
          <div className="framer-badge-dark">
            <span>✽ SERVICES & OFFERINGS</span>
          </div>

          <h2 className="font-heading text-3xl sm:text-5xl font-extrabold uppercase tracking-tight">
            WHAT I <span className="text-[#D84B20]">DO</span>
          </h2>

          <p className="text-zinc-600 text-base sm:text-lg max-w-2xl font-medium">
            High-impact software engineering services built for performance, reliability, and business growth.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {servicesList.map((service) => (
            <div
              key={service.num}
              className="service-card-item group p-8 rounded-3xl bg-white border border-zinc-200 hover:border-[#D84B20] shadow-sm hover:shadow-xl hover:-translate-y-1.5 transition-all duration-300 flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-8">
                  <span className="font-heading text-4xl font-extrabold text-zinc-300 group-hover:text-[#D84B20] transition-colors">
                    {service.num}
                  </span>
                  <div className="h-10 w-10 rounded-full border border-zinc-200 flex items-center justify-center text-zinc-900 group-hover:bg-[#D84B20] group-hover:text-white group-hover:border-[#D84B20] group-hover:translate-x-1 transition-all">
                    <ArrowUpRight size={18} />
                  </div>
                </div>

                <h3 className="font-heading text-xl font-bold text-zinc-900 group-hover:text-[#D84B20] transition-colors mb-3 uppercase">
                  {service.title}
                </h3>

                <p className="text-zinc-600 text-sm leading-relaxed mb-6 font-medium">
                  {service.desc}
                </p>
              </div>

              <div className="pt-4 border-t border-zinc-100 flex flex-wrap gap-2">
                {service.tags.map((tag) => (
                  <span
                    key={tag}
                    className="flex items-center gap-1 text-[11px] font-bold uppercase tracking-wider text-zinc-700 bg-zinc-100 px-2.5 py-1 rounded-md"
                  >
                    <Check size={12} className="text-[#D84B20]" />
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
