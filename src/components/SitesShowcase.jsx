import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

// Sites réalisés par l'agence, dans l'ordre d'affichage
const sites = [
  { name: 'Clear Glass', domain: 'clear-glass.fr', url: 'https://clear-glass.fr', shot: '/sites/clear-glass.webp' },
  { name: 'Rent Driver', domain: 'rentdriver.fr', url: 'https://rentdriver.fr', shot: '/sites/rent-driver.webp' },
  { name: 'MorroGo', domain: 'morrogo.com', url: null, shot: '/sites/morrogo.webp' },
]

export default function SitesShowcase() {
  const [active, setActive] = useState(0)
  const site = sites[active]

  const shot = (
    <AnimatePresence mode="wait" initial={false}>
      <motion.img
        key={site.shot} src={site.shot} alt={`Page d'accueil du site ${site.name}`} loading="lazy"
        initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} transition={{ duration: 0.25 }}
      />
    </AnimatePresence>
  )

  return (
    <div className="tile-art art-sites">
      <div className="segmented segmented-sm" role="tablist" aria-label="Choisir un site">
        {sites.map((s, i) => (
          <button key={s.name} role="tab" aria-selected={i === active} className={i === active ? 'is-active' : ''} onClick={() => setActive(i)}>
            {s.name}
          </button>
        ))}
      </div>

      <div className="browser browser-shot">
        <div className="browser-top">
          <span className="dot" /><span className="dot" /><span className="dot" />
          <span className="url">{site.domain}</span>
        </div>
        {site.url
          ? <a className="shot" href={site.url} target="_blank" rel="noopener noreferrer" aria-label={`Voir le site ${site.name} (nouvel onglet)`}>{shot}</a>
          : <div className="shot">{shot}</div>}
      </div>
    </div>
  )
}
