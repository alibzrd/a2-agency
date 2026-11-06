import { ChevronRight } from 'lucide-react'

// Études de cas : chaque carte renvoie vers sa page détaillée (public/realisations/<slug>/)
const cases = [
  {
    slug: 'smash-gourmet',
    name: 'Smash Gourmet',
    sector: 'Restaurant de burgers à Vernon',
    text: 'Feed Instagram, carte et flyers pour un restaurant qui veut donner faim dès le téléphone.',
    result: "+20\u00a0% d'engagement Instagram en 3 mois",
    img: '/feed/smash-gourmet/3.webp',
  },
  {
    slug: 'clear-glass',
    name: 'Clear Glass',
    sector: 'Pare-brise à domicile, Île-de-France',
    text: "Le site clear-glass.fr et six campagnes Instagram sur un même modèle d'offre.",
    result: 'Site en ligne et 6 offres déclinées',
    img: '/thumbs/Clear-Glass/3.webp',
  },
  {
    slug: 'fanushari3',
    name: 'Fanushari3',
    sector: 'Marque streetwear',
    text: "Un feed Instagram et des visuels qui portent l'univers « l'art de la rue ».",
    result: 'Une ligne visuelle pour toute la marque',
    img: '/feed/fanushari3/2.webp',
  },
]

export default function CaseStudies() {
  return (
    <section id="etudes-de-cas" className="cases-home" aria-labelledby="cases-title">
      <div className="wrap">
        <h2 id="cases-title" className="h-section grad">Études de cas.</h2>
        <p className="sub muted">Le besoin, ce qu'on a fait, le résultat.</p>
        <div className="cases-grid">
          {cases.map(c => (
            <a key={c.slug} className="case-tile" href={`/realisations/${c.slug}/`}>
              <img src={c.img} alt="" loading="lazy" width="480" height="360" />
              <div className="case-body">
                <small>{c.sector}</small>
                <h3>{c.name}</h3>
                <p>{c.text}</p>
                <span className="case-result">{c.result}</span>
                <span className="case-more">Lire l'étude de cas <ChevronRight size={16} /></span>
              </div>
            </a>
          ))}
        </div>
        <p className="cases-all"><a className="link" href="/realisations/">Toutes les études de cas <ChevronRight size={16} /></a></p>
      </div>
    </section>
  )
}
