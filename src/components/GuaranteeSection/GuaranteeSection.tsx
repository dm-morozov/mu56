// ОТДЕЛЬНЫЙ КОМПОНЕНТ: Гарантия

import { FaShieldAlt, FaPhoneAlt } from 'react-icons/fa'
import styles from './GuaranteeSection.module.css' // Импорт CSS Modules

export default function GuaranteeSection() {
  // Обратите внимание: класс 'container' оставлен как глобальный/общий,
  // если он используется повсеместно для центрирования контента.
  // Класс 'cta-button' также оставлен, если он является общим стилем кнопки.
  return (
    <section className={styles.guaranteeSection}>
      <div className="container">
        <div className={styles.guaranteeContent}>
          <FaShieldAlt className={styles.guaranteeIcon} />
          <h2 className={styles.guaranteeTitle}>
            Гарантия <span className="gradient-text">Отличного Праздника!</span>
          </h2>
          <p className={styles.guaranteeText}>
            Не понравится — <strong>можете не платить!</strong>
          </p>
          <button
            className={`cta-button ${styles.guaranteeBtn}`} // Комбинируем общие и модульные стили
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
