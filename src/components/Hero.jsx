import { motion } from 'framer-motion'
import { ChevronRight, Sparkles, CheckCircle2, Globe } from 'lucide-react'
import { Phone, ImageScreen, Chip } from './Mockups'

// Bande défilante : visuels tirés des feeds clients, sans reprendre ceux de la composition du haut
// Bande défilante : visuels tirés des feeds clients, sans reprendre ceux de la composition du haut
const reelImages = [
  ['/contenus/matchday.webp', "Affiche Match Day pour Sekou Fofana"],
  ['/feed/smash-gourmet/1.webp', "Photo de burger pour le feed Instagram de Smash Gourmet"],
  ['/feed/fanushari3/1.webp', "Photo produit de la marque de vêtements Fanushari3"],
  ['/branding/am-nail-artist.webp', "Logo AM Nail Artist"],
  ['/thumbs/Clear-Glass/3.webp', "Visuel promotionnel Clear Glass, offre du moment"],
  ['/feed/smash-gourmet/2.webp', "Photo de burger et frites pour Smash Gourmet"],
  ['/feed/fanushari3/2.webp', "Shooting de la marque Fanushari3"],
  ['/contenus/mojito.webp', "Affiche Fresh Mojito"],
  ['/feed/smash-gourmet/4.webp', "Photo en cuisine pour Smash Gourmet"],
  ['/feed/fanushari3.webp', "Bannière de feed Instagram Fanushari3"],
  ['/feed/fanushari3/3.webp', "Photo lifestyle Fanushari3"],
  ['/contenus/cinq.webp', "Flyer du restaurant 5 Cinq à Vernon"],
  ['/feed/smash-gourmet/3.webp', "Photo de burger pour Smash Gourmet"],
  ['/thumbs/Clear-Glass/6.webp', "Visuel promotionnel Clear Glass, pare-brise et pneus offerts"],
  ['/feed/fanushari3/4.webp', "T-shirt de la marque Fanushari3"],
  ['/feed/smash-gourmet/5.webp', "Photo de burgers empilés pour Smash Gourmet"],
  ['/feed/fanushari3/6.webp', "Photo de groupe pour la marque Fanushari3"],
  ['/feed/smash-gourmet/6.webp', "Photo de dessert pour Smash Gourmet"],
  ['/feed/fanushari3/5.webp', "Bonnets brodés de la marque Fanushari3"],
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
            Agence de communication à Vernon : branding, contenus et sites web pour les commerces, les clubs et les marques qui veulent marquer.
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
          <div className="float-card far-left"><img src="/contenus/fanushari3-beanie.webp" alt="Photo de la marque de vêtements Fanushari3" /></div>
          <div className="float-card left"><img src="/contenus/clear-glass-switch.webp" alt="Affiche Clear Glass : un pare-brise changé, une Nintendo Switch offerte" /></div>
          <Phone><ImageScreen src="/contenus/a2-profil.webp" alt="Profil Instagram de l'agence A² Agency" /></Phone>
          <div className="float-card right is-story"><img src="/contenus/am-jeu-concours.webp" alt="Affiche jeu concours AM Agency : 24 heures de location offertes" /></div>
          <div className="float-card far-right is-tall"><img src="/contenus/rs-prestige.webp" alt="Affiche RS Prestige 27, agence de location de voitures à Vernon" /></div>

          <Chip icon={Sparkles} title="Nouveau visuel" note="Prêt à publier" className="c1 floaty" />
          <Chip icon={CheckCircle2} title="Validé par le client" className="c2 floaty d2" />
          <Chip icon={Globe} title="Site en ligne" note="Mobile et ordinateur" className="c3 floaty d3" />
        </motion.div>
      </section>

      <div className="reel" aria-label="Aperçu de nos réalisations">
        <div className="reel-track">
          {[...reelImages, ...reelImages].map(([src, alt], i) => (
            <img key={i} src={src} alt={i < reelImages.length ? alt : ''} loading="lazy" decoding="async" aria-hidden={i >= reelImages.length} />
          ))}
        </div>
      </div>
    </>
  )
}
