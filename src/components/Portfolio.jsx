import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { X, ChevronLeft, ChevronRight } from 'lucide-react'

const webClients = [
  {
    name: 'Clear Glass',
    description: 'Identité digitale complète pour un spécialiste du vitrage — site vitrine épuré et campagne de visuels publicitaires sur-mesure.',
    url: 'https://clear-glass.fr',
    tag: null,
    ads: [
      '/projects/Clear Glass/1.png',
      '/projects/Clear Glass/2.png',
      '/projects/Clear Glass/3.png',
      '/projects/Clear Glass/4.png',
      '/projects/Clear Glass/5.png',
      '/projects/Clear Glass/6.png',
    ],
  },
]

const clients = [
  {
    name: '5 CINQ',
    description: 'Menu flyer pour une pizzeria — mise en page appétissante et identité visuelle percutante.',
    categories: [
      {
        name: 'Menu Flyer',
        images: [
          '/projects/5 CINQ/3.png',
          '/projects/5 CINQ/4.png',
          '/projects/5 CINQ/5.png',
          '/projects/5 CINQ/6.png',
          '/projects/5 CINQ/7.png',
          '/projects/5 CINQ/8.png',
        ],
      },
    ],
  },
  {
    name: 'House Barber',
    description: 'Identité visuelle sur les réseaux pour un barbershop — visuels de recrutement et stories à la une.',
    categories: [
      {
        name: 'Stories Instagram',
        images: [
          '/projects/House Barber/HOUSE BARBER - Recrute coiffeurs (1080 x 1920 px).png',
          '/projects/House Barber/House Barber stories a la une/2.png',
          '/projects/House Barber/House Barber stories a la une/9.png',
          '/projects/House Barber/House Barber stories a la une/10.png',
          '/projects/House Barber/House Barber stories a la une/11.png',
        ],
      },
    ],
  },
  {
    name: 'Affiches Football',
    description: 'Affiches et visuels sportifs — matchdays, scores et portraits pour clubs et joueurs.',
    categories: [
      {
        name: 'Affiches',
        images: [
          '/projects/Affiches Football/Affiche Saint Marcel CHAMPIONS.png',
          '/projects/Affiches Football/COLE.png',
          '/projects/Affiches Football/FC SION MATCHDAY.png',
          '/projects/Affiches Football/FULLTIME.png',
          '/projects/Affiches Football/LAUSANNE SPORT SCORE FINAL.png',
          '/projects/Affiches Football/Matchday Sekou Fofana.png',
        ],
      },
    ],
  },
  {
    name: 'Smash Gourmet',
    description: 'Identité visuelle complète — menus, flyers et supports print pour ce restaurant burger haut de gamme.',
    categories: [
      {
        name: 'Menu Flyer',
        images: [
          '/projects/Smash Gourmet/Menu flyer/1.png',
          '/projects/Smash Gourmet/Menu flyer/2.png',
          '/projects/Smash Gourmet/Menu flyer/3.png',
          '/projects/Smash Gourmet/Menu flyer/4.png',
        ],
      },
      {
        name: 'Menu Board',
        images: [
          '/projects/Smash Gourmet/Menu Board/1.png',
          '/projects/Smash Gourmet/Menu Board/2.png',
          '/projects/Smash Gourmet/Menu Board/3.png',
          '/projects/Smash Gourmet/Menu Board/4.png',
        ],
      },
      {
        name: 'Flyer Boissons',
        images: [
          '/projects/Smash Gourmet/Flyer bubble/1.png',
          '/projects/Smash Gourmet/Flyer bubble/2.png',
        ],
      },
    ],
  },
]

