import { useState } from 'react'
import { Quote, ChevronRight, Star } from 'lucide-react'
import { GOOGLE_REVIEW_URL } from '../contact'
import { GOOGLE_REVIEWS, GOOGLE_MAPS_URL, GOOGLE_RATING, GOOGLE_COUNT } from '../googleReviews'

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

function Stars({ value, size = 16 }) {
  return (
    <span className="stars" role="img" aria-label={`${value} sur 5`}>
      {[1, 2, 3, 4, 5].map(i => (
        <Star key={i} size={size} className={i <= Math.round(value) ? 'on' : ''} aria-hidden="true" />
      ))}
    </span>
  )
}

const fmtRating = n => n.toLocaleString('fr-FR', { minimumFractionDigits: 1, maximumFractionDigits: 1 })

// Texte d'avis coupé à 5 lignes au-delà d'une certaine longueur, avec « Lire la suite »
function ReviewText({ text, copy }) {
  const [open, setOpen] = useState(false)
  const long = text.length > 220
  return (
    <blockquote>
      <p className={long && !open ? 'is-clamped' : undefined}>{text}</p>
      {long && (
        <button type="button" className="review-more" onClick={() => setOpen(o => !o)} aria-expanded={open} tabIndex={copy ? -1 : undefined}>
          {open ? 'Réduire' : 'Lire la suite'}
        </button>
      )}
    </blockquote>
  )
}

// Une série complète de cartes ; elle est affichée deux fois pour que le défilement boucle sans saut
function Cards({ reviews, copy }) {
  return (
    <ul className="reviews-set" aria-hidden={copy || undefined}>
      {reviews.map(r => (
        <li key={r.author}>
          <figure className="review-card is-google">
            <div className="review-top">
              <Stars value={r.rating} />
              <span className="g-badge">Avis Google</span>
            </div>
            <ReviewText text={r.text} copy={copy} />
            <figcaption>
              <span className="review-av review-initial" aria-hidden="true">{r.author.charAt(0)}</span>
              <span>
                <b>{r.author}</b>
                <small>Avis Google · {r.date}</small>
              </span>
            </figcaption>
          </figure>
        </li>
      ))}
      {testimonials.map(t => (
        <li key={t.name}>
          <figure className="review-card">
            <Quote className="review-mark" size={28} aria-hidden="true" />
            <blockquote><p>{t.quote}</p></blockquote>
            <figcaption>
              {t.avatar
                ? <img className="review-av" src={t.avatar} alt="" width="44" height="44" loading="lazy" />
                : <span className="review-av review-initial" aria-hidden="true">{t.initial}</span>}
              <span><b>{t.name}</b><small>{t.role}</small></span>
            </figcaption>
          </figure>
        </li>
      ))}
    </ul>
  )
}

export default function Testimonials() {
  const reviews = GOOGLE_REVIEWS
  const avg = GOOGLE_RATING
  const total = reviews.length + testimonials.length
  return (
    <section id="avis" className="reviews" aria-labelledby="avis-title">
      <div className="wrap">
        <h2 id="avis-title" className="h-section grad">Ils en parlent mieux que nous.</h2>
        <p className="sub muted">Ce que nos clients disent de leur collaboration avec A² Agency.</p>

        {reviews.length > 0 && (
          <a className="google-score" href={GOOGLE_MAPS_URL} target="_blank" rel="noopener noreferrer">
            <b>{fmtRating(avg)}</b>
            <Stars value={avg} size={18} />
            <span>{GOOGLE_COUNT} avis sur Google</span>
          </a>
        )}

      </div>

      {/* Bandeau qui défile tout seul ; il s'arrête au survol et au clavier */}
      <div className="reviews-marquee" style={{ '--dur': `${total * 7}s` }}>
        <div className="reviews-track">
          <Cards reviews={reviews} />
          <Cards reviews={reviews} copy />
        </div>
      </div>

      <div className="wrap">
        <p className="reviews-cta muted">
          Vous avez travaillé avec nous ?{' '}
          <a className="link" href={GOOGLE_REVIEW_URL} target="_blank" rel="noopener noreferrer">Laissez-nous un avis sur Google <ChevronRight size={15} /></a>
        </p>
      </div>
    </section>
  )
}
