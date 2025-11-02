// src/components/BookletSection/BookletSection.tsx
import bookletPdf from '../../assets/booklet.pdf'
import bookletPreview from '../../assets/preview_booklet.jpg'
import styles from './BookletSection.module.css'
import sharedStyles from '../../SharedStyles.module.css'

export default function BookletSection() {
  const handleDownload = (e: React.MouseEvent) => {
    e.preventDefault()
    const link = document.createElement('a')
    link.href = bookletPdf
    link.download = 'Мир_Улыбок_Буклет.pdf'
    link.click()
  }

  return (
    <section id="booklet" className={styles.bookletSection}>
      <div className="container">
        <div className={styles.section}>
          <div className={styles.content}>
            <h2 className={sharedStyles.sectionTitle}>
              Наши праздники круглый год
            </h2>
            <p className={styles.text}>
              Мы проводим дни рождения, выпускные, корпоративы и тематические
              праздники. Скачайте наш буклет и выберите идеальный сценарий!
            </p>
            <a
              href={bookletPdf}
              download="Мир_Улыбок_Буклет.pdf"
              className={styles.button}
            >
              Скачать буклет (PDF)
            </a>
          </div>

          <div className={styles.preview}>
            <div className={styles.tilt}>
              {/* Кликабельное изображение */}
              <button
                onClick={handleDownload}
                className={styles.imageButton}
                aria-label="Скачать буклет Мир Улыбок (PDF)"
                title="Нажмите, чтобы скачать буклет"
              >
                <img
                  src={bookletPreview}
                  alt="Превью буклета Мир Улыбок — детские праздники в Оренбурге"
                  className={styles.image}
                />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
