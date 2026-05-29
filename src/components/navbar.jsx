"use client"

import { AnimatePresence, motion } from "framer-motion"
import { Menu, X, Download } from "lucide-react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { useEffect, useState } from "react"
import { navItems, profile, socialLinks } from "@/data/site-content"
import { buttonTap, iconBounce } from "@/lib/motion"

export function Navbar() {
  const pathname = usePathname()
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [activeSection, setActiveSection] = useState(pathname === "/" ? "Home" : "")
  const primaryNavItems = navItems.slice(0, 5)
  const trailingNavItems = navItems.slice(5)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 24)
    }

    handleScroll()
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  useEffect(() => {
    if (pathname !== "/") {
      setActiveSection(navItems.find((item) => item.href === pathname)?.name ?? "")
      return undefined
    }

    const sectionMap = [
      { id: "home", name: "Home" },
      { id: "services", name: "Services" },
      { id: "projects", name: "Projects" },
      { id: "testimonials", name: "Testimonials" },
      { id: "get-quote", name: "Quote" },
      { id: "resume", name: "Resume" },
      { id: "contact", name: "Contact" },
    ]

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((left, right) => right.intersectionRatio - left.intersectionRatio)[0]

        if (visible?.target?.id) {
          const matchedSection = sectionMap.find((section) => section.id === visible.target.id)
          if (matchedSection) {
            setActiveSection(matchedSection.name)
          }
        }
      },
      { threshold: [0.3, 0.6], rootMargin: "-20% 0px -35% 0px" },
    )

    sectionMap.forEach((section) => {
      const element = document.getElementById(section.id)
      if (element) {
        observer.observe(element)
      }
    })

    return () => observer.disconnect()
  }, [pathname])

  useEffect(() => {
    setIsMobileMenuOpen(false)
  }, [pathname])

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "border-b border-white/8 bg-[#07162b]/70 py-3 shadow-[0_18px_48px_rgba(2,8,24,0.24)] backdrop-blur-xl sm:py-4"
          : "bg-transparent py-4 sm:py-6"
      }`}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-3 px-4 sm:px-6">
        <Link href="/" className="cursor-pointer">
          <motion.div className="max-w-[12rem] truncate text-base font-bold gradient-text sm:max-w-none sm:text-xl" {...buttonTap}>
            {profile.brand}
          </motion.div>
        </Link>

        <div className="hidden items-center gap-2 lg:gap-4 md:flex">
          {primaryNavItems.map((item, index) => {
            const active = pathname === "/" ? activeSection === item.name : pathname === item.href
            return (
              <motion.div
                key={item.name}
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.08 }}
              >
                <Link href={item.href} className={`group relative rounded-full px-3 py-1.5 text-sm font-medium transition-colors ${active ? "text-white" : "text-white/84 hover:text-white"}`}>
                  {active ? (
                    <motion.span
                      layoutId="active-nav-pill"
                      className="absolute inset-0 -z-10 rounded-full bg-white/[0.06] ring-1 ring-white/10"
                      transition={{ type: "spring", stiffness: 320, damping: 28 }}
                    />
                  ) : null}
                  {item.name}
                </Link>
              </motion.div>
            )
          })}

          {socialLinks.map((item, index) => (
            <motion.a
              key={item.name}
              href={item.href}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: (primaryNavItems.length + index) * 0.08 }}
              className="group relative rounded-full px-3 py-1.5 text-sm font-medium text-white/84 transition-colors hover:text-white"
              {...buttonTap}
            >
              {item.name}
            </motion.a>
          ))}

          {trailingNavItems.map((item, index) => {
            const active = pathname === item.href
            return (
              <motion.div
                key={item.name}
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: (primaryNavItems.length + socialLinks.length + index) * 0.08 }}
              >
                <Link href={item.href} className={`group relative rounded-full px-3 py-1.5 text-sm font-medium transition-colors ${active ? "text-white" : "text-white/84 hover:text-white"}`}>
                  {active ? (
                    <motion.span
                      layoutId="active-nav-pill"
                      className="absolute inset-0 -z-10 rounded-full bg-white/[0.06] ring-1 ring-white/10"
                      transition={{ type: "spring", stiffness: 320, damping: 28 }}
                    />
                  ) : null}
                  {item.name}
                </Link>
              </motion.div>
            )
          })}
        </div>

        <div className="hidden items-center gap-3 md:flex">
          <motion.a 
            {...buttonTap} 
            href={profile.resumeUrl} 
            download 
            className="flex items-center gap-2 rounded-full bg-primary px-4 py-2 text-sm font-semibold text-white shadow-[0_12px_24px_rgba(255,140,75,0.25)] transition-all hover:opacity-100 whitespace-nowrap"
          >
            <Download size={14} />
            <span>Download CV</span>
          </motion.a>
        </div>

        <div className="flex shrink-0 items-center gap-2 sm:gap-3 md:hidden">
          <motion.button
            {...buttonTap}
            className="flex h-11 w-11 items-center justify-center rounded-full border border-white/10 bg-white/[0.04] text-white shadow-sm"
            onClick={() => setIsMobileMenuOpen((value) => !value)}
            aria-label="Toggle menu"
          >
            <motion.span variants={iconBounce} initial="rest" whileHover="hover">
              {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </motion.span>
          </motion.button>
        </div>
      </div>

      <AnimatePresence>
        {isMobileMenuOpen ? (
          <motion.div
            initial={{ opacity: 0, y: -16 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -12 }}
            transition={{ duration: 0.24, ease: "easeOut" }}
            className="mx-4 mt-3 max-h-[calc(100dvh-6rem)] overflow-y-auto rounded-2xl glass sm:mx-6 sm:mt-4 md:hidden"
          >
            <motion.div initial="hidden" animate="show" exit="hidden" variants={{ hidden: {}, show: { transition: { staggerChildren: 0.05 } } }} className="flex flex-col gap-3 p-6">
              {primaryNavItems.map((item) => (
                <motion.div key={item.name} variants={{ hidden: { opacity: 0, x: -16 }, show: { opacity: 1, x: 0 } }}>
                  <Link href={item.href} className={`block py-2 text-lg ${pathname === "/" ? activeSection === item.name ? "text-white" : "text-white/82" : pathname === item.href ? "text-white" : "text-white/82"}`}>
                    {item.name}
                  </Link>
                </motion.div>
              ))}
              {socialLinks.map((item) => (
                <motion.a
                  key={item.name}
                  href={item.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  variants={{ hidden: { opacity: 0, x: -16 }, show: { opacity: 1, x: 0 } }}
                  className="block py-2 text-lg text-white/82 transition-colors hover:text-white"
                >
                  {item.name}
                </motion.a>
              ))}
              {trailingNavItems.map((item) => (
                <motion.div key={item.name} variants={{ hidden: { opacity: 0, x: -16 }, show: { opacity: 1, x: 0 } }}>
                  <Link href={item.href} className={`block py-2 text-lg ${pathname === item.href ? "text-white" : "text-white/82"}`}>
                    {item.name}
                  </Link>
                </motion.div>
              ))}
              <motion.a variants={{ hidden: { opacity: 0, x: -16 }, show: { opacity: 1, x: 0 } }} {...buttonTap} href={profile.resumeUrl} download className="mt-3 block rounded-full bg-primary py-3 text-center font-medium text-white shadow-[0_12px_32px_rgba(255,140,75,0.30)]">
                Download Resume
              </motion.a>
            </motion.div>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </motion.nav>
  )
}
