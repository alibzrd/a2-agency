import { Quote, ChevronRight } from 'lucide-react'
import { GOOGLE_REVIEW_URL } from '../contact'

// Témoignages validés par les clients (repris de la plaquette A² Agency)
const testimonials = [
  {
    quote: "Depuis qu'A² Agency gère notre Instagram, notre page donne vraiment faim. Les clients nous disent qu'ils sont venus après avoir vu nos posts.",
    name: 'Smash Gourmet',
    role: 'Restaurant · gestion Instagram',
    avatar: '/feed/smash-gourmet-avatar.webp',
  },
  {
    quote: "Arthur a tout de suite compris l'univers que je voulais pour Nanalash. Mon identité est élégante et mes clientes me la complimentent souvent.",
    name: 'Nawel',
    role: 'Fondatrice de Nanalash · identité visuelle',
    initial: 'N',
  },
]

export default function Testimonials() {
  return (
    <section id="avis" className="reviews" aria-labelledby="avis-title">
      <div className="wrap">
        <h2 id="avis-title" className="h-section grad">Ils en parlent mieux que nous.</h2>
        <p className="sub muted">Ce que nos clients disent de leur collaboration avec A² Agency.</p>

        <div className="reviews-grid">
          {testimonials.map(t => (
            <figure className="review-card" key={t.name}>
              <Quote className="review-mark" size={28} aria-hidden="true" />
              <blockquote><p>{'«\u00a0'}{t.quote}{'\u00a0»'}</p></blockquote>
              <figcaption>
                {t.avatar
                  ? <img className="review-av" src={t.avatar} alt="" width="44" height="44" loading="lazy" />
                  : <span className="review-av review-initial" aria-hidden="true">{t.initial}</span>}
                <span><b>{t.name}</b><small>{t.role}</small></span>
              </figcaption>
            </figure>
          ))}
        </div>

        <p className="reviews-cta muted">
          Vous avez travaillé avec nous ?{' '}
          <a className="link" href={GOOGLE_REVIEW_URL} target="_blank" rel="noopener noreferrer">Laissez-nous un avis sur Google <ChevronRight size={15} /></a>
        </p>
      </div>
    </section>
  )
}