function Lightbox({ images, startIndex, onClose }) {
  const [idx, setIdx] = useState(startIndex)
  const prev = () => setIdx((i) => (i - 1 + images.length) % images.length)
  const next = () => setIdx((i) => (i + 1) % images.length)

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      onClick={onClose}
      style={{
        position: 'fixed', inset: 0, zIndex: 1000,
        background: 'rgba(6,9,18,0.95)',
        display: 'flex', alignItems: 'center', justifyContent: 'center',
        padding: '2rem',
      }}
    >
      {/* Close */}
      <button onClick={onClose} style={{
        position: 'absolute', top: '1.5rem', right: '1.5rem',
        background: 'rgba(194,231,255,0.1)', border: '1px solid rgba(194,231,255,0.2)',
        borderRadius: '50%', width: '2.5rem', height: '2.5rem',
        display: 'flex', alignItems: 'center', justifyContent: 'center',
        color: '#c2e7ff', cursor: 'pointer',
      }}>
        <X size={18} />
      </button>

      {/* Prev */}
      <button onClick={(e) => { e.stopPropagation(); prev() }} style={{
        position: 'absolute', left: '1.5rem', top: '50%', transform: 'translateY(-50%)',
        background: 'rgba(194,231,255,0.1)', border: '1px solid rgba(194,231,255,0.2)',
        borderRadius: '50%', width: '2.5rem', height: '2.5rem',
        display: 'flex', alignItems: 'center', justifyContent: 'center',
        color: '#c2e7ff', cursor: 'pointer',
      }}>
        <ChevronLeft size={20} />
      </button>

      {/* Image */}
      <motion.img
        key={idx}
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.2 }}
        src={images[idx]}
        alt=""
        onClick={(e) => e.stopPropagation()}
        style={{ maxHeight: '85vh', maxWidth: '85vw', objectFit: 'contain', borderRadius: '0.75rem' }}
      />

      {/* Next */}
      <button onClick={(e) => { e.stopPropagation(); next() }} style={{
        position: 'absolute', right: '1.5rem', top: '50%', transform: 'translateY(-50%)',
        background: 'rgba(194,231,255,0.1)', border: '1px solid rgba(194,231,255,0.2)',
        borderRadius: '50%', width: '2.5rem', height: '2.5rem',
        display: 'flex', alignItems: 'center', justifyContent: 'center',
        color: '#c2e7ff', cursor: 'pointer',
      }}>
        <ChevronRight size={20} />
      </button>

      {/* Counter */}
      <div style={{
        position: 'absolute', bottom: '1.5rem', left: '50%', transform: 'translateX(-50%)',
        fontSize: '0.75rem', color: 'rgba(194,231,255,0.5)', letterSpacing: '0.1em',
      }}>
        {idx + 1} / {images.length}
      </div>
    </motion.div>
  )
}

