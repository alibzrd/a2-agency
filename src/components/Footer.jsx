import { motion } from 'framer-motion'
import Logo from './Logo'

const IgIcon = () => (
  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <rect x="2" y="2" width="20" height="20" rx="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/>
  </svg>
)
const LiIcon = () => (
  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-4 0v7h-4v-7a6 6 0 0 1 6-6z"/><rect x="2" y="9" width="4" height="12"/><circle cx="4" cy="4" r="2"/>
  </svg>
)
const XIcon = () => (
  <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-4.714-6.231-5.401 6.231H2.744l7.737-8.835L1.254 2.25H8.08l4.253 5.622zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
  </svg>
)

const navLinks = ['Histoire', 'Services', 'Portfolio', 'Contact']

export default function Footer() {
  return (
    <footer style={{ background: 'rgba(15,34,54,0.95)', padding: '4rem 0 2rem', borderTop: '1px solid rgba(42,127,192,0.2)' }}>
      <div className="a2-container">
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '3rem', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '3rem' }}>
          <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }}>
            <Logo size={44} withText dark={false} />
            <p style={{ fontSize: '0.8rem', color: 'rgba(200,220,234,0.5)', marginTop: '0.75rem', maxWidth: '14rem', lineHeight: 1.7 }}>
              Votre communication à la puissance deux.
            </p>
          </motion.div>

          <nav style={{ display: 'flex', gap: '2rem', flexWrap: 'wrap' }}>
            {navLinks.map(l => (
              <a key={l} href={`#${l.toLowerCase()}`} style={{ fontSize: '0.875rem', color: 'rgba(200,220,234,0.5)', textDecoration: 'none', transition: 'color 0.2s' }}
                onMouseEnter={e => e.currentTarget.style.color = '#c8dcea'}
                onMouseLeave={e => e.currentTarget.style.color = 'rgba(200,220,234,0.5)'}
              >{l}</a>
            ))}
          </nav>

          <div style={{ display: 'flex', gap: '0.75rem' }}>
            {[IgIcon, LiIcon, XIcon].map((Icon, i) => (
              <a key={i} href="#" style={{
                width: '2.25rem', height: '2.25rem', borderRadius: '0.625rem',
                background: 'rgba(42,127,192,0.15)', border: '1px solid rgba(42,127,192,0.25)',
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                color: 'rgba(200,220,234,0.5)', textDecoration: 'none', transition: 'all 0.2s',
              }}
                onMouseEnter={e => { e.currentTarget.style.background = 'rgba(42,127,192,0.3)'; e.currentTarget.style.color = '#c8dcea' }}
                onMouseLeave={e => { e.currentTarget.style.background = 'rgba(42,127,192,0.15)'; e.currentTarget.style.color = 'rgba(200,220,234,0.5)' }}
              ><Icon /></a>
            ))}
          </div>
        </div>

        <div style={{ borderTop: '1px solid rgba(42,127,192,0.15)', paddingTop: '1.5rem', display: 'flex', justifyContent: 'space-between', flexWrap: 'wrap', gap: '1rem' }}>
          <p style={{ fontSize: '0.75rem', color: 'rgba(200,220,234,0.35)' }}>© {new Date().getFullYear()} A² Agency. Tous droits réservés.</p>
          <p style={{ fontSize: '0.75rem', color: 'rgba(200,220,234,0.35)' }}>Conçu avec passion · Ali & Arthur</p>
        </div>
      </div>
    </footer>
  )
}
