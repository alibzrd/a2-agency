import { useState, useEffect } from 'react'
import { Menu, X } from 'lucide-react'

const navLinks = [
  { label: 'Expertises', href: '#expertises' },
  { label: 'Feed Instagram', href: '#feed' },
  { label: 'Agence', href: '#agence' },
]

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : ''
  }, [menuOpen])

  const close = () => setMenuOpen(false)

  return (
    <>
      <header className="site-header">
        <div className="wrap">
          <a href="#top" className="logo" aria-label="A² Agency, retour en haut">
            <img src="/logo-mark.png" alt="A² Agency" />
          </a>

          <nav className="nav" aria-label="Navigation principale">
            {navLinks.map(link => <a key={link.href} href={link.href}>{link.label}</a>)}
            <a href="#contact" className="nav-cta">Contact</a>
          </nav>

          <button
            className="menu-btn"
            onClick={() => setMenuOpen(o => !o)}
            aria-expanded={menuOpen}
            aria-label={menuOpen ? 'Fermer le menu' : 'Ouvrir le menu'}
          >
            {menuOpen ? <X size={20} strokeWidth={1.5} /> : <Menu size={20} strokeWidth={1.5} />}
          </button>
        </div>
      </header>

      {menuOpen && (
        <nav className="mobile-nav" aria-label="Navigation mobile">
          {navLinks.map(link => <a key={link.href} href={link.href} onClick={close}>{link.label}</a>)}
          <a href="#contact" onClick={close}>Contact</a>
        </nav>
      )}
    </>
  )
}
