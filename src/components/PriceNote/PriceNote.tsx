// src/components/PriceNote/PriceNote.tsx
import styles from './PriceNote.module.css'

export default function PriceNote() {
  return (
    <div className={styles.wrapper}>
      <p className={styles.note}>
        * Цены действительны в пределах города.
        <br />
        Выезд в удалённый район ≈ 500 ₽ (договорная).
      </p>
    </div>
  )
}
