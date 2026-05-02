import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { Menu, X } from 'lucide-react'
import Logo from './Logo'

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
    <motion.header
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
      style={{
        position: 'fixed', top: 0, left: 0, right: 0, zIndex: 50,
        transition: 'all 0.4s',
        background: scrolled ? 'rgba(6,9,18,0.9)' : 'transparent',
        backdropFilter: scrolled ? 'blur(20px)' : 'none',
        WebkitBackdropFilter: scrolled ? 'blur(20px)' : 'none',
        borderBottom: scrolled ? '1px solid rgba(255,255,255,0.05)' : 'none',
        padding: scrolled ? '0.5rem 0' : '1rem 0',
      }}
    >
      <div style={{ maxWidth: '72rem', margin: '0 auto', padding: '0 1.5rem', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
        <a href="#" style={{ textDecoration: 'none' }}>
          {/* Logo horizontal compact dans header */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
            <svg width="36" height="36" viewBox="0 0 200 200" fill="none">
              <defs>
                <linearGradient id="hGrad" x1="60" y1="20" x2="140" y2="180" gradientUnits="userSpaceOnUse">
                  <stop offset="0%" stopColor="#ddeeff" /><stop offset="100%" stopColor="#7aaed8" />
                </linearGradient>
              </defs>
              <path d="M 100 18 A 82 82 0 1 1 34 151" stroke="#c0d8f0" strokeWidth="6" strokeLinecap="round" fill="none" />
              <path d="M 166 49 A 82 82 0 0 1 100 182" stroke="#c0d8f0" strokeWidth="6" strokeLinecap="round" fill="none" opacity="0.4" />
              <text x="100" y="158" textAnchor="middle" fontFamily="Montserrat, sans-serif" fontWeight="900" fontStyle="italic" fontSize="148" fill="url(#hGrad)">A</text>
              <text x="148" y="60" fontFamily="Montserrat, sans-serif" fontWeight="700" fontSize="40" fill="#c0d8f0">2</text>
            </svg>
            <div style={{ display: 'flex', flexDirection: 'column', lineHeight: 1.1 }}>
              <span style={{ fontFamily: 'Montserrat, sans-serif', fontWeight: 900, fontSize: '1rem', color: '#e8f0ff' }}>A<sup style={{ color: '#4d8aff', fontSize: '0.6rem' }}>2</sup></span>
              <span style={{ fontFamily: 'Montserrat, sans-serif', fontWeight: 300, fontSize: '0.45rem', color: 'rgba(232,240,255,0.5)', letterSpacing: '0.35em', textTransform: 'uppercase' }}>AGENCY</span>
            </div>
          </div>
        </a>

        <nav style={{ display: 'flex', alignItems: 'center', gap: '2rem' }}>
          {navLinks.map(link => (
            <a key={link.href} href={link.href} style={{ fontSize: '0.875rem', fontWeight: 500, color: 'rgba(232,240,255,0.6)', textDecoration: 'none', transition: 'color 0.2s' }}
              onMouseEnter={e => e.currentTarget.style.color = '#fff'}
              onMouseLeave={e => e.currentTarget.style.color = 'rgba(232,240,255,0.6)'}
            >{link.label}</a>
          ))}
          <a href="#contact" className="btn-primary" style={{ padding: '0.5rem 1.25rem', fontSize: '0.8rem' }}>Devis gratuit</a>
        </nav>
      </div>
    </motion.header>
  )
}
