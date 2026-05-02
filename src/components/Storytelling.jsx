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
      className="glass-card" style={{ padding: '2rem' }}>
      <div style={{
        width: '3.5rem', height: '3.5rem', borderRadius: '50%', marginBottom: '1.25rem',
        display: 'flex', alignItems: 'center', justifyContent: 'center',
        fontFamily: 'Montserrat, sans-serif', fontWeight: 900, fontSize: '1rem', color: '#fff',
        background: 'linear-gradient(135deg, rgba(171,193,216,0.25), rgba(30,95,255,0.7))',
        border: '1px solid rgba(171,193,216,0.25)',
      }}>{initials}</div>
      <h3 style={{ fontFamily: 'Montserrat, sans-serif', fontSize: '1.1rem', fontWeight: 700, color: '#fff', marginBottom: '0.2rem' }}>{name}</h3>
      <p style={{ fontSize: '0.68rem', color: '#abc1d8', textTransform: 'uppercase', letterSpacing: '0.2em', marginBottom: '1rem' }}>{role}</p>
      <p style={{ color: 'rgba(232,240,255,0.6)', fontSize: '0.9rem', lineHeight: 1.75 }}>{trait}</p>
    </motion.div>
  )
}

export default function Storytelling() {
  const titleRef = useRef(null)
  const titleInView = useInView(titleRef, { once: true, margin: '-80px' })

  return (
    <section id="storytelling" className="a2-section">
      <div style={{ position: 'absolute', top: 0, left: '50%', transform: 'translateX(-50%)', width: '1px', height: '8rem', background: 'linear-gradient(to bottom, transparent, rgba(171,193,216,0.25))' }} />
      <div className="a2-container">
        <motion.div ref={titleRef} initial="hidden" animate={titleInView ? 'visible' : 'hidden'} variants={fadeUp} className="a2-section-title">
          <span className="a2-section-label">L'Origine</span>
          <h2 className="a2-section-heading">Deux visions, <span style={{ background: 'linear-gradient(135deg, #8198b1, #cfdff0)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text' }}>une agence</span></h2>
        </motion.div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 28rem), 1fr))', gap: '3rem', marginBottom: '4rem' }}>
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: '-80px' }} variants={fadeUp} style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
            <p style={{ color: 'rgba(232,240,255,0.7)', fontSize: '1.05rem', lineHeight: 1.85 }}>
              Tout a commencé dans les amphithéâtres d'un Master Communication, où deux esprits aux tempéraments opposés se sont trouvés — et ne se sont plus lâchés.
            </p>
            <p style={{ color: 'rgba(232,240,255,0.7)', fontSize: '1.05rem', lineHeight: 1.85 }}>
              <strong style={{ color: '#fff', fontWeight: 700 }}>Ali</strong>, architecte de stratégies, perçoit chaque marque comme un système à optimiser : cohérent, précis, calibré pour durer.
            </p>
            <p style={{ color: 'rgba(232,240,255,0.7)', fontSize: '1.05rem', lineHeight: 1.85 }}>
              <strong style={{ color: '#fff', fontWeight: 700 }}>Arthur</strong>, lui, voit le monde en images et en émotions. Son audace créative brise les conventions et capte l'attention là où les autres passent inaperçus.
            </p>
          </motion.div>
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: '-80px' }} variants={fadeUp} custom={1} style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
            <p style={{ color: 'rgba(232,240,255,0.7)', fontSize: '1.05rem', lineHeight: 1.85 }}>
              Ensemble, ils ont compris que l'excellence ne choisit pas entre la forme et le fond — elle les fusionne. C'est de cette alchimie qu'est née <strong style={{ color: '#fff', fontWeight: 700 }}>A² Agency</strong>.
            </p>
            <p style={{ color: 'rgba(232,240,255,0.7)', fontSize: '1.05rem', lineHeight: 1.85 }}>
              Chaque projet est une équation. Chaque solution, une signature. Ce qui les motive, c'est de <em style={{ color: '#cfdff0', fontStyle: 'normal', fontWeight: 600 }}>marquer</em>.
            </p>
            <div style={{ borderLeft: '2px solid rgba(171,193,216,0.25)', paddingLeft: '1.5rem' }}>
              <p style={{ color: 'rgba(232,240,255,0.45)', fontSize: '0.9rem', fontStyle: 'italic', lineHeight: 1.8 }}>
                « L'exposant n'est pas qu'un symbole mathématique. C'est notre promesse : votre impact, élevé à la puissance deux. »
              </p>
            </div>
          </motion.div>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 22rem), 1fr))', gap: '1.5rem' }}>
          <Founder name="Arthur" role="Co-Fondateur · Directeur Créatif" initials="A" delay={0}
            trait="L'audace comme boussole. Arthur transforme chaque brief en manifeste visuel. Sa sensibilité artistique donne vie aux identités qui marquent les esprits durablement." />
          <Founder name="Ali" role="Co-Fondateur · Directeur Stratégique" initials="A²" delay={1}
            trait="La stratégie comme colonne vertébrale. Ali traduit les ambitions en feuilles de route précises. Chaque message calibré pour générer un impact réel et mesurable." />
        </div>
      </div>
    </section>
  )
}
