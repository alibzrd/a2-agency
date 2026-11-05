import { useEffect, useState } from 'react'
import { Quote, ChevronRight, Star } from 'lucide-react'
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

// Avis Google récupérés en direct par /api/google-reviews (vide tant que la clé Google n'est pas configurée)
function useGoogleReviews() {
  const [data, setData] = useState(null)
  useEffect(() => {
    let alive = true
    fetch('/api/google-reviews')
      .then(r => (r.ok ? r.json() : null))
      .then(d => { if (alive && d && d.reviews?.length) setData(d) })
      .catch(() => {})
    return () => { alive = false }
  }, [])
  return data
}

export default function Testimonials() {
  const google = useGoogleReviews()
  return (
    <section id="avis" className="reviews" aria-labelledby="avis-title">
      <div className="wrap">
        <h2 id="avis-title" className="h-section grad">Ils en parlent mieux que nous.</h2>
        <p className="sub muted">Ce que nos clients disent de leur collaboration avec A² Agency.</p>

        {google && google.rating && (
          <a className="google-score" href={google.url || GOOGLE_REVIEW_URL} target="_blank" rel="noopener noreferrer">
            <b>{fmtRating(google.rating)}</b>
            <Stars value={google.rating} size={18} />
            <span>{google.count} avis sur Google</span>
          </a>
        )}

        <div className={`reviews-grid${google ? ' has-google' : ''}`}>
          {google?.reviews.map(r => (
            <figure className="review-card is-google" key={`${r.author}-${r.publishTime || r.when}`}>
              <div className="review-top">
                <Stars value={r.rating} />
                <span className="g-badge">Avis Google</span>
              </div>
              <blockquote><p>{r.text}</p></blockquote>
              <figcaption>
                {r.photo
                  ? <img className="review-av" src={r.photo} alt="" width="44" height="44" loading="lazy" referrerPolicy="no-referrer" />
                  : <span className="review-av review-initial" aria-hidden="true">{r.author.charAt(0)}</span>}
                <span>
                  {r.authorUrl
                    ? <a href={r.authorUrl} target="_blank" rel="noopener noreferrer"><b>{r.author}</b></a>
                    : <b>{r.author}</b>}
                  <small>{r.when ? `${r.when} sur Google` : 'sur Google'}</small>
                </span>
              </figcaption>
            </figure>
          ))}
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
