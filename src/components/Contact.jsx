import { useState, useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { Send, Mail, MapPin } from 'lucide-react'

const IgIcon = () => (
  <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <rect x="2" y="2" width="20" height="20" rx="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/>
  </svg>
)
const LiIcon = () => (
  <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-4 0v7h-4v-7a6 6 0 0 1 6-6z"/><rect x="2" y="9" width="4" height="12"/><circle cx="4" cy="4" r="2"/>
  </svg>
)

const inputStyle = {
  width: '100%', padding: '0.875rem 1rem', borderRadius: '0.875rem',
  background: 'rgba(255,255,255,0.7)', border: '1px solid rgba(42,127,192,0.2)',
  color: '#1a2a3a', fontSize: '0.875rem', outline: 'none',
  transition: 'border-color 0.2s, box-shadow 0.2s',
  fontFamily: 'Inter, sans-serif', boxShadow: '0 1px 4px rgba(42,127,192,0.06)',
}

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', message: '' })
  const [sent, setSent] = useState(false)
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value })
  const handleSubmit = (e) => {
    e.preventDefault(); setSent(true)
    setTimeout(() => setSent(false), 4000)
    setForm({ name: '', email: '', message: '' })
  }

  return (
    <section id="contact" className="a2-section marble-bg">
      <div className="a2-container">
        <motion.div ref={ref} initial={{ opacity: 0, y: 30 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.7 }} className="a2-section-title">
          <span className="a2-section-label">Travaillons ensemble</span>
          <h2 className="a2-section-heading">Démarrons votre projet</h2>
          <p className="a2-section-sub">Un projet en tête ? Parlez-nous. Nous vous répondons sous 24h.</p>
        </motion.div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 24rem), 1fr))', gap: '3rem', alignItems: 'start' }}>
          {/* Form */}
          <motion.form initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.7 }}
            onSubmit={handleSubmit} className="glass-card" style={{ padding: '2rem', display: 'flex', flexDirection: 'column', gap: '1.25rem' }}
          >
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
              <div>
                <label style={{ display: 'block', fontSize: '0.65rem', color: '#4a6070', textTransform: 'uppercase', letterSpacing: '0.15em', marginBottom: '0.5rem' }}>Nom</label>
                <input type="text" name="name" value={form.name} onChange={handleChange} required placeholder="Votre nom" style={inputStyle} />
              </div>
              <div>
                <label style={{ display: 'block', fontSize: '0.65rem', color: '#4a6070', textTransform: 'uppercase', letterSpacing: '0.15em', marginBottom: '0.5rem' }}>Email</label>
                <input type="email" name="email" value={form.email} onChange={handleChange} required placeholder="votre@email.com" style={inputStyle} />
              </div>
            </div>
            <div>
              <label style={{ display: 'block', fontSize: '0.65rem', color: '#4a6070', textTransform: 'uppercase', letterSpacing: '0.15em', marginBottom: '0.5rem' }}>Message</label>
              <textarea name="message" value={form.message} onChange={handleChange} required rows={6} placeholder="Décrivez votre projet..." style={{ ...inputStyle, resize: 'none' }} />
            </div>
            <button type="submit" className="btn-primary" style={{ width: '100%', justifyContent: 'center', fontFamily: 'Inter, sans-serif' }}>
              {sent ? 'Message envoyé ✓' : <><span>Envoyer le message</span><Send size={15} /></>}
            </button>
          </motion.form>

          {/* Info */}
          <motion.div initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.7, delay: 0.1 }}
            style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}
          >
            <div className="glass-card" style={{ padding: '1.75rem' }}>
              <h3 style={{ fontFamily: 'Montserrat, sans-serif', fontSize: '1rem', fontWeight: 700, color: '#0f2236', marginBottom: '1.25rem' }}>Coordonnées</h3>
              {[{ icon: <Mail size={14} color="#2a7fc0" />, text: 'contact@a2agency.fr', href: 'mailto:contact@a2agency.fr' },
                { icon: <MapPin size={14} color="#2a7fc0" />, text: 'France', href: null }].map(({ icon, text, href }) => (
                <div key={text} style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '0.875rem' }}>
                  <div style={{ width: '2.2rem', height: '2.2rem', borderRadius: '0.625rem', background: 'rgba(42,127,192,0.1)', border: '1px solid rgba(42,127,192,0.2)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>{icon}</div>
                  {href ? <a href={href} style={{ fontSize: '0.875rem', color: '#3a5060', textDecoration: 'none' }}>{text}</a>
                    : <span style={{ fontSize: '0.875rem', color: '#3a5060' }}>{text}</span>}
                </div>
              ))}
            </div>

            <div className="glass-card" style={{ padding: '1.75rem' }}>
              <h3 style={{ fontSize: '0.68rem', fontWeight: 700, color: '#4a6070', textTransform: 'uppercase', letterSpacing: '0.2em', marginBottom: '1rem' }}>Réseaux sociaux</h3>
              <div style={{ display: 'flex', gap: '0.75rem' }}>
                {[{ Icon: IgIcon, label: 'Instagram', href: 'https://www.instagram.com/a2agency.fr' }].map(({ Icon, label, href }) => (
                  <a key={label} href={href} target="_blank" rel="noopener noreferrer" aria-label={label} style={{
                    width: '2.5rem', height: '2.5rem', borderRadius: '0.75rem',
                    background: 'rgba(42,127,192,0.1)', border: '1px solid rgba(42,127,192,0.2)',
                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                    color: '#2a7fc0', textDecoration: 'none', transition: 'all 0.2s',
                  }}>
                    <Icon />
                  </a>
                ))}
              </div>
            </div>

            <div className="glass-card" style={{ padding: '1.5rem', borderLeft: '3px solid #2a7fc0', borderRadius: '0 1.25rem 1.25rem 0' }}>
              <p style={{ fontSize: '0.875rem', color: '#4a6070', lineHeight: 1.75 }}>
                <strong style={{ color: '#0f2236', fontWeight: 700 }}>Réponse garantie sous 24h.</strong>{' '}
                Nous prenons le temps d'étudier chaque projet avant de vous proposer une solution sur mesure.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
