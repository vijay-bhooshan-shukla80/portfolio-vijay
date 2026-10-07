import { useLayoutEffect } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

// Animate existing content only: no pinning, extra scroll distance or layout changes.
export function usePortfolioMotion(root, route) {
  useLayoutEffect(() => {
    const media = gsap.matchMedia()
    media.add({
      motion: '(prefers-reduced-motion: no-preference)',
      compact: '(max-width: 767px), (pointer: coarse)',
    }, context => {
      if (!context.conditions.motion) return
      const select = gsap.utils.selector(root)
      const { compact } = context.conditions
      const enter = (targets, trigger, options = {}) => {
        if (!targets.length) return
        gsap.fromTo(targets, { opacity: 0, y: compact ? 10 : 18 }, {
          opacity: 1, y: 0, duration: .6, stagger: .07, ease: 'power3.out',
          scrollTrigger: { trigger, start: 'top 92%', once: true },
          clearProps: 'opacity,transform', ...options,
        })
      }

      select('.pf-stack-strip').forEach(strip => enter(strip.querySelectorAll('b'), strip))
      select('.pf-tags').forEach(tags => enter(tags.children, tags, { stagger: .055 }))
      select('.pf-skills-grid article').forEach(card => {
        enter(card.querySelectorAll('span, h3, p'), card, { stagger: .1 })
      })
      select('.pf-resume-grid').forEach(grid => {
        grid.querySelectorAll('article').forEach(article => enter([article], article))
      })
      select('.pf-flow').forEach(flow => enter(flow.children, flow, { stagger: .13 }))
      select('.pf-footer-top').forEach(footer => enter(footer.children, footer))

      // Small, scroll-linked depth on desktop; keep screenshots fully legible.
      if (!compact) {
        select('.pf-project-image').forEach(frame => {
          gsap.fromTo(frame, { scale: .97 }, {
            scale: 1, ease: 'none',
            scrollTrigger: { trigger: frame, start: 'top 95%', end: 'top 48%', scrub: .5 },
          })
        })
        select('.pf-work-banner:not(.pf-work-banner-full)').forEach(frame => {
          const photo = frame.querySelector('img')
          gsap.fromTo(photo, { scale: 1.055 }, {
            scale: 1, ease: 'none',
            scrollTrigger: { trigger: frame, start: 'top bottom', end: 'bottom top', scrub: .6 },
          })
        })
      }

      // Images, fonts and expanded FAQs can change trigger positions after mount.
      const refresh = () => ScrollTrigger.refresh()
      const images = select('img').filter(image => !image.complete)
      images.forEach(image => image.addEventListener('load', refresh, { once: true }))
      const details = select('details')
      details.forEach(detail => detail.addEventListener('toggle', refresh))
      const frame = requestAnimationFrame(refresh)
      let active = true
      document.fonts?.ready.then(() => { if (active) refresh() })
      return () => {
        active = false
        cancelAnimationFrame(frame)
        images.forEach(image => image.removeEventListener('load', refresh))
        details.forEach(detail => detail.removeEventListener('toggle', refresh))
      }
    }, root)
    return () => media.revert()
  }, [root, route])
}
