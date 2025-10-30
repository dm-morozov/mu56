// src/components/Header.tsx — МИНИМАЛИСТИЧНЫЙ ЗАГОЛОВОК И СТАТИЧНЫЙ ПАРАЛЛАКС

import logo from '../assets/mu_logo.svg'
import blueBall from '../assets/header/blue-ball.png'
import blueBallBlurred from '../assets/header/blue-ball_blurred.png'
import goldenBall from '../assets/header/golden-ball.png'
import pinkBall from '../assets/header/pink-ball.png'
import subtractBig from '../assets/header/Subtract_big.png'
import subtractSmall from '../assets/header/Subtract_small.png'
import clouds from '../assets/header/clouds.svg'

// 🛑 СТАТИЧЕСКИЕ ДАННЫЕ ШАРОВ (вынесены за пределы компонента)
// Позиции заданы по краям (top/bottom) с фиксированными координатами.
const STATIC_PARALLAX_ELEMENTS = [
  // Голубые шары (2 шт)
  {
    src: blueBall,
    opacity: 0.7,
    zIndex: 1,
    left: '5%',
    top: '70%',
    size: '60px',
  },
  {
    src: blueBall,
    opacity: 0.7,
    zIndex: 1,
    left: '80%',
    top: '15%',
    size: '90px',
  },

  // Размытый синий шар (1 шт)
  {
    src: blueBallBlurred,
    opacity: 0.5,
    zIndex: 1,
    left: '15%',
    top: '80%',
    size: '110px',
  },

  // Золотой шар (1 шт)
  {
    src: goldenBall,
    opacity: 0.7,
    zIndex: 1,
    left: '90%',
    top: '75%',
    size: '70px',
  },

  // Розовые шары (2 шт)
  {
    src: pinkBall,
    opacity: 0.7,
    zIndex: 1,
    left: '30%',
    top: '10%',
    size: '50px',
  },
  {
    src: pinkBall,
    opacity: 0.7,
    zIndex: 1,
    left: '65%',
    top: '85%',
    size: '80px',
  },

  // Крупные формы (ОЧЕНЬ низкая прозрачность, чтобы не мешать)
  {
    src: subtractBig,
    opacity: 0.25,
    zIndex: 1,
    left: '2%',
    top: '0%',
    size: '150px',
  },
  {
    src: subtractSmall,
    opacity: 0.25,
    zIndex: 1,
    left: '98%',
    top: '10%',
    size: '80px',
  },
]

export default function Header() {
  // 🛑 Логика движения и state удалены. Компонент стал чище.

  const renderStaticParallaxElements = () => {
    return STATIC_PARALLAX_ELEMENTS.map((pos, i) => (
      <img
        key={i}
        src={pos.src}
        alt=""
        className="static-parallax-element" // Новый класс, можно использовать старый, но стили будут чище
        style={{
          position: 'absolute',
          left: pos.left,
          top: pos.top,
          width: pos.size,
          height: 'auto',
          opacity: pos.opacity,
          pointerEvents: 'none',
          filter: 'drop-shadow(0 4px 8px rgba(0,0,0,0.05))',
          transform: 'translate(-50%, -50%)', // Центрирование по координатам top/left
          zIndex: pos.zIndex,
        }}
      />
    ))
  }

  return (
    <>
      {/* ФОН НА ВСЮ ШИРИНУ */}
      <div className="header-full-bg">
        <div className="header-gradient"></div>
        <div className="header-background">
          {renderStaticParallaxElements()}
        </div>
        <img src={clouds} alt="" className="header-clouds-full" />
      </div>

      {/* КОНТЕНТ В КОНТЕЙНЕРЕ */}
      <header className="header-enhanced container">
        <div className="header-content">
          <img
            src={logo}
            alt="Мир Улыбок — Детские праздники"
            className="logo"
          />

          <div className="header-text">
            <h1>Мир Улыбок</h1> {/* Сокращенный заголовок */}
            <p>Мы — одни из лучших аниматоров города Оренбурга</p>
          </div>
        </div>
      </header>
    </>
  )
}
