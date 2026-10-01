import { motion } from 'framer-motion'
import { ChevronRight, Sparkles, CheckCircle2, Globe } from 'lucide-react'
import { Phone, ImageScreen, Chip } from './Mockups'

// Bande défilante : visuels tirés des feeds clients, sans reprendre ceux de la composition du haut
const reelImages = [
  '/contenus/matchday.webp',
  '/feed/smash-gourmet/1.webp',
  '/feed/fanushari3/1.webp',
  '/branding/am-nail-artist.webp',
  '/thumbs/Clear-Glass/3.webp',
  '/feed/smash-gourmet/2.webp',
  '/feed/fanushari3/2.webp',
  '/contenus/mojito.webp',
  '/feed/smash-gourmet/4.webp',
  '/feed/fanushari3.webp',
  '/feed/fanushari3/3.webp',
  '/contenus/cinq.webp',
  '/feed/smash-gourmet/3.webp',
  '/thumbs/Clear-Glass/6.webp',
  '/feed/fanushari3/4.webp',
  '/feed/smash-gourmet/5.webp',
  '/feed/fanushari3/6.webp',
  '/feed/smash-gourmet/6.webp',
  '/feed/fanushari3/5.webp',
]

const ease = [0.22, 1, 0.36, 1]
const rise = {
  hidden: { opacity: 0, y: 24 },
  visible: (i = 0) => ({ opacity: 1, y: 0, transition: { duration: 0.9, delay: 0.1 + i * 0.12, ease } }),
}

export default function Hero() {
  return (
    <>
      <div className="ribbon">
        Une idée, un projet ? On vous répond sous 24 h.
        <a href="#contact" className="link">Nous écrire <ChevronRight size={14} /></a>
      </div>

      <section id="top" className="hero">
        <div className="aurora" />
        <div className="grid-bg" />

        <div className="wrap">
          <motion.h1 className="h-hero grad" initial="hidden" animate="visible" variants={rise}>
            Communication 360°<sup className="sq">²</sup>
          </motion.h1>
          <motion.p className="sub muted" initial="hidden" animate="visible" variants={rise} custom={1}>
            Branding, contenus et sites web pour les commerces, les clubs et les marques qui veulent marquer.
          </motion.p>
          <motion.div className="actions" initial="hidden" animate="visible" variants={rise} custom={2}>
            <a href="#contact" className="btn btn-fill">Demander un devis</a>
            <a href="#expertises" className="btn btn-ghost">Voir nos réalisations</a>
          </motion.div>
        </div>

        <motion.div
          className="stage"
          initial={{ opacity: 0, y: 60 }} animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, delay: 0.35, ease }}
        >
          <div className="float-card far-left"><img src="/contenus/fanushari3-beanie.webp" alt="" /></div>
          <div className="float-card left"><img src="/contenus/clear-glass-switch.webp" alt="" /></div>
          <Phone><ImageScreen src="/contenus/a2-profil.webp" /></Phone>
          <div className="float-card right is-story"><img src="/contenus/am-jeu-concours.webp" alt="" /></div>
          <div className="float-card far-right is-tall"><img src="/contenus/rs-prestige.webp" alt="" /></div>

          <Chip icon={Sparkles} title="Nouveau visuel" note="Prêt à publier" className="c1 floaty" />
          <Chip icon={CheckCircle2} title="Validé par le client" className="c2 floaty d2" />
          <Chip icon={Globe} title="Site en ligne" note="Mobile et ordinateur" className="c3 floaty d3" />
        </motion.div>
      </section>

      <div className="reel" aria-label="Aperçu de nos réalisations">
        <div className="reel-track">
          {[...reelImages, ...reelImages].map((src, i) => (
            <img key={i} src={src} alt="" loading="lazy" aria-hidden={i >= reelImages.length} />
          ))}
        </div>
      </div>
    </>
  )
}
