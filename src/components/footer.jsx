"use client"

import { Link } from "react-router-dom"
import { ArrowUp, Github, Linkedin, Mail } from "lucide-react"
import { profile } from "@/data/site-content"

export function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" })
  }

  return (
    <footer className="relative bg-[#0A0A0C] text-white border-t border-white/10 pt-16 pb-12 overflow-hidden">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-4 pb-12 border-b border-white/10">
          {/* Brand */}
          <div className="space-y-4">
            <Link to="/" className="font-heading text-2xl font-bold tracking-tight text-white block">
              Vijay Bhooshan Shukla®
            </Link>
            <p className="text-xs text-zinc-400 leading-relaxed font-medium">
              Full Stack Developer | AI Automation Engineer | Prompt Engineer with 2 years of experience in MERN Stack, Python browser automation, AI web tools, and production server deployment.
            </p>
          </div>

          {/* Nav */}
          <div className="space-y-3">
            <h4 className="font-heading text-xs font-bold uppercase tracking-wider text-zinc-300">Navigation</h4>
            <ul className="space-y-2 text-xs font-semibold text-zinc-400">
              <li><Link to="/" className="hover:text-[#D84B20] transition-colors">Home</Link></li>
              <li><Link to="/about" className="hover:text-[#D84B20] transition-colors">Who We Are</Link></li>
              <li><Link to="/services" className="hover:text-[#D84B20] transition-colors">Services</Link></li>
              <li><Link to="/projects" className="hover:text-[#D84B20] transition-colors">Projects</Link></li>
              <li><Link to="/testimonials" className="hover:text-[#D84B20] transition-colors">Testimonials</Link></li>
              <li><Link to="/contact" className="hover:text-[#D84B20] transition-colors">Contact</Link></li>
            </ul>
          </div>

          {/* Tech */}
          <div className="space-y-3">
            <h4 className="font-heading text-xs font-bold uppercase tracking-wider text-zinc-300">Stack</h4>
            <ul className="space-y-2 text-xs font-semibold text-zinc-400">
              <li>React.js & Next.js</li>
              <li>Node.js, Express & MongoDB</li>
              <li>Python & Selenium Automation</li>
              <li>Generative AI & Prompt Engineering</li>
            </ul>
          </div>

          {/* Connect */}
          <div className="space-y-3">
            <h4 className="font-heading text-xs font-bold uppercase tracking-wider text-zinc-300">Connect</h4>
            <div className="flex gap-2">
              <a
                href={profile.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="h-10 w-10 rounded-xl bg-[#141417] border border-white/10 flex items-center justify-center text-zinc-300 hover:bg-[#D84B20] hover:text-white hover:border-[#D84B20] transition-all"
                aria-label="LinkedIn"
              >
                <Linkedin size={18} />
              </a>
              <a
                href={profile.github}
                target="_blank"
                rel="noopener noreferrer"
                className="h-10 w-10 rounded-xl bg-[#141417] border border-white/10 flex items-center justify-center text-zinc-300 hover:bg-[#D84B20] hover:text-white hover:border-[#D84B20] transition-all"
                aria-label="GitHub"
              >
                <Github size={18} />
              </a>
              <a
                href={`mailto:${profile.email}`}
                className="h-10 w-10 rounded-xl bg-[#141417] border border-white/10 flex items-center justify-center text-zinc-300 hover:bg-[#D84B20] hover:text-white hover:border-[#D84B20] transition-all"
                aria-label="Email"
              >
                <Mail size={18} />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-zinc-500 font-semibold">
          <p>© {new Date().getFullYear()} Vijay Bhooshan Shukla. All rights reserved.</p>

          <button
            onClick={scrollToTop}
            className="flex items-center gap-2 text-zinc-300 hover:text-[#D84B20] transition-all"
          >
            <span>Back to top</span>
            <ArrowUp size={14} />
          </button>
        </div>
      </div>
    </footer>
  )
}
