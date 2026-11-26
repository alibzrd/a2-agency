import { Plus } from 'lucide-react'

// Questions fréquentes de l'accueil : réponses reprises des pages services (déjà validées)
export const FAQ = [
  {
    q: 'Où intervenez-vous ?',
    a: "Partout en France. Tout se fait facilement à distance : échanges par téléphone ou en visio, validations en ligne et livraison des fichiers. L'agence est basée en Normandie, et on peut aussi se rencontrer en Normandie et en Île-de-France.",
  },
  {
    q: 'Combien ça coûte ?',
    a: 'Tout dépend de votre besoin : un logo, une affiche, la gestion de vos réseaux ou un site complet. Après un premier échange, vous recevez un devis sur mesure, sans engagement.',
  },
  {
    q: 'Comment se passe un projet à distance ?',
    a: 'On échange par téléphone ou en visio pour comprendre votre besoin, vous recevez les propositions en ligne, vous les validez ou demandez des retouches, puis on vous livre tous les fichiers.',
  },
  {
    q: "Je n'ai pas de photos ni de textes, est-ce un problème ?",
    a: 'Non. On peut rédiger les textes avec vous et créer les visuels et les vidéos dont vous avez besoin.',
  },
  {
    q: 'Est-ce que je garde la main sur mes comptes ?',
    a: 'Oui. Vos comptes restent les vôtres, et chaque contenu peut être validé avant publication.',
  },
  {
    q: 'Pour quels clients travaillez-vous ?',
    a: 'Des commerces, des restaurants, des instituts de beauté, des garages et agences de location, des clubs sportifs et des marques : des structures qui veulent une communication professionnelle avec un interlocuteur unique et disponible.',
  },
]

export default function Faq() {
  return (
    <section id="faq" className="faq-home" aria-labelledby="faq-title">
      <div className="wrap">
        <h2 id="faq-title" className="h-section grad">Vos questions.</h2>
        <div className="faq-list">
          {FAQ.map(item => (
            <details key={item.q}>
              <summary>{item.q}<Plus size={20} aria-hidden="true" /></summary>
              <p>{item.a}</p>
            </details>
          ))}
        </div>
        <p className="faq-more muted">Une autre question ? <a className="link" href="#contact">Écrivez-nous</a>, on vous répond sous 24 h.</p>
      </div>
    </section>
  )
}
