"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { ChevronDown, Send } from "lucide-react"
import { profile } from "@/data/site-content"
import { fadeUp, scaleUp, staggerContainer } from "@/lib/motion"

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
    answer: "Most web builds take 1-2 weeks, while full-stack MERN applications or complex automation systems usually take 3-5 weeks depending on requirements."
  },
  {
    question: "Do you offer fixed-price or hourly rates?",
    answer: "I prefer fixed-price contracts for well-defined projects to ensure transparency, but I am open to hourly rates for ongoing maintenance or R&D work."
  },
  {
    question: "Can you help with deployment and server setup?",
    answer: "Yes, I handle full deployment to platforms like Vercel, Netlify, Railway, or VPS servers, and I can set up automated deployment workflows."
  },
  {
    question: "Do you provide post-launch support?",
    answer: "Absolutely. I provide support after launch for any debugging, and I offer long-term maintenance packages for feature updates."
  }
]

function FaqItem({ item, isOpen, onClick }) {
  return (
    <div className="rounded-2xl border border-white/10 bg-[#141417] overflow-hidden transition-all hover:border-white/20">
      <button
        onClick={onClick}
        className="flex w-full items-center justify-between p-5 text-left transition-colors hover:bg-white/5"
      >
        <span className="font-heading text-sm font-bold text-white uppercase tracking-wider">{item.question}</span>
        <motion.span
          animate={{ rotate: isOpen ? 180 : 0 }}
          transition={{ duration: 0.3 }}
          className="text-[#D84B20]"
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
            transition={{ duration: 0.3 }}
          >
            <div className="px-5 pb-5 text-xs text-zinc-400 font-medium leading-relaxed border-t border-white/10 pt-3">
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
    await new Promise((resolve) => setTimeout(resolve, 800))
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
    <section id="quote" className="relative py-28 bg-[#0A0A0C] text-white">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.15 }}
          className="grid gap-12 lg:grid-cols-12 items-start"
        >
          {/* FAQ Column */}
          <div className="lg:col-span-6 space-y-6">
            <div className="framer-badge bg-white/10 text-white border-white/20">
              <span>✽ FREQUENTLY ASKED QUESTIONS</span>
            </div>

            <h2 className="font-heading text-3xl sm:text-5xl font-extrabold uppercase tracking-tight text-white">
              PROJECT <span className="text-[#D84B20]">DETAILS</span> & FAQ
            </h2>

            <p className="text-zinc-400 text-sm font-medium leading-relaxed">
              Common questions regarding project scoping, development timelines, fixed-rate pricing, and post-launch support.
            </p>

            <div className="space-y-4 pt-4">
              {freelancingFaqs.map((item, idx) => (
                <FaqItem
                  key={item.question}
                  item={item}
                  isOpen={openFaq === idx}
                  onClick={() => setOpenFaq(openFaq === idx ? -1 : idx)}
                />
              ))}
            </div>
          </div>

          {/* Form Column */}
          <div className="lg:col-span-6">
            <motion.div variants={scaleUp} className="p-8 rounded-3xl bg-[#141417] border border-white/10 space-y-6">
              <h3 className="font-heading text-xl font-bold uppercase text-white">Request a Custom Quote</h3>
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid gap-4 sm:grid-cols-2">
                  <input
                    type="text"
                    name="name"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Your Name *"
                    className="rounded-xl bg-[#1E1E24] border border-white/10 px-4 py-3 text-xs text-white placeholder:text-zinc-500 focus:border-[#D84B20] focus:outline-none"
                  />
                  <input
                    type="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="Your Email *"
                    className="rounded-xl bg-[#1E1E24] border border-white/10 px-4 py-3 text-xs text-white placeholder:text-zinc-500 focus:border-[#D84B20] focus:outline-none"
                  />
                </div>

                <div className="grid gap-4 sm:grid-cols-2">
                  <input
                    type="text"
                    name="projectType"
                    value={formData.projectType}
                    onChange={handleChange}
                    placeholder="Project Type (e.g. MERN App)"
                    className="rounded-xl bg-[#1E1E24] border border-white/10 px-4 py-3 text-xs text-white placeholder:text-zinc-500 focus:border-[#D84B20] focus:outline-none"
                  />
                  <input
                    type="text"
                    name="budget"
                    value={formData.budget}
                    onChange={handleChange}
                    placeholder="Estimated Budget"
                    className="rounded-xl bg-[#1E1E24] border border-white/10 px-4 py-3 text-xs text-white placeholder:text-zinc-500 focus:border-[#D84B20] focus:outline-none"
                  />
                </div>

                <textarea
                  name="description"
                  required
                  rows={4}
                  value={formData.description}
                  onChange={handleChange}
                  placeholder="Project details & scope..."
                  className="w-full rounded-xl bg-[#1E1E24] border border-white/10 px-4 py-3 text-xs text-white placeholder:text-zinc-500 focus:border-[#D84B20] focus:outline-none resize-none"
                />

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full flex items-center justify-center gap-2 rounded-xl bg-[#D84B20] py-3.5 text-xs font-bold text-white uppercase tracking-wider hover:bg-[#C43F16] transition-colors shadow-lg"
                >
                  <Send size={14} />
                  <span>{isSubmitting ? "Submitting..." : "Send Request"}</span>
                </button>
              </form>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
