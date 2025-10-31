// src/components/Gallery.tsx
import { useState } from 'react'
import img1 from '../assets/gallery/1.jpg'
import img2 from '../assets/gallery/2.jpg'
import img3 from '../assets/gallery/3.jpg'
import img4 from '../assets/gallery/4.jpg'
import img5 from '../assets/gallery/5.jpg'
import img6 from '../assets/gallery/6.jpg'

const images = [
  {
    src: img1,
    alt: 'Дед Мороз и Снегурочка в роскошных костюмах для новогоднего праздника в Оренбурге',
  },
  {
    src: img2,
    alt: 'Актеры Дед Мороз и Снегурочка проводят хоровод на детском утреннике в Оренбурге',
  },
  {
    src: img3,
    alt: 'Вручение подарков детям: Дед Мороз и Снегурочка на новогоднем корпоративе в Оренбурге',
  },
  {
    src: img4,
    alt: 'Крупный план: качественные костюмы Деда Мороза и Снегурочки для заказа на Новый год',
  },
  {
    src: img5,
    alt: 'Дед Мороз и Снегурочка общаются с ребенком во время праздника в домашней обстановке (Оренбург)',
  },
  {
    src: img6,
    alt: 'Игровой момент: Дед Мороз и Снегурочка в полный рост, вид сбоку, на новогоднем мероприятии',
  },
]

export default function Gallery() {
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null)

  const openLightbox = (index: number) => setLightboxIndex(index)
  const closeLightbox = () => setLightboxIndex(null)

  const prevImage = () => {
    if (lightboxIndex !== null) {
      setLightboxIndex(
        lightboxIndex === 0 ? images.length - 1 : lightboxIndex - 1
      )
    }
  }

  const nextImage = () => {
    if (lightboxIndex !== null) {
      setLightboxIndex(
        lightboxIndex === images.length - 1 ? 0 : lightboxIndex + 1
      )
    }
  }

  return (
    <section id="gallery" className="gallery">
      <h2>Наши костюмы в лицах</h2>
      <div className="gallery-grid">
        {images.map((img, i) => (
          <div key={i} className="gallery-item" onClick={() => openLightbox(i)}>
            <img src={img.src} alt={img.alt} loading="lazy" />
          </div>
        ))}
      </div>

      {/* === ЛАЙТБОКС === */}
      {lightboxIndex !== null && (
        <div className="lightbox-overlay" onClick={closeLightbox}>
          <div
            className="lightbox-content"
            onClick={(e) => e.stopPropagation()}
          >
            <button className="lightbox-close" onClick={closeLightbox}>
              ×
            </button>
            <button className="lightbox-nav prev" onClick={prevImage}>
              ❮
            </button>
            <button className="lightbox-nav next" onClick={nextImage}>
              ❯
            </button>

            <img
              src={images[lightboxIndex].src}
              alt={images[lightboxIndex].alt}
              className="lightbox-image"
            />

            <div className="lightbox-counter">
              {lightboxIndex + 1} / {images.length}
            </div>
          </div>
        </div>
      )}
    </section>
  )
}
