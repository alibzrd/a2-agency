// « Ils nous font confiance » : noms des clients, sobres, sur une ligne (logos à mettre quand on les aura)
const clients = ['Smash Gourmet', 'Clear Glass', 'Fanushari3', 'Nanalash', 'AM Nail Artist', 'RS Prestige', 'MorroGo', 'Rent Driver']

export default function TrustStrip() {
  return (
    <section className="trust" aria-label="Ils nous font confiance">
      <div className="wrap">
        <p className="trust-title">Ils nous font confiance</p>
        <ul className="trust-list">
          {clients.map(c => <li key={c}>{c}</li>)}
        </ul>
      </div>
    </section>
  )
}
