// Coordonnées de l'agence, utilisées dans tout le site
export const WHATSAPP_NUMBER = '33672258425' // numéro au format international (33 + numéro sans le 0), jamais affiché sur le site
export const INSTAGRAM_URL = 'https://www.instagram.com/a2agency.fr'
export const EMAIL = 'a2agency@outlook.fr'

// Clé Web3Forms (reçue par email sur web3forms.com) : permet d'envoyer le formulaire directement,
// sans ouvrir la messagerie du visiteur. Tant qu'elle est vide, le site ouvre la messagerie à la place.
export const WEB3FORMS_KEY = '56b886cc-caaf-4b78-a0f3-9dbae609f978'

export const whatsappLink = (text) =>
  `https://wa.me/${WHATSAPP_NUMBER}${text ? `?text=${encodeURIComponent(text)}` : ''}`

export const mailtoLink = (subject, body) =>
  `mailto:${EMAIL}?subject=${encodeURIComponent(subject)}${body ? `&body=${encodeURIComponent(body)}` : ''}`

// Lien direct « Laisser un avis » de la fiche Google A² Agency
export const GOOGLE_REVIEW_URL = 'https://g.page/r/CcdJAUBgGRE3EBM/review'

// Lien de réservation d'un appel de 30 min (Calendly). Tant qu'il est vide, le bouton n'apparaît pas sur le site.
export const BOOKING_URL = 'https://calendly.com/a2agency-icp8/30min'
