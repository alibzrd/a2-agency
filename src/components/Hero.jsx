import { motion } from 'framer-motion'
import { ArrowRight, Sparkles } from 'lucide-react'

export default function Hero() {
  return (
    <section style={{
      position: 'relative',
      minHeight: '100vh',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      overflow: 'hidden',
      paddingTop: '5rem',
    }}>
      {/* Glow orbs */}
      <div style={{ position: 'absolute', inset: 0, pointerEvents: 'none' }}>
        <div style={{
          position: 'absolute', top: '25%', left: '25%',
          width: '24rem', height: '24rem', borderRadius: '50%',
          background: 'rgba(30,95,255,0.12)', filter: 'blur(120px)',
        }} />
        <div style={{
          position: 'absolute', bottom: '33%', right: '25%',
          width: '20rem', height: '20rem', borderRadius: '50%',
          background: 'rgba(10,61,204,0.08)', filter: 'blur(100px)',
        }} />
      </div>

      {/* Grid */}
      <div style={{
        position: 'absolute', inset: 0, opacity: 0.03,
        backgroundImage: 'linear-gradient(#fff 1px, transparent 1px), linear-gradient(90deg, #fff 1px, transparent 1px)',
        backgroundSize: '60px 60px',
      }} />

      <div style={{
        position: 'relative', zIndex: 10,
        width: '100%', maxWidth: '60rem',
        marginLeft: 'auto', marginRight: 'auto',
        padding: '0 1.5rem',
        textAlign: 'center',
      }}>
        {/* Badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          style={{
            display: 'inline-flex', alignItems: 'center', gap: '0.5rem',
            padding: '0.5rem 1rem', borderRadius: '9999px',
            border: '1px solid rgba(30,95,255,0.3)',
            background: 'rgba(30,95,255,0.1)',
            color: '#6b9fff', fontSize: '0.7rem',
            fontWeight: 700, letterSpacing: '0.25em', textTransform: 'uppercase',
            marginBottom: '2rem',
          }}
        >
          <Sparkles size={12} />
          Agence Communication 360°
        </motion.div>

        {/* Title */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.1 }}
          style={{
            fontFamily: 'Montserrat, sans-serif',
            fontSize: 'clamp(2.8rem, 8vw, 5.5rem)',
            fontWeight: 900,
            lineHeight: 1.05,
            letterSpacing: '-0.02em',
            color: '#ffffff',
            marginBottom: '1.5rem',
          }}
        >
          Votre communication
          <br />
          <span style={{
            background: 'linear-gradient(135deg, #1e5fff, #6b9fff, #1e5fff)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            backgroundClip: 'text',
          }}>
            à la puissance
          </span>
          <sup style={{
            color: '#1e5fff',
            fontSize: 'clamp(1.5rem, 4vw, 3rem)',
            fontWeight: 900,
            marginLeft: '0.2rem',
            verticalAlign: 'super',
            WebkitTextFillColor: '#1e5fff',
          }}>
            2
          </sup>
        </motion.h1>

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          style={{
            fontSize: '1.1rem', color: 'rgba(240,244,255,0.5)',
            fontWeight: 300, lineHeight: 1.8,
            maxWidth: '36rem', margin: '0 auto 3rem',
          }}
        >
          Stratégie de marque, création de contenu et développement web —
          deux expertises fusionnées pour un impact exponentiel.
        </motion.p>

        {/* CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.3 }}
          style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}
        >
          <a
            href="#contact"
            className="group"
            style={{
              display: 'inline-flex', alignItems: 'center', gap: '0.75rem',
              padding: '1rem 2rem', borderRadius: '9999px',
              background: '#1e5fff', color: '#fff',
              fontWeight: 600, fontSize: '0.875rem', letterSpacing: '0.05em',
              textDecoration: 'none', transition: 'all 0.3s',
              boxShadow: '0 0 0 rgba(30,95,255,0)',
            }}
            onMouseEnter={e => e.currentTarget.style.boxShadow = '0 0 40px rgba(30,95,255,0.5)'}
            onMouseLeave={e => e.currentTarget.style.boxShadow = '0 0 0 rgba(30,95,255,0)'}
          >
            Obtenir un devis <ArrowRight size={16} />
          </a>
          <a
            href="#portfolio"
            style={{
              display: 'inline-flex', alignItems: 'center',
              padding: '1rem 2rem', borderRadius: '9999px',
              border: '1px solid rgba(255,255,255,0.15)',
              color: 'rgba(240,244,255,0.7)',
              fontWeight: 600, fontSize: '0.875rem',
              textDecoration: 'none', transition: 'all 0.3s',
            }}
            onMouseEnter={e => { e.currentTarget.style.borderColor = 'rgba(255,255,255,0.3)'; e.currentTarget.style.color = '#fff' }}
            onMouseLeave={e => { e.currentTarget.style.borderColor = 'rgba(255,255,255,0.15)'; e.currentTarget.style.color = 'rgba(240,244,255,0.7)' }}
          >
            Voir nos projets
          </a>
        </motion.div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          style={{
            marginTop: '5rem',
            display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)',
            gap: '2rem', maxWidth: '28rem',
            marginLeft: 'auto', marginRight: 'auto',
          }}
        >
          {[
            { value: '50+', label: 'Projets livrés' },
            { value: '30+', label: 'Clients satisfaits' },
            { value: '360°', label: 'Communication' },
          ].map((stat) => (
            <div key={stat.label} style={{ textAlign: 'center' }}>
              <div style={{
                fontFamily: 'Montserrat, sans-serif',
                fontSize: '1.75rem', fontWeight: 900, color: '#fff',
                marginBottom: '0.25rem',
              }}>{stat.value}</div>
              <div style={{
                fontSize: '0.65rem', color: 'rgba(240,244,255,0.4)',
                textTransform: 'uppercase', letterSpacing: '0.1em',
              }}>{stat.label}</div>
            </div>
          ))}
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2 }}
        style={{
          position: 'absolute', bottom: '2.5rem',
          left: '50%', transform: 'translateX(-50%)',
          display: 'flex', flexDirection: 'column',
          alignItems: 'center', gap: '0.5rem',
        }}
      >
        <span style={{ fontSize: '0.65rem', color: 'rgba(240,244,255,0.3)', letterSpacing: '0.2em', textTransform: 'uppercase' }}>
          Scroll
        </span>
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
          style={{ width: '1px', height: '2.5rem', background: 'linear-gradient(to bottom, rgba(255,255,255,0.3), transparent)' }}
        />
      </motion.div>
    </section>
  )
}
