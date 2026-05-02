import './index.css'
import Header from './components/Header'
import Hero from './components/Hero'
import Storytelling from './components/Storytelling'
import Services from './components/Services'
import Portfolio from './components/Portfolio'
import Contact from './components/Contact'
import Footer from './components/Footer'

function App() {
  return (
    <div style={{ width: '100%', minHeight: '100vh', backgroundColor: '#060912' }}>
      <Header />
      <main>
        <Hero />
        <Storytelling />
        <Services />
        <Portfolio />
        <Contact />
      </main>
      <Footer />
    </div>
  )
}

export default App
