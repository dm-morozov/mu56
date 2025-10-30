// src/App.tsx
import './App.css'
import logo from './assets/mu_logo.svg'
import Hero from './components/Hero'
import PriceSection from './components/PriceSection'
import BookletSection from './components/BookletSection'
import Footer from './components/Footer'
import Gallery from './components/Gallery'

function App() {
  return (
    <div className="container">
      <header className="header">
        <img src={logo} alt="Мир Улыбок — Детские праздники" className="logo" />
      </header>

      <Hero />
      <PriceSection />
      <Gallery />
      <BookletSection />

      <p className="note">
        * Цены действительны в пределах города.
        <br />
        Выезд в удалённый район — ~ 500 ₽ (договорная).
      </p>

      <Footer />
    </div>
  )
}

export default App
