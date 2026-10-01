import { useState } from 'react'
import { ChevronRight, MessageCircle } from 'lucide-react'
import { whatsappLink, INSTAGRAM_URL } from '../contact'

const needs = ['Contenus & réseaux', 'Identité & branding', 'Site web', 'Plusieurs besoins', 'Autre']

export default function Contact() {
  const [form, setForm] = useState({ name: '', need: needs[0], message: '' })

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value })

  // Le formulaire ouvre WhatsApp avec le message déjà rédigé : le visiteur n'a plus qu'à l'envoyer.
  const handleSubmit = (e) => {
    e.preventDefault()
    const text =
      `Bonjour A² Agency, je m'appelle ${form.name.trim()}.\n` +
      `Mon besoin : ${form.need}.\n\n` +
      form.message.trim()
    window.open(whatsappLink(text), '_blank', 'noopener,noreferrer')
  }

  return (
    <section id="contact" className="contact">
      <div className="grid-bg" />
      <div className="wrap">
        <h2 className="h-section grad">Parlons de votre projet.</h2>
        <p className="sub muted">Un commerce à faire connaître, un club à mettre en avant, une marque à lancer ? Écrivez-nous sur WhatsApp, on vous répond sous 24 h.</p>

        <div className="actions contact-cta">
          <a
            className="btn btn-fill btn-wa"
            href={whatsappLink('Bonjour A² Agency, j\'ai un projet à vous présenter.')}
            target="_blank" rel="noopener noreferrer"
          >
            <MessageCircle size={20} /> Écrire sur WhatsApp
          </a>
        </div>
        <p className="contact-direct muted">
          <a className="link" href={INSTAGRAM_URL} target="_blank" rel="noopener noreferrer">Instagram <ChevronRight size={15} /></a>
        </p>

        <form className="form-card" onSubmit={handleSubmit}>
          <p className="form-intro">Ou décrivez votre projet ici : on prépare le message WhatsApp pour vous.</p>
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
          <button type="submit" className="btn btn-fill btn-wa"><MessageCircle size={18} /> Envoyer sur WhatsApp</button>
          <p className="form-note">WhatsApp s'ouvre avec votre message pré-rempli. Il ne reste qu'à appuyer sur envoyer.</p>
        </form>
      </div>
    </section>
  )
}
