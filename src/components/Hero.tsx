// src/components/Hero.tsx
import photo from '../assets/grandfather-frost-and-snow-maiden.jpg'

export default function Hero() {
  return (
    <section className="hero">
      <div className="photo-frame">
        <img src={photo} alt="Дед Мороз и Снегурочка" />
      </div>
      <div className="hero-text">
        <h2>
          Добро пожаловать в<br />
          Мир Улыбок!
        </h2>
        <p>Создаём незабываемые новогодние праздники для ваших детей</p>
        <button
          className="cta-button"
          onClick={() => (window.location.href = 'tel:+79033922229')}
        >
          Позвонить Деду Морозу
        </button>
      </div>
    </section>
  )
}
