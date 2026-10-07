import { useEffect, useRef, useState } from 'react'
import './index.css'
import Header from './components/Header'
import Hero from './components/Hero'
import Services from './components/Services'
import Feed from './components/Feed'
import Videos from './components/Videos'
import Storytelling from './components/Storytelling'
import Contact from './components/Contact'
import Footer from './components/Footer'
import Legal from './components/Legal'

// Pages légales accessibles par a2agency.fr/#mentions-legales et a2agency.fr/#confidentialite
const LEGAL_PAGES = { '#mentions-legales': 'mentions', '#confidentialite': 'confidentialite' }

function useHash() {
  const [hash, setHash] = useState(() => window.location.hash)
  useEffect(() => {
    const onChange = () => setHash(window.location.hash)
    window.addEventListener('hashchange', onChange)
    return () => window.removeEventListener('hashchange', onChange)
  }, [])
  return hash
}

function App() {
  const hash = useHash()
  const legal = LEGAL_PAGES[hash]
  const wasLegal = useRef(Boolean(legal))

  useEffect(() => {
    if (legal) {
      window.scrollTo({ top: 0, behavior: 'instant' })
    } else if (wasLegal.current) {
      // Retour d'une page légale vers une section : on attend l'affichage de l'accueil puis on y descend
      requestAnimationFrame(() => {
        const target = hash && hash !== '#top' ? document.querySelector(hash) : null
        if (target) target.scrollIntoView({ behavior: 'instant' })
        else window.scrollTo({ top: 0, behavior: 'instant' })
      })
    }
    wasLegal.current = Boolean(legal)
  }, [legal, hash])

  return (
    <>
      <Header />
      {legal ? <Legal page={legal} /> : (
        <main>
          <Hero />
          <Services />
          <Feed />
          <Videos />
          <Storytelling />
          <Contact />
        </main>
      )}
      <Footer />
    </>
  )
}

export default App
