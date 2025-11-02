// src/components/PriceNote/PriceNote.tsx
import styles from './PriceNote.module.css'

export default function PriceNote() {
  return (
    // Используем styles.wrapper для центрирования (бывший .container)
    <section id="road" className={styles.wrapper}>
      {/* Используем styles.note */}
      <p className={styles.note}>
        * Цены действительны в пределах города.
        <br />
        Выезд в удалённый район ≈ 500 ₽ (договорная).
      </p>
    </section>
  )
}
