import { ChevronLeft } from 'lucide-react'
import { LEGAL } from '../legal'
import { EMAIL } from '../contact'

function V({ value, label }) {
  return value ? <>{value}</> : <mark className="todo">à compléter : {label}</mark>
}

function Mentions() {
  return (
    <>
      <h1 className="h-section grad">Mentions légales</h1>
      <p className="legal-intro muted">Conformément à la loi n° 2004-575 du 21 juin 2004 pour la confiance dans l'économie numérique (LCEN).</p>

      <h2>Éditeur du site</h2>
      <p>Le site <b>a2agency.fr</b> est édité par :</p>
      <ul>
        <li>Nom commercial : {LEGAL.nom}</li>
        <li>Exploitant : <V value={LEGAL.exploitant && `${LEGAL.exploitant} (EI)`} label="prénom et nom de l'exploitant" /></li>
        <li>Statut : entrepreneur individuel (micro-entreprise)</li>
        <li>Adresse : <V value={LEGAL.adresse} label="adresse de l'entreprise" /></li>
        <li>SIRET : <V value={LEGAL.siret} label="numéro SIRET" /></li>
        <li>Immatriculation : Registre national des entreprises (RNE)</li>
        <li>Email : <a href={`mailto:${EMAIL}`}>{EMAIL}</a></li>
        <li>Téléphone : <V value={LEGAL.telephone} label="numéro de téléphone" /></li>
      </ul>

      <h2>Directeur de la publication</h2>
      <p><V value={LEGAL.exploitant} label="prénom et nom de l'exploitant" /></p>

      <h2>Hébergement</h2>
      <p>Le site est hébergé par Vercel Inc., 340 S Lemon Ave #4133, Walnut, CA 91789, États-Unis — <a href="https://vercel.com" target="_blank" rel="noopener noreferrer">vercel.com</a>.</p>

      <h2>Propriété intellectuelle</h2>
      <p>Les textes, le logo, la charte graphique, les visuels et les vidéos de ce site sont la propriété de {LEGAL.nom}, sauf mention contraire. Toute reproduction, représentation ou adaptation, totale ou partielle, sans autorisation écrite préalable est interdite.</p>
      <p>Les réalisations présentées ont été produites pour nos clients. Leurs noms, logos et marques restent la propriété de leurs titulaires respectifs.</p>

      <h2>Responsabilité</h2>
      <p>{LEGAL.nom} s'efforce de fournir des informations exactes et à jour, sans pouvoir garantir l'absence d'erreur ou d'omission. Le site peut contenir des liens vers des sites tiers, sur le contenu desquels {LEGAL.nom} n'a aucun contrôle.</p>

      <h2>Données personnelles</h2>
      <p>Le traitement des données transmises via le site est décrit dans notre <a href="#confidentialite">politique de confidentialité</a>.</p>

      <h2>Droit applicable</h2>
      <p>Les présentes mentions légales sont régies par le droit français.</p>
    </>
  )
}

function Confidentialite() {
  return (
    <>
      <h1 className="h-section grad">Politique de confidentialité</h1>
      <p className="legal-intro muted">Comment {LEGAL.nom} collecte et utilise vos données personnelles, conformément au Règlement général sur la protection des données (RGPD) et à la loi Informatique et Libertés.</p>

      <h2>Responsable du traitement</h2>
      <p>{LEGAL.nom}, <V value={LEGAL.exploitant} label="prénom et nom de l'exploitant" /> (entrepreneur individuel), <V value={LEGAL.adresse} label="adresse de l'entreprise" />. Contact : <a href={`mailto:${EMAIL}`}>{EMAIL}</a>.</p>

      <h2>Données collectées</h2>
      <p>Nous collectons uniquement les données que vous nous transmettez volontairement :</p>
      <ul>
        <li><b>Formulaire de contact (envoi par email)</b> : nom, adresse email, type de besoin et contenu de votre message.</li>
        <li><b>Message WhatsApp</b> : si vous choisissez WhatsApp, l'échange a lieu sur l'application WhatsApp. Nous recevons alors votre numéro ou votre nom d'utilisateur et vos messages.</li>
        <li><b>Email direct</b> : votre adresse email et le contenu de votre message.</li>
      </ul>
      <p>Le site ne vous demande aucune autre information et ne crée pas de compte utilisateur.</p>

      <h2>Pourquoi nous utilisons ces données</h2>
      <ul>
        <li>Répondre à votre demande et vous recontacter.</li>
        <li>Préparer un devis et assurer le suivi de notre échange.</li>
      </ul>
      <p>Ces traitements reposent sur les mesures précontractuelles prises à votre demande (article 6.1.b du RGPD) et sur notre intérêt légitime à assurer le suivi de nos échanges (article 6.1.f).</p>

      <h2>Destinataires</h2>
      <p>Vos données sont destinées uniquement à {LEGAL.nom}. Elles ne sont ni vendues ni louées. Pour fonctionner, le site s'appuie sur les prestataires suivants :</p>
      <ul>
        <li>Web3Forms, pour la transmission du formulaire de contact vers notre messagerie ;</li>
        <li>Microsoft (Outlook), pour notre messagerie ;</li>
        <li>Vercel, pour l'hébergement du site ;</li>
        <li>Meta (WhatsApp), si vous choisissez de nous écrire sur WhatsApp, selon ses propres conditions.</li>
      </ul>
      <p>Certains de ces prestataires peuvent traiter des données en dehors de l'Union européenne, notamment aux États-Unis. Ces transferts sont encadrés par les garanties prévues par le RGPD (décision d'adéquation ou clauses contractuelles types).</p>

      <h2>Durée de conservation</h2>
      <p>Les données d'une demande de contact sont conservées au maximum 3 ans après notre dernier échange. Si vous devenez client, elles sont conservées pendant la durée de notre collaboration, puis pendant les durées imposées par la loi (obligations comptables notamment).</p>

      <h2>Cookies</h2>
      <p>Le site n'utilise aucun cookie publicitaire ni de mesure d'audience. L'hébergeur peut enregistrer des données techniques de connexion (adresse IP, navigateur) pour assurer la sécurité et le bon fonctionnement du site.</p>

      <h2>Vos droits</h2>
      <p>Vous disposez d'un droit d'accès, de rectification, d'effacement, de limitation, d'opposition et de portabilité de vos données. Pour les exercer, écrivez-nous à <a href={`mailto:${EMAIL}`}>{EMAIL}</a> : nous vous répondons dans un délai d'un mois.</p>
      <p>Si vous estimez que vos droits ne sont pas respectés, vous pouvez adresser une réclamation à la CNIL (<a href="https://www.cnil.fr" target="_blank" rel="noopener noreferrer">cnil.fr</a>).</p>

      <h2>Sécurité</h2>
      <p>Le site est servi en connexion sécurisée (HTTPS), et l'accès aux messages reçus est limité à l'équipe {LEGAL.nom}.</p>
    </>
  )
}

export default function Legal({ page }) {
  return (
    <main className="legal">
      <div className="grid-bg" />
      <article className="wrap legal-wrap">
        <a href="#top" className="link legal-back"><ChevronLeft size={16} /> Retour au site</a>
        {page === 'mentions' ? <Mentions /> : <Confidentialite />}
        <p className="legal-date muted">Dernière mise à jour : {LEGAL.miseAJour}</p>
      </article>
    </main>
  )
}
