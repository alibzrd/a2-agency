// Coordonnées de l'agence, utilisées dans tout le site
export const WHATSAPP_NUMBER = '33672258425' // numéro au format international (33 + numéro sans le 0), jamais affiché sur le site
export const INSTAGRAM_URL = 'https://www.instagram.com/a2agency.fr'
export const EMAIL = 'a2agency@outlook.fr'

export const whatsappLink = (text) =>
  `https://wa.me/${WHATSAPP_NUMBER}${text ? `?text=${encodeURIComponent(text)}` : ''}`

export const mailtoLink = (subject, body) =>
  `mailto:${EMAIL}?subject=${encodeURIComponent(subject)}${body ? `&body=${encodeURIComponent(body)}` : ''}`
