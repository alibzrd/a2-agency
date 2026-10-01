import { Heart, MessageCircle, Send, Bookmark } from 'lucide-react'
import { thumb } from '../thumb'

/* Illustrations génériques : téléphone, navigateur, pastilles flottantes */

export function Phone({ children, className = '', style }) {
  return (
    <div className={`phone ${className}`} style={style} aria-hidden="true">
      <div className="screen">
        <span className="island" />
        {children}
      </div>
    </div>
  )
}

export function PostScreen({ src }) {
  return (
    <div className="post">
      <div className="post-head">
        <span className="av" />
        <span className="bar" style={{ width: '38%' }} />
      </div>
      <img className="post-img" src={thumb(src)} alt="" loading="lazy" />
      <div className="post-actions">
        <Heart size={16} className="liked" />
        <MessageCircle size={16} />
        <Send size={16} />
        <Bookmark size={16} style={{ marginLeft: 'auto' }} />
      </div>
      <div className="post-lines">
        <span className="bar" style={{ width: '70%' }} />
        <span className="bar" style={{ width: '45%' }} />
      </div>
    </div>
  )
}

export function StoryScreen({ src }) {
  return (
    <div className="post story-screen" style={{ paddingTop: 0 }}>
      <div className="story-bars"><i /><i /><i /></div>
      <img src={thumb(src)} alt="" loading="lazy" />
    </div>
  )
}

export function ImageScreen({ src }) {
  return (
    <div className="post story-screen" style={{ paddingTop: 0 }}>
      <img src={thumb(src)} alt="" style={{ objectPosition: 'top' }} />
    </div>
  )
}

export function Browser({ src, url = 'votre-site.fr', className = '' }) {
  return (
    <div className={`browser ${className}`} aria-hidden="true">
      <div className="browser-top">
        <span className="dot" /><span className="dot" /><span className="dot" />
        <span className="url">{url}</span>
      </div>
      <div className="browser-body">
        <div className="copy">
          <span className="bar lg" />
          <span className="bar md" />
          <span className="bar" style={{ width: '95%', marginTop: 6 }} />
          <span className="bar" style={{ width: '80%' }} />
          <span className="bar" style={{ width: '60%' }} />
          <span className="pill" />
        </div>
        <img src={thumb(src)} alt="" loading="lazy" />
      </div>
    </div>
  )
}

export function Chip({ icon: Icon, title, note, className = '' }) {
  return (
    <div className={`chip ${className}`} aria-hidden="true">
      <span className="ico"><Icon size={16} strokeWidth={2.2} /></span>
      <span>{title}{note && <small>{note}</small>}</span>
    </div>
  )
}
