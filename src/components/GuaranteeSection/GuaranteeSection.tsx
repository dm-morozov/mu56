// src/components/GuaranteeSection/GuaranteeSection.tsx
// ОТДЕЛЬНЫЙ КОМПОНЕНТ: Гарантия

import { FaShieldAlt, FaPhoneAlt } from 'react-icons/fa'
import styles from './GuaranteeSection.module.css' // Импорт CSS Modules

export default function GuaranteeSection() {
  // Обратите внимание: класс 'container' оставлен как глобальный/общий,
  // если он используется повсеместно для центрирования контента.
  // Класс 'cta-button' также оставлен, если он является общим стилем кнопки.
  return (
    <section className={styles['guarantee-section']}>
      <div className="container">
        <div className={styles['guarantee-content']}>
          <FaShieldAlt className={styles['guarantee-icon']} />
          <h2 className={styles['guarantee-title']}>
            Гарантия <span className="gradient-text">Отличного Праздника!</span>
          </h2>
          <p className={styles['guarantee-text']}>
            Не понравится — <strong>можете не платить!</strong>
          </p>
          <button
            className={`cta-button ${styles['guarantee-btn']}`} // Комбинируем общие и модульные стили
            onClick={() => {
              // Yandex Metrica goal
              if (window.ym) window.ym(105020810, 'reachGoal', 'GUARANTEE_CALL')
              // Direct call
              window.location.href = 'tel:+79033922229'
            }}
          >
            <FaPhoneAlt /> Позвонить Дедушке Морозу!
          </button>
        </div>
      </div>
    </section>
  )
}
