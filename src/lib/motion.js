export const easing = [0.22, 1, 0.36, 1]

export const viewportOnce = { once: true, amount: 0.12, margin: "-20px 0px" }

export const sectionViewport = { once: true, amount: 0.08 }

export const smoothSpring = {
  type: "spring",
  stiffness: 260,
  damping: 24,
}

export const sectionReveal = {
  initial: { opacity: 0, y: 46 },
  whileInView: { opacity: 1, y: 0 },
  viewport: sectionViewport,
  transition: { duration: 0.72, ease: easing },
}

export const staggerContainer = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.12,
      delayChildren: 0.08,
    },
  },
}

export const staggerFast = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.08,
      delayChildren: 0.04,
    },
  },
}

export const staggerItem = {
  hidden: { opacity: 0, y: 24 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: easing },
  },
}

export const fadeUp = {
  hidden: { opacity: 0, y: 28 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: easing },
  },
}

export const fadeIn = {
  hidden: { opacity: 0, y: 18 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.62, ease: easing },
  },
}

export const fadeDown = {
  hidden: { opacity: 0, y: -28 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: easing },
  },
}

export const slideUp = fadeUp

export const slideDown = fadeDown

export const slideLeft = {
  hidden: { opacity: 0, x: -28 },
  show: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.7, ease: easing },
  },
}

export const slideRight = {
  hidden: { opacity: 0, x: 28 },
  show: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.7, ease: easing },
  },
}

export const scaleIn = {
  hidden: { opacity: 0, scale: 0.94, y: 16 },
  show: {
    opacity: 1,
    scale: 1,
    y: 0,
    transition: { duration: 0.65, ease: easing },
  },
}

export const scaleUp = {
  hidden: { opacity: 0, scale: 0.88, y: 24 },
  show: {
    opacity: 1,
    scale: 1,
    y: 0,
    transition: { duration: 0.7, ease: easing },
  },
}

export const fadeLeft = slideLeft

export const fadeRight = slideRight

export const slideIn = (direction = "left", distance = 32) => ({
  hidden: {
    opacity: 0,
    x: direction === "left" ? -distance : direction === "right" ? distance : 0,
    y: direction === "up" ? distance : direction === "down" ? -distance : 0,
  },
  show: {
    opacity: 1,
    x: 0,
    y: 0,
    transition: { duration: 0.7, ease: easing },
  },
})

export const pageReveal = {
  hidden: { opacity: 0, y: 28, scale: 0.992 },
  show: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: 0.62, ease: easing },
  },
  exit: {
    opacity: 0,
    y: 16,
    transition: { duration: 0.22, ease: "easeInOut" },
  },
}

export const buttonTap = {
  whileHover: { scale: 1.045, y: -2 },
  whileTap: { scale: 0.95 },
}

export const iconBounce = {
  rest: { y: 0, scale: 1 },
  hover: {
    y: [0, -4, 0],
    scale: 1.06,
    transition: { duration: 0.35, ease: easing },
  },
}

export const blurIn = {
  hidden: { opacity: 0, filter: "blur(12px)", y: 20 },
  show: {
    opacity: 1,
    filter: "blur(0px)",
    y: 0,
    transition: { duration: 0.75, ease: easing },
  },
}

export const clipReveal = {
  hidden: { opacity: 0, clipPath: "inset(100% 0% 0% 0%)" },
  show: {
    opacity: 1,
    clipPath: "inset(0% 0% 0% 0%)",
    transition: { duration: 0.85, ease: easing },
  },
}

export const modalBackdrop = {
  hidden: { opacity: 0, backdropFilter: "blur(0px)" },
  show: {
    opacity: 1,
    backdropFilter: "blur(18px)",
    transition: { duration: 0.24, ease: easing },
  },
  exit: { opacity: 0, backdropFilter: "blur(0px)", transition: { duration: 0.2, ease: "easeInOut" } },
}

export const modalPanel = {
  hidden: { opacity: 0, scale: 0.92, y: 28 },
  show: {
    opacity: 1,
    scale: 1,
    y: 0,
    transition: { duration: 0.38, ease: easing },
  },
  exit: {
    opacity: 0,
    scale: 0.96,
    y: 18,
    transition: { duration: 0.22, ease: "easeInOut" },
  },
}

