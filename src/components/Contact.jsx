import { useState, useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { Send, Mail, MapPin } from 'lucide-react'

const IgIcon = () => (
  <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <rect x="2" y="2" width="20" height="20" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/>
  </svg>
)
const LiIcon = () => (
  <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/><rect x="2" y="9" width="4" height="12"/><circle cx="4" cy="4" r="2"/>
  </svg>
)

const inputStyle = {
  width: '100%', padding: '0.875rem 1rem', borderRadius: '0.75rem',
  background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(255,255,255,0.1)',
  color: '#f0f4ff', fontSize: '0.875rem', outline: 'none',
  transition: 'border-color 0.2s, background 0.2s',
  fontFamily: 'Inter, sans-serif',
}

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', message: '' })
  const [sent, setSent] = useState(false)
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value })
  const handleSubmit = (e) => {
    e.preventDefault()
    setSent(true)
    setTimeout(() => setSent(false), 4000)
    setForm({ name: '', email: '', message: '' })
  }

  return (
    <section id="contact" className="a2-section" style={{ background: 'rgba(30,95,255,0.015)' }}>
      <div style={{
        position: 'absolute', bottom: 0, left: '50%', transform: 'translateX(-50%)',
        width: '37rem', height: '18rem', borderRadius: '50%',
        background: 'rgba(30,95,255,0.06)', filter: 'blur(120px)', pointerEvents: 'none',
      }} />

      <div className="a2-container">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="a2-section-title"
        >
          <span className="a2-section-label">Travaillons ensemble</span>
          <h2 className="a2-section-heading">Démarrons votre projet</h2>
          <p className="a2-section-sub">Un projet en tête ? Parlez-nous. Nous vous répondons sous 24h.</p>
        </motion.div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 24rem), 1fr))', gap: '3rem', alignItems: 'start' }}>
          {/* Form */}
          <motion.form
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            onSubmit={handleSubmit}
            style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}
          >
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
              <div>
                <label style={{ display: 'block', fontSize: '0.65rem', color: 'rgba(240,244,255,0.4)', textTransform: 'uppercase', letterSpacing: '0.15em', marginBottom: '0.5rem' }}>Nom</label>
                <input type="text" name="name" value={form.name} onChange={handleChange} required placeholder="Votre nom" style={inputStyle} />
              </div>
              <div>
                <label style={{ display: 'block', fontSize: '0.65rem', color: 'rgba(240,244,255,0.4)', textTransform: 'uppercase', letterSpacing: '0.15em', marginBottom: '0.5rem' }}>Email</label>
                <input type="email" name="email" value={form.email} onChange={handleChange} required placeholder="votre@email.com" style={inputStyle} />
              </div>
            </div>
            <div>
              <label style={{ display: 'block', fontSize: '0.65rem', color: 'rgba(240,244,255,0.4)', textTransform: 'uppercase', letterSpacing: '0.15em', marginBottom: '0.5rem' }}>Message</label>
              <textarea name="message" value={form.message} onChange={handleChange} required rows={6} placeholder="Décrivez votre projet..." style={{ ...inputStyle, resize: 'none' }} />
            </div>
            <button type="submit" style={{
              display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '0.75rem',
              padding: '1rem 2rem', borderRadius: '0.75rem',
              background: '#1e5fff', color: '#fff', border: 'none',
              fontWeight: 600, fontSize: '0.875rem', letterSpacing: '0.05em',
              cursor: 'pointer', transition: 'all 0.3s', fontFamily: 'Inter, sans-serif',
            }}>
              {sent ? 'Message envoyé ✓' : <><span>Envoyer le message</span><Send size={15} /></>}
            </button>
          </motion.form>

          {/* Info */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.1 }}
            style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}
          >
            <div>
              <h3 style={{ fontFamily: 'Montserrat, sans-serif', fontSize: '1.05rem', fontWeight: 700, color: '#fff', marginBottom: '1.25rem' }}>Coordonnées</h3>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                {[
                  { icon: <Mail size={14} color="#4d8aff" />, text: 'contact@a2agency.fr', href: 'mailto:contact@a2agency.fr' },
                  { icon: <MapPin size={14} color="#4d8aff" />, text: 'France', href: null },
                ].map(({ icon, text, href }) => (
                  <div key={text} style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                    <div style={{
                      width: '2.25rem', height: '2.25rem', borderRadius: '0.5rem',
                      background: 'rgba(30,95,255,0.15)', border: '1px solid rgba(30,95,255,0.25)',
                      display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0,
                    }}>{icon}</div>
                    {href
                      ? <a href={href} style={{ fontSize: '0.875rem', color: 'rgba(240,244,255,0.55)', textDecoration: 'none' }}>{text}</a>
                      : <span style={{ fontSize: '0.875rem', color: 'rgba(240,244,255,0.55)' }}>{text}</span>
                    }
                  </div>
                ))}
              </div>
            </div>

            <div>
              <h3 style={{ fontSize: '0.7rem', fontWeight: 600, color: 'rgba(240,244,255,0.4)', textTransform: 'uppercase', letterSpacing: '0.2em', marginBottom: '1rem' }}>Réseaux sociaux</h3>
              <div style={{ display: 'flex', gap: '0.75rem' }}>
                {[
                  { Icon: IgIcon, label: 'Instagram' },
                  { Icon: LiIcon, label: 'LinkedIn' },
                ].map(({ Icon, label }) => (
                  <a key={label} href="#" aria-label={label} style={{
                    width: '2.5rem', height: '2.5rem', borderRadius: '0.75rem',
                    background: 'rgba(255,255,255,0.05)', border: '1px solid rgba(255,255,255,0.1)',
                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                    color: 'rgba(240,244,255,0.4)', textDecoration: 'none', transition: 'all 0.2s',
                  }}>
                    <Icon />
                  </a>
                ))}
              </div>
            </div>

            <div style={{ padding: '1.5rem', borderRadius: '1rem', background: 'rgba(30,95,255,0.06)', border: '1px solid rgba(30,95,255,0.2)' }}>
              <p style={{ fontSize: '0.875rem', color: 'rgba(240,244,255,0.6)', lineHeight: 1.7 }}>
                <strong style={{ color: '#fff', fontWeight: 600 }}>Réponse garantie sous 24h.</strong>{' '}
                Nous prenons le temps d'étudier chaque projet avant de vous proposer une solution sur mesure.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
