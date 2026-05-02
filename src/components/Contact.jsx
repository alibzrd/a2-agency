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
    <section id="contact" className="relative py-32 px-6 overflow-hidden">
      {/* Glow */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] rounded-full bg-[#1e5fff]/8 blur-[120px] pointer-events-none" />

      <div className="max-w-5xl mx-auto">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="text-center mb-20"
        >
          <span className="text-xs font-semibold tracking-[0.4em] text-[#1e5fff] uppercase">
            Travaillons ensemble
          </span>
          <h2 className="mt-4 text-4xl md:text-5xl font-black text-white leading-tight">
            Démarrons votre projet
          </h2>
          <p className="mt-4 text-white/50 max-w-xl mx-auto text-lg leading-relaxed">
            Un projet en tête ? Parlez-nous. Nous vous répondons sous 24h.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-5 gap-12">
          {/* Form */}
          <motion.form
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            onSubmit={handleSubmit}
            className="md:col-span-3 space-y-5"
          >
            <div className="grid sm:grid-cols-2 gap-5">
              <div>
                <label className="block text-xs text-white/40 uppercase tracking-widest mb-2">
                  Nom
                </label>
                <input
                  type="text"
                  name="name"
                  value={form.name}
                  onChange={handleChange}
                  required
                  placeholder="Votre nom"
                  className="w-full px-4 py-3.5 rounded-xl bg-white/5 border border-white/10 text-white placeholder-white/25 text-sm focus:outline-none focus:border-[#1e5fff]/60 focus:bg-[#1e5fff]/5 transition-all duration-200"
                />
              </div>
              <div>
                <label className="block text-xs text-white/40 uppercase tracking-widest mb-2">
                  Email
                </label>
                <input
                  type="email"
                  name="email"
                  value={form.email}
                  onChange={handleChange}
                  required
                  placeholder="votre@email.com"
                  className="w-full px-4 py-3.5 rounded-xl bg-white/5 border border-white/10 text-white placeholder-white/25 text-sm focus:outline-none focus:border-[#1e5fff]/60 focus:bg-[#1e5fff]/5 transition-all duration-200"
                />
              </div>
            </div>
            <div>
              <label className="block text-xs text-white/40 uppercase tracking-widest mb-2">
                Message
              </label>
              <textarea
                name="message"
                value={form.message}
                onChange={handleChange}
                required
                rows={6}
                placeholder="Décrivez votre projet..."
                className="w-full px-4 py-3.5 rounded-xl bg-white/5 border border-white/10 text-white placeholder-white/25 text-sm focus:outline-none focus:border-[#1e5fff]/60 focus:bg-[#1e5fff]/5 transition-all duration-200 resize-none"
              />
            </div>
            <button
              type="submit"
              className="group w-full flex items-center justify-center gap-3 px-8 py-4 rounded-xl bg-[#1e5fff] text-white font-semibold text-sm tracking-wide hover:bg-[#1e5fff]/80 transition-all duration-300 hover:shadow-[0_0_30px_rgba(30,95,255,0.4)]"
            >
              {sent ? (
                'Message envoyé ✓'
              ) : (
                <>
                  Envoyer le message
                  <Send size={15} className="group-hover:translate-x-1 transition-transform duration-200" />
                </>
              )}
            </button>
          </motion.form>

          {/* Info */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="md:col-span-2 space-y-8"
          >
            <div>
              <h3 className="text-lg font-bold text-white mb-6">Coordonnées</h3>
              <div className="space-y-4">
                <a
                  href="mailto:contact@a2agency.fr"
                  className="flex items-center gap-3 text-white/55 hover:text-white transition-colors group"
                >
                  <div className="w-9 h-9 rounded-lg bg-[#1e5fff]/15 border border-[#1e5fff]/25 flex items-center justify-center flex-shrink-0 group-hover:bg-[#1e5fff]/25 transition-colors">
                    <Mail size={14} className="text-[#4d8aff]" />
                  </div>
                  <span className="text-sm">contact@a2agency.fr</span>
                </a>
                <div className="flex items-center gap-3 text-white/55">
                  <div className="w-9 h-9 rounded-lg bg-[#1e5fff]/15 border border-[#1e5fff]/25 flex items-center justify-center flex-shrink-0">
                    <MapPin size={14} className="text-[#4d8aff]" />
                  </div>
                  <span className="text-sm">France</span>
                </div>
              </div>
            </div>

            <div>
              <h3 className="text-sm font-semibold text-white/40 uppercase tracking-widest mb-4">
                Réseaux sociaux
              </h3>
              <div className="flex gap-3">
                {[
                  { Icon: IgIcon, label: 'Instagram', href: '#' },
                  { Icon: LiIcon, label: 'LinkedIn', href: '#' },
                ].map(({ Icon, label, href }) => (
                  <a
                    key={label}
                    href={href}
                    aria-label={label}
                    className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-white/40 hover:text-white hover:border-[#1e5fff]/40 hover:bg-[#1e5fff]/10 transition-all duration-200"
                  >
                    <Icon size={15} />
                  </a>
                ))}
              </div>
            </div>

            <div className="p-6 rounded-2xl bg-[#1e5fff]/8 border border-[#1e5fff]/20">
              <p className="text-sm text-white/60 leading-relaxed">
                <strong className="text-white font-semibold">Réponse garantie sous 24h.</strong>{' '}
                Nous prenons le temps d'étudier chaque projet avant de vous proposer une solution sur mesure.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
