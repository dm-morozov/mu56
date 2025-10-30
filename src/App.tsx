// src/App.tsx — УБРАЛИ .container ИЗ-ЗА ХЕДЕРА
import './App.css'
import Header from './components/Header'
import Hero from './components/Hero'
import PriceSection from './components/PriceSection'
import BookletSection from './components/BookletSection'
import Footer from './components/Footer'
import Gallery from './components/Gallery'

function App() {
  return (
    <>
      <Header />
      <main className="container">
        <Hero />
        <Gallery />
        <PriceSection />
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
