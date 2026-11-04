// Rendu côté serveur de l'accueil, utilisé seulement au moment du build (scripts/prerender.mjs)
// pour écrire le contenu dans index.html : Google et les autres moteurs le lisent sans exécuter le JavaScript.
import { StrictMode } from 'react'
import { renderToString } from 'react-dom/server'
import App from './App.jsx'

export function render() {
  return renderToString(
    <StrictMode>
      <App />
    </StrictMode>,
  )
}
