import { ChevronRight } from 'lucide-react'
import { BLOG_POSTS } from '../blogPosts'

// Section « Le blog » de l'accueil : les 3 derniers articles (liste générée par gen_blog.py)
export default function BlogHome() {
  const posts = BLOG_POSTS.slice(0, 3)
  if (!posts.length) return null
  return (
    <section id="blog" className="blog-home" aria-labelledby="blog-title">
      <div className="wrap">
        <h2 id="blog-title" className="h-section grad">Le blog.</h2>
        <p className="sub muted">Nos conseils concrets pour mieux communiquer, à appliquer vous-même.</p>
        <div className="blog-grid">
          {posts.map((p, i) => (
            <a key={p.slug} className="blog-tile" href={`/blog/${p.slug}/`}>
              <small>
                {i === 0 && <span className="blog-new">Nouveau</span>}
                <span className="blog-cat">{p.category}</span> · {p.read} min de lecture
              </small>
              <h3>{p.title}</h3>
              <p>{p.text}</p>
              <span className="case-more">Lire l'article <ChevronRight size={16} /></span>
            </a>
          ))}
        </div>
        <p className="cases-all"><a className="link" href="/blog/">Tous les articles <ChevronRight size={16} /></a></p>
      </div>
    </section>
  )
}
