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
          Позвоните <br />
          Дедушке Морозу!
        </h2>
        <p>
          Создаём незабываемые
          <br />
          новогодние праздники для детей более 17 лет
        </p>
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
