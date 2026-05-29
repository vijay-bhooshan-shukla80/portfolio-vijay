"use client"

import { AnimatePresence, motion, useReducedMotion } from "framer-motion"
import { X } from "lucide-react"
import { useEffect } from "react"
import { buttonTap, modalBackdrop, modalPanel } from "@/lib/motion"

export function GlassModal({ isOpen, onClose, titleId, children, panelClassName = "max-w-2xl" }) {
  const prefersReducedMotion = useReducedMotion()

  const backdropVariants = prefersReducedMotion
    ? { hidden: { opacity: 0 }, show: { opacity: 1 }, exit: { opacity: 0 } }
    : modalBackdrop

  const panelVariants = prefersReducedMotion
    ? { hidden: { opacity: 0 }, show: { opacity: 1 }, exit: { opacity: 0 } }
    : modalPanel

  useEffect(() => {
    if (!isOpen) {
      return undefined
    }

    const previousOverflow = document.body.style.overflow
    const handleKeyDown = (event) => {
      if (event.key === "Escape") {
        onClose()
      }
    }

    document.body.style.overflow = "hidden"
    window.addEventListener("keydown", handleKeyDown)

    return () => {
      document.body.style.overflow = previousOverflow
      window.removeEventListener("keydown", handleKeyDown)
    }
  }, [isOpen, onClose])

  return (
    <AnimatePresence>
      {isOpen ? (
        <motion.div className="fixed inset-0 z-[100] flex items-center justify-center p-3 sm:p-6" initial="hidden" animate="show" exit="exit">
          <motion.button type="button" aria-label="Close modal overlay" className="opportunity-backdrop absolute inset-0" variants={backdropVariants} onClick={onClose} />

          <motion.div
            role="dialog"
            aria-modal="true"
            aria-labelledby={titleId}
            variants={panelVariants}
            className={`opportunity-modal-shell relative z-[101] max-h-[calc(100dvh-1.5rem)] w-full overflow-hidden ${panelClassName}`}
          >
            <div className="opportunity-modal-glow absolute inset-0 rounded-[2rem]" />
            <div className="opportunity-modal-card relative max-h-[calc(100dvh-1.5rem)] overflow-y-auto rounded-[1.35rem] p-4 sm:rounded-[2rem] sm:p-7">
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(255,196,107,0.18),transparent_34%),radial-gradient(circle_at_bottom_right,rgba(198,140,255,0.2),transparent_38%)]" />
              <div className="absolute -left-10 top-10 h-24 w-24 rounded-full bg-primary/20 blur-3xl" />
              <div className="absolute -right-8 bottom-2 h-28 w-28 rounded-full bg-accent/18 blur-3xl" />

              <motion.button
                type="button"
                onClick={onClose}
                {...buttonTap}
                className="absolute right-3 top-3 z-10 flex h-11 w-11 items-center justify-center rounded-full border border-white/12 bg-white/[0.06] text-white/88 transition-all hover:scale-105 hover:bg-white/[0.1] hover:text-white sm:right-4 sm:top-4"
                aria-label="Close popup"
              >
                <X size={18} />
              </motion.button>

              <div className="relative">{children}</div>
            </div>
          </motion.div>
        </motion.div>
      ) : null}
    </AnimatePresence>
  )
}
