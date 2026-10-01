import { whatsappLink, INSTAGRAM_URL } from '../contact'

const cols = [
  { title: 'Expertises', links: [['Contenus & réseaux', '#expertises'], ['Identité & branding', '#expertises'], ['Sites web', '#expertises']] },
  { title: "L'agence", links: [['Feed Instagram', '#feed'], ['Notre histoire', '#agence']] },
  { title: 'Contact', links: [['WhatsApp', whatsappLink()], ['Instagram', INSTAGRAM_URL], ['Demander un devis', '#contact']] },
]

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="wrap">
        <div className="footer-cols">
          <div><img src="/logo-mark.png" alt="A² Agency" /></div>
          {cols.map(c => (
            <nav key={c.title} aria-label={c.title}>
              <h4>{c.title}</h4>
              <ul>
                {c.links.map(([label, href]) => (
                  <li key={label}>
                    <a href={href} {...(href.startsWith('http') ? { target: '_blank', rel: 'noopener noreferrer' } : {})}>{label}</a>
                  </li>
                ))}
              </ul>
            </nav>
          ))}
        </div>
        <div className="footer-bottom">
          <p>Copyright © {new Date().getFullYear()} A² Agency. Tous droits réservés.</p>
          <p>Agence de communication 360°</p>
        </div>
      </div>
    </footer>
  )
}
