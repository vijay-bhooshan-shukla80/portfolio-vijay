"use client"

import { useEffect, useState } from "react"
import { Navbar } from "@/components/navbar"
import { OpportunityPopup } from "@/components/opportunity-popup"
import { HeroSection } from "@/components/sections/hero"
import { AboutSection } from "@/components/sections/about"
import { ServicesSection } from "@/components/sections/services"
import { ProjectsSection } from "@/components/sections/projects"
import { ResumeSection } from "@/components/sections/resume"
import { TestimonialsSection } from "@/components/sections/testimonials"
import { QuoteSection } from "@/components/sections/quote-section"
import { CTASection } from "@/components/sections/cta"
import { Footer } from "@/components/footer"

export default function HomePage() {
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const timer = window.setTimeout(() => {
      setOpen(true)
    }, 4000)

    return () => window.clearTimeout(timer)
  }, [])

  return (
    <main className="relative">
      <Navbar />
      <HeroSection />
      <AboutSection />
      <ServicesSection />
      <ProjectsSection />
      <TestimonialsSection compact />
      <QuoteSection />
      <ResumeSection />
      <CTASection />
      <Footer />
      <OpportunityPopup isOpen={open} onClose={() => setOpen(false)} />
    </main>
  )
}
