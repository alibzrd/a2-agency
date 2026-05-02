import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { Layers, Zap, Globe } from 'lucide-react'

const services = [
  { Icon: Layers, title: 'Stratégie de Marque', subtitle: 'Branding & Identité', description: "Nous construisons des identités mémorables. Logo, charte graphique, positionnement — chaque élément pensé pour raconter votre histoire avec puissance.", features: ['Création de logo', 'Charte graphique', 'Positionnement', 'Guidelines'] },
  { Icon: Zap, title: 'Création de Contenu', subtitle: 'Digital & Social Media', description: "Du contenu qui convertit. Posts, Reels, campagnes, flyers — visuels percutants et messages calibrés pour capter l'attention sur tous vos canaux.", features: ['Social media', 'Vidéo & Reels', 'Flyers & Print', 'Stratégie éditoriale'], featured: true },
  { Icon: Globe, title: 'Développement Web', subtitle: 'Design UX/UI', description: "Interfaces digitales qui impressionnent et convertissent. Sites vitrines, e-commerce — esthétique haut de gamme et performance irréprochable.", features: ['Site vitrine', 'E-commerce', 'UX/UI Design', 'SEO'] },
]

export default function Services() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-100px' })
  return (
    <section id="services" className="a2-section" style={{ background: 'rgba(129,152,177,0.02)' }}>
      <div style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%,-50%)', width: '50rem', height: '25rem', borderRadius: '50%', background: 'rgba(129,152,177,0.04)', filter: 'blur(120px)', pointerEvents: 'none' }} />
      <div className="a2-container">
        <motion.div ref={ref} initial={{ opacity: 0, y: 30 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.7 }} className="a2-section-title">
          <span className="a2-section-label">Ce que nous faisons</span>
          <h2 className="a2-section-heading">Nos services</h2>
          <p className="a2-section-sub">Une offre complète pour couvrir chaque dimension de votre communication.</p>
        </motion.div>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 20rem), 1fr))', gap: '1.5rem' }}>
          {services.map((s, i) => (
            <motion.div key={s.title} initial={{ opacity: 0, y: 50 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: '-80px' }} transition={{ duration: 0.6, delay: i * 0.15 }} whileHover={{ y: -6 }}
              className="glass-card" style={{ padding: '2rem', position: 'relative', overflow: 'hidden', ...(s.featured ? { border: '1px solid rgba(171,193,216,0.25)', boxShadow: '0 8px 32px rgba(129,152,177,0.1)' } : {}) }}
            >
              {s.featured && <div style={{ position: 'absolute', top: 0, left: '50%', transform: 'translateX(-50%)', padding: '0.2rem 1rem', borderRadius: '0 0 0.75rem 0.75rem', background: '#8198b1', color: '#fff', fontSize: '0.62rem', fontWeight: 700, letterSpacing: '0.15em', textTransform: 'uppercase' }}>Populaire</div>}
              <div style={{ width: '3rem', height: '3rem', borderRadius: '0.875rem', marginBottom: '1.5rem', display: 'flex', alignItems: 'center', justifyContent: 'center', background: 'rgba(171,193,216,0.15)', border: '1px solid rgba(171,193,216,0.2)' }}>
                <s.Icon size={20} color="#abc1d8" />
              </div>
              <h3 style={{ fontFamily: 'Montserrat, sans-serif', fontSize: '1.1rem', fontWeight: 700, color: '#fff', marginBottom: '0.2rem' }}>{s.title}</h3>
              <p style={{ fontSize: '0.68rem', color: '#abc1d8', textTransform: 'uppercase', letterSpacing: '0.15em', marginBottom: '0.875rem' }}>{s.subtitle}</p>
              <p style={{ color: 'rgba(232,240,255,0.55)', fontSize: '0.875rem', lineHeight: 1.75, marginBottom: '1.5rem' }}>{s.description}</p>
              <ul style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                {s.features.map(f => <li key={f} style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', fontSize: '0.875rem', color: 'rgba(232,240,255,0.5)' }}><span style={{ width: '5px', height: '5px', borderRadius: '50%', background: '#8198b1', flexShrink: 0 }} />{f}</li>)}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
