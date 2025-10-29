// src/App.tsx
import './App.css'
import logo from './assets/mu_logo.svg'
import Hero from './components/Hero'
import PriceSection from './components/PriceSection'
import Footer from './components/Footer'

const Snowflakes = () => {
  const count = 15
  return (
    <div className="svg-bg">
      {Array.from({ length: count }, (_, i) => (
        <svg
          key={i}
          style={{
            left: `${(i * 100) / count}%`,
            animationDelay: `${i * 1.5}s`,
            animationDuration: `${15 + i}s`,
          }}
          viewBox="0 0 50 50"
        >
          <path d="M25 5 L28 18 L40 20 L30 25 L35 38 L25 30 L15 38 L20 25 L10 20 L22 18 Z" />
        </svg>
      ))}
    </div>
  )
}

function App() {
  return (
    <>
      <Snowflakes />
      <div className="container">
        <header className="header">
          <img
            src={logo}
            alt="Мир Улыбок — Детские праздники"
            className="logo"
          />
        </header>

        <Hero />
        <PriceSection />

        <p className="note">
          * Цены действительны в пределах города. Выезд в удалённый район — от
          500 ₽ (договорная).
          <br />* Бронирование по предоплате 30%. Остаток — в день мероприятия.
        </p>

        <Footer />
      </div>
    </>
  )
}

export default App
