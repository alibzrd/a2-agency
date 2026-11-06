import { useState, useEffect } from 'react'
import { Menu, X } from 'lucide-react'
import { BLOG_POSTS } from '../blogPosts'

// Pastille « Nouveau » sur Blog pendant 30 jours après la publication du dernier article
const NEW_DAYS = 30
function useBlogIsNew() {
  const [isNew, setIsNew] = useState(false)
  useEffect(() => {
    const latest = BLOG_POSTS[0]
    if (!latest) return
    const age = (Date.now() - new Date(latest.iso + 'T00:00:00').getTime()) / 86400000
    setIsNew(age >= 0 && age < NEW_DAYS)
  }, [])
  return isNew
}

const navLinks = [
  { label: 'Expertises', href: '#expertises' },
  { label: 'Feed Instagram', href: '#feed' },
  { label: 'Agence', href: '#agence' },
  { label: 'Blog', href: '/blog/' },
]

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false)
  const blogIsNew = useBlogIsNew()
  const label = link => (
    <>
      {link.label}
      {link.href === '/blog/' && blogIsNew && <span className="nav-new">Nouveau</span>}
    </>
  )

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
            {navLinks.map(link => <a key={link.href} href={link.href}>{label(link)}</a>)}
            <a href="#contact" className="nav-cta">Contact</a>
          </nav>

          <button
            className="menu-btn"
            onClick={() => setMenuOpen(o => !o)}
            aria-expanded={menuOpen}
            aria-label={menuOpen ? 'Fermer le menu' : 'Ouvrir le menu'}
          >
            {menuOpen ? <X size={20} strokeWidth={1.5} /> : <Menu size={20} strokeWidth={1.5} />}
            {blogIsNew && !menuOpen && <span className="menu-dot" aria-hidden="true" />}
          </button>
        </div>
      </header>

      {menuOpen && (
        <nav className="mobile-nav" aria-label="Navigation mobile">
          {navLinks.map(link => <a key={link.href} href={link.href} onClick={close}>{label(link)}</a>)}
          <a href="#contact" onClick={close}>Contact</a>
        </nav>
      )}
    </>
  )
}
