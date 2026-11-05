import { CalendarCheck } from 'lucide-react'
import { BOOKING_URL } from '../contact'

// Icône fixe sur le côté droit de l'écran pour réserver un appel (Calendly), visible sur tout le site
export default function BookingButton() {
  if (!BOOKING_URL) return null
  return (
    <a
      className="booking-fab"
      href={BOOKING_URL}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Réserver un appel de 30 min"
    >
      <span className="booking-fab-label">Réserver un appel</span>
      <span className="booking-fab-icon"><CalendarCheck size={22} strokeWidth={2} /></span>
    </a>
  )
}
