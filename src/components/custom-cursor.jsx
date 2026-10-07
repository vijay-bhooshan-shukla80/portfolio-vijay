import { useEffect, useRef } from 'react'

export function CustomCursor() {
  const ref = useRef(null)
  useEffect(() => {
    const media = window.matchMedia('(min-width: 768px) and (pointer: fine) and (prefers-reduced-motion: no-preference)')
    const el = ref.current, root = document.documentElement
    let frame = 0, x = 0, y = 0, active = false
    function update() {
      frame = 0
      const target = document.elementFromPoint(x, y)
      const visible = media.matches && active && target && !target.closest('input,textarea,select,[contenteditable="true"],iframe')
      root.classList.toggle('pf-custom-pointer', Boolean(visible))
      el.style.opacity = visible ? '1' : '0'
      el.classList.toggle('is-hover', Boolean(target?.closest('a,button,summary,[role="button"],[data-cursor-text]')))
      el.style.transform = `translate3d(${x}px,${y}px,0)`
    }
    function schedule() { if (!frame) frame = requestAnimationFrame(update) }
    function move(event) {
      if (event.pointerType === 'touch') { hide(); return }
      x = event.clientX; y = event.clientY; active = true; schedule()
    }
    function hide() { active = false; el.style.opacity = '0'; root.classList.remove('pf-custom-pointer'); el.classList.remove('is-pressed') }
    function press(event) { if (event.pointerType !== 'touch') el.classList.add('is-pressed') }
    function release() { el.classList.remove('is-pressed') }
    document.addEventListener('pointermove', move, { passive: true })
    document.addEventListener('pointerdown', press)
    document.addEventListener('pointerup', release)
    document.addEventListener('pointercancel', hide)
    document.addEventListener('scroll', schedule, { passive: true, capture: true })
    root.addEventListener('pointerleave', hide)
    window.addEventListener('blur', hide)
    media.addEventListener('change', hide)
    return () => {
      cancelAnimationFrame(frame); hide()
      document.removeEventListener('pointermove', move)
      document.removeEventListener('pointerdown', press)
      document.removeEventListener('pointerup', release)
      document.removeEventListener('pointercancel', hide)
      document.removeEventListener('scroll', schedule, true)
      root.removeEventListener('pointerleave', hide)
      window.removeEventListener('blur', hide)
      media.removeEventListener('change', hide)
    }
  }, [])
  return <div ref={ref} className="pf-cursor" aria-hidden="true">
    <svg className="pf-cursor-arrow" viewBox="0 0 32 40" fill="white" stroke="#101010" strokeWidth="1.6" strokeLinejoin="round"><path d="M3 2 27 23 17 24 22 35 16 38 11 27 3 34Z"/></svg>
    <svg className="pf-cursor-hand" viewBox="0 0 40 44" fill="white" stroke="#101010" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M12 23V6c0-5 7-5 7 0v13-4c0-4 6-4 6 0v5-3c0-4 6-4 6 0v5-2c0-4 6-4 6 0v10c0 5-3 8-4 11H16c-1-4-4-7-6-10l-6-8c-3-4 2-7 5-4l3 4Z"/><path d="M19 20v8m6-7v7m6-5v5"/></svg>
  </div>
}
