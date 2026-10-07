import { useEffect, useRef, useState } from 'react'
import { motion, AnimatePresence, useReducedMotion } from 'framer-motion'
import { Play, X, Volume2 } from 'lucide-react'

const videos = [
  { id: 'evenement', title: 'Événement', note: "Couverture d'une soirée" },
  { id: 'summer-collection', title: 'Summer Collection', note: 'Lancement de collection' },
  { id: 'barbier', title: 'Une journée avec Ricardo', note: 'Reel coulisses' },
  { id: 'house-barber', title: 'House Barber', note: 'Ouverture du barbershop' },
]

const src = (id) => `/videos/${id}.mp4`
const poster = (id) => `/videos/${id}.webp`

// Aperçu muet qui se lance seulement quand la carte est visible à l'écran
function Preview({ video, onOpen }) {
  const ref = useRef(null)
  const reduce = useReducedMotion()

  useEffect(() => {
    const el = ref.current
    if (!el || reduce) return
    // Safari exige que la vidéo soit réellement muette (attribut + propriété) pour la lancer seule
    el.muted = true
    el.defaultMuted = true
    el.setAttribute('muted', '')
    const io = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) el.play().catch(() => {})
      else el.pause()
    }, { threshold: 0.6 })
    io.observe(el)
    return () => io.disconnect()
  }, [reduce])

  return (
    <button className="reel-card" onClick={() => onOpen(video)} aria-label={`Regarder la vidéo ${video.title} avec le son`}>
      <video ref={ref} src={src(video.id)} poster={poster(video.id)} muted loop playsInline preload="none" aria-hidden="true" />
      <span className="reel-play"><Play size={18} fill="currentColor" /></span>
      <span className="reel-info">
        <b>{video.title}</b>
        <small>{video.note}</small>
      </span>
    </button>
  )
}

function Player({ video, onClose }) {
  const ref = useRef(null)

  useEffect(() => {
    // Lance la lecture avec le son ; si le navigateur refuse, les commandes restent disponibles
    ref.current?.play().catch(() => {})
  }, [])

  useEffect(() => {
    const onKey = (e) => { if (e.key === 'Escape') onClose() }
    window.addEventListener('keydown', onKey)
    document.body.style.overflow = 'hidden'
    return () => { window.removeEventListener('keydown', onKey); document.body.style.overflow = '' }
  }, [onClose])

  return (
    <motion.div
      className="lightbox" role="dialog" aria-modal="true" aria-label={video.title}
      initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} onClick={onClose}
    >
      <button className="round-btn lb-close" onClick={onClose} aria-label="Fermer" autoFocus><X size={18} /></button>
      <video
        ref={ref} className="reel-full" src={src(video.id)} poster={poster(video.id)}
        controls playsInline preload="auto" onClick={e => e.stopPropagation()}
      />
      <div className="lb-meta">{video.title} · {video.note}</div>
    </motion.div>
  )
}

export default function Videos() {
  const [open, setOpen] = useState(null)

  return (
    <section id="videos" className="reels">
      <div className="wrap">
        <h2 className="two-tone reels-title">Vidéo & Reels. <span>Des formats courts qui retiennent l'attention.</span></h2>
        <p className="reels-hint muted"><Volume2 size={15} /> Ouvrez une vidéo pour la regarder avec le son.</p>

        <div className="reels-grid">
          {videos.map(v => <Preview key={v.id} video={v} onOpen={setOpen} />)}
        </div>
      </div>

      <AnimatePresence>
        {open && <Player video={open} onClose={() => setOpen(null)} />}
      </AnimatePresence>
    </section>
  )
}
