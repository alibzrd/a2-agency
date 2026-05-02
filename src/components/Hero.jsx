import { motion } from 'framer-motion'
import { ArrowRight, Sparkles } from 'lucide-react'
import Logo from './Logo'

export default function Hero() {
  return (
    <section style={{
      position: 'relative', minHeight: '100vh',
      display: 'flex', alignItems: 'center', justifyContent: 'center',
      overflow: 'hidden', paddingTop: '5rem', background: '#060912',
    }}>
      {/* Glow orbs */}
      <div style={{ position: 'absolute', inset: 0, pointerEvents: 'none' }}>
        <div style={{ position: 'absolute', top: '20%', left: '50%', transform: 'translateX(-50%)', width: '40rem', height: '40rem', borderRadius: '50%', background: 'rgba(30,95,255,0.08)', filter: 'blur(120px)' }} />
        <div style={{ position: 'absolute', bottom: '10%', left: '20%', width: '20rem', height: '20rem', borderRadius: '50%', background: 'rgba(30,95,255,0.05)', filter: 'blur(80px)' }} />
      </div>
      {/* Grid */}
      <div style={{ position: 'absolute', inset: 0, opacity: 0.025, backgroundImage: 'linear-gradient(rgba(255,255,255,1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,1) 1px, transparent 1px)', backgroundSize: '60px 60px' }} />

      <div style={{ position: 'relative', zIndex: 10, width: '100%', maxWidth: '56rem', margin: '0 auto', padding: '0 1.5rem', textAlign: 'center' }}>

        {/* Logo central */}
        <motion.div
          initial={{ opacity: 0, scale: 0.7 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.9, ease: 'easeOut' }}
          style={{ display: 'flex', justifyContent: 'center', marginBottom: '3rem' }}
        >
          <Logo size={140} showAgency={true} />
        </motion.div>

        {/* Badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.3 }}
          style={{
            display: 'inline-flex', alignItems: 'center', gap: '0.5rem',
            padding: '0.45rem 1.1rem', borderRadius: '9999px',
            border: '1px solid rgba(30,95,255,0.35)', background: 'rgba(30,95,255,0.1)',
            color: '#6b9fff', fontSize: '0.7rem', fontWeight: 700,
            letterSpacing: '0.25em', textTransform: 'uppercase', marginBottom: '2rem',
          }}
        >
          <Sparkles size={11} /> Agence Communication 360°
        </motion.div>

        {/* Title */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, delay: 0.4 }}
          style={{
            fontFamily: 'Montserrat, sans-serif',
            fontSize: 'clamp(2.4rem, 6.5vw, 4.5rem)',
            fontWeight: 900, lineHeight: 1.08,
            letterSpacing: '-0.02em', color: '#ffffff', marginBottom: '1.5rem',
          }}
        >
          Votre communication
          <br />
          <span style={{ background: 'linear-gradient(135deg, #4d8aff, #1e5fff)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text' }}>
            à la puissance
          </span>
          <sup style={{ color: '#1e5fff', fontSize: '45%', verticalAlign: 'super', WebkitTextFillColor: '#1e5fff' }}>2</sup>
        </motion.h1>

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, delay: 0.5 }}
          style={{ fontSize: '1.05rem', color: 'rgba(232,240,255,0.5)', fontWeight: 300, lineHeight: 1.85, maxWidth: '34rem', margin: '0 auto 2.5rem' }}
        >
          Stratégie de marque, création de contenu et développement web —
          deux expertises fusionnées pour un impact exponentiel.
        </motion.p>

        {/* CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, delay: 0.6 }}
          style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap', marginBottom: '4rem' }}
        >
          <a href="#contact" className="btn-primary">Obtenir un devis <ArrowRight size={16} /></a>
          <a href="#portfolio" className="btn-secondary">Voir nos projets</a>
        </motion.div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.8 }}
          style={{ display: 'grid', gridTemplateColumns: 'repeat(3,1fr)', gap: '1px', maxWidth: '28rem', margin: '0 auto' }}
        >
          {[{ value: '50+', label: 'Projets' }, { value: '30+', label: 'Clients' }, { value: '360°', label: 'Communication' }].map((s, i) => (
            <div key={s.label} className="glass-card" style={{
              padding: '1.1rem 0.75rem', textAlign: 'center',
              borderRadius: i === 0 ? '1rem 0 0 1rem' : i === 2 ? '0 1rem 1rem 0' : '0',
            }}>
              <div style={{ fontFamily: 'Montserrat, sans-serif', fontSize: '1.5rem', fontWeight: 900, color: '#fff' }}>{s.value}</div>
              <div style={{ fontSize: '0.6rem', color: 'rgba(232,240,255,0.4)', textTransform: 'uppercase', letterSpacing: '0.08em', marginTop: '0.2rem' }}>{s.label}</div>
            </div>
          ))}
        </motion.div>
      </div>

      {/* Scroll */}
      <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1.4 }}
        style={{ position: 'absolute', bottom: '2rem', left: '50%', transform: 'translateX(-50%)', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '0.4rem' }}
      >
        <span style={{ fontSize: '0.6rem', color: 'rgba(232,240,255,0.3)', letterSpacing: '0.2em', textTransform: 'uppercase' }}>Scroll</span>
        <motion.div animate={{ y: [0, 8, 0] }} transition={{ duration: 1.5, repeat: Infinity }}
          style={{ width: '1px', height: '2rem', background: 'linear-gradient(to bottom, #1e5fff, transparent)' }} />
      </motion.div>
    </section>
  )
}
