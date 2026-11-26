import { useEffect, useState } from 'react'
import { CalendarCheck } from 'lucide-react'
import { BOOKING_URL } from '../contact'

// Raccourcis de contact toujours à portée de main.
// Ordinateur : bouton « Réserver un appel » en bas à droite.
// Mobile : barre en bas de l'écran (Réserver un appel + Devis), qui apparaît une fois passé le haut de page
// et disparaît quand le formulaire de contact est à l'écran (inutile de doubler les boutons).
export default function BookingButton() {
  const [show, setShow] = useState(false)

  useEffect(() => {
    let raf = 0
    const update = () => {
      raf = 0
      const contact = document.getElementById('contact')
      const contactVisible = contact ? contact.getBoundingClientRect().top < window.innerHeight * 0.85 : false
      setShow(window.scrollY > 520 && !contactVisible)
    }
    const onScroll = () => { if (!raf) raf = requestAnimationFrame(update) }
    update()
    window.addEventListener('scroll', onScroll, { passive: true })
    window.addEventListener('resize', onScroll)
    return () => { window.removeEventListener('scroll', onScroll); window.removeEventListener('resize', onScroll); cancelAnimationFrame(raf) }
  }, [])

  if (!BOOKING_URL) return null
  return (
    <>
      <a
        className={`booking-fab${show ? ' is-visible' : ''}`}
        href={BOOKING_URL}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Réserver un appel de 30 min"
      >
        <span className="booking-fab-icon"><CalendarCheck size={20} strokeWidth={2} /></span>
        <span className="booking-fab-label">Réserver un appel</span>
      </a>

      <div className={`action-bar${show ? ' is-visible' : ''}`} aria-hidden={!show}>
        <a className="ab-main" href={BOOKING_URL} target="_blank" rel="noopener noreferrer" tabIndex={show ? 0 : -1}>
          <CalendarCheck size={18} strokeWidth={2} aria-hidden="true" /> Réserver un appel
        </a>
        <a className="ab-alt" href="#contact" tabIndex={show ? 0 : -1}>Demander un devis</a>
      </div>
    </>
  )
}