export default function Portfolio() {
  const [lightbox, setLightbox] = useState(null) // { images, index }
  const [activeTab, setActiveTab] = useState({}) // clientName -> categoryName
  const [activeWebTab, setActiveWebTab] = useState({}) // webClientName -> 'site' | 'ads'

  return (
    <section id="portfolio" className="a2-section">
      <div className="a2-container">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.7 }}
          className="a2-section-title"
        >
          <span className="a2-section-label">Nos réalisations</span>
          <h2 className="a2-section-heading">Portfolio</h2>
          <p className="a2-section-sub">Chaque projet est une histoire — la vôtre, racontée avec précision et audace.</p>
        </motion.div>

        {/* Web clients — tabs: Site Web / Ads */}
        {webClients.map((client) => {
          const tabs = [...(client.ads?.length ? [{ key: 'ads', label: 'Visuels Ads' }] : []), { key: 'site', label: 'Site Web' }]
          const currentWebTab = activeWebTab[client.name] || (client.ads?.length ? 'ads' : 'site')

          return (
            <motion.div
              key={client.name}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-80px' }}
              transition={{ duration: 0.7 }}
              className="glass-card"
              style={{ padding: '2rem', marginBottom: '2rem' }}
            >
              {/* Header */}
              <div style={{ marginBottom: '1.75rem' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '0.4rem' }}>
                  <h3 style={{ fontFamily: 'Montserrat, sans-serif', fontSize: '1.4rem', fontWeight: 900, color: '#fff' }}>{client.name}</h3>
                  {client.tag && <span style={{ padding: '0.2rem 0.75rem', borderRadius: '9999px', background: 'rgba(194,231,255,0.1)', border: '1px solid rgba(194,231,255,0.2)', fontSize: '0.68rem', fontWeight: 600, color: '#c2e7ff', letterSpacing: '0.1em' }}>{client.tag}</span>}
                </div>
                <p style={{ fontSize: '0.875rem', color: 'rgba(194,231,255,0.5)', lineHeight: 1.6 }}>{client.description}</p>
              </div>

              {/* Tabs */}
              <div style={{ display: 'flex', gap: '0.5rem', marginBottom: '1.5rem', flexWrap: 'wrap' }}>
                {tabs.map((tab) => (
                  <button
                    key={tab.key}
                    onClick={() => setActiveWebTab({ ...activeWebTab, [client.name]: tab.key })}
                    style={{
                      padding: '0.4rem 1rem', borderRadius: '9999px', fontSize: '0.8rem',
                      fontWeight: 600, cursor: 'pointer', transition: 'all 0.2s',
                      background: currentWebTab === tab.key ? '#c2e7ff' : 'rgba(194,231,255,0.07)',
                      color: currentWebTab === tab.key ? '#060912' : '#89c8f0',
                      border: currentWebTab === tab.key ? 'none' : '1px solid rgba(194,231,255,0.15)',
                      fontFamily: 'Inter, sans-serif',
                    }}
                  >
                    {tab.label}
                    {tab.key === 'ads' && (
                      <span style={{ marginLeft: '0.4rem', opacity: 0.6, fontSize: '0.7rem' }}>{client.ads.length}</span>
                    )}
                  </button>
                ))}
                {currentWebTab === 'site' && (
                  <a href={client.url} target="_blank" rel="noopener noreferrer" style={{
                    marginLeft: 'auto', display: 'inline-flex', alignItems: 'center', gap: '0.4rem',
                    padding: '0.4rem 1rem', borderRadius: '9999px',
                    background: 'transparent', border: '1px solid rgba(194,231,255,0.3)',
                    color: '#c2e7ff', fontSize: '0.8rem', fontWeight: 600, textDecoration: 'none',
                  }}>
                    Ouvrir ↗
                  </a>
                )}
              </div>

              {/* Content */}
              <AnimatePresence mode="wait">
                {currentWebTab === 'site' ? (
                  <motion.div key="site" initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0 }} transition={{ duration: 0.3 }}>
                    <div style={{
                      position: 'relative', width: '100%', height: '500px',
                      borderRadius: '0.875rem', overflow: 'hidden',
                      border: '1px solid rgba(194,231,255,0.1)',
                    }}>
                      <iframe
                        src={client.url}
                        title={client.name}
                        style={{ width: '100%', height: '100%', border: 'none', display: 'block' }}
                        loading="lazy"
                        sandbox="allow-scripts allow-same-origin allow-forms"
                      />
                      <a href={client.url} target="_blank" rel="noopener noreferrer"
                        style={{ position: 'absolute', inset: 0, zIndex: 10 }}
                        aria-label={`Visiter ${client.name}`}
                      />
                    </div>
                  </motion.div>
                ) : (
                  <motion.div key="ads" initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0 }} transition={{ duration: 0.3 }}
                    style={{
                      display: 'grid',
                      gridTemplateColumns: 'repeat(auto-fill, minmax(min(100%, 180px), 1fr))',
                      gap: '0.75rem',
                    }}
                  >
                    {client.ads.map((src, i) => (
                      <motion.div
                        key={src}
                        whileHover={{ scale: 1.03 }}
                        onClick={() => setLightbox({ images: client.ads, index: i })}
                        style={{
                          position: 'relative', borderRadius: '0.75rem',
                          overflow: 'hidden', cursor: 'pointer',
                          aspectRatio: '1/1',
                          border: '1px solid rgba(194,231,255,0.1)',
                        }}
                      >
                        <img
                          src={src}
                          alt={`${client.name} — Ad ${i + 1}`}
                          style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }}
                        />
                        <motion.div
                          initial={{ opacity: 0 }}
                          whileHover={{ opacity: 1 }}
                          style={{
                            position: 'absolute', inset: 0,
                            background: 'rgba(6,9,18,0.5)',
                            display: 'flex', alignItems: 'center', justifyContent: 'center',
                          }}
                        >
                          <span style={{ fontSize: '0.75rem', fontWeight: 600, color: '#c2e7ff', letterSpacing: '0.1em', textTransform: 'uppercase' }}>Agrandir</span>
                        </motion.div>
                      </motion.div>
                    ))}
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          )
        })}

        {/* Image clients */}
        {clients.map((client) => {
          const currentCat = activeTab[client.name] || client.categories[0].name
          const category = client.categories.find((c) => c.name === currentCat)

          return (
            <motion.div
              key={client.name}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-80px' }}
              transition={{ duration: 0.7 }}
              className="glass-card"
              style={{ padding: '2rem', marginBottom: '2rem' }}
            >
              {/* Client header */}
              <div style={{ marginBottom: '1.75rem' }}>
                <h3 style={{
                  fontFamily: 'Montserrat, sans-serif', fontSize: '1.4rem',
                  fontWeight: 900, color: '#fff', marginBottom: '0.4rem',
                }}>{client.name}</h3>
                <p style={{ fontSize: '0.875rem', color: 'rgba(194,231,255,0.5)', lineHeight: 1.6 }}>{client.description}</p>
              </div>

              {/* Category tabs */}
              <div style={{ display: 'flex', gap: '0.5rem', marginBottom: '1.5rem', flexWrap: 'wrap' }}>
                {client.categories.map((cat) => (
                  <button
                    key={cat.name}
                    onClick={() => setActiveTab({ ...activeTab, [client.name]: cat.name })}
                    style={{
                      padding: '0.4rem 1rem', borderRadius: '9999px', fontSize: '0.8rem',
                      fontWeight: 600, cursor: 'pointer', transition: 'all 0.2s',
                      background: currentCat === cat.name ? '#c2e7ff' : 'rgba(194,231,255,0.07)',
                      color: currentCat === cat.name ? '#060912' : '#89c8f0',
                      border: currentCat === cat.name ? 'none' : '1px solid rgba(194,231,255,0.15)',
                      fontFamily: 'Inter, sans-serif',
                    }}
                  >
                    {cat.name}
                    <span style={{ marginLeft: '0.4rem', opacity: 0.6, fontSize: '0.7rem' }}>
                      {cat.images.length}
                    </span>
                  </button>
                ))}
              </div>

              {/* Image grid */}
              <AnimatePresence mode="wait">
                <motion.div
                  key={currentCat}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.3 }}
                  style={{
                    display: 'grid',
                    gridTemplateColumns: 'repeat(auto-fill, minmax(min(100%, 200px), 1fr))',
                    gap: '0.75rem',
                  }}
                >
                  {category.images.map((src, i) => (
                    <motion.div
                      key={src}
                      whileHover={{ scale: 1.03 }}
                      onClick={() => setLightbox({ images: category.images, index: i })}
                      style={{
                        position: 'relative', borderRadius: '0.75rem',
                        overflow: 'hidden', cursor: 'pointer',
                        aspectRatio: '3/4',
                        border: '1px solid rgba(194,231,255,0.1)',
                      }}
                    >
                      <img
                        src={src}
                        alt={`${client.name} — ${currentCat} ${i + 1}`}
                        style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }}
                      />
                      {/* Hover overlay */}
                      <motion.div
                        initial={{ opacity: 0 }}
                        whileHover={{ opacity: 1 }}
                        style={{
                          position: 'absolute', inset: 0,
                          background: 'rgba(6,9,18,0.5)',
                          display: 'flex', alignItems: 'center', justifyContent: 'center',
                        }}
                      >
                        <span style={{
                          fontSize: '0.75rem', fontWeight: 600, color: '#c2e7ff',
                          letterSpacing: '0.1em', textTransform: 'uppercase',
                        }}>Agrandir</span>
                      </motion.div>
                    </motion.div>
                  ))}
                </motion.div>
              </AnimatePresence>
            </motion.div>
          )
        })}
      </div>

      {/* Lightbox */}
      <AnimatePresence>
        {lightbox && (
          <Lightbox
            images={lightbox.images}
            startIndex={lightbox.index}
            onClose={() => setLightbox(null)}
          />
        )}
      </AnimatePresence>
    </section>
  )
}
