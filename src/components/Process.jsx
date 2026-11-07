import { ChevronRight, PhoneCall, FileText, PenTool, LineChart } from 'lucide-react'
import { BOOKING_URL } from '../contact'

// « Comment on travaille » : 4 étapes courtes, entre l'agence et le contact
const steps = [
  { icon: PhoneCall, title: 'Appel découverte', text: '30 minutes pour parler de votre activité, de vos objectifs et de votre budget.' },
  { icon: FileText, title: 'Devis sur mesure', text: 'Une proposition claire et détaillée, sans engagement.' },
  { icon: PenTool, title: 'Création', text: 'On conçoit, vous validez à chaque étape.' },
  { icon: LineChart, title: 'Mise en ligne et suivi', text: 'On publie, on mesure et on ajuste avec vous.' },
]

export default function Process() {
  return (
    <section id="methode" className="process" aria-labelledby="process-title">
      <div className="wrap">
        <h2 id="process-title" className="h-section grad">Comment on travaille.</h2>
        <ol className="process-steps">
          {steps.map((s, i) => (
            <li key={s.title}>
              <span className="process-num" aria-hidden="true">{i + 1}</span>
              <s.icon size={20} className="process-ico" aria-hidden="true" />
              <h3>{s.title}</h3>
              <p>{s.text}</p>
            </li>
          ))}
        </ol>
        <p className="process-cta">
          <a className="link" href={BOOKING_URL} target="_blank" rel="noopener noreferrer">Réserver l'appel découverte <ChevronRight size={16} /></a>
        </p>
      </div>
    </section>
  )
}
