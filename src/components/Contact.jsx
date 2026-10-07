import { useState } from 'react'
import { ChevronRight, MessageCircle, Mail } from 'lucide-react'
import { whatsappLink, mailtoLink, EMAIL, INSTAGRAM_URL } from '../contact'

const needs = ['Contenus & réseaux', 'Identité & branding', 'Site web', 'Plusieurs besoins', 'Autre']
const channels = [
  { id: 'whatsapp', label: 'WhatsApp', Icon: MessageCircle },
  { id: 'email', label: 'Email', Icon: Mail },
]

export default function Contact() {
  const [form, setForm] = useState({ name: '', need: needs[0], message: '' })
  const [channel, setChannel] = useState('whatsapp')
  const current = channels.find(c => c.id === channel)

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value })

  // Le formulaire prépare le message dans WhatsApp ou dans la messagerie du visiteur : il n'a plus qu'à l'envoyer.
  const handleSubmit = (e) => {
    e.preventDefault()
    const name = form.name.trim()
    const text =
      `Bonjour A² Agency, je m'appelle ${name}.\n` +
      `Mon besoin : ${form.need}.\n\n` +
      form.message.trim()
    if (channel === 'whatsapp') {
      window.open(whatsappLink(text), '_blank', 'noopener,noreferrer')
    } else {
      window.location.href = mailtoLink(`Projet : ${form.need} (${name})`, text)
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
          <a className="btn btn-ghost btn-wa" href={mailtoLink('Demande de contact')}>
            <Mail size={20} /> Envoyer un email
          </a>
        </div>
        <p className="contact-direct muted">
          <a className="link" href={`mailto:${EMAIL}`}>{EMAIL}</a>
          <a className="link" href={INSTAGRAM_URL} target="_blank" rel="noopener noreferrer">Instagram <ChevronRight size={15} /></a>
        </p>

        <form className="form-card" onSubmit={handleSubmit}>
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
          <div className="field">
            <label htmlFor="c-msg">Votre projet</label>
            <textarea id="c-msg" name="message" value={form.message} onChange={handleChange} required rows={5} />
          </div>
          <button type="submit" className="btn btn-fill btn-wa"><current.Icon size={18} /> {channel === 'whatsapp' ? 'Envoyer sur WhatsApp' : 'Envoyer par email'}</button>
          <p className="form-note">
            {channel === 'whatsapp'
              ? "WhatsApp s'ouvre avec votre message pré-rempli. Il ne reste qu'à appuyer sur envoyer."
              : `Votre messagerie s'ouvre avec le message pré-rempli pour ${EMAIL}. Il ne reste qu'à l'envoyer.`}
          </p>
        </form>
      </div>
    </section>
  )
}
