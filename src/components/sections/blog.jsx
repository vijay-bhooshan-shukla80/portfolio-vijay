"use client"

import { motion, useInView } from "framer-motion"
import { useRef } from "react"
import { Calendar, Clock, ArrowRight } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import { blogPosts } from "@/data/site-content"
import { buttonTap, fadeUp, iconBounce, scaleUp, sectionReveal, staggerContainer, staggerFast, viewportOnce } from "@/lib/motion"

export function BlogSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, viewportOnce)

  return (
    <motion.section className="relative overflow-hidden py-24" {...sectionReveal}>
      <div className="absolute left-1/4 top-0 h-96 w-96 rounded-full bg-accent/10 blur-3xl animate-float-slow" />

      <div className="mx-auto max-w-7xl px-6" ref={ref}>
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          animate={isInView ? "show" : "hidden"}
          className="mb-16 text-center"
        >
          <motion.span variants={fadeUp} className="text-sm font-medium uppercase tracking-wider text-white">Blog</motion.span>
          <motion.h2 variants={fadeUp} className="mt-4 text-3xl font-bold text-balance text-white md:text-4xl lg:text-5xl">
            Articles for <span className="gradient-text">developers, founders, and Upwork clients</span>
          </motion.h2>
          <motion.p variants={fadeUp} className="mx-auto mt-6 max-w-2xl text-lg text-white/84 text-pretty">
            Practical writing around AI tools, MERN development, frontend systems, and freelance growth.
          </motion.p>
        </motion.div>

        <motion.div variants={staggerFast} initial="hidden" animate={isInView ? "show" : "hidden"} className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {blogPosts.map((post, index) => (
            <motion.article
              key={post.title}
              variants={index % 2 === 0 ? scaleUp : fadeUp}
              whileHover={{ y: -10, scale: 1.02 }}
              className="group"
            >
              <div className="glass motion-border h-full overflow-hidden rounded-3xl border border-white/10 transition-colors hover:border-primary/40 hover:bg-[#0c2550]">
                <div className="image-hover-zoom relative h-52 overflow-hidden">
                  <Image src={post.image} alt={post.title} fill className="object-cover" />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#07162b] via-[#07162b]/15 to-transparent" />
                  <div className="absolute left-5 top-5 rounded-full border border-white/10 bg-[#07162b]/85 px-4 py-2 text-sm font-medium text-white backdrop-blur-sm">
                    {post.category}
                  </div>
                </div>
                <div className="p-6">
                  <div className="mb-4 flex items-center gap-4 text-sm text-white/80">
                    <span className="flex items-center gap-1"><Calendar size={14} />{post.date}</span>
                    <span className="flex items-center gap-1"><Clock size={14} />{post.readTime}</span>
                  </div>
                  <h3 className="mb-3 line-clamp-2 text-lg font-bold text-white transition-colors group-hover:text-[#ffb067]">{post.title}</h3>
                  <p className="mb-4 line-clamp-3 text-sm text-white/82">{post.excerpt}</p>
                  <Link href={post.href} className="inline-flex items-center gap-2 text-sm font-semibold text-[#ffb067]">
                    Read More <motion.span variants={iconBounce} initial="rest" whileHover="hover"><ArrowRight size={14} className="transition-transform group-hover:translate-x-1" /></motion.span>
                  </Link>
                </div>
              </div>
            </motion.article>
          ))}
        </motion.div>

        <motion.div variants={fadeUp} initial="hidden" animate={isInView ? "show" : "hidden"} className="mt-12 text-center">
          <motion.div {...buttonTap} className="inline-flex">
          <Link href="/blog" className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.05] px-8 py-4 font-medium text-white transition-colors hover:bg-white/[0.08]">
            View All Posts <ArrowRight size={18} />
          </Link>
          </motion.div>
        </motion.div>
      </div>
    </motion.section>
  )
}







