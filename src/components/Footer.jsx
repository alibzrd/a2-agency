import { motion } from 'framer-motion'
import { Instagram, Linkedin, Twitter } from 'lucide-react'

const navLinks = [
  { label: 'Histoire', href: '#storytelling' },
  { label: 'Services', href: '#services' },
  { label: 'Portfolio', href: '#portfolio' },
  { label: 'Contact', href: '#contact' },
]

const socials = [
  { Icon: Instagram, href: '#', label: 'Instagram' },
  { Icon: Linkedin, href: '#', label: 'LinkedIn' },
  { Icon: Twitter, href: '#', label: 'Twitter / X' },
]

export default function Footer() {
  return (
    <footer className="relative border-t border-white/5 py-16 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row items-center justify-between gap-10">
          {/* Logo */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="flex flex-col items-center md:items-start gap-2"
          >
            <div className="flex items-center gap-2">
              <span className="text-2xl font-black text-white" style={{ fontFamily: 'Montserrat, sans-serif' }}>
                A<sup className="text-[#1e5fff] text-base font-black">2</sup>
              </span>
              <span className="text-sm font-semibold tracking-[0.3em] text-white/50 uppercase">Agency</span>
            </div>
            <p className="text-xs text-white/30 max-w-[200px] text-center md:text-left leading-relaxed">
              Votre communication à la puissance deux.
            </p>
          </motion.div>

          {/* Nav */}
          <nav className="flex flex-wrap justify-center gap-6">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-sm text-white/40 hover:text-white transition-colors duration-200"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Socials */}
          <div className="flex gap-3">
            {socials.map(({ Icon, href, label }) => (
              <a
                key={label}
                href={href}
                aria-label={label}
                className="w-9 h-9 rounded-xl bg-white/5 border border-white/8 flex items-center justify-center text-white/35 hover:text-white hover:border-[#1e5fff]/40 hover:bg-[#1e5fff]/10 transition-all duration-200"
              >
                <Icon size={14} />
              </a>
            ))}
          </div>
        </div>

        <div className="mt-12 pt-6 border-t border-white/5 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-white/25">
          <p>© {new Date().getFullYear()} A² Agency. Tous droits réservés.</p>
          <p>Conçu avec passion · Ali & Arthur</p>
        </div>
      </div>
    </footer>
  )
}
