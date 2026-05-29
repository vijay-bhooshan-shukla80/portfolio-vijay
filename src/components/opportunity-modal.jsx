"use client"

import { AnimatePresence, motion, useReducedMotion } from "framer-motion"
import { Download, Mail, X } from "lucide-react"
import Link from "next/link"
import { profile } from "@/data/site-content"

export function OpportunityModal({ isOpen, onClose }) {
  const prefersReducedMotion = useReducedMotion()

  const backdropVariants = prefersReducedMotion
    ? {
        hidden: { opacity: 0 },
        visible: { opacity: 1 },
        exit: { opacity: 0 },
      }
    : {
        hidden: { opacity: 0, backdropFilter: "blur(0px)" },
        visible: { opacity: 1, backdropFilter: "blur(18px)" },
        exit: { opacity: 0, backdropFilter: "blur(0px)" },
      }

  const modalVariants = prefersReducedMotion
    ? {
        hidden: { opacity: 0 },
        visible: { opacity: 1 },
        exit: { opacity: 0 },
      }
    : {
        hidden: { opacity: 0, scale: 0.92, y: 28 },
        visible: {
          opacity: 1,
          scale: 1,
          y: 0,
          transition: { duration: 0.45, ease: [0.22, 1, 0.36, 1] },
        },
        exit: {
          opacity: 0,
          scale: 0.96,
          y: 18,
          transition: { duration: 0.24, ease: "easeInOut" },
        },
      }

  return (
    <AnimatePresence>
      {isOpen ? (
        <motion.div
          className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6"
          initial="hidden"
          animate="visible"
          exit="exit"
        >
          <motion.button
            type="button"
            aria-label="Close opportunity modal"
            className="opportunity-backdrop absolute inset-0"
            variants={backdropVariants}
            onClick={onClose}
          />

          <motion.div
            role="dialog"
            aria-modal="true"
            aria-labelledby="opportunity-modal-title"
            variants={modalVariants}
            className="opportunity-modal-shell relative z-[101] w-full max-w-xl"
          >
            <div className="opportunity-modal-glow absolute inset-0 rounded-[2rem]" />
            <div className="opportunity-modal-card relative overflow-hidden rounded-[2rem] p-5 sm:p-7">
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(255,196,107,0.18),transparent_34%),radial-gradient(circle_at_bottom_right,rgba(198,140,255,0.2),transparent_38%)]" />
              <div className="absolute -left-10 top-10 h-24 w-24 rounded-full bg-primary/20 blur-3xl" />
              <div className="absolute -right-8 bottom-2 h-28 w-28 rounded-full bg-accent/18 blur-3xl" />

              <button
                type="button"
                onClick={onClose}
                className="absolute right-4 top-4 z-10 flex h-11 w-11 items-center justify-center rounded-full border border-white/12 bg-white/[0.06] text-white/88 transition-all hover:scale-105 hover:bg-white/[0.1] hover:text-white"
                aria-label="Close popup"
              >
                <X size={18} />
              </button>

              <div className="relative pr-12">
                <div className="mb-4 inline-flex items-center rounded-full border border-primary/30 bg-white/[0.06] px-4 py-2 text-xs font-semibold uppercase tracking-[0.28em] text-white/80">
                  Open to work
                </div>

                <h2 id="opportunity-modal-title" className="text-2xl font-bold text-white sm:text-3xl">
                  🚀 Available for Opportunities
                </h2>

                <p className="mt-4 max-w-lg text-sm leading-7 text-white/82 sm:text-base">
                  Automation Engineer and MERN Stack Developer with 1.7+ years of experience building React.js
                  interfaces, Node.js and Express.js APIs, MongoDB apps, Python automation, Selenium workflows, and
                  AI-powered platforms.
                </p>

                <div className="mt-6 grid gap-3 text-sm text-white/74 sm:grid-cols-2">
                  <div className="rounded-2xl border border-white/10 bg-white/[0.04] px-4 py-3">React.js, Next.js, Node.js, MongoDB</div>
                  <div className="rounded-2xl border border-white/10 bg-white/[0.04] px-4 py-3">Python, Selenium, REST APIs, AI tools</div>
                </div>

                <div className="mt-7 flex flex-col gap-3 sm:flex-row">
                  <motion.a
                    href={profile.resumeUrl}
                    download
                    whileHover={prefersReducedMotion ? undefined : { y: -3, scale: 1.02 }}
                    whileTap={prefersReducedMotion ? undefined : { scale: 0.98 }}
                    className="inline-flex flex-1 items-center justify-center gap-2 rounded-2xl bg-primary px-5 py-3.5 font-semibold text-white shadow-[0_14px_38px_rgba(255,140,75,0.32)]"
                  >
                    <Download size={18} />
                    View Resume
                  </motion.a>

                  <motion.div whileHover={prefersReducedMotion ? undefined : { y: -3, scale: 1.02 }} whileTap={prefersReducedMotion ? undefined : { scale: 0.98 }} className="flex-1">
                    <Link
                      href="/contact"
                      onClick={onClose}
                      className="inline-flex w-full items-center justify-center gap-2 rounded-2xl border border-white/12 bg-white/[0.06] px-5 py-3.5 font-semibold text-white transition-colors hover:bg-white/[0.1]"
                    >
                      <Mail size={18} />
                      Contact Me
                    </Link>
                  </motion.div>
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      ) : null}
    </AnimatePresence>
  )
}
