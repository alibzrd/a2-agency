import './index.css'
import Header from './components/Header'
import Hero from './components/Hero'
import Services from './components/Services'
import Feed from './components/Feed'
import Videos from './components/Videos'
import Storytelling from './components/Storytelling'
import Contact from './components/Contact'
import Footer from './components/Footer'

function App() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Services />
        <Feed />
        <Videos />
        <Storytelling />
        <Contact />
      </main>
      <Footer />
    </>
  )
}

export default App
