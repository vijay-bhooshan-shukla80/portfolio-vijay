import { Footer } from "@/components/footer"
import { Navbar } from "@/components/navbar"
import { ServicesHero } from "@/components/services-hero"
import { CTASection } from "@/components/sections/cta"
import { ServicesSection } from "@/components/sections/services"

export default function ServicesPage() {
  return (
    <main className="relative min-h-screen">
      <Navbar />
      <ServicesHero
        eyebrow="Service Offerings"
        title="Development services built for"
        highlight="fast client delivery"
        description="From MERN apps and AI-assisted workflows to business software and personal brand sites, this service mix is designed for practical software outcomes."
        primaryHref="/contact"
        primaryLabel="Start a Project"
        secondaryHref="/projects"
        secondaryLabel="See Related Work"
      />
      <ServicesSection />
      <CTASection />
      <Footer />
    </main>
  )
}
