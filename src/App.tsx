// src/App.tsx
import './App.css'
import Header from './components/Header'
import PriceSection from './components/PriceSection'
import BookletSection from './components/BookletSection'
import Footer from './components/Footer'
import Gallery from './components/Gallery'
import CallToAction from './components/CallToAction'
import { Helmet } from 'react-helmet'

function App() {
  return (
    <>
      {/* Оставляем только то, что МЕНЯЕТСЯ динамически */}
      <Helmet>
        {/* Можно оставить для JS-пользователей, но не обязательно */}
        <meta name="theme-color" content="#1E40AF" />
      </Helmet>

      <Header />
      <main className="container">
        <CallToAction showPhoto={true} />
        <Gallery />
        <section id="prices">
          <PriceSection />
        </section>
        <CallToAction />
        <BookletSection />
        <p className="note">
          * Цены действительны в пределах города.
          <br />
          Выезд в удалённый район ≈ 500 ₽ (договорная).
        </p>
      </main>
      <Footer />
    </>
  )
}

export default App
