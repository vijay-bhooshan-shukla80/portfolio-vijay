import { Footer } from "@/components/footer"
import { Navbar } from "@/components/navbar"
import { PageHero } from "@/components/page-hero"
import { AboutSection } from "@/components/sections/about"
import { SkillsSection } from "@/components/sections/skills"
import { AutomationSection } from "@/components/sections/automation-section"
import { ResumeSection } from "@/components/sections/resume"
import { CTASection } from "@/components/sections/cta"

export default function AboutPage() {
  return (
    <main className="relative min-h-screen bg-[#080808]">
      <Navbar />
      <PageHero
        eyebrow="WHO WE ARE"
        title="FULL STACK DEVELOPER &"
        highlight="AI AUTOMATION ENGINEER"
        description="2 years of experience engineering production MERN web applications, AI-powered solutions, Prompt Engineering, and Python & Selenium browser automation systems."
        primaryHref="/contact"
        primaryLabel="Get In Touch"
        secondaryHref="/projects"
        secondaryLabel="View Projects"
      />
      <AboutSection />
      <SkillsSection />
      <AutomationSection />
      <ResumeSection />
      <CTASection />
      <Footer />
    </main>
  )
}
