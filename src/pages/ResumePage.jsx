import { Footer } from "@/components/footer"
import { Navbar } from "@/components/navbar"
import { PageHero } from "@/components/page-hero"
import { CTASection } from "@/components/sections/cta"
import { ResumeSection } from "@/components/sections/resume"
import { profile } from "@/data/site-content"

export default function ResumePage() {
  return (
    <main className="relative min-h-screen">
      <Navbar />
      <PageHero
        eyebrow="Experience Summary"
        title="Resume and work profile of"
        highlight="a MERN automation developer"
        description="Full stack development experience across websites, MERN stack work, automation tools, and client-oriented project delivery."
        primaryHref={profile.resumeUrl}
        primaryLabel="Download Resume"
        secondaryHref="/projects"
        secondaryLabel="Browse Projects"
      />
      <ResumeSection />
      <CTASection />
      <Footer />
    </main>
  )
}
