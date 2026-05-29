import { Footer } from "@/components/footer"
import { Navbar } from "@/components/navbar"
import { PageHero } from "@/components/page-hero"
import { BlogSection } from "@/components/sections/blog"
import { CTASection } from "@/components/sections/cta"

export default function BlogPage() {
  return (
    <main className="relative min-h-screen">
      <Navbar />
      <PageHero
        eyebrow="Insights and Writing"
        title="Practical ideas around"
        highlight="development, AI, and freelancing"
        description="Short, useful content for founders, developers, and Upwork clients looking for better software decisions."
        primaryHref="/contact"
        primaryLabel="Work With Me"
        secondaryHref="/projects"
        secondaryLabel="See Builds"
      />
      <BlogSection />
      <CTASection />
      <Footer />
    </main>
  )
}
