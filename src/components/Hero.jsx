import { motion } from 'framer-motion'
import { ArrowRight, Sparkles } from 'lucide-react'
import Logo from './Logo'

export default function Hero() {
  return (
    <section className="marble-bg" style={{
      position: 'relative', minHeight: '100vh',
      display: 'flex', alignItems: 'center', justifyContent: 'center',
      overflow: 'hidden', paddingTop: '5rem',
    }}>
      {/* Marble veins */}
      <div style={{ position: 'absolute', inset: 0, pointerEvents: 'none', overflow: 'hidden' }}>
        <div style={{ position: 'absolute', top: '-10%', left: '60%', width: '50vw', height: '120%', background: 'rgba(255,255,255,0.25)', transform: 'rotate(-15deg)', borderRadius: '40%', filter: 'blur(40px)' }} />
        <div style={{ position: 'absolute', top: '30%', left: '-5%', width: '30vw', height: '50%', background: 'rgba(180,215,235,0.3)', transform: 'rotate(20deg)', borderRadius: '50%', filter: 'blur(60px)' }} />
        <div style={{ position: 'absolute', bottom: '-5%', right: '5%', width: '40vw', height: '40%', background: 'rgba(200,228,244,0.4)', borderRadius: '50%', filter: 'blur(50px)' }} />
      </div>

      <div style={{
        position: 'relative', zIndex: 10,
        width: '100%', maxWidth: '64rem',
        margin: '0 auto', padding: '0 1.5rem',
        textAlign: 'center',
      }}>
        {/* Big logo center */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          style={{ display: 'flex', justifyContent: 'center', marginBottom: '2rem' }}
        >
          <Logo size={120} withText={false} dark />
        </motion.div>

        {/* Agency text */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          style={{
            fontFamily: 'Montserrat, sans-serif', fontWeight: 700,
            fontSize: '0.85rem', letterSpacing: '0.6em',
            color: '#2a7fc0', textTransform: 'uppercase', marginBottom: '2.5rem',
          }}
        >
          AGENCY
        </motion.div>

        {/* Badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          style={{
            display: 'inline-flex', alignItems: 'center', gap: '0.5rem',
            padding: '0.5rem 1.25rem', borderRadius: '9999px',
            background: 'rgba(255,255,255,0.7)', border: '1px solid rgba(42,127,192,0.25)',
            color: '#1a6fa0', fontSize: '0.72rem',
            fontWeight: 700, letterSpacing: '0.2em', textTransform: 'uppercase',
            marginBottom: '2rem', boxShadow: '0 2px 12px rgba(42,127,192,0.12)',
          }}
        >
          <Sparkles size={12} />
          Agence Communication 360°
        </motion.div>

        {/* Main title */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.4 }}
          style={{
            fontFamily: 'Montserrat, sans-serif',
            fontSize: 'clamp(2.5rem, 7vw, 5rem)',
            fontWeight: 900, lineHeight: 1.05,
            letterSpacing: '-0.02em', color: '#0f2236',
            marginBottom: '1.5rem',
          }}
        >
          Boostez votre communication
          <br />
          <span style={{ color: '#2a7fc0' }}>à la puissance </span>
          <sup style={{ color: '#2a7fc0', fontSize: '55%', verticalAlign: 'super' }}>2</sup>
        </motion.h1>

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.5 }}
          style={{
            fontSize: '1.1rem', color: '#4a6070', fontWeight: 400,
            lineHeight: 1.8, maxWidth: '36rem',
            margin: '0 auto 3rem',
          }}
        >
          Stratégie de marque, création de contenu et développement web —
          deux expertises fusionnées pour un impact exponentiel.
        </motion.p>

        {/* Social proof icons row */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6 }}
          style={{ display: 'flex', justifyContent: 'center', gap: '1rem', marginBottom: '3rem' }}
        >
          {['Instagram', 'TikTok', 'Facebook'].map((s) => (
            <div key={s} className="glass-card" style={{
              padding: '0.5rem 1rem', borderRadius: '9999px',
              fontSize: '0.72rem', fontWeight: 600, color: '#2a7fc0',
              letterSpacing: '0.05em',
            }}>{s}</div>
          ))}
        </motion.div>

        {/* CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.6 }}
          style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}
        >
          <a href="#contact" className="btn-primary">
            Obtenir un devis <ArrowRight size={16} />
          </a>
          <a href="#portfolio" className="btn-secondary">
            Voir nos projets
          </a>
        </motion.div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          style={{
            marginTop: '5rem',
            display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)',
            gap: '1px', maxWidth: '30rem',
            margin: '5rem auto 0',
          }}
        >
          {[
            { value: '50+', label: 'Projets livrés' },
            { value: '30+', label: 'Clients satisfaits' },
            { value: '360°', label: 'Communication' },
          ].map((stat, i) => (
            <div key={stat.label} className="glass-card" style={{ padding: '1.25rem 1rem', textAlign: 'center', borderRadius: i === 0 ? '1rem 0 0 1rem' : i === 2 ? '0 1rem 1rem 0' : '0' }}>
              <div style={{ fontFamily: 'Montserrat, sans-serif', fontSize: '1.6rem', fontWeight: 900, color: '#0f2236' }}>{stat.value}</div>
              <div style={{ fontSize: '0.65rem', color: '#4a6070', textTransform: 'uppercase', letterSpacing: '0.08em', marginTop: '0.2rem' }}>{stat.label}</div>
            </div>
          ))}
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1.4 }}
        style={{ position: 'absolute', bottom: '2rem', left: '50%', transform: 'translateX(-50%)', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '0.5rem' }}
      >
        <span style={{ fontSize: '0.6rem', color: '#4a6070', letterSpacing: '0.2em', textTransform: 'uppercase' }}>Scroll</span>
        <motion.div animate={{ y: [0, 8, 0] }} transition={{ duration: 1.5, repeat: Infinity }}
          style={{ width: '1px', height: '2rem', background: 'linear-gradient(to bottom, #2a7fc0, transparent)' }} />
      </motion.div>
    </section>
  )
}
