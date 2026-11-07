import { useState, useEffect } from 'react'
import { Menu, X, ChevronRight, CalendarCheck } from 'lucide-react'
import { BLOG_POSTS } from '../blogPosts'
import { BOOKING_URL } from '../contact'

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
  { label: 'Contact', href: '#contact' },
]

// Derniers articles affichés dans le menu (liste générée par gen_blog.py)
const blogMenu = BLOG_POSTS.slice(0, 3)

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false)
  const blogIsNew = useBlogIsNew()
  const close = () => setMenuOpen(false)

  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : ''
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

          {/* Un seul bouton « Menu » en haut à droite, sur ordinateur comme sur téléphone */}
          <button
            className="menu-btn"
            onClick={() => setMenuOpen(o => !o)}
            aria-expanded={menuOpen}
            aria-controls="full-menu"
            aria-label={menuOpen ? 'Fermer le menu' : 'Ouvrir le menu'}
          >
            <span className="menu-btn-label">{menuOpen ? 'Fermer' : 'Menu'}</span>
            {menuOpen ? <X size={20} strokeWidth={1.5} /> : <Menu size={20} strokeWidth={1.5} />}
            {blogIsNew && !menuOpen && <span className="menu-dot" aria-hidden="true" />}
          </button>
        </div>
      </header>

      {menuOpen && (
        <div id="full-menu" className="full-menu" role="dialog" aria-modal="true" aria-label="Menu">
          <div className="wrap fm-grid">
            <nav className="fm-links" aria-label="Navigation principale">
              {navLinks.map(link => (
                <a key={link.href} href={link.href} onClick={close}>
                  {link.label}
                  {link.href === '/blog/' && blogIsNew && <span className="nav-new">Nouveau</span>}
                </a>
              ))}
            </nav>

            <aside className="fm-side">
              {blogMenu.length > 0 && (
                <div className="fm-block">
                  <p className="fm-title">Derniers articles du blog</p>
                  {blogMenu.map(p => (
                    <a key={p.slug} href={`/blog/${p.slug}/`} className="fm-post" onClick={close}>
                      <small>{p.category} · {p.read} min de lecture</small>
                      <span>{p.title}</span>
                    </a>
                  ))}
                  <a href="/blog/" className="fm-all" onClick={close}>Tous les articles <ChevronRight size={15} /></a>
                </div>
              )}
              <div className="fm-block">
                <p className="fm-title">Un projet ?</p>
                <div className="fm-actions">
                  <a href="#contact" className="btn btn-fill" onClick={close}>Demander un devis</a>
                  <a href={BOOKING_URL} className="btn btn-line" target="_blank" rel="noopener noreferrer" onClick={close}>
                    <CalendarCheck size={16} /> Réserver un appel
                  </a>
                </div>
              </div>
            </aside>
          </div>
        </div>
      )}
    </>
  )
}
