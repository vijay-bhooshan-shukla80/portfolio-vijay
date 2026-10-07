"use client"

import { useEffect, useRef } from "react"
import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import { CheckCircle2 } from "lucide-react"

gsap.registerPlugin(ScrollTrigger)

const focusPoints = [
  "9JOBS Corporate & Job Platform",
  "Modern Property Real Estate Platform",
  "MERN Stack & Scalable Web Architecture",
  "Python & Selenium Browser Automation",
  "AI Resume Builder & Prompt Engineering",
  "REST APIs, Database & Server Deployment",
]

export function AboutSection() {
  const sectionRef = useRef(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      // 1. Title Fade-Up
      gsap.fromTo(
        ".about-title",
        { opacity: 0, y: 40 },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          ease: "power3.out",
          scrollTrigger: {
            trigger: ".about-title",
            start: "top 85%",
            once: true,
          },
        }
      )

      // 2. Left Image Fade-Left (x: -60 -> 0)
      gsap.fromTo(
        ".about-img-left",
        { opacity: 0, x: -60 },
        {
          opacity: 1,
          x: 0,
          duration: 0.9,
          ease: "power3.out",
          scrollTrigger: {
            trigger: ".about-img-left",
            start: "top 80%",
            once: true,
          },
        }
      )

      // 3. Right Content Fade-Right (x: 60 -> 0)
      gsap.fromTo(
        ".about-text-right",
        { opacity: 0, x: 60 },
        {
          opacity: 1,
          x: 0,
          duration: 0.9,
          ease: "power3.out",
          scrollTrigger: {
            trigger: ".about-text-right",
            start: "top 80%",
            once: true,
          },
        }
      )
    }, sectionRef)

    return () => ctx.revert()
  }, [])

  return (
    <section ref={sectionRef} id="about" className="relative py-28 bg-[#FFFFFF] text-[#111111]">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <div className="space-y-12">
          {/* Tag & Heading */}
          <div className="about-title space-y-4">
            <div className="framer-badge-dark">
              <span>✽ WHO WE ARE</span>
            </div>

            <h2 className="font-heading text-3xl sm:text-5xl font-extrabold uppercase tracking-tight">
              FULL STACK <span className="text-[#D84B20]">DEVELOPMENT</span> & AUTOMATION
            </h2>
          </div>

          {/* 2-Column Layout */}
          <div className="grid gap-12 lg:grid-cols-12 items-center">
            {/* Left Image Card */}
            <div className="about-img-left lg:col-span-6">
              <div className="relative aspect-[4/3] rounded-3xl overflow-hidden shadow-2xl bg-zinc-100 border border-zinc-200">
                <img
                  src="/img/modern.jpg"
                  alt="Vijay Bhooshan Shukla"
                  className="h-full w-full object-cover"
                />
                <div className="absolute top-4 left-4 framer-badge bg-black/80 text-white border-none">
                  <span>✽ AUTOMATION & MERN</span>
                </div>
              </div>
            </div>

            {/* Right Text Description */}
            <div className="about-text-right lg:col-span-6 space-y-6">
              <p className="text-zinc-800 text-lg sm:text-xl font-medium leading-relaxed">
                I am <strong className="text-black font-extrabold">Vijay Bhooshan Shukla</strong>, a Full Stack Developer, AI Automation Engineer, and Prompt Engineer with 2 years of hands-on experience building web applications and automated workflows.
              </p>

              <p className="text-zinc-600 text-base leading-relaxed">
                At 9JOBS Application Services, I develop and maintain corporate and job-services platforms, build real-estate web solutions like Modern Property, and engineer AI and browser automation tools using React.js, Next.js, Node.js, Express.js, MongoDB, Python, and Selenium WebDriver.
              </p>

              <div className="pt-4 grid grid-cols-1 sm:grid-cols-2 gap-3">
                {focusPoints.map((point, index) => (
                  <div key={index} className="flex items-start gap-2.5">
                    <CheckCircle2 size={18} className="text-[#D84B20] shrink-0 mt-0.5" />
                    <span className="text-xs sm:text-sm text-zinc-800 font-bold">{point}</span>
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
