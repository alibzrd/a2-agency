// Après `vite build`, injecte le HTML de l'accueil dans dist/index.html (pré-rendu pour le référencement).
import { readFile, writeFile, rm } from 'node:fs/promises'
import { fileURLToPath, pathToFileURL } from 'node:url'
import path from 'node:path'

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..')
const indexPath = path.join(root, 'dist', 'index.html')
const ssrDir = path.join(root, 'dist-ssr')

const { render } = await import(pathToFileURL(path.join(ssrDir, 'entry-server.js')).href)
const appHtml = render()
const html = await readFile(indexPath, 'utf8')
const marker = '<div id="root"></div>'
if (!html.includes(marker)) throw new Error('Balise <div id="root"></div> introuvable dans dist/index.html')
await writeFile(indexPath, html.replace(marker, `<div id="root">${appHtml}</div>`))
await rm(ssrDir, { recursive: true, force: true })
console.log(`Pré-rendu de l'accueil : ${Math.round(appHtml.length / 1024)} Ko de HTML injectés dans dist/index.html`)
