import { Footer } from "@/components/footer"
import { Navbar } from "@/components/navbar"
import { PageHero } from "@/components/page-hero"
import { CTASection } from "@/components/sections/cta"
import { ProjectsSection } from "@/components/sections/projects"

export default function ProjectsPage() {
  return (
    <main className="relative min-h-screen">
      <Navbar />
      <PageHero
        eyebrow="Featured Projects"
        title="Selected builds for"
        highlight="modern product teams"
        description="A project mix spanning SaaS interfaces, business dashboards, marketing sites, and AI-enabled internal tools."
        primaryHref="/contact"
        primaryLabel="Discuss Your Build"
        secondaryHref="/services"
        secondaryLabel="Explore Services"
      />
      <ProjectsSection />
      <CTASection />
      <Footer />
    </main>
  )
}
