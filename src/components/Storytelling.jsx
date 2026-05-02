import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: (i = 0) => ({ opacity: 1, y: 0, transition: { duration: 0.7, delay: i * 0.15, ease: 'easeOut' } }),
}

function Founder({ name, role, trait, initials, delay }) {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })
  return (
    <motion.div ref={ref} initial="hidden" animate={inView ? 'visible' : 'hidden'} variants={fadeUp} custom={delay}
      className="glass-card" style={{ padding: '2rem' }}
    >
      <div style={{
        width: '3.5rem', height: '3.5rem', borderRadius: '50%', marginBottom: '1.25rem',
        display: 'flex', alignItems: 'center', justifyContent: 'center',
        fontFamily: 'Montserrat, sans-serif', fontWeight: 900, fontSize: '1rem', color: '#fff',
        background: 'linear-gradient(135deg, #2a7fc0, #1a5a8a)',
        boxShadow: '0 4px 16px rgba(26,111,160,0.3)',
      }}>{initials}</div>
      <h3 style={{ fontFamily: 'Montserrat, sans-serif', fontSize: '1.1rem', fontWeight: 700, color: '#0f2236', marginBottom: '0.25rem' }}>{name}</h3>
      <p style={{ fontSize: '0.68rem', color: '#2a7fc0', textTransform: 'uppercase', letterSpacing: '0.2em', marginBottom: '1rem' }}>{role}</p>
      <p style={{ color: '#4a6070', fontSize: '0.9rem', lineHeight: 1.75 }}>{trait}</p>
    </motion.div>
  )
}

export default function Storytelling() {
  const titleRef = useRef(null)
  const titleInView = useInView(titleRef, { once: true, margin: '-80px' })

  return (
    <section id="storytelling" className="a2-section" style={{ background: 'rgba(255,255,255,0.3)' }}>
      <div className="a2-container">
        <motion.div ref={titleRef} initial="hidden" animate={titleInView ? 'visible' : 'hidden'} variants={fadeUp} className="a2-section-title">
          <span className="a2-section-label">L'Origine</span>
          <h2 className="a2-section-heading">
            Deux visions,{' '}
            <span style={{ color: '#2a7fc0' }}>une agence</span>
          </h2>
        </motion.div>

        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 28rem), 1fr))',
          gap: '3rem', alignItems: 'start', marginBottom: '4rem',
        }}>
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: '-80px' }} variants={fadeUp}
            style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
            <p style={{ color: '#3a5060', fontSize: '1.05rem', lineHeight: 1.85 }}>
              Tout a commencé dans les amphithéâtres d'un Master Communication, où deux esprits aux tempéraments opposés se sont trouvés — et ne se sont plus lâchés.
            </p>
            <p style={{ color: '#3a5060', fontSize: '1.05rem', lineHeight: 1.85 }}>
              <strong style={{ color: '#0f2236', fontWeight: 700 }}>Ali</strong>, architecte de stratégies, perçoit chaque marque comme un système à optimiser : cohérent, précis, calibré pour durer. Sa rigueur analytique transforme les intuitions créatives en résultats mesurables.
            </p>
            <p style={{ color: '#3a5060', fontSize: '1.05rem', lineHeight: 1.85 }}>
              <strong style={{ color: '#0f2236', fontWeight: 700 }}>Arthur</strong>, lui, voit le monde en images et en émotions. Son audace créative brise les conventions, insuffle de l'âme aux marques et capte l'attention là où les autres passent inaperçus.
            </p>
          </motion.div>

          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: '-80px' }} variants={fadeUp} custom={1}
            style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
            <p style={{ color: '#3a5060', fontSize: '1.05rem', lineHeight: 1.85 }}>
              Ensemble, ils ont compris que l'excellence ne choisit pas entre la forme et le fond — elle les fusionne. C'est de cette alchimie qu'est née <strong style={{ color: '#0f2236', fontWeight: 700 }}>A² Agency</strong> : une agence où la créativité et la stratégie se multiplient mutuellement.
            </p>
            <p style={{ color: '#3a5060', fontSize: '1.05rem', lineHeight: 1.85 }}>
              Chaque projet est une équation. Chaque solution, une signature. Ce qui les motive n'est pas simplement de communiquer — c'est de <em style={{ color: '#1a6fa0', fontStyle: 'normal', fontWeight: 600 }}>marquer</em>.
            </p>
            <div className="glass-card" style={{ padding: '1.5rem', borderLeft: '3px solid #2a7fc0', borderRadius: '0 1rem 1rem 0' }}>
              <p style={{ color: '#4a6070', fontSize: '0.9rem', fontStyle: 'italic', lineHeight: 1.8 }}>
                « L'exposant n'est pas qu'un symbole mathématique. C'est notre promesse : votre impact, élevé à la puissance deux. »
              </p>
            </div>
          </motion.div>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 22rem), 1fr))', gap: '1.5rem' }}>
          <Founder name="Arthur" role="Co-Fondateur · Directeur Créatif" initials="A" delay={0}
            trait="L'audace comme boussole. Arthur transforme chaque brief en manifeste visuel. Sa sensibilité artistique et son instinct créatif donnent vie aux identités qui marquent les esprits durablement." />
          <Founder name="Ali" role="Co-Fondateur · Directeur Stratégique" initials="A²" delay={1}
            trait="La stratégie comme colonne vertébrale. Ali traduit les ambitions en feuilles de route précises. Chaque décision est pensée, chaque message calibré pour générer un impact réel et mesurable." />
        </div>
      </div>
    </section>
  )
}
