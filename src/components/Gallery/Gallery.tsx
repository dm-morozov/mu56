// src/components/Gallery/Gallery.tsx
import { useState } from 'react'
import styles from './Gallery.module.css' // Импорт модульных стилей
// Импорты изображений не меняются, но пути должны быть относительно App.tsx
// или настроены в сборщике (если пути были корректны, оставляем как есть)
import img1 from '../../assets/gallery/1.jpg'
import img2 from '../../assets/gallery/2.jpg'
import img3 from '../../assets/gallery/3.jpg'
import img4 from '../../assets/gallery/4.jpg'
import img5 from '../../assets/gallery/5.jpg'
import img6 from '../../assets/gallery/6.jpg'

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
    // Применяем модульные классы, оставляем 'container' как глобальный
    <section id="gallery" className={`container ${styles.gallery}`}>
      <h2 className={styles.title}>Наши костюмы в лицах</h2>
      <div className={styles.grid}>
        {images.map((img, i) => (
          <div key={i} className={styles.item} onClick={() => openLightbox(i)}>
            <img src={img.src} alt={img.alt} loading="lazy" />
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

            <img
              src={images[lightboxIndex].src}
              alt={images[lightboxIndex].alt}
              className={styles.lightboxImage}
            />

            <div className={styles.lightboxCounter}>
              {lightboxIndex + 1} / {images.length}
            </div>
          </div>
        </div>
      )}
    </section>
  )
}
