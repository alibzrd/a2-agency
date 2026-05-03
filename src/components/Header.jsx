import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X } from 'lucide-react'
const logoSrc = '/logo.png'

const navLinks = [
  { label: 'Histoire', href: '#storytelling' },
  { label: 'Services', href: '#services' },
  { label: 'Portfolio', href: '#portfolio' },
  { label: 'Contact', href: '#contact' },
]

export default function Header() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <>
      <motion.header
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: 'easeOut' }}
        style={{
          position: 'fixed', top: 0, left: 0, right: 0, zIndex: 50,
          transition: 'background 0.4s, padding 0.4s',
          background: scrolled ? 'rgba(6,9,18,0.95)' : 'transparent',
          backdropFilter: scrolled ? 'blur(20px)' : 'none',
          WebkitBackdropFilter: scrolled ? 'blur(20px)' : 'none',
          borderBottom: scrolled ? '1px solid rgba(255,255,255,0.05)' : 'none',
          padding: scrolled ? '0.4rem 0' : '0.75rem 0',
        }}
      >
        <div style={{ maxWidth: '72rem', margin: '0 auto', padding: '0 1.5rem', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
          <a href="#" style={{ textDecoration: 'none', flexShrink: 0 }}>
            <img src={logoSrc} alt="A2 Agency" style={{ height: '48px', width: 'auto', filter: 'brightness(0) invert(1) sepia(1) saturate(2) hue-rotate(195deg) brightness(1.1)' }} />
          </a>

          {/* Desktop nav */}
          <nav style={{ display: 'flex', alignItems: 'center', gap: '2rem', '@media(maxWidth:768px)': { display: 'none' } }}
            className="desktop-nav">
            {navLinks.map(link => (
              <a key={link.href} href={link.href} style={{ fontSize: '0.875rem', fontWeight: 500, color: 'rgba(232,240,255,0.6)', textDecoration: 'none', transition: 'color 0.2s' }}
                onMouseEnter={e => e.currentTarget.style.color = '#fff'}
                onMouseLeave={e => e.currentTarget.style.color = 'rgba(232,240,255,0.6)'}
              >{link.label}</a>
            ))}
            <a href="#contact" className="btn-primary" style={{ padding: '0.5rem 1.25rem', fontSize: '0.8rem' }}>Devis gratuit</a>
          </nav>

          {/* Hamburger */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="mobile-menu-btn"
            style={{
              background: 'rgba(194,231,255,0.08)', border: '1px solid rgba(194,231,255,0.15)',
              borderRadius: '0.625rem', width: '2.5rem', height: '2.5rem',
              display: 'flex', alignItems: 'center', justifyContent: 'center',
              color: '#c2e7ff', cursor: 'pointer',
            }}
          >
            {menuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </motion.header>

      {/* Mobile menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.2 }}
            style={{
              position: 'fixed', top: '4rem', left: 0, right: 0, zIndex: 49,
              background: 'rgba(6,9,18,0.98)', backdropFilter: 'blur(20px)',
              borderBottom: '1px solid rgba(194,231,255,0.1)',
              padding: '1.5rem',
              display: 'flex', flexDirection: 'column', gap: '1rem',
            }}
          >
            {navLinks.map(link => (
              <a key={link.href} href={link.href}
                onClick={() => setMenuOpen(false)}
                style={{ fontSize: '1rem', fontWeight: 600, color: 'rgba(232,240,255,0.7)', textDecoration: 'none', padding: '0.5rem 0', borderBottom: '1px solid rgba(194,231,255,0.07)' }}
              >{link.label}</a>
            ))}
            <a href="#contact" className="btn-primary" onClick={() => setMenuOpen(false)} style={{ textAlign: 'center', justifyContent: 'center', marginTop: '0.5rem' }}>
              Devis gratuit
            </a>
          </motion.div>
        )}
      </AnimatePresence>

      <style>{`
        .desktop-nav { display: flex !important; }
        .mobile-menu-btn { display: none !important; }
        @media (max-width: 768px) {
          .desktop-nav { display: none !important; }
          .mobile-menu-btn { display: flex !important; }
        }
      `}</style>
    </>
  )
}
