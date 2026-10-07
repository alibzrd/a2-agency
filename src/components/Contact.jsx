import { useRef, useState } from 'react'
import { ChevronRight, MessageCircle, Mail, CheckCircle2 } from 'lucide-react'
import { whatsappLink, mailtoLink, INSTAGRAM_URL, WEB3FORMS_KEY } from '../contact'

const needs = ['Contenus & réseaux', 'Identité & branding', 'Site web', 'Plusieurs besoins', 'Autre']
const channels = [
  { id: 'whatsapp', label: 'WhatsApp', Icon: MessageCircle },
  { id: 'email', label: 'Email', Icon: Mail },
]

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', need: needs[0], message: '', botcheck: false })
  const [channel, setChannel] = useState('whatsapp')
  const [status, setStatus] = useState('idle') // idle | sending | sent | error
  const current = channels.find(c => c.id === channel)

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value })
  const formRef = useRef(null)

  // « Envoyer un email » : bascule le formulaire en mode email et y amène le visiteur,
  // pour que l'adresse de l'agence n'apparaisse jamais.
  const goToEmailForm = () => {
    setChannel('email')
    setStatus('idle')
    formRef.current?.scrollIntoView({ behavior: 'smooth', block: 'center' })
    setTimeout(() => document.getElementById('c-name')?.focus({ preventScroll: true }), 500)
  }

  // WhatsApp : ouvre la conversation avec le message prêt. Email : envoi direct via Web3Forms
  // (ou, si la clé n'est pas encore renseignée, ouverture de la messagerie du visiteur).
  const handleSubmit = async (e) => {
    e.preventDefault()
    const name = form.name.trim()
    const text =
      `Bonjour A² Agency, je m'appelle ${name}.\n` +
      `Mon besoin : ${form.need}.\n\n` +
      form.message.trim()
    if (channel === 'whatsapp') {
      window.open(whatsappLink(text), '_blank', 'noopener,noreferrer')
      return
    }
    if (!WEB3FORMS_KEY) {
      window.location.href = mailtoLink(`Projet : ${form.need} (${name})`, text)
      return
    }
    setStatus('sending')
    try {
      const res = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
        body: JSON.stringify({
          access_key: WEB3FORMS_KEY,
          subject: `Nouveau projet : ${form.need} (${name})`,
          from_name: 'Site A² Agency',
          name,
          email: form.email.trim(),
          besoin: form.need,
          message: form.message.trim(),
          botcheck: form.botcheck,
        }),
      })
      const data = await res.json()
      if (!data.success) throw new Error(data.message)
      setStatus('sent')
      setForm({ name: '', email: '', need: needs[0], message: '', botcheck: false })
    } catch {
      setStatus('error')
    }
  }

  return (
    <section id="contact" className="contact">
      <div className="grid-bg" />
      <div className="wrap">
        <h2 className="h-section grad">Parlons de votre projet.</h2>
        <p className="sub muted">Un commerce à faire connaître, un club à mettre en avant, une marque à lancer ? Écrivez-nous sur WhatsApp ou par email, on vous répond sous 24 h.</p>

        <div className="actions contact-cta">
          <a
            className="btn btn-fill btn-wa"
            href={whatsappLink('Bonjour A² Agency, j\'ai un projet à vous présenter.')}
            target="_blank" rel="noopener noreferrer"
          >
            <MessageCircle size={20} /> Écrire sur WhatsApp
          </a>
          <button type="button" className="btn btn-ghost btn-wa" onClick={goToEmailForm}>
            <Mail size={20} /> Envoyer un email
          </button>
        </div>
        <p className="contact-direct muted">
          <a className="link" href={INSTAGRAM_URL} target="_blank" rel="noopener noreferrer">Instagram <ChevronRight size={15} /></a>
        </p>

        <form className="form-card" onSubmit={handleSubmit} ref={formRef}>
          <p className="form-intro">Ou décrivez votre projet ici : on prépare le message pour vous.</p>
          <div className="channel-pick">
            <span>Recevoir votre message par</span>
            <div className="segmented segmented-sm" role="radiogroup" aria-label="Canal d'envoi">
              {channels.map(c => (
                <button
                  key={c.id} type="button" role="radio" aria-checked={channel === c.id}
                  className={channel === c.id ? 'is-active' : ''} onClick={() => setChannel(c.id)}
                >
                  {c.label}
                </button>
              ))}
            </div>
          </div>
          <div className="row">
            <div className="field">
              <label htmlFor="c-name">Nom</label>
              <input id="c-name" type="text" name="name" value={form.name} onChange={handleChange} required autoComplete="name" />
            </div>
            <div className="field">
              <label htmlFor="c-need">Votre besoin</label>
              <select id="c-need" name="need" value={form.need} onChange={handleChange}>
                {needs.map(n => <option key={n}>{n}</option>)}
              </select>
            </div>
          </div>
          {channel === 'email' && (
            <div className="field">
              <label htmlFor="c-email">Votre email (pour qu'on vous réponde)</label>
              <input id="c-email" type="email" name="email" value={form.email} onChange={handleChange} required autoComplete="email" />
            </div>
          )}
          <input type="checkbox" name="botcheck" className="hp" tabIndex={-1} autoComplete="off" aria-hidden="true"
            checked={form.botcheck} onChange={e => setForm({ ...form, botcheck: e.target.checked })} />
          <div className="field">
            <label htmlFor="c-msg">Votre projet</label>
            <textarea id="c-msg" name="message" value={form.message} onChange={handleChange} required rows={5} />
          </div>
          {status === 'sent' && channel === 'email' ? (
            <p className="form-success" role="status"><CheckCircle2 size={20} /> Message envoyé ! On vous répond sous 24 h.</p>
          ) : (
            <button type="submit" className="btn btn-fill btn-wa" disabled={status === 'sending'}>
              <current.Icon size={18} /> {channel === 'whatsapp' ? 'Envoyer sur WhatsApp' : status === 'sending' ? 'Envoi en cours…' : 'Envoyer par email'}
            </button>
          )}
          <p className="form-note" role={status === 'error' ? 'alert' : undefined}>
            {channel === 'whatsapp'
              ? "WhatsApp s'ouvre avec votre message pré-rempli. Il ne reste qu'à appuyer sur envoyer."
              : status === 'error'
                ? "L'envoi n'a pas fonctionné. Réessayez dans un instant ou écrivez-nous sur WhatsApp."
                : WEB3FORMS_KEY
                  ? 'Votre message nous est envoyé directement, sans quitter le site.'
                  : "Votre messagerie s'ouvre avec le message pré-rempli. Il ne reste qu'à l'envoyer."}
          </p>
          <p className="form-legal">Vos informations servent uniquement à répondre à votre demande. <a href="#confidentialite">Politique de confidentialité</a></p>
        </form>
      </div>
    </section>
  )
}
