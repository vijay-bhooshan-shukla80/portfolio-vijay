import Image from "next/image"
import { PlayCircle } from "lucide-react"
import { Footer } from "@/components/footer"
import { Navbar } from "@/components/navbar"
import { PageHero } from "@/components/page-hero"
import { CTASection } from "@/components/sections/cta"
import { videoGalleryItems } from "@/data/site-content"

export default function VideoGalleryPage() {
  return (
    <main className="relative min-h-screen">
      <Navbar />
      <PageHero
        eyebrow="Video Gallery"
        title="Watch the"
        highlight="video collection"
        description="A separate gallery page for demo clips and media previews. Each card includes a playable video block."
        primaryHref="/image-gallery"
        primaryLabel="Open Image Gallery"
        secondaryHref="/contact"
        secondaryLabel="Add Your Videos"
      />

      <section className="relative pb-24">
        <div className="mx-auto max-w-7xl px-6">
          <div className="grid gap-6 lg:grid-cols-2 xl:grid-cols-3">
            {videoGalleryItems.map((item) => (
              <div key={item.title} className="glass overflow-hidden rounded-[2rem] border border-white/10">
                <div className="relative aspect-video overflow-hidden bg-slate-950">
                  <video controls preload="metadata" poster={item.poster} className="h-full w-full object-cover">
                    <source src={item.videoUrl} />
                    Your browser does not support the video tag.
                  </video>
                  <div className="pointer-events-none absolute left-4 top-4 inline-flex items-center gap-2 rounded-full icon-highlight px-3 py-1 text-xs font-semibold uppercase tracking-[0.2em] text-white">
                    <PlayCircle size={14} /> {item.category}
                  </div>
                </div>
                <div className="flex items-start gap-4 p-6">
                  <div className="relative h-16 w-16 shrink-0 overflow-hidden rounded-2xl border border-white/10">
                    <Image src={item.poster} alt={item.title} fill className="object-cover" />
                  </div>
                  <div>
                    <h2 className="text-xl font-semibold text-white">{item.title}</h2>
                    <p className="mt-2 text-sm text-white/88">Dedicated video gallery card ready for demos, reels, and presentation clips.</p>
                  </div>
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




