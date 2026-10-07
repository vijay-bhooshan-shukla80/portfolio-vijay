"use client"

import { useEffect, useState } from "react"
import { Link, useLocation } from "react-router-dom"
import { AnimatePresence, motion } from "framer-motion"
import { Menu, X, ArrowUpRight } from "lucide-react"

export function Navbar() {
  const location = useLocation()
  const pathname = location.pathname
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "Who We Are", href: "/about" },
    { name: "Services", href: "/services" },
    { name: "Projects", href: "/projects" },
    { name: "Testimonials", href: "/testimonials" },
    { name: "Contact", href: "/contact" },
  ]

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 30)
    }

    handleScroll()
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  useEffect(() => {
    setIsMobileMenuOpen(false)
  }, [pathname])

  return (
    <motion.header
      initial={{ y: -80 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-[#D84B20]/90 backdrop-blur-md border-b border-white/15 py-4 shadow-lg"
          : "bg-transparent py-6"
      }`}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 lg:px-10">
        {/* Brand / Logo (Reference: Portfoliob®) */}
        <Link to="/" className="font-heading text-xl font-bold tracking-tight text-white hover:opacity-90 transition-opacity">
          Vijay Bhooshan Shukla®
        </Link>

        {/* Desktop Nav Items */}
        <nav className="hidden items-center gap-6 lg:gap-8 md:flex">
          {navLinks.map((item) => (
            <Link
              key={item.name}
              to={item.href}
              className="text-sm font-semibold text-white/90 hover:text-white transition-colors tracking-wide"
            >
              {item.name}
            </Link>
          ))}
        </nav>

        {/* Right Hamburger Icon (Reference: 2 Horizontal Lines) */}
        <div className="flex items-center gap-4">
          <Link
            to="/contact"
            className="hidden sm:inline-flex items-center gap-1.5 rounded-full border border-white/30 bg-white/10 px-4 py-2 text-xs font-bold text-white uppercase tracking-wider backdrop-blur-sm hover:bg-white hover:text-[#D84B20] transition-all"
          >
            <span>Let's Talk</span>
            <ArrowUpRight size={14} />
          </Link>

          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="flex h-10 w-10 items-center justify-center text-white md:hidden"
            aria-label="Toggle Navigation"
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="overflow-hidden bg-[#C43F16] border-b border-white/20 md:hidden"
          >
            <div className="flex flex-col gap-4 p-6 text-white font-heading">
              {navLinks.map((item) => (
                <Link
                  key={item.name}
                  to={item.href}
                  className="text-xl font-bold hover:opacity-80 transition-opacity"
                >
                  {item.name}
                </Link>
              ))}
              <Link
                to="/contact"
                className="mt-2 inline-flex items-center justify-center gap-2 rounded-xl bg-white py-3 text-center text-sm font-bold text-[#D84B20]"
              >
                <span>Let's Talk</span>
                <ArrowUpRight size={16} />
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  )
}
