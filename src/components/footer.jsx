"use client"

import { motion } from "framer-motion"
import Link from "next/link"
import { Github, Linkedin, Mail, Heart } from "lucide-react"
import { navItems, profile, socialLinks } from "@/data/site-content"
import { fadeUp, staggerContainer, staggerFast, viewportOnce } from "@/lib/motion"

const footerSocialLinks = [
  { icon: Linkedin, href: socialLinks[0]?.href, label: "LinkedIn" },
  { icon: Mail, href: `mailto:${profile.email}`, label: "Email" },
  { icon: Github, href: socialLinks[1]?.href, label: "GitHub" },
]

export function Footer() {
  return (
    <footer className="relative overflow-hidden border-t border-white/10 bg-[#071225]">
      <div className="absolute bottom-0 left-1/2 h-[22rem] w-[min(90vw,50rem)] -translate-x-1/2 rounded-full bg-accent/10 blur-3xl" />

      <motion.div className="relative z-10 mx-auto max-w-7xl px-4 py-14 sm:px-6 sm:py-16" initial="hidden" whileInView="show" viewport={viewportOnce} variants={staggerContainer}>
        <div className="mb-12 grid gap-9 sm:gap-10 md:grid-cols-2 lg:grid-cols-4 lg:gap-12">
          <motion.div variants={fadeUp} className="lg:col-span-1">
            <Link href="/" className="inline-block cursor-pointer text-2xl font-bold gradient-text">
              {profile.brand}
            </Link>
            <p className="mb-6 mt-4 leading-relaxed text-white/88">
              {profile.title} from {profile.location}, focused on scalable MERN applications, Selenium automation, AI-powered resume tools, REST APIs, and responsive software websites.
            </p>
            <motion.div variants={staggerFast} className="flex gap-3">
              {footerSocialLinks.map((social) => (
                <motion.a
                  key={social.label}
                  href={social.href}
                  target={social.href.startsWith("http") ? "_blank" : undefined}
                  rel={social.href.startsWith("http") ? "noopener noreferrer" : undefined}
                  className="icon-highlight flex h-10 w-10 items-center justify-center rounded-full transition-colors hover:scale-105"
                  variants={fadeUp}
                  whileHover={{ scale: 1.12, y: -4, rotate: -4 }}
                  whileTap={{ scale: 0.9 }}
                  aria-label={social.label}
                >
                  <social.icon size={18} />
                </motion.a>
              ))}
            </motion.div>
          </motion.div>

          <motion.div variants={fadeUp}>
            <h4 className="mb-4 font-semibold text-white">Pages</h4>
            <ul className="space-y-3">
              {navItems.slice(0, 3).map((link) => (
                <li key={link.name}>
                  <Link href={link.href} className="text-white/88 transition-colors hover:text-[#ffb067]">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>

          <motion.div variants={fadeUp}>
            <h4 className="mb-4 font-semibold text-white">More</h4>
            <ul className="space-y-3">
              {navItems.slice(3).map((link) => (
                <li key={link.name}>
                  <Link href={link.href} className="text-white/88 transition-colors hover:text-[#ffb067]">
                    {link.name}
                  </Link>
                </li>
              ))}
              <li>
                <a href={`mailto:${profile.email}`} className="text-white/88 transition-colors hover:text-[#ffb067]">
                  {profile.email}
                </a>
              </li>
            </ul>
          </motion.div>

          <motion.div variants={fadeUp}>
            <h4 className="mb-4 font-semibold text-white">Resume Details</h4>
            <div className="space-y-3 text-sm text-white/84">
              <p>1.7+ years in MERN stack and automation engineering</p>
              <p>React.js, Next.js, Node.js, Express.js, MongoDB, Python, Selenium</p>
              <p>Microsoft Azure and Advanced MERN Stack with Generative AI</p>
              <a href={`tel:${profile.phone}`} className="inline-flex text-white/88 transition-colors hover:text-[#ffb067]">{profile.phone}</a>
            </div>
          </motion.div>
        </div>

        <motion.div variants={fadeUp} className="flex flex-col items-center justify-between gap-4 border-t border-white/10 pt-8 text-center text-sm text-white/80 md:flex-row md:text-left">
          <p className="flex items-center gap-1">
            {new Date().getFullYear()} {profile.brand}. Made with <Heart size={14} className="text-accent" />
          </p>
          <div className="flex flex-wrap justify-center gap-4 sm:gap-6 md:justify-end">
            <a href={profile.resumeUrl} download className="text-white/88 transition-colors hover:text-[#ffb067]">Download Resume</a>
            <a href={`mailto:${profile.email}`} className="text-white/88 transition-colors hover:text-[#ffb067]">Email</a>
            <Link href="/testimonials" className="text-white/88 transition-colors hover:text-[#ffb067]">Testimonials</Link>
            <Link href="/contact" className="text-white/88 transition-colors hover:text-[#ffb067]">Contact</Link>
          </div>
        </motion.div>
      </motion.div>
    </footer>
  )
}
