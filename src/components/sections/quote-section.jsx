"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { ChevronDown, HelpCircle, LoaderCircle, Send, Sparkles } from "lucide-react"
import { profile } from "@/data/site-content"
import { fadeUp, scaleUp, sectionReveal, staggerContainer, staggerFast, viewportOnce } from "@/lib/motion"

const initialForm = {
  name: "",
  email: "",
  projectType: "",
  budget: "",
  deadline: "",
  description: "",
}

const freelancingFaqs = [
  {
    question: "What is your typical project timeline?",
    answer: "Most landing pages take 1-2 weeks, while full-stack MERN applications or complex automation systems usually take 3-6 weeks depending on requirements."
  },
  {
    question: "Do you offer fixed-price or hourly rates?",
    answer: "I prefer fixed-price contracts for well-defined projects to ensure transparency, but I'm open to hourly rates for ongoing maintenance or R&D work."
  },
  {
    question: "Can you help with deployment and hosting?",
    answer: "Yes, I handle full deployment to platforms like Vercel, Netlify, Railway, or AWS, and I can set up automated CI/CD workflows."
  },
  {
    question: "Do you provide post-launch support?",
    answer: "Absolutely. I provide 2 weeks of free support after launch for any bugs, and I offer long-term maintenance packages for feature updates."
  }
]

