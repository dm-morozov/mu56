// src/components/PriceSection/ProgramGallery.tsx
import { useState } from 'react'
import styles from './ProgramGallery.module.css'

type Image = { src: string; alt: string }

type ProgramGalleryProps = {
  images: Image[]
}

export default function ProgramGallery({ images }: ProgramGalleryProps) {
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null)

  const openLightbox = (index: number) => setLightboxIndex(index)
  const closeLightbox = () => setLightboxIndex(null)

  const prevImage = (e: React.MouseEvent) => {
    e.stopPropagation()
    if (lightboxIndex !== null) {
      setLightboxIndex(
        lightboxIndex === 0 ? images.length - 1 : lightboxIndex - 1
      )
    }
  }

  const nextImage = (e: React.MouseEvent) => {
    e.stopPropagation()
    if (lightboxIndex !== null) {
      setLightboxIndex(
        lightboxIndex === images.length - 1 ? 0 : lightboxIndex + 1
      )
    }
  }

  if (!images || images.length === 0) return null

  return (
    <div className={styles['program-gallery-wrapper']}>
      <h3 className={styles['gallery-title']}>🎄 Тематические фото</h3>
      <div className={styles['program-gallery-grid']}>
        {images.map((img, i) => (
          <div
            key={i}
            className={styles['program-gallery-item']}
            onClick={() => openLightbox(i)}
          >
            <img src={img.src} alt={img.alt} loading="lazy" />
          </div>
        ))}
      </div>

      {/* Лайтбокс */}
      {lightboxIndex !== null && (
        <div className={styles['lightbox-overlay']} onClick={closeLightbox}>
          <div
            className={styles['lightbox-content']}
            onClick={(e) => e.stopPropagation()}
          >
            <button
              className={styles['lightbox-close']}
              onClick={closeLightbox}
            >
              ×
            </button>
            {images.length > 1 && (
              <>
                <button
                  className={`${styles['lightbox-nav']} ${styles.prev}`}
                  onClick={prevImage}
                >
                  ❮
                </button>
                <button
                  className={`${styles['lightbox-nav']} ${styles.next}`}
                  onClick={nextImage}
                >
                  ❯
                </button>
              </>
            )}

            <img
              src={images[lightboxIndex].src}
              alt={images[lightboxIndex].alt}
              className={styles['lightbox-image']}
            />

            {/* Счётчик + подпись */}
            <div className={styles['lightbox-counter']}>
              {images[lightboxIndex].alt} • {lightboxIndex + 1} /{' '}
              {images.length}
            </div>
          </div>
        </div>
      )}
    </div>
  )
}
