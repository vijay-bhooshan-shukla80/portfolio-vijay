"use client"

import { useEffect, useRef, useState } from "react"
import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import { Mail, Linkedin, Send, CheckCircle2, ArrowUpRight } from "lucide-react"
import { profile } from "@/data/site-content"

gsap.registerPlugin(ScrollTrigger)

const initialForm = {
  name: "",
  email: "",
  projectType: "Full Stack Web Development",
  message: "",
}

export function ContactFormSection() {
  const [formData, setFormData] = useState(initialForm)
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)

  const sectionRef = useRef(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Fade-Left for Left Info Column
      gsap.fromTo(
        ".contact-info-left",
        { opacity: 0, x: -50 },
        {
          opacity: 1,
          x: 0,
          duration: 0.85,
          ease: "power3.out",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 80%",
            once: true,
          },
        }
      )

      // Fade-Right for Right Form Card
      gsap.fromTo(
        ".contact-form-card",
        { opacity: 0, x: 50, scale: 0.96 },
        {
          opacity: 1,
          x: 0,
          scale: 1,
          duration: 0.85,
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

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setIsSubmitting(true)
    try {
      const accessKey = import.meta.env.VITE_WEB3FORMS_ACCESS_KEY || profile.web3FormsAccessKey
      if (accessKey && accessKey !== "YOUR_WEB3FORMS_ACCESS_KEY") {
        await fetch("https://api.web3forms.com/submit", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            access_key: accessKey,
            name: formData.name,
            email: formData.email,
            subject: `Portfolio Inquiry from ${formData.name}`,
            project_type: formData.projectType,
            message: formData.message,
          }),
        })
      }
      setIsSubmitted(true)
      setFormData(initialForm)
    } catch (err) {
      console.error(err)
      setIsSubmitted(true)
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <section ref={sectionRef} id="contact" className="relative py-28 bg-[#D84B20] text-white grid-crosshair-bg">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <div className="grid gap-12 lg:grid-cols-12 items-start">
          {/* Left Column: Copy & Channels */}
          <div className="contact-info-left lg:col-span-5 space-y-8">
            <div className="space-y-4">
              <div className="framer-badge">
                <span>✽ GET IN TOUCH</span>
              </div>

              <h2 className="font-heading text-3xl sm:text-5xl font-extrabold uppercase leading-tight tracking-tight">
                LET'S BUILD SOMETHING GREAT.
              </h2>

              <p className="text-white/90 text-base sm:text-lg font-medium leading-relaxed">
                Recruiters, companies, and potential clients are welcome to reach out to discuss Full Stack Development, AI Automation, and AI-powered applications.
              </p>
            </div>

            {/* Quick Contact Cards */}
            <div className="space-y-4 pt-4">
              <a
                href={`mailto:${profile.email}`}
                className="flex items-center justify-between p-4 rounded-2xl bg-white/10 border border-white/20 hover:bg-white hover:text-black transition-all group"
              >
                <div className="flex items-center gap-3">
                  <Mail size={20} />
                  <div>
                    <span className="text-[10px] font-bold uppercase tracking-wider block opacity-70">Email</span>
                    <span className="text-sm font-bold block">{profile.email}</span>
                  </div>
                </div>
                <ArrowUpRight size={18} />
              </a>

              <a
                href={profile.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-between p-4 rounded-2xl bg-white/10 border border-white/20 hover:bg-white hover:text-black transition-all group"
              >
                <div className="flex items-center gap-3">
                  <Linkedin size={20} />
                  <div>
                    <span className="text-[10px] font-bold uppercase tracking-wider block opacity-70">LinkedIn</span>
                    <span className="text-sm font-bold block">Vijay Bhooshan Shukla</span>
                  </div>
                </div>
                <ArrowUpRight size={18} />
              </a>
            </div>
          </div>

          {/* Right Column: Contact Form */}
          <div className="contact-form-card lg:col-span-7">
            <div className="p-8 rounded-3xl bg-black text-white border border-white/20 shadow-2xl">
              {isSubmitted ? (
                <div className="py-12 text-center space-y-4">
                  <div className="h-16 w-16 rounded-full bg-[#D84B20] text-white flex items-center justify-center mx-auto">
                    <CheckCircle2 size={32} />
                  </div>
                  <h3 className="font-heading text-2xl font-bold">Message Sent Successfully!</h3>
                  <p className="text-zinc-400 text-sm max-w-md mx-auto">
                    Thank you for contacting me. I will get back to you shortly.
                  </p>
                  <button
                    onClick={() => setIsSubmitted(false)}
                    className="mt-4 text-xs font-bold text-[#D84B20] uppercase tracking-wider hover:underline"
                  >
                    Send Another Message
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid gap-6 sm:grid-cols-2">
                    <div className="space-y-2">
                      <label className="text-xs font-bold uppercase tracking-wider text-zinc-400">
                        Your Name *
                      </label>
                      <input
                        type="text"
                        name="name"
                        required
                        value={formData.name}
                        onChange={handleChange}
                        placeholder="John Doe"
                        className="w-full rounded-xl bg-zinc-900 border border-zinc-800 px-4 py-3 text-sm text-white placeholder:text-zinc-600 focus:border-[#D84B20] focus:outline-none transition-colors"
                      />
                    </div>

                    <div className="space-y-2">
                      <label className="text-xs font-bold uppercase tracking-wider text-zinc-400">
                        Email Address *
                      </label>
                      <input
                        type="email"
                        name="email"
                        required
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="john@example.com"
                        className="w-full rounded-xl bg-zinc-900 border border-zinc-800 px-4 py-3 text-sm text-white placeholder:text-zinc-600 focus:border-[#D84B20] focus:outline-none transition-colors"
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <label className="text-xs font-bold uppercase tracking-wider text-zinc-400">
                      Project Type
                    </label>
                    <select
                      name="projectType"
                      value={formData.projectType}
                      onChange={handleChange}
                      className="w-full rounded-xl bg-zinc-900 border border-zinc-800 px-4 py-3 text-sm text-white focus:border-[#D84B20] focus:outline-none transition-colors"
                    >
                      <option value="Full Stack Web Development">Full Stack Web Development</option>
                      <option value="Browser & Workflow Automation">Browser & Workflow Automation</option>
                      <option value="AI Integration & Tools">AI Integration & Tools</option>
                      <option value="MERN Stack Application">MERN Stack Application</option>
                    </select>
                  </div>

                  <div className="space-y-2">
                    <label className="text-xs font-bold uppercase tracking-wider text-zinc-400">
                      Your Message *
                    </label>
                    <textarea
                      name="message"
                      required
                      rows={5}
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="Share your requirements or project timeline..."
                      className="w-full rounded-xl bg-zinc-900 border border-zinc-800 px-4 py-3 text-sm text-white placeholder:text-zinc-600 focus:border-[#D84B20] focus:outline-none transition-colors resize-none"
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full flex items-center justify-center gap-2 rounded-xl bg-[#D84B20] py-4 text-sm font-bold text-white uppercase tracking-wider shadow-xl hover:bg-[#C43F16] transition-colors"
                  >
                    <span>{isSubmitting ? "Sending..." : "Send Message"}</span>
                    <Send size={16} />
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
