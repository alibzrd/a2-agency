import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { Layers, Zap, Globe } from 'lucide-react'

const services = [
  {
    icon: Layers,
    title: 'Stratégie de Marque',
    subtitle: 'Branding & Identité',
    description:
      "Nous construisons des identités de marque cohérentes et mémorables. Logo, charte graphique, positionnement — chaque élément est pensé pour raconter votre histoire avec puissance et distinction.",
    features: ['Création de logo', 'Charte graphique', 'Positionnement', 'Guidelines'],
    color: '#1e5fff',
  },
  {
    icon: Zap,
    title: 'Création de Contenu',
    subtitle: 'Digital & Social Media',
    description:
      "Du contenu qui convertit. Posts, Reels, campagnes publicitaires, flyers — nous créons des visuels percutants et des messages calibrés pour capter l'attention sur tous vos canaux digitaux.",
    features: ['Social media', 'Vidéo & Reels', 'Flyers & Print', 'Stratégie éditoriale'],
    color: '#0a3dcc',
    featured: true,
  },
  {
    icon: Globe,
    title: 'Développement Web',
    subtitle: 'Design UX/UI',
    description:
      "Des interfaces digitales qui impressionnent et convertissent. Sites vitrines, e-commerce, dashboards — nous allions esthétique haut de gamme et performance technique irréprochable.",
    features: ['Site vitrine', 'E-commerce', 'UX/UI Design', 'Optimisation SEO'],
    color: '#1e5fff',
  },
]

export default function Services() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <section id="services" className="relative py-32 px-6 overflow-hidden">
      {/* Background accent */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] rounded-full bg-[#1e5fff]/5 blur-[120px]" />
      </div>

      <div className="max-w-6xl mx-auto">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="text-center mb-20"
        >
          <span className="text-xs font-semibold tracking-[0.4em] text-[#1e5fff] uppercase">
            Ce que nous faisons
          </span>
          <h2 className="mt-4 text-4xl md:text-5xl font-black text-white leading-tight">
            Nos services
          </h2>
          <p className="mt-4 text-white/50 max-w-xl mx-auto text-lg leading-relaxed">
            Une offre complète pour couvrir chaque dimension de votre communication.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6">
          {services.map((service, i) => {
            const Icon = service.icon
            return (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-80px' }}
                transition={{ duration: 0.6, delay: i * 0.15 }}
                className={`relative p-8 rounded-2xl border transition-all duration-500 group hover:-translate-y-1 ${
                  service.featured
                    ? 'bg-[#1e5fff]/10 border-[#1e5fff]/40 hover:border-[#1e5fff]/70'
                    : 'bg-white/3 border-white/8 hover:border-[#1e5fff]/30'
                }`}
              >
                {service.featured && (
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2 px-4 py-1 rounded-full bg-[#1e5fff] text-white text-xs font-bold tracking-wider uppercase">
                    Populaire
                  </div>
                )}

                {/* Icon */}
                <div
                  className="w-12 h-12 rounded-xl flex items-center justify-center mb-6"
                  style={{
                    background: `linear-gradient(135deg, ${service.color}22, ${service.color}44)`,
                    border: `1px solid ${service.color}33`,
                  }}
                >
                  <Icon size={20} className="text-[#4d8aff]" />
                </div>

                <h3 className="text-xl font-bold text-white mb-1">{service.title}</h3>
                <p className="text-xs text-[#6b9fff] uppercase tracking-widest mb-4">
                  {service.subtitle}
                </p>
                <p className="text-white/55 text-sm leading-relaxed mb-6">
                  {service.description}
                </p>

                {/* Features */}
                <ul className="space-y-2">
                  {service.features.map((feat) => (
                    <li key={feat} className="flex items-center gap-2 text-sm text-white/50">
                      <span className="w-1 h-1 rounded-full bg-[#1e5fff] flex-shrink-0" />
                      {feat}
                    </li>
                  ))}
                </ul>

                <div
                  className="absolute bottom-0 left-0 right-0 h-px rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                  style={{
                    background: `linear-gradient(90deg, transparent, ${service.color}80, transparent)`,
                  }}
                />
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
