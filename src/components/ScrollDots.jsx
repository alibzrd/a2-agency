import { useEffect, useState } from 'react'

// Petits points sous une rangée qui défile au doigt (études de cas, vidéos) :
// ils montrent qu'il y a d'autres cartes et où l'on en est. Invisibles quand tout tient à l'écran.
export default function ScrollDots({ target, count, label }) {
  const [active, setActive] = useState(0)
  const [scrollable, setScrollable] = useState(false)

  useEffect(() => {
    const el = target.current
    if (!el) return
    let raf = 0
    const update = () => {
      raf = 0
      const max = el.scrollWidth - el.clientWidth
      setScrollable(max > 4)
      setActive(max > 4 ? Math.round((el.scrollLeft / max) * (count - 1)) : 0)
    }
    const onScroll = () => { if (!raf) raf = requestAnimationFrame(update) }
    update()
    el.addEventListener('scroll', onScroll, { passive: true })
    window.addEventListener('resize', onScroll)
    return () => { el.removeEventListener('scroll', onScroll); window.removeEventListener('resize', onScroll); cancelAnimationFrame(raf) }
  }, [target, count])

  if (!scrollable) return null
  const go = (i) => {
    const el = target.current
    const child = el?.children[i]
    if (child) el.scrollTo({ left: child.offsetLeft - el.offsetLeft - parseFloat(getComputedStyle(el).scrollPaddingLeft || 0), behavior: 'smooth' })
  }
  return (
    <div className="scroll-dots" role="group" aria-label={label}>
      {Array.from({ length: count }, (_, i) => (
        <button
          key={i} type="button" className={i === active ? 'is-active' : ''}
          aria-label={`Carte ${i + 1} sur ${count}`} aria-current={i === active || undefined} onClick={() => go(i)}
        />
      ))}
    </div>
  )
}
