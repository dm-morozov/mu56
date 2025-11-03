// src/components/BookletSection/BookletSection.tsx
import bookletPdf from '../../assets/booklet.pdf'
import previewJpg from '../../assets/preview_booklet.jpg'
import previewWebp from '../../assets/preview_booklet.webp'
import styles from './BookletSection.module.css'

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
          {/* 1. ЗАГОЛОВОК */}
          <h2 className={styles.title}>
            Наши праздники{' '}
            <span className={styles.gradientText}>круглый год</span>
          </h2>

          {/* 2. КАРТИНКА */}
          <div className={styles.preview}>
            <div className={styles.tilt}>
              <button
                onClick={handleDownload}
                className={styles.imageButton}
                aria-label="Скачать буклет Мир Улыбок (PDF)"
                title="Нажмите, чтобы скачать буклет"
              >
                <picture>
                  <source srcSet={previewWebp} type="image/webp" />
                  <img
                    src={previewJpg}
                    alt="Превью буклета Мир Улыбок — детские праздники в Оренбурге"
                    className={styles.image}
                    loading="lazy"
                    width="400"
                    height="520"
                  />
                </picture>
              </button>
            </div>
          </div>

          {/* 3. ТЕКСТ + КНОПКА */}
          <div className={styles.description}>
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
        </div>
      </div>
    </section>
  )
}