function FaqItem({ item, isOpen, onClick }) {
  return (
    <div className="glass motion-border overflow-hidden rounded-2xl border border-white/10 transition-colors hover:border-white/20">
      <button
        onClick={onClick}
        className="flex w-full items-center justify-between px-6 py-5 text-left transition-colors hover:bg-white/[0.04]"
      >
        <span className="font-semibold text-white/90">{item.question}</span>
        <motion.span
          animate={{ rotate: isOpen ? 180 : 0 }}
          transition={{ duration: 0.3 }}
          className="text-primary"
        >
          <ChevronDown size={20} />
        </motion.span>
      </button>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
          >
            <div className="px-6 pb-5 text-sm leading-relaxed text-white/70 border-t border-white/5 pt-4">
              {item.answer}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}

export function QuoteSection() {
  const [formData, setFormData] = useState(initialForm)
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [openFaq, setOpenFaq] = useState(0)

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setIsSubmitting(true)
    
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1500))
    
    const subject = encodeURIComponent(`Freelance Quote Request from ${formData.name}`)
    const body = encodeURIComponent(
      `Name: ${formData.name}\nEmail: ${formData.email}\nProject: ${formData.projectType}\nBudget: ${formData.budget}\nDeadline: ${formData.deadline}\n\nDescription:\n${formData.description}`
    )
    
    window.location.href = `mailto:${profile.email}?subject=${subject}&body=${body}`
    
    setIsSubmitting(false)
    setIsSubmitted(true)
    setFormData(initialForm)
  }

  return (
    <motion.section id="get-quote" className="relative overflow-hidden py-24" {...sectionReveal}>
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_right,rgba(255,140,75,0.08),transparent_25%),radial-gradient(circle_at_top_left,rgba(198,140,255,0.1),transparent_20%)]" />
      
      <div className="relative z-10 mx-auto max-w-7xl px-6">
        <motion.div variants={staggerContainer} initial="hidden" whileInView="show" viewport={viewportOnce} className="mb-16 text-center">
          <motion.span variants={fadeUp} className="inline-flex items-center gap-2 rounded-full border border-primary/30 bg-white/[0.05] px-4 py-2 text-xs font-semibold uppercase tracking-widest text-white/80">
            <Sparkles size={14} className="text-primary" />
            Start Working Together
          </motion.span>
          <motion.h2 variants={fadeUp} className="mt-6 text-4xl font-bold text-white md:text-5xl">
            Get a <span className="gradient-text">Freelance Quote</span>
          </motion.h2>
          <motion.p variants={fadeUp} className="mx-auto mt-6 max-w-2xl text-lg text-white/70">
            Ready to bring your idea to life? Fill out the form below or check the Q&A for common questions about my process.
          </motion.p>
        </motion.div>

        <div className="grid gap-12 lg:grid-cols-[1.1fr_0.9fr]">
          {/* Form Side */}
          <motion.div variants={staggerFast} initial="hidden" whileInView="show" viewport={viewportOnce}>
            <form onSubmit={handleSubmit} className="glass motion-border space-y-6 rounded-[2.5rem] border border-white/10 p-8 sm:p-10">
              <div className="grid gap-6 sm:grid-cols-2">
                <div className="space-y-2">
                  <label className="text-sm font-medium text-white/80 ml-1">Your Name</label>
                  <input
                    required
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className="contact-input w-full rounded-2xl px-5 py-4 text-white"
                    placeholder="John Doe"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-medium text-white/80 ml-1">Email Address</label>
                  <input
                    required
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="contact-input w-full rounded-2xl px-5 py-4 text-white"
                    placeholder="john@example.com"
                  />
                </div>
              </div>

              <div className="grid gap-6 sm:grid-cols-2">
                <div className="space-y-2">
                  <label className="text-sm font-medium text-white/80 ml-1">Project Type</label>
                  <select
                    name="projectType"
                    value={formData.projectType}
                    onChange={handleChange}
                    className="contact-input w-full rounded-2xl px-5 py-4 text-white bg-transparent"
                  >
                    <option value="" className="bg-[#08162b]">Select an option</option>
                    <option value="MERN App" className="bg-[#08162b]">Full-Stack MERN App</option>
                    <option value="Landing Page" className="bg-[#08162b]">Premium Landing Page</option>
                    <option value="Automation" className="bg-[#08162b]">Browser Automation</option>
                    <option value="Other" className="bg-[#08162b]">Other / Consultation</option>
                  </select>
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-medium text-white/80 ml-1">Estimated Budget</label>
                  <input
                    name="budget"
                    value={formData.budget}
                    onChange={handleChange}
                    className="contact-input w-full rounded-2xl px-5 py-4 text-white"
                    placeholder="e.g. $500 - $1500"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <label className="text-sm font-medium text-white/80 ml-1">Preferred Deadline</label>
                <input
                  name="deadline"
                  value={formData.deadline}
                  onChange={handleChange}
                  className="contact-input w-full rounded-2xl px-5 py-4 text-white"
                  placeholder="e.g. End of next month"
                />
              </div>

              <div className="space-y-2">
                <label className="text-sm font-medium text-white/80 ml-1">Tell me about your project</label>
                <textarea
                  required
                  name="description"
                  value={formData.description}
                  onChange={handleChange}
                  rows={4}
                  className="contact-input w-full rounded-[1.5rem] px-5 py-4 text-white"
                  placeholder="Describe your goals, required features, and any inspiration..."
                />
              </div>

              <motion.button
                variants={scaleUp}
                type="submit"
                disabled={isSubmitting}
                whileHover={isSubmitting ? undefined : { scale: 1.02 }}
                whileTap={isSubmitting ? undefined : { scale: 0.98 }}
                className="group relative flex w-full items-center justify-center gap-3 overflow-hidden rounded-2xl bg-primary py-4 font-bold text-white shadow-[0_15px_35px_rgba(255,140,75,0.3)] transition-all disabled:opacity-70"
              >
                {isSubmitting ? (
                  <LoaderCircle className="h-5 w-5 animate-spin" />
                ) : (
                  <Send className="h-5 w-5 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
                )}
                {isSubmitting ? "Generating Email..." : "Send Quote Request"}
              </motion.button>

              {isSubmitted && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="rounded-xl border border-emerald-500/20 bg-emerald-500/10 p-4 text-center text-sm text-emerald-200"
                >
                  Request prepared! Opening your mail client...
                </motion.div>
              )}
            </form>
          </motion.div>

          {/* Q&A Side */}
          <motion.div variants={staggerFast} initial="hidden" whileInView="show" viewport={viewportOnce} className="flex flex-col gap-6">
            <div className="glass motion-border mb-4 rounded-3xl border border-white/10 p-8">
              <div className="icon-highlight mb-4 flex h-14 w-14 items-center justify-center rounded-2xl">
                <HelpCircle className="h-7 w-7 text-primary" />
              </div>
              <h3 className="text-2xl font-bold text-white">Freelancing Q&A</h3>
              <p className="mt-3 text-white/70">Find quick answers to common questions about how I work and what you can expect.</p>
            </div>

            <div className="space-y-4">
              {freelancingFaqs.map((faq, index) => (
                <motion.div key={index} variants={fadeUp}>
                  <FaqItem
                    item={faq}
                    isOpen={openFaq === index}
                    onClick={() => setOpenFaq(openFaq === index ? -1 : index)}
                  />
                </motion.div>
              ))}
            </div>

            <div className="mt-auto rounded-3xl border border-dashed border-white/20 p-8 text-center">
              <p className="text-sm font-medium text-white/60 italic">
                &quot;Don&apos;t see your question? Drop it in the form, and I&apos;ll get back to you within 24 hours.&quot;
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </motion.section>
  )
}
