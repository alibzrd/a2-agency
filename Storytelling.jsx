import { useEffect, useRef, useState } from 'react'
import { useInView, useReducedMotion } from 'framer-motion'

function Counter({ to, suffix = '' }) {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '0px 0px -15% 0px' })
  const reduce = useReducedMotion()
  const [count, setCount] = useState(0)

  useEffect(() => {
    if (!inView || reduce) return
    let frame
    const t0 = performance.now()
    const tick = (now) => {
      const p = Math.min((now - t0) / 1600, 1)
      setCount(Math.round(to * (1 - Math.pow(1 - p, 3))))
      if (p < 1) frame = requestAnimationFrame(tick)
    }
    frame = requestAnimationFrame(tick)
    return () => cancelAnimationFrame(frame)
  }, [inView, to, reduce])

  return <strong ref={ref}>{reduce ? to : count}{suffix}</strong>
}

export default function Storytelling() {
  return (
    <section id="agence" className="agency">
      <div className="aurora" />
      <div className="wrap">
        <h2 className="h-section grad">Une agence. Un seul interlocuteur.</h2>
        <p className="sub muted">De la première idée à la mise en ligne, vous parlez toujours à la même personne.</p>

        <div className="stats">
          <div className="stat"><Counter to={50} suffix="+" /><span>projets livrés</span></div>
          <div className="stat"><Counter to={30} suffix="+" /><span>clients accompagnés</span></div>
        </div>

        <div className="agency-duo">
          <figure className="founder">
            <div className="photo"><img src="/founders/arthur.jpg" alt="Portrait d'Arthur, fondateur d'A² Agency" loading="lazy" /></div>
            <figcaption>
              <h3>Arthur</h3>
              <p>Fondateur, stratégie et relation client</p>
            </figcaption>
          </figure>

          <div className="story">
            <p>
              A² Agency est née d'une conviction simple : une bonne communication ne choisit pas entre la forme et le fond.
              Un beau visuel sans stratégie passe inaperçu. Une stratégie sans image forte ne se voit pas.
            </p>
            <p>
              Formé en master communication, <strong>Arthur</strong> a créé l'agence pour réunir les deux. Il écoute,
              traduit chaque ambition en plan clair, puis suit chaque projet jusqu'au dernier détail, qu'il s'agisse
              d'une affiche de match, d'un menu ou d'un site web.
            </p>
            <p>
              Commerces de quartier, clubs de football, marques qui se lancent : chaque client est traité comme un
              partenaire de long terme, pas comme un dossier de plus.
            </p>
            <blockquote>Le ² n'est pas qu'un symbole. C'est notre promesse : votre impact, élevé à la puissance deux.</blockquote>
          </div>
        </div>
      </div>
    </section>
  )
}
