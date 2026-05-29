import Image from "next/image"
import { Footer } from "@/components/footer"
import { Navbar } from "@/components/navbar"
import { PageHero } from "@/components/page-hero"
import { CTASection } from "@/components/sections/cta"
import { imageGalleryItems } from "@/data/site-content"

export default function ImageGalleryPage() {
  return (
    <main className="relative min-h-screen">
      <Navbar />
      <PageHero
        eyebrow="Image Gallery"
        title="Browse our curated"
        highlight="image collection"
        description="A separate gallery page for artwork, UI previews, and project visuals. Open from the site navigation anytime."
        primaryHref="/video-gallery"
        primaryLabel="Go To Video Gallery"
        secondaryHref="/contact"
        secondaryLabel="Request Custom Gallery"
      />

      <section className="relative pb-24">
        <div className="mx-auto max-w-7xl px-6">
          <div className="grid gap-6 sm:grid-cols-2 xl:grid-cols-3">
            {imageGalleryItems.map((item) => (
              <div key={item.title} className="glass overflow-hidden rounded-[2rem] border border-white/10">
                <div className="relative aspect-[4/3] overflow-hidden">
                  <Image src={item.image} alt={item.title} fill className="object-cover transition-transform duration-500 hover:scale-105" />
                </div>
                <div className="p-6">
                  <span className="inline-flex rounded-full border border-primary/30 bg-primary/10 px-3 py-1 text-xs font-semibold uppercase tracking-[0.2em] text-white">
                    {item.category}
                  </span>
                  <h2 className="mt-4 text-xl font-semibold text-white">{item.title}</h2>
                  <p className="mt-2 text-sm text-white/88">Dedicated image gallery card ready for screenshots, client work, and portfolio visuals.</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CTASection />
      <Footer />
    </main>
  )
}



