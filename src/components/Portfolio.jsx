import { motion } from 'framer-motion'
import { ExternalLink } from 'lucide-react'

const projects = [
  { title: 'Luxe & Beauté', category: 'Branding', from: '#1a5a8a', to: '#2a7fc0', colSpan: 2, height: '16rem', year: '2024' },
  { title: 'RestaurantX', category: 'Menu Board & Print', from: '#0f3a5a', to: '#1a6fa0', colSpan: 1, height: '16rem', year: '2024' },
  { title: 'NovaTech', category: 'Site Web & UX/UI', from: '#1a4a6a', to: '#3a8fc0', colSpan: 1, height: '20rem', year: '2025' },
  { title: 'Athletik Brand', category: 'Identité Visuelle', from: '#2a7fc0', to: '#1a4a6a', colSpan: 1, height: '20rem', year: '2025' },
  { title: 'Urban Collective', category: 'Social Media', from: '#0f2a40', to: '#2a7fc0', colSpan: 2, height: '14rem', year: '2025' },
]

export default function Portfolio() {
  return (
    <section id="portfolio" className="a2-section" style={{ background: '#c2e7ff' }}>
      <div className="a2-container">
        <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: '-100px' }} transition={{ duration: 0.7 }} className="a2-section-title">
          <span style={{ display: 'block', fontSize: '0.7rem', fontWeight: 700, letterSpacing: '0.4em', color: '#0a2a40', textTransform: 'uppercase', marginBottom: '1rem' }}>Nos réalisations</span>
          <h2 style={{ fontFamily: 'Montserrat, sans-serif', fontSize: 'clamp(2rem, 5vw, 3rem)', fontWeight: 900, color: '#060912', lineHeight: 1.1 }}>Portfolio</h2>
          <p style={{ marginTop: '1rem', color: '#1a4a6a', fontSize: '1.05rem', lineHeight: 1.75, maxWidth: '38rem', marginLeft: 'auto', marginRight: 'auto' }}>Chaque projet est une histoire — la vôtre, racontée avec précision et audace.</p>
        </motion.div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '1rem' }}>
          {projects.map((p, i) => (
            <motion.div key={p.title}
              initial={{ opacity: 0, scale: 0.95 }} whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: '-60px' }} transition={{ duration: 0.5, delay: i * 0.1 }}
              whileHover={{ scale: 1.02 }}
              style={{
                position: 'relative', overflow: 'hidden', borderRadius: '1.25rem',
                cursor: 'pointer', gridColumn: `span ${p.colSpan}`, height: p.height,
                background: `linear-gradient(135deg, ${p.from}, ${p.to})`,
                boxShadow: '0 4px 20px rgba(15,34,54,0.15)',
              }}
            >
              <div style={{
                position: 'absolute', inset: 0, opacity: 0.06,
                backgroundImage: 'radial-gradient(circle at 20% 80%, #fff 1px, transparent 1px), radial-gradient(circle at 80% 20%, #fff 1px, transparent 1px)',
                backgroundSize: '30px 30px',
              }} />
              <div style={{ position: 'absolute', right: '-2rem', top: '-2rem', width: '8rem', height: '8rem', borderRadius: '50%', border: '1px solid rgba(255,255,255,0.15)' }} />

              <div style={{ position: 'absolute', bottom: 0, left: 0, right: 0, padding: '1.5rem' }}>
                <span style={{ fontSize: '0.68rem', color: 'rgba(255,255,255,0.6)', textTransform: 'uppercase', letterSpacing: '0.15em' }}>
                  {p.category} · {p.year}
                </span>
                <h3 style={{ fontFamily: 'Montserrat, sans-serif', fontSize: '1.1rem', fontWeight: 700, color: '#fff', marginTop: '0.2rem' }}>{p.title}</h3>
              </div>

              <motion.div initial={{ opacity: 0 }} whileHover={{ opacity: 1 }}
                style={{ position: 'absolute', inset: 0, background: 'rgba(26,90,138,0.3)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}
              >
                <div style={{
                  display: 'flex', alignItems: 'center', gap: '0.5rem',
                  padding: '0.6rem 1.25rem', borderRadius: '9999px',
                  background: 'rgba(255,255,255,0.15)', backdropFilter: 'blur(8px)',
                  border: '1px solid rgba(255,255,255,0.3)',
                  color: '#fff', fontSize: '0.875rem', fontWeight: 500,
                }}>
                  <ExternalLink size={14} /> Voir le projet
                </div>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
