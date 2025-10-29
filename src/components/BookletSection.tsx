// src/components/BookletSection.tsx
import booklet from '../assets/booklet.pdf'

export default function BookletSection() {
  return (
    <section className="booklet-section">
      <div className="booklet-content">
        <h2 className="section-title">Наши праздники круглый год</h2>
        <p className="booklet-text">
          Не только Новый год! Мы проводим дни рождения, выпускные, корпоративы
          и тематические праздники. Скачайте наш буклет и выберите идеальный
          сценарий!
        </p>
        <a
          href={booklet}
          download="Мир_Улыбок_Буклет.pdf"
          className="booklet-button"
        >
          Скачать буклет (PDF)
        </a>
      </div>
      <div className="booklet-preview">
        <iframe
          src={booklet}
          title="Буклет Мир Улыбок"
          width="100%"
          height="500"
          style={{ border: 'none', borderRadius: '16px' }}
        />
      </div>
    </section>
  )
}
