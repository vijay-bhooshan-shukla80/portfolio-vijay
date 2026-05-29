import { Footer } from "@/components/footer"
import { ContactFormSection } from "@/components/contact-form-section"
import { Navbar } from "@/components/navbar"
import { PageHero } from "@/components/page-hero"
import { CTASection } from "@/components/sections/cta"
import { profile } from "@/data/site-content"

export default function ContactPage() {
  return (
    <main className="relative min-h-screen">
      <Navbar />
      <PageHero
        eyebrow="Contact"
        title="Start your project with"
        highlight="a full-stack developer"
        description="Share your website, app, or automation requirement and connect directly by email or LinkedIn."
        primaryHref={`mailto:${profile.email}`}
        primaryLabel="Send Email"
        secondaryHref={profile.linkedin}
        secondaryLabel="Open LinkedIn"
      />
      <ContactFormSection />
      <CTASection />
      <Footer />
    </main>
  )
}
