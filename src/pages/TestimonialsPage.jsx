import { Footer } from "@/components/footer"
import { Navbar } from "@/components/navbar"
import { PageHero } from "@/components/page-hero"
import { CTASection } from "@/components/sections/cta"
import { TestimonialsSection } from "@/components/sections/testimonials"

export default function TestimonialsPage() {
  return (
    <main className="relative min-h-screen">
      <Navbar />
      <PageHero
        eyebrow="Client Feedback"
        title="What people value most in"
        highlight="working together"
        description="Clear communication, dependable milestones, and polished execution are the patterns clients remember and recommend."
        primaryHref="/contact"
        primaryLabel="Start a Conversation"
        secondaryHref="/services"
        secondaryLabel="View Services"
      />
      <TestimonialsSection />
      <CTASection />
      <Footer />
    </main>
  )
}
