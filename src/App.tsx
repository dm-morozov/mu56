// src/App.tsx
import './App.css'
import logo from './assets/mu_logo.svg'
import Hero from './components/Hero'
import PriceSection from './components/PriceSection'
import BookletSection from './components/BookletSection'
import Footer from './components/Footer'

function App() {
  return (
    <div className="container">
      <header className="header">
        <img src={logo} alt="Мир Улыбок — Детские праздники" className="logo" />
      </header>

      <Hero />
      <PriceSection />
      <BookletSection />

      <p className="note">
        * Цены действительны в пределах города. Выезд в удалённый район — от 500
        ₽ (договорная).
        <br />* Бронирование по предоплате 30%. Остаток — в день мероприятия.
      </p>

      <Footer />
    </div>
  )
}

export default App
