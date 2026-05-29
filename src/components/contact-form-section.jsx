"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { LoaderCircle, Mail, MapPin, Send, Sparkles } from "lucide-react"
import { profile } from "@/data/site-content"
import { fadeLeft, fadeRight, fadeUp, scaleUp, sectionReveal, staggerContainer, staggerFast, viewportOnce } from "@/lib/motion"

const initialForm = {
  name: "",
  email: "",
  projectType: "",
  message: "",
}

export function ContactFormSection() {
  const [formData, setFormData] = useState(initialForm)
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleChange = (event) => {
    const { name, value } = event.target
    setFormData((current) => ({ ...current, [name]: value }))
  }

  const handleSubmit = async (event) => {
    event.preventDefault()
    setIsSubmitting(true)
    setIsSubmitted(false)

    await new Promise((resolve) => window.setTimeout(resolve, 1400))

    const subject = encodeURIComponent(`Portfolio inquiry from ${formData.name || "a recruiter"}`)
    const message = encodeURIComponent(
      `Name: ${formData.name}\nEmail: ${formData.email}\nProject Type: ${formData.projectType}\n\nMessage:\n${formData.message}`,
    )

    window.location.href = `mailto:${profile.email}?subject=${subject}&body=${message}`
    setIsSubmitting(false)
    setIsSubmitted(true)
    setFormData(initialForm)
  }

  return (
    <motion.section id="contact-form" className="relative overflow-hidden py-24" {...sectionReveal}>
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(255,121,196,0.12),transparent_22%),radial-gradient(circle_at_bottom_left,rgba(116,183,255,0.14),transparent_26%)]" />
      <div className="mx-auto grid max-w-7xl gap-8 px-4 sm:px-6 lg:grid-cols-[0.85fr_1.15fr]">
        <motion.div variants={staggerContainer} initial="hidden" whileInView="show" viewport={viewportOnce} className="space-y-6">
          <motion.div variants={fadeLeft} className="glass motion-border rounded-[2rem] border border-white/10 p-8">
            <span className="inline-flex items-center gap-2 rounded-full border border-primary/35 bg-white/[0.06] px-4 py-2 text-xs font-semibold uppercase tracking-[0.24em] text-white/80">
              <Sparkles size={14} />
              Recruiter Ready
            </span>
            <h2 className="mt-5 text-3xl font-bold text-white sm:text-4xl">Let&apos;s build something that ships fast and looks premium.</h2>
            <p className="mt-4 text-base leading-7 text-white/82">
              Reach out for MERN stack delivery, automation systems, portfolio builds, or business websites with polished UI and reliable backend execution.
            </p>
          </motion.div>

          <motion.div variants={staggerFast} className="grid gap-4 sm:grid-cols-2">
            <motion.a variants={scaleUp} href={`mailto:${profile.email}`} className="glass motion-border rounded-3xl border border-white/10 p-5 transition-transform hover:-translate-y-1">
              <div className="icon-highlight mb-4 flex h-12 w-12 items-center justify-center rounded-2xl">
                <Mail className="h-5 w-5" />
              </div>
              <p className="text-sm uppercase tracking-[0.22em] text-white/58">Email</p>
              <p className="mt-2 font-semibold text-white">{profile.email}</p>
            </motion.a>

            <motion.div variants={scaleUp} className="glass motion-border rounded-3xl border border-white/10 p-5 transition-transform hover:-translate-y-1">
              <div className="icon-highlight mb-4 flex h-12 w-12 items-center justify-center rounded-2xl">
                <MapPin className="h-5 w-5" />
              </div>
              <p className="text-sm uppercase tracking-[0.22em] text-white/58">Based In</p>
              <p className="mt-2 font-semibold text-white">{profile.location}</p>
            </motion.div>
          </motion.div>
        </motion.div>

        <motion.form
          variants={staggerContainer}
          initial="hidden"
          whileInView="show"
          viewport={viewportOnce}
          onSubmit={handleSubmit}
          className="glass motion-border rounded-[2rem] border border-white/10 p-6 sm:p-8"
        >
          <motion.div variants={fadeRight} className="grid gap-5 sm:grid-cols-2">
            <motion.label variants={fadeUp} className="block">
              <span className="mb-2 block text-sm font-medium text-white/80">Your Name</span>
              <input name="name" value={formData.name} onChange={handleChange} required className="contact-input w-full rounded-2xl px-4 py-3.5 text-white" placeholder="Recruiter name" />
            </motion.label>

            <motion.label variants={fadeUp} className="block">
              <span className="mb-2 block text-sm font-medium text-white/80">Email Address</span>
              <input type="email" name="email" value={formData.email} onChange={handleChange} required className="contact-input w-full rounded-2xl px-4 py-3.5 text-white" placeholder="recruiter@company.com" />
            </motion.label>
          </motion.div>

          <motion.label variants={fadeUp} className="mt-5 block">
            <span className="mb-2 block text-sm font-medium text-white/80">Project Type</span>
            <input name="projectType" value={formData.projectType} onChange={handleChange} className="contact-input w-full rounded-2xl px-4 py-3.5 text-white" placeholder="Portfolio, MERN app, automation workflow..." />
          </motion.label>

          <motion.label variants={fadeUp} className="mt-5 block">
            <span className="mb-2 block text-sm font-medium text-white/80">Message</span>
            <textarea name="message" value={formData.message} onChange={handleChange} required rows={6} className="contact-input w-full rounded-[1.5rem] px-4 py-3.5 text-white" placeholder="Share the role, timeline, or project goals..." />
          </motion.label>

          <motion.button
            variants={scaleUp}
            type="submit"
            disabled={isSubmitting}
            whileHover={isSubmitting ? undefined : { y: -3, scale: 1.01 }}
            whileTap={isSubmitting ? undefined : { scale: 0.99 }}
            className="mt-6 inline-flex w-full items-center justify-center gap-2 rounded-2xl bg-primary px-5 py-4 font-semibold text-white shadow-[0_14px_38px_rgba(255,140,75,0.32)] disabled:cursor-not-allowed disabled:opacity-70"
          >
            {isSubmitting ? <LoaderCircle className="h-5 w-5 animate-spin" /> : <Send className="h-5 w-5" />}
            {isSubmitting ? "Preparing message..." : "Send Project Details"}
          </motion.button>

          {isSubmitted ? (
            <motion.p variants={fadeUp} initial="hidden" animate="show" className="mt-4 rounded-2xl border border-emerald-400/20 bg-emerald-500/10 px-4 py-3 text-sm text-emerald-100">
              Your email draft was prepared successfully. You can now send it from your mail app.
            </motion.p>
          ) : null}
        </motion.form>
      </div>
    </motion.section>
  )
}
