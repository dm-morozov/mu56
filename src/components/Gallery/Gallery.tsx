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

// === ПРЕВЬЮ: МОБИЛЬНЫЕ (400x400) ===
import mobile1webp from '../../assets/gallery/preview/mobile/1.webp'
import mobile1jpg from '../../assets/gallery/preview/mobile/1.jpg'
import mobile2webp from '../../assets/gallery/preview/mobile/2.webp'
import mobile2jpg from '../../assets/gallery/preview/mobile/2.jpg'
import mobile3webp from '../../assets/gallery/preview/mobile/3.webp'
import mobile3jpg from '../../assets/gallery/preview/mobile/3.jpg'
import mobile4webp from '../../assets/gallery/preview/mobile/4.webp'
import mobile4jpg from '../../assets/gallery/preview/mobile/4.jpg'
import mobile5webp from '../../assets/gallery/preview/mobile/5.webp'
import mobile5jpg from '../../assets/gallery/preview/mobile/5.jpg'
import mobile6webp from '../../assets/gallery/preview/mobile/6.webp'
import mobile6jpg from '../../assets/gallery/preview/mobile/6.jpg'

// === ПРЕВЬЮ: ПК (600x600) ===
import pc1webp from '../../assets/gallery/preview/PC/1.webp'
import pc1jpg from '../../assets/gallery/preview/PC/1.jpg'
import pc2webp from '../../assets/gallery/preview/PC/2.webp'
import pc2jpg from '../../assets/gallery/preview/PC/2.jpg'
import pc3webp from '../../assets/gallery/preview/PC/3.webp'
import pc3jpg from '../../assets/gallery/preview/PC/3.jpg'
import pc4webp from '../../assets/gallery/preview/PC/4.webp'
import pc4jpg from '../../assets/gallery/preview/PC/4.jpg'
import pc5webp from '../../assets/gallery/preview/PC/5.webp'
import pc5jpg from '../../assets/gallery/preview/PC/5.jpg'
import pc6webp from '../../assets/gallery/preview/PC/6.webp'
import pc6jpg from '../../assets/gallery/preview/PC/6.jpg'

interface Img {
  mobileWebp: string
  mobileJpg: string
  pcWebp: string
  pcJpg: string
  fullWebp: string
  fullJpg: string
  alt: string
}

const images: Img[] = [
  {
    mobileWebp: mobile1webp,
    mobileJpg: mobile1jpg,
    pcWebp: pc1webp,
    pcJpg: pc1jpg,
    fullWebp: img1webp,
    fullJpg: img1jpg,
    alt: 'Дед Мороз и Снегурочка в роскошных костюмах…',
  },
  {
    mobileWebp: mobile2webp,
    mobileJpg: mobile2jpg,
    pcWebp: pc2webp,
    pcJpg: pc2jpg,
    fullWebp: img2webp,
    fullJpg: img2jpg,
    alt: 'Актеры Дед Мороз и Снегурочка проводят хоровод…',
  },
  {
    mobileWebp: mobile3webp,
    mobileJpg: mobile3jpg,
    pcWebp: pc3webp,
    pcJpg: pc3jpg,
    fullWebp: img3webp,
    fullJpg: img3jpg,
    alt: 'Вручение подарков детям…',
  },
  {
    mobileWebp: mobile4webp,
    mobileJpg: mobile4jpg,
    pcWebp: pc4webp,
    pcJpg: pc4jpg,
    fullWebp: img4webp,
    fullJpg: img4jpg,
    alt: 'Крупный план: качественные костюмы…',
  },
  {
    mobileWebp: mobile5webp,
    mobileJpg: mobile5jpg,
    pcWebp: pc5webp,
    pcJpg: pc5jpg,
    fullWebp: img5webp,
    fullJpg: img5jpg,
    alt: 'Дед Мороз и Снегурочка общаются с ребенком…',
  },
  {
    mobileWebp: mobile6webp,
    mobileJpg: mobile6jpg,
    pcWebp: pc6webp,
    pcJpg: pc6jpg,
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
              {/* Мобильный: webp */}
              <source
                media="(max-width: 768px)"
                srcSet={img.mobileWebp}
                type="image/webp"
              />
              {/* Мобильный: jpg fallback */}
              <source
                media="(max-width: 768px)"
                srcSet={img.mobileJpg}
                type="image/jpeg"
              />

              {/* ПК: webp */}
              <source
                media="(min-width: 769px)"
                srcSet={img.pcWebp}
                type="image/webp"
              />
              {/* ПК: jpg fallback */}
              <source
                media="(min-width: 769px)"
                srcSet={img.pcJpg}
                type="image/jpeg"
              />

              {/* Финальный fallback (браузеры без <picture>) */}
              <img
                src={img.mobileJpg}
                alt={img.alt}
                loading="lazy"
                width="400"
                height="400"
                className={styles.thumbnail}
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
              ❮
            </button>
            <button
              className={`${styles.lightboxNav} ${styles.next}`}
              onClick={nextImage}
            >
              ❯
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
