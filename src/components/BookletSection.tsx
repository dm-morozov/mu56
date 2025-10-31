// src/components/BookletSection.tsx
import bookletPdf from '../assets/booklet.pdf'
import bookletPreview from '../assets/preview_booklet.jpg'

export default function BookletSection() {
  return (
    <section id="booklet" className="booklet-section">
      <div className="booklet-content">
        <h2 className="section-title">Наши праздники круглый год</h2>
        <p className="booklet-text">
          Мы проводим дни рождения, выпускные, корпоративы и тематические
          праздники. Скачайте наш буклет и выберите идеальный сценарий!
        </p>
        <a
          href={bookletPdf}
          download="Мир_Улыбок_Буклет.pdf"
          className="booklet-button"
        >
          Скачать буклет (PDF)
        </a>
      </div>

      <div className="booklet-preview">
        <div className="booklet-tilt">
          <img
            src={bookletPreview}
            alt="Буклет Мир Улыбок — превью"
            className="booklet-image"
          />
        </div>
      </div>
    </section>
  )
}
