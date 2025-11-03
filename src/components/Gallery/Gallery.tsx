// src/components/Gallery/Gallery.tsx
import { useState } from 'react'
import styles from './Gallery.module.css'

// === ПОЛНЫЕ ИЗОБРАЖЕНИЯ (для лайтбокса) ===
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

// === ПРЕВЬЮ (для галереи) ===
import preview1webp from '../../assets/gallery/preview/1.webp'
import preview2webp from '../../assets/gallery/preview/2.webp'
import preview3webp from '../../assets/gallery/preview/3.webp'
import preview4webp from '../../assets/gallery/preview/4.webp'
import preview5webp from '../../assets/gallery/preview/5.webp'
import preview6webp from '../../assets/gallery/preview/6.webp'
import preview1jpg from '../../assets/gallery/preview/1.jpg'
import preview2jpg from '../../assets/gallery/preview/2.jpg'
import preview3jpg from '../../assets/gallery/preview/3.jpg'
import preview4jpg from '../../assets/gallery/preview/4.jpg'
import preview5jpg from '../../assets/gallery/preview/5.jpg'
import preview6jpg from '../../assets/gallery/preview/6.jpg'

interface Img {
  previewWebp: string
  previewJpg: string
  fullWebp: string
  fullJpg: string
  alt: string
}

const images: Img[] = [
  {
    previewWebp: preview1webp,
    previewJpg: preview1jpg,
    fullWebp: img1webp,
    fullJpg: img1jpg,
    alt: 'Дед Мороз и Снегурочка в роскошных костюмах…',
  },
  {
    previewWebp: preview2webp,
    previewJpg: preview2jpg,
    fullWebp: img2webp,
    fullJpg: img2jpg,
    alt: 'Актеры Дед Мороз и Снегурочка проводят хоровод…',
  },
  {
    previewWebp: preview3webp,
    previewJpg: preview3jpg,
    fullWebp: img3webp,
    fullJpg: img3jpg,
    alt: 'Вручение подарков детям…',
  },
  {
    previewWebp: preview4webp,
    previewJpg: preview4jpg,
    fullWebp: img4webp,
    fullJpg: img4jpg,
    alt: 'Крупный план: качественные костюмы…',
  },
  {
    previewWebp: preview5webp,
    previewJpg: preview5jpg,
    fullWebp: img5webp,
    fullJpg: img5jpg,
    alt: 'Дед Мороз и Снегурочка общаются с ребенком…',
  },
  {
    previewWebp: preview6webp,
    previewJpg: preview6jpg,
    fullWebp: img6webp,
    fullJpg: img6jpg,
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
    <section id="gallery" className={`container ${styles.gallery}`}>
      <h2 className={styles.title}>
        Наши костюмы <span className={styles.gradientText}>в лицах</span>
      </h2>

      {/* === ГАЛЕРЕЯ (превью) === */}
      <div className={styles.grid}>
        {images.map((img, i) => (
          <div key={i} className={styles.item} onClick={() => openLightbox(i)}>
            <picture>
              <source srcSet={img.previewWebp} type="image/webp" />
              <img
                src={img.previewJpg}
                alt={img.alt}
                loading="lazy"
                className={styles.thumbnail}
                width="300"
                height="300"
              />
            </picture>
          </div>
        ))}
      </div>

      {/* === ЛАЙТБОКС (полные) === */}
      {lightboxIndex !== null && (
        <div className={styles.lightboxOverlay} onClick={closeLightbox}>
          <div
            className={styles.lightboxContent}
            onClick={(e) => e.stopPropagation()}
          >
            <button className={styles.lightboxClose} onClick={closeLightbox}>
              ×
            </button>
            <button
              className={`${styles.lightboxNav} ${styles.prev}`}
              onClick={prevImage}
            >
              ←
            </button>
            <button
              className={`${styles.lightboxNav} ${styles.next}`}
              onClick={nextImage}
            >
              →
            </button>

            <picture>
              <source
                srcSet={images[lightboxIndex].fullWebp}
                type="image/webp"
              />
              <img
                src={images[lightboxIndex].fullJpg}
                alt={images[lightboxIndex].alt}
                className={styles.lightboxImage}
                loading="lazy"
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
