import { motion } from 'framer-motion'
import { ExternalLink } from 'lucide-react'

const projects = [
  {
    title: 'Luxe & Beauté',
    category: 'Branding',
    color: 'from-[#1e3a8a] to-[#1e5fff]',
    span: 'md:col-span-2',
    height: 'h-64',
    year: '2024',
  },
  {
    title: 'RestaurantX',
    category: 'Menu Board & Print',
    color: 'from-[#0a1628] to-[#0a3dcc]',
    span: '',
    height: 'h-64',
    year: '2024',
  },
  {
    title: 'NovaTech',
    category: 'Site Web & UX/UI',
    color: 'from-[#0f172a] to-[#1e4fff]',
    span: '',
    height: 'h-80',
    year: '2025',
  },
  {
    title: 'Athletik Brand',
    category: 'Identité Visuelle',
    color: 'from-[#1e5fff] to-[#0a2a80]',
    span: '',
    height: 'h-80',
    year: '2025',
  },
  {
    title: 'Urban Collective',
    category: 'Social Media',
    color: 'from-[#0a1628] to-[#1e5fff]',
    span: 'md:col-span-2',
    height: 'h-56',
    year: '2025',
  },
]

export default function Portfolio() {
  return (
    <section id="portfolio" className="relative py-32 px-6 overflow-hidden">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.7 }}
          className="text-center mb-20"
        >
          <span className="text-xs font-semibold tracking-[0.4em] text-[#1e5fff] uppercase">
            Nos réalisations
          </span>
          <h2 className="mt-4 text-4xl md:text-5xl font-black text-white leading-tight">
            Portfolio
          </h2>
          <p className="mt-4 text-white/50 max-w-xl mx-auto text-lg leading-relaxed">
            Chaque projet est une histoire — la vôtre, racontée avec précision et audace.
          </p>
        </motion.div>

        {/* Bento grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {projects.map((project, i) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className={`relative overflow-hidden rounded-2xl cursor-pointer group ${project.span} ${project.height}`}
            >
              {/* Background gradient */}
              <div className={`absolute inset-0 bg-gradient-to-br ${project.color}`} />

              {/* Pattern overlay */}
              <div
                className="absolute inset-0 opacity-10"
                style={{
                  backgroundImage:
                    'radial-gradient(circle at 20% 80%, #fff 1px, transparent 1px), radial-gradient(circle at 80% 20%, #fff 1px, transparent 1px)',
                  backgroundSize: '30px 30px',
                }}
              />

              {/* Geometric accent */}
              <div className="absolute -right-8 -top-8 w-32 h-32 rounded-full border border-white/10" />
              <div className="absolute -right-4 -top-4 w-20 h-20 rounded-full border border-white/15" />

              {/* Content — always visible at bottom */}
              <div className="absolute bottom-0 left-0 right-0 p-6">
                <span className="text-xs text-white/50 uppercase tracking-widest">
                  {project.category} · {project.year}
                </span>
                <h3 className="text-xl font-bold text-white mt-1">{project.title}</h3>
              </div>

              {/* Hover overlay */}
              <div className="absolute inset-0 bg-[#1e5fff]/20 opacity-0 group-hover:opacity-100 transition-opacity duration-400 flex items-center justify-center">
                <div className="flex items-center gap-2 px-5 py-2.5 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 text-white text-sm font-medium translate-y-4 group-hover:translate-y-0 transition-transform duration-400">
                  <ExternalLink size={14} />
                  Voir le projet
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
