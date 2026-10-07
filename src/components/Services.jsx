import { ChevronRight, Megaphone, PenTool, MonitorSmartphone, Heart, CalendarCheck } from 'lucide-react'
import { Phone, PostScreen, StoryScreen, Chip } from './Mockups'
import SitesShowcase from './SitesShowcase'

function Scope({ items }) {
  return (
    <p className="scope muted">
      {items.map((t, i) => (
        <span key={t}><span className="nowrap">{t}{i < items.length - 1 ? ' ·' : ''}</span>{' '}</span>
      ))}
    </p>
  )
}

function Links({ more }) {
  return (
    <div className="actions links">
      {more && <a href={more.href} className="link">{more.label} <ChevronRight size={16} /></a>}
      <a href="#contact" className="link">Demander un devis <ChevronRight size={16} /></a>
    </div>
  )
}

export default function Services() {
  return (
    <section id="expertises" className="tiles" aria-label="Nos expertises">
      <article className="tile is-wide">
        <span className="icon-badge"><Megaphone size={22} /></span>
        <h2 className="h-tile">Contenus & réseaux</h2>
        <p className="sub">Des visuels qui arrêtent le scroll.</p>
        <Scope items={["Affiches sport", "Visuels réseaux", "Feed Instagram", "Vidéo & Reels", "Flyers & print", "Ligne éditoriale"]} />
        <Links more={{ href: '#feed', label: 'Voir le feed Instagram' }} />
        <div className="tile-art art-phones">
          <div className="print-card is-left"><img src="/contenus/originale.webp" alt="Menu Bubble juice Originale" loading="lazy" /></div>
          <Phone><PostScreen src="/contenus/matchday.webp" alt="Post Instagram Match Day" /></Phone>
          <Phone><StoryScreen src="/contenus/fastloc.webp" alt="Story de location de voiture pour FastLoc" /></Phone>
          <Phone><PostScreen src="/contenus/clear-glass-switch.webp" alt="Post Instagram Clear Glass" /></Phone>
          <div className="print-card is-right"><img src="/contenus/cinq.webp" alt="Flyer 5 Cinq" loading="lazy" /></div>
          <Chip icon={Heart} title="Nouveau post" note="Jour de match" className="c1 floaty" />
          <Chip icon={CalendarCheck} title="Planning éditorial" note="Calé pour le mois" className="c2 floaty d2" />
        </div>
      </article>

      <article className="tile">
        <span className="icon-badge"><PenTool size={22} /></span>
        <h2 className="h-tile">Identité & branding</h2>
        <p className="sub">Une marque qu'on reconnaît au premier coup d'œil.</p>
        <Scope items={["Logo", "Charte graphique", "Positionnement", "Guide de marque"]} />
        <Links />
        <div className="tile-art art-brand">
          <div className="brand-card is-logo"><img src="/branding/am-nail-artist.webp" alt="Logo AM Nail Artist" loading="lazy" /></div>
          <div className="brand-card is-poster"><img src="/branding/nanalash.webp" alt="Visuel « Nanalash is back »" loading="lazy" /></div>
          <div className="chip palette floaty" aria-hidden="true">
            <span style={{ display: 'flex' }}>
              {['#f7cbd8', '#3f3f42', '#c9c9cc', '#f4f4f4'].map(c => <span key={c} className="sw" style={{ background: c }} />)}
            </span>
            <span>Palette</span>
          </div>
          <div className="chip type floaty d2" aria-hidden="true"><b className="serif">Aa</b><span>Typographie<small>Serif et script</small></span></div>
        </div>
      </article>

      <article className="tile">
        <span className="icon-badge"><MonitorSmartphone size={22} /></span>
        <h2 className="h-tile">Sites web</h2>
        <p className="sub">Rapides, beaux sur mobile, pensés pour convertir.</p>
        <Scope items={["Site vitrine", "E-commerce", "Design UX/UI", "Référencement"]} />
        <Links />
        <SitesShowcase />
      </article>
    </section>
  )
}
