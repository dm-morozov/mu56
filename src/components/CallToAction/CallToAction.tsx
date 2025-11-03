// src/components/CallToAction.tsx
import { type ReactNode } from 'react'
import photoJpg from '../../assets/grandfather-frost-and-snow-maiden.jpg'
import photoWebp from '../../assets/grandfather-frost-and-snow-maiden.webp'
// 🛑 Импорт CSS-модуля
import styles from './CallToAction.module.css'

type CallToActionProps = {
  children?: ReactNode
  showPhoto?: boolean
}

export default function CallToAction({
  children,
  showPhoto = false,
}: CallToActionProps) {
  return (
    <section className={styles.hero}>
      {showPhoto && (
        <div className={styles.photoFrame}>
          <picture>
            <source srcSet={photoWebp} type="image/webp" />
            <img
              src={photoJpg}
              alt="Дед Мороз и Снегурочка"
              loading="eager"
              width="400"
              height="600"
            />
          </picture>
        </div>
      )}
      {/* 🛑 ПРИМЕЧАНИЕ: Вы уже используете styles.heroText. Отлично! */}
      <div className={styles.heroText}>
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
          className={styles.ctaButton}
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
