"use client"

import { motion, useReducedMotion } from "framer-motion"
import { Download, Mail } from "lucide-react"
import Link from "next/link"
import { GlassModal } from "@/components/glass-modal"
import { profile } from "@/data/site-content"
import { buttonTap, iconBounce } from "@/lib/motion"

export function OpportunityPopup({ isOpen, onClose }) {
  const prefersReducedMotion = useReducedMotion()

  return (
    <GlassModal isOpen={isOpen} onClose={onClose} titleId="opportunity-modal-title" panelClassName="max-w-xl">
      <div className="pr-12">
        <div className="mb-4 inline-flex items-center rounded-full border border-primary/30 bg-white/[0.06] px-4 py-2 text-xs font-semibold uppercase tracking-[0.28em] text-white/80">
          Open to work
        </div>

        <h2 id="opportunity-modal-title" className="text-2xl font-bold text-white sm:text-3xl">
          {"\uD83D\uDE80 Available for Opportunities"}
        </h2>

        <p className="mt-4 max-w-lg text-sm leading-7 text-white/82 sm:text-base">
          Automation Engineer and MERN Stack Developer with 1.7+ years of experience building React.js interfaces,
          Node.js and Express.js APIs, MongoDB apps, Python automation, Selenium workflows, and AI-powered platforms.
        </p>

        <div className="mt-6 grid gap-3 text-sm text-white/74 sm:grid-cols-2">
          <div className="rounded-2xl border border-white/10 bg-white/[0.04] px-4 py-3">React.js, Next.js, Node.js, MongoDB</div>
          <div className="rounded-2xl border border-white/10 bg-white/[0.04] px-4 py-3">Python, Selenium, REST APIs, AI tools</div>
        </div>

        <div className="mt-7 flex flex-col gap-3 sm:flex-row">
          <motion.a
            href={profile.resumeUrl}
            download
            {...buttonTap}
            whileHover={prefersReducedMotion ? undefined : { y: -3, scale: 1.02 }}
            whileTap={prefersReducedMotion ? undefined : { scale: 0.98 }}
            className="inline-flex flex-1 items-center justify-center gap-2 rounded-2xl bg-primary px-5 py-3.5 font-semibold text-white shadow-[0_14px_38px_rgba(255,140,75,0.32)]"
          >
            <motion.span variants={iconBounce} initial="rest" whileHover="hover"><Download size={18} /></motion.span>
            View Resume
          </motion.a>

          <motion.div {...buttonTap} whileHover={prefersReducedMotion ? undefined : { y: -3, scale: 1.02 }} whileTap={prefersReducedMotion ? undefined : { scale: 0.98 }} className="flex-1">
            <Link
              href="/contact"
              onClick={onClose}
              className="inline-flex w-full items-center justify-center gap-2 rounded-2xl border border-white/12 bg-white/[0.06] px-5 py-3.5 font-semibold text-white transition-colors hover:bg-white/[0.1]"
            >
              <motion.span variants={iconBounce} initial="rest" whileHover="hover"><Mail size={18} /></motion.span>
              Contact Me
            </Link>
          </motion.div>
        </div>
      </div>
    </GlassModal>
  )
}
