/* global process */
// Fonction Vercel : récupère les avis de la fiche Google A² Agency (Places API New).
// Variables d'environnement à définir dans Vercel :
//   GOOGLE_PLACES_API_KEY : clé API Google Maps Platform (Places API (New) activée)
//   GOOGLE_PLACE_ID       : identifiant de la fiche Google (facultatif, retrouvé automatiquement sinon)
// La réponse est mise en cache 6 h par Vercel : Google n'est interrogé que quelques fois par jour.

const API = 'https://places.googleapis.com/v1'
const SEARCH_QUERY = 'A² Agency Vernon'

async function findPlaceId(key) {
  const res = await fetch(`${API}/places:searchText`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json', 'X-Goog-Api-Key': key, 'X-Goog-FieldMask': 'places.id,places.displayName' },
    body: JSON.stringify({ textQuery: SEARCH_QUERY, languageCode: 'fr', regionCode: 'FR' }),
  })
  if (!res.ok) throw new Error(`searchText ${res.status}`)
  const data = await res.json()
  const match = (data.places || []).find(p => /a\s*[²2]\s*agency/i.test(p.displayName?.text || ''))
  return match?.id
}

export function shapeReviews(place) {
  const reviews = (place.reviews || [])
    .filter(r => r.rating >= 4 && (r.originalText?.text || r.text?.text))
    .map(r => ({
      author: r.authorAttribution?.displayName || 'Client Google',
      authorUrl: r.authorAttribution?.uri || null,
      photo: r.authorAttribution?.photoUri || null,
      rating: r.rating,
      text: String(r.originalText?.text || r.text?.text || "").trim(),
      when: r.relativePublishTimeDescription || '',
      publishTime: r.publishTime || null,
      url: r.googleMapsUri || place.googleMapsUri || null,
    }))
  return {
    rating: place.rating ?? null,
    count: place.userRatingCount ?? 0,
    url: place.googleMapsUri || null,
    reviews,
  }
}

export default async function handler(req, res) {
  const key = process.env.GOOGLE_PLACES_API_KEY
  const empty = { rating: null, count: 0, url: null, reviews: [] }
  if (!key) {
    res.setHeader('Cache-Control', 's-maxage=300')
    return res.status(200).json(empty)
  }
  try {
    const placeId = process.env.GOOGLE_PLACE_ID || (await findPlaceId(key))
    if (!placeId) throw new Error('fiche introuvable')
    const r = await fetch(`${API}/places/${placeId}?languageCode=fr&regionCode=FR`, {
      headers: { 'X-Goog-Api-Key': key, 'X-Goog-FieldMask': 'rating,userRatingCount,reviews,googleMapsUri' },
    })
    if (!r.ok) throw new Error(`details ${r.status}`)
    res.setHeader('Cache-Control', 's-maxage=21600, stale-while-revalidate=86400')
    return res.status(200).json(shapeReviews(await r.json()))
  } catch (e) {
    console.error('google-reviews:', e.message)
    res.setHeader('Cache-Control', 's-maxage=600')
    return res.status(200).json(empty)
  }
}
