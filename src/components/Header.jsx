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
  { label: 'Études de cas', href: '/realisations/' },
  { label: 'Blog', href: '/blog/' },
]

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false)
  const blogIsNew = useBlogIsNew()
  const close = () => setMenuOpen(false)

  useEffect(() => {
    if (!menuOpen) return
    const onKey = e => { if (e.key === 'Escape') setMenuOpen(false) }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [menuOpen])

  return (
    <>
      <header className="site-header">
        <div className="wrap">
          <a href="#top" className="logo" aria-label="A² Agency, retour en haut" onClick={close}>
            <img src="/logo-mark.png" alt="A² Agency" />
          </a>

          {/* Un seul bouton « Menu » en haut à droite : il ouvre un petit menu déroulant */}
          <button
            className="menu-btn"
            onClick={() => setMenuOpen(o => !o)}
            aria-expanded={menuOpen}
            aria-controls="site-menu"
            aria-label={menuOpen ? 'Fermer le menu' : 'Ouvrir le menu'}
          >
            <span className="menu-btn-label">{menuOpen ? 'Fermer' : 'Menu'}</span>
            {menuOpen ? <X size={20} strokeWidth={1.5} /> : <Menu size={20} strokeWidth={1.5} />}
            {blogIsNew && !menuOpen && <span className="menu-dot" aria-hidden="true" />}
          </button>
        </div>
      </header>

      {menuOpen && (
        <>
          {/* Clic en dehors du menu : il se ferme */}
          <div className="drop-backdrop" onClick={close} aria-hidden="true" />
          <nav id="site-menu" className="drop-menu" aria-label="Navigation principale">
            {navLinks.map(link => (
              <a key={link.href} href={link.href} onClick={close}>
                {link.label}
                {link.href === '/blog/' && blogIsNew && <span className="nav-new">Nouveau</span>}
              </a>
            ))}
            <a href="#contact" className="btn btn-fill drop-cta" onClick={close}>Demander un devis</a>
          </nav>
        </>
      )}
    </>
  )
}
