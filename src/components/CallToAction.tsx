// src/components/CallToAction.tsx
import { type ReactNode } from 'react'
import photo from '../assets/grandfather-frost-and-snow-maiden.jpg'

type CallToActionProps = {
  children?: ReactNode
  showPhoto?: boolean
}

export default function CallToAction({
  children,
  showPhoto = false,
}: CallToActionProps) {
  return (
    <section
      className={`hero ${showPhoto ? 'hero-with-photo' : 'cta-section'}`}
    >
      {showPhoto && (
        <div className="photo-frame">
          <img src={photo} alt="Дед Мороз и Снегурочка" />
        </div>
      )}
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
          onClick={() => {
            if (window.ym) {
              window.ym(105020810, 'reachGoal', 'CALL_CLICK')
            }
            window.location.href = 'tel:+79033922229'
          }}
        >
          Позвонить Дедушке Морозу
        </button>
        {children}
      </div>
    </section>
  )
}
