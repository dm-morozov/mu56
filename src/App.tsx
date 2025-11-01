// src/App.tsx
import './App.css'
import Header from './components/Header'
import PriceSection from './components/PriceSection'
import Footer from './components/Footer'
import Gallery from './components/Gallery/Gallery'
import CallToAction from './components/CallToAction'
import { Helmet } from 'react-helmet-async'
import { useEffect } from 'react'
import WhyUsSection from './components/WhyUsSection/WhyUsSection'
import GuaranteeSection from './components/GuaranteeSection/GuaranteeSection'
import BookletSection from './components/BookletSection/BookletSection'

function App() {
  useEffect(() => {
    const header = document.querySelector('.header-full-bg')
    if (!header) return

    const container = document.createElement('div')
    container.className = 'snowflakes-header'
    header.appendChild(container)

    const snowflakeIcons = ['❄', '❅', '❆', '✻', '✼', '❉'] // Разные формы
    const snowflakeColors = ['#ffffff', '#e0f7ff', '#b3e5ff', '#87cefa'] // Белый + голубые

    const createSnowflake = () => {
      const flake = document.createElement('div')
      flake.className = 'snowflake'

      // Случайная иконка
      flake.innerHTML =
        snowflakeIcons[Math.floor(Math.random() * snowflakeIcons.length)]

      // Случайный цвет
      flake.style.color =
        snowflakeColors[Math.floor(Math.random() * snowflakeColors.length)]

      // Позиция
      flake.style.left = `${Math.random() * 100}%`

      // Скорость: 6–12 сек
      flake.style.animationDuration = `${Math.random() * 6 + 6}s`

      // Прозрачность
      flake.style.opacity = (Math.random() * 0.4 + 0.6).toFixed(2)

      // Размер
      const size = Math.random() * 0.9 + 0.7
      flake.style.fontSize = `${size}em`

      container.appendChild(flake)

      // Удаление после анимации
      const duration = parseFloat(flake.style.animationDuration) * 1000 + 1000
      setTimeout(() => flake.remove(), duration)
    }

    // Частое появление: каждые 300–700 мс
    const interval = setInterval(createSnowflake, Math.random() * 400 + 300)

    // Первая снежинка сразу
    createSnowflake()

    return () => {
      clearInterval(interval)
      container.remove()
    }
  }, [])

  return (
    <>
      {/* Оставляем только то, что МЕНЯЕТСЯ динамически */}
      <Helmet>
        {/* Можно оставить для JS-пользователей, но не обязательно */}
        <meta name="theme-color" content="#1E40AF" />
      </Helmet>

      <Header />
      <main>
        <CallToAction showPhoto={true} />
        <Gallery />
        <WhyUsSection />
        <section id="prices" className="container">
          <PriceSection />
        </section>
        <GuaranteeSection />
        <BookletSection />
        <CallToAction />
        <section id="road" className="container">
          <p className="note">
            * Цены действительны в пределах города.
            <br />
            Выезд в удалённый район ≈ 500 ₽ (договорная).
          </p>
        </section>
      </main>
      <Footer />
    </>
  )
}

export default App
