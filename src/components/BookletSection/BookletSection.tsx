// src/components/BookletSection/BookletSection.tsx
import bookletPdf from '../../assets/booklet.pdf'
import bookletPreview from '../../assets/preview_booklet.jpg'
import styles from './BookletSection.module.css' // Импорт модульных стилей

export default function BookletSection() {
  return (
    // 'container' - остаётся глобальным
    // Заменяем 'booklet-section' на styles.section
    <section id="booklet" className={`${styles.section} container`}>
      <div className={styles.content}>
        {' '}
        {/* Заменяем 'booklet-content' */}
        <h2 className="section-title">Наши праздники круглый год</h2>{' '}
        {/* section-title остаётся глобальным */}
        <p className={styles.text}>
          {' '}
          {/* Заменяем 'booklet-text' */}
          Мы проводим дни рождения, выпускные, корпоративы и тематические
          праздники. Скачайте наш буклет и выберите идеальный сценарий!
        </p>
        <a
          href={bookletPdf}
          download="Мир_Улыбок_Буклет.pdf"
          className={styles.button} // Заменяем 'booklet-button'
        >
          Скачать буклет (PDF)
        </a>
      </div>

      <div className={styles.preview}>
        {' '}
        {/* Заменяем 'booklet-preview' */}
        <div className={styles.tilt}>
          {' '}
          {/* Заменяем 'booklet-tilt' */}
          <img
            src={bookletPreview}
            alt="Буклет Мир Улыбок — превью"
            className={styles.image} // Заменяем 'booklet-image'
          />
        </div>
      </div>
    </section>
  )
}
