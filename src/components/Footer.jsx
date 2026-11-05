import { whatsappLink, INSTAGRAM_URL, BOOKING_URL } from '../contact'

const cols = [
  { title: 'Expertises', links: [['Réseaux sociaux', '/gestion-reseaux-sociaux/'], ['Logo & identité visuelle', '/creation-logo-identite-visuelle/'], ['Affiches, flyers & enseignes', '/creation-affiches-flyers/'], ['Création de site internet', '/creation-site-internet/']] },
  { title: "L'agence", links: [['Agence de communication digitale', '/agence-communication-digitale/'], ['Feed Instagram', '#feed'], ['Notre histoire', '#agence']] },
  { title: 'Contact', links: [['WhatsApp', whatsappLink()], ['Email', '#contact'], ...(BOOKING_URL ? [['Réserver un appel de 15 min', BOOKING_URL]] : []), ['Instagram', INSTAGRAM_URL], ['Demander un devis', '#contact']] },
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
          <p>© {new Date().getFullYear()} A² Agency · Agence de communication digitale, partout en France.</p>
          <p className="footer-legal"><a href="#mentions-legales">Mentions légales</a><a href="#confidentialite">Politique de confidentialité</a></p>
        </div>
      </div>
    </footer>
  )
}
