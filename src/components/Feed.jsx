import { useState } from 'react'
import { motion, AnimatePresence, useReducedMotion } from 'framer-motion'
import { Grid3x3 } from 'lucide-react'
import { thumb } from '../thumb'
import { Phone } from './Mockups'

const range = (folder, names) => names.map(n => `/projects/${folder}/${n}.png`)
const feedPosts = (id) => [1, 2, 3, 4, 5, 6].map(n => `/feed/${id}/${n}.webp`)

// Chaque bannière (3240 × 1080) = trois publications carrées qui se suivent sur le profil
const feeds = [
  {
    id: 'smash-gourmet',
    name: 'Smash Gourmet',
    sector: 'Restaurant à Vernon',
    banner: '/feed/smash-gourmet.webp',
    avatar: '/feed/smash-gourmet-avatar.webp',
    posts: feedPosts('smash-gourmet'),
  },
  {
    id: 'clear-glass',
    name: 'Clear Glass',
    sector: 'Remplacement de pare-brise en Île-de-France',
    banner: '/feed/clear-glass.webp',
    avatar: '/feed/clear-glass-avatar.webp',
    posts: range('Clear-Glass', [1, 2, 3, 4, 5, 6]),
  },
  {
    id: 'fanushari3',
    name: 'Fanushari3',
    sector: "Marque streetwear, « l'art de la rue »",
    banner: '/feed/fanushari3.webp',
    avatar: '/feed/fanushari3-avatar.webp',
    posts: feedPosts('fanushari3'),
  },
]

const slice = (banner, i) => ({
  backgroundImage: `url(${banner})`,
  backgroundSize: '300% 100%',
  backgroundPosition: `${i * 50}% 0`,
})

function Profile({ feed }) {
  const cells = Array.from({ length: 6 }, (_, i) => feed.posts[i])
  return (
    <div className="ig">
      <p className="ig-top">{feed.name}</p>
      <div className="ig-head">
        <span className="ig-avatar"><img src={feed.avatar} alt={`Logo ${feed.name}`} /></span>
        <div className="ig-stats">
          {['publications', 'abonnés', 'suivis'].map(l => (
            <span key={l}><i className="bar" /><small>{l}</small></span>
          ))}
        </div>
      </div>
      <div className="ig-bio">
        <b>{feed.name}</b>
        <span className="bar" style={{ width: '72%' }} />
        <span className="bar" style={{ width: '48%' }} />
      </div>
      <div className="ig-btns"><span className="is-main">Suivre</span><span>Message</span></div>
      <div className="ig-tabs"><Grid3x3 size={14} /></div>
      <div className="ig-grid">
        {[0, 1, 2].map(i => <span key={`b${i}`} className="ig-cell" style={slice(feed.banner, i)} />)}
        {cells.map((src, i) => src
          ? <span key={i} className="ig-cell" style={{ backgroundImage: `url(${thumb(src)})` }} />
          : <span key={i} className="ig-cell is-empty" />)}
      </div>
    </div>
  )
}

export default function Feed() {
  const [active, setActive] = useState(0)
  const reduce = useReducedMotion()
  const feed = feeds[active]

  return (
    <section id="feed" className="feed">
      <div className="wrap">
        <h2 className="two-tone feed-title">Feed Instagram. <span>Une gestion complète, de la stratégie à la publication.</span></h2>

        <div className="segmented" role="tablist" aria-label="Choisir un client">
          {feeds.map((f, i) => (
            <button
              key={f.id} role="tab" aria-selected={i === active} aria-controls="feed-panel"
              className={i === active ? 'is-active' : ''} onClick={() => setActive(i)}
            >
              {f.name}
            </button>
          ))}
        </div>

        <div className="feed-stage" id="feed-panel" role="tabpanel">
          <Phone className="feed-phone">
            <AnimatePresence mode="wait">
              <motion.div
                key={feed.id} className="ig-wrap"
                initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} transition={{ duration: 0.25 }}
              >
                <Profile feed={feed} />
              </motion.div>
            </AnimatePresence>
          </Phone>

          <div className="feed-panel">
            <div className="split" aria-label={`Bannière ${feed.name} découpée en trois publications`} role="img">
              {[0, 1, 2].map(i => (
                <motion.span
                  key={`${feed.id}-${i}`} className="split-cell" style={slice(feed.banner, i)}
                  initial={reduce ? false : { opacity: 0, y: 24, rotate: i === 1 ? 0 : (i ? 4 : -4) }}
                  animate={{ opacity: 1, y: 0, rotate: 0 }}
                  transition={{ duration: 0.6, delay: i * 0.08, ease: [0.22, 1, 0.36, 1] }}
                />
              ))}
            </div>
            <div className="feed-copy">
              <h3>{feed.name}</h3>
              {feed.sector && <p className="muted">{feed.sector}</p>}
              <p className="feed-explain">
                Nous prenons en charge l'ensemble de votre présence : direction artistique, création des visuels,
                rédaction des légendes, planification et publication. Votre profil gagne en cohérence et en impact.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
