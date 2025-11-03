// src/components/Gallery/Gallery.tsx
import { useState } from 'react'
import styles from './Gallery.module.css' // Импорт модульных стилей
// Импорты изображений не меняются, но пути должны быть относительно App.tsx
// или настроены в сборщике (если пути были корректны, оставляем как есть)
import img1jpg from '../../assets/gallery/1.jpg'
import img1webp from '../../assets/gallery/1.webp'
import img2jpg from '../../assets/gallery/2.jpg'
import img2webp from '../../assets/gallery/2.webp'
import img3jpg from '../../assets/gallery/3.jpg'
import img3webp from '../../assets/gallery/3.webp'
import img4jpg from '../../assets/gallery/4.jpg'
import img4webp from '../../assets/gallery/4.webp'
import img5jpg from '../../assets/gallery/5.jpg'
import img5webp from '../../assets/gallery/5.webp'
import img6jpg from '../../assets/gallery/6.jpg'
import img6webp from '../../assets/gallery/6.webp'

interface Img {
  jpg: string
  webp: string
  alt: string
}

const images: Img[] = [
  {
    jpg: img1jpg,
    webp: img1webp,
    alt: 'Дед Мороз и Снегурочка в роскошных костюмах…',
  },
  {
    jpg: img2jpg,
    webp: img2webp,
    alt: 'Актеры Дед Мороз и Снегурочка проводят хоровод…',
  },
  { jpg: img3jpg, webp: img3webp, alt: 'Вручение подарков детям…' },
  { jpg: img4jpg, webp: img4webp, alt: 'Крупный план: качественные костюмы…' },
  {
    jpg: img5jpg,
    webp: img5webp,
    alt: 'Дед Мороз и Снегурочка общаются с ребенком…',
  },
  {
    jpg: img6jpg,
    webp: img6webp,
    alt: 'Игровой момент: Дед Мороз и Снегурочка в полный рост…',
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
    // Применяем модульные классы, оставляем 'container' как глобальный
    <section id="gallery" className={`container ${styles.gallery}`}>
      <h2 className={styles.title}>
        Наши костюмы <span className={styles.gradientText}>в лицах</span>
      </h2>
      <div className={styles.grid}>
        {images.map((img, i) => (
          <div key={i} className={styles.item} onClick={() => openLightbox(i)}>
            <picture>
              <source srcSet={img.webp} type="image/webp" />
              <img
                src={img.jpg}
                alt={img.alt}
                loading="lazy"
                className={styles.thumbnail}
              />
            </picture>
          </div>
        ))}
      </div>

      {/* === ЛАЙТБОКС === */}
      {lightboxIndex !== null && (
        <div className={styles.lightboxOverlay} onClick={closeLightbox}>
          <div
            className={styles.lightboxContent}
            onClick={(e) => e.stopPropagation()}
          >
            <button className={styles.lightboxClose} onClick={closeLightbox}>
              &times; {/* Используем символ, чтобы избежать конфликта */}
            </button>
            <button
              className={`${styles.lightboxNav} ${styles.prev}`}
              onClick={prevImage}
            >
              &#10094; {/* Стрелка влево */}
            </button>
            <button
              className={`${styles.lightboxNav} ${styles.next}`}
              onClick={nextImage}
            >
              &#10095; {/* Стрелка вправо */}
            </button>

            <picture>
              <source srcSet={images[lightboxIndex].webp} type="image/webp" />
              <img
                src={images[lightboxIndex].jpg}
                alt={images[lightboxIndex].alt}
                className={styles.lightboxImage}
              />
            </picture>

            <div className={styles.lightboxCounter}>
              {lightboxIndex + 1} / {images.length}
            </div>
          </div>
        </div>
      )}
    </section>
  )
}
