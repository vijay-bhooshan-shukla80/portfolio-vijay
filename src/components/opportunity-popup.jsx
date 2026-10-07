"use client"

import { motion } from "framer-motion"
import { Download, Mail } from "lucide-react"
import { Link } from "react-router-dom"
import { GlassModal } from "@/components/glass-modal"
import { profile } from "@/data/site-content"
import { buttonTap } from "@/lib/motion"

export function OpportunityPopup({ isOpen, onClose }) {
  return (
    <GlassModal isOpen={isOpen} onClose={onClose} titleId="opportunity-modal-title" panelClassName="max-w-xl">
      <div className="space-y-4 text-white">
        <div className="framer-badge">
          <span>✽ AVAILABLE FOR OPPORTUNITIES</span>
        </div>

        <h2 id="opportunity-modal-title" className="font-heading text-2xl sm:text-3xl font-bold">
          🚀 Open for High-Impact Projects
        </h2>

        <p className="text-sm leading-relaxed text-zinc-300 font-medium">
          Full Stack Developer, AI Automation Engineer, and Prompt Engineer with 2 years of experience building React interfaces,
          Node.js/Express APIs, MongoDB platforms, Python Selenium browser automation, and AI tools.
        </p>

        <div className="grid gap-3 text-xs text-zinc-300 font-semibold sm:grid-cols-2 pt-2">
          <div className="rounded-xl border border-white/10 bg-white/5 px-4 py-3">React.js, Next.js, Node.js, MongoDB</div>
          <div className="rounded-xl border border-white/10 bg-white/5 px-4 py-3">Python, Selenium, n8n, AI APIs</div>
        </div>

        <div className="pt-4 flex flex-col gap-3 sm:flex-row">
          <motion.a
            href={profile.resumeUrl}
            target="_blank"
            rel="noopener noreferrer"
            {...buttonTap}
            className="inline-flex flex-1 items-center justify-center gap-2 rounded-xl bg-[#D84B20] px-5 py-3.5 font-bold text-white shadow-lg hover:bg-[#C43F16] transition-colors text-sm"
          >
            <Download size={18} />
            <span>Download Resume</span>
          </motion.a>

          <motion.div {...buttonTap} className="flex-1">
            <Link
              to="/contact"
              onClick={onClose}
              className="inline-flex w-full items-center justify-center gap-2 rounded-xl border border-white/20 bg-white/10 px-5 py-3.5 font-bold text-white hover:bg-white/20 transition-colors text-sm"
            >
              <Mail size={18} />
              <span>Contact Me</span>
            </Link>
          </motion.div>
        </div>
      </div>
    </GlassModal>
  )
}
