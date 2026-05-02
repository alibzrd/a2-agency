import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, delay: i * 0.15, ease: 'easeOut' },
  }),
}

function Founder({ name, role, trait, color, initials, delay }) {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={inView ? 'visible' : 'hidden'}
      variants={fadeUp}
      custom={delay}
      className="relative p-8 rounded-2xl border border-white/8 bg-white/3 backdrop-blur-sm hover:border-[#1e5fff]/30 transition-all duration-500 group"
    >
      <div
        className="w-14 h-14 rounded-full flex items-center justify-center text-lg font-black text-white mb-5"
        style={{ background: `linear-gradient(135deg, ${color}33, ${color}88)`, border: `1px solid ${color}44` }}
      >
        {initials}
      </div>
      <h3 className="text-lg font-bold text-white mb-1">{name}</h3>
      <p className="text-xs text-white/40 uppercase tracking-widest mb-4">{role}</p>
      <p className="text-white/60 text-sm leading-relaxed">{trait}</p>
      <div
        className="absolute bottom-0 left-0 right-0 h-px rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500"
        style={{ background: `linear-gradient(90deg, transparent, ${color}80, transparent)` }}
      />
    </motion.div>
  )
}

export default function Storytelling() {
  const titleRef = useRef(null)
  const titleInView = useInView(titleRef, { once: true, margin: '-80px' })

  return (
    <section id="storytelling" className="relative py-32 px-6 overflow-hidden">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-px h-32 bg-gradient-to-b from-transparent to-[#1e5fff]/40" />

      <div className="max-w-5xl mx-auto">
        {/* Section label */}
        <motion.div
          ref={titleRef}
          initial="hidden"
          animate={titleInView ? 'visible' : 'hidden'}
          variants={fadeUp}
          className="text-center mb-20"
        >
          <span className="text-xs font-semibold tracking-[0.4em] text-[#1e5fff] uppercase">
            L'Origine
          </span>
          <h2 className="mt-4 text-4xl md:text-5xl font-black text-white leading-tight">
            Deux visions,{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#1e5fff] to-[#6b9fff]">
              une agence
            </span>
          </h2>
        </motion.div>

        {/* Narrative text */}
        <div className="grid md:grid-cols-2 gap-16 items-center mb-20">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-80px' }}
            variants={fadeUp}
            className="space-y-6"
          >
            <p className="text-white/70 text-lg leading-relaxed">
              Tout a commencé dans les amphithéâtres d'un Master Communication,
              où deux esprits aux tempéraments opposés se sont trouvés — et ne
              se sont plus lâchés.
            </p>
            <p className="text-white/70 text-lg leading-relaxed">
              <strong className="text-white font-semibold">Ali</strong>, architecte
              de stratégies, perçoit chaque marque comme un système à optimiser :
              cohérent, précis, calibré pour durer. Sa rigueur analytique
              transforme les intuitions créatives en résultats mesurables.
            </p>
            <p className="text-white/70 text-lg leading-relaxed">
              <strong className="text-white font-semibold">Arthur</strong>, lui,
              voit le monde en images et en émotions. Son audace créative brise
              les conventions, insuffle de l'âme aux marques et capte l'attention
              là où les autres passent inaperçus.
            </p>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-80px' }}
            variants={fadeUp}
            custom={1}
            className="space-y-6"
          >
            <p className="text-white/70 text-lg leading-relaxed">
              Ensemble, ils ont compris que l'excellence ne choisit pas entre
              la forme et le fond — elle les fusionne. C'est de cette alchimie
              qu'est née <strong className="text-white font-semibold">A² Agency</strong> :
              une agence où la créativité et la stratégie se multiplient
              mutuellement, jamais ne se compromettent.
            </p>
            <p className="text-white/70 text-lg leading-relaxed">
              Chaque projet est une équation. Chaque solution, une signature.
              Ce qui les motive n'est pas simplement de communiquer — c'est
              de <em className="text-[#6b9fff] not-italic font-medium">marquer</em>.
            </p>
            <div className="pt-4 border-l-2 border-[#1e5fff]/40 pl-6">
              <p className="text-white/50 text-sm italic leading-relaxed">
                « L'exposant n'est pas qu'un symbole mathématique. C'est notre
                promesse : votre impact, élevé à la puissance deux. »
              </p>
            </div>
          </motion.div>
        </div>

        {/* Founder cards */}
        <div className="grid md:grid-cols-2 gap-6">
          <Founder
            name="Arthur"
            role="Co-Fondateur · Directeur Créatif"
            trait="L'audace comme boussole. Arthur transforme chaque brief en manifeste visuel. Sa sensibilité artistique et son instinct créatif donnent vie aux identités qui marquent les esprits durablement."
            color="#1e5fff"
            initials="A"
            delay={0}
          />
          <Founder
            name="Ali"
            role="Co-Fondateur · Directeur Stratégique"
            trait="La stratégie comme colonne vertébrale. Ali traduit les ambitions en feuilles de route précises. Chaque décision est pensée, chaque message est calibré pour générer un impact réel et mesurable."
            color="#4d8aff"
            initials="A²"
            delay={1}
          />
        </div>
      </div>
    </section>
  )
}
