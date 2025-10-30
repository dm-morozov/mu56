// src/components/ProgramGallery.tsx

import { useState } from 'react'

type Image = { src: string; alt: string }

type ProgramGalleryProps = {
  images: Image[]
}

export default function ProgramGallery({ images }: ProgramGalleryProps) {
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null)

  const openLightbox = (index: number) => setLightboxIndex(index)
  const closeLightbox = () => setLightboxIndex(null)

  const prevImage = (e: React.MouseEvent) => {
    e.stopPropagation() // 🛑 Важно, чтобы не закрыть лайтбокс
    if (lightboxIndex !== null) {
      setLightboxIndex(
        lightboxIndex === 0 ? images.length - 1 : lightboxIndex - 1
      )
    }
  }

  const nextImage = (e: React.MouseEvent) => {
    e.stopPropagation() // 🛑 Важно, чтобы не закрыть лайтбокс
    if (lightboxIndex !== null) {
      setLightboxIndex(
        lightboxIndex === images.length - 1 ? 0 : lightboxIndex + 1
      )
    }
  }

  if (!images || images.length === 0) return null // Не рендерим, если нет данных

  return (
    <div className="program-gallery-wrapper">
      <h3>Тематические фото</h3>
      <div className="program-gallery-grid">
        {images.map((img, i) => (
          <div
            key={i}
            className="program-gallery-item"
            onClick={() => openLightbox(i)}
          >
            <img src={img.src} alt={img.alt} loading="lazy" />
          </div>
        ))}
      </div>

      {/* === ЛАЙТБОКС (Копируем из Gallery.tsx) === */}
      {lightboxIndex !== null && (
        <div className="lightbox-overlay" onClick={closeLightbox}>
          <div
            className="lightbox-content"
            onClick={(e) => e.stopPropagation()}
          >
            <button className="lightbox-close" onClick={closeLightbox}>
              ×
            </button>
            {images.length > 1 && (
              <>
                <button className="lightbox-nav prev" onClick={prevImage}>
                  ❮
                </button>
                <button className="lightbox-nav next" onClick={nextImage}>
                  ❯
                </button>
              </>
            )}

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
    </div>
  )
}
