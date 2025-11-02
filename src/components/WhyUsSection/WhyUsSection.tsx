// src/components/WhyUsSection/WhyUsSection.tsx
import { useState, useEffect } from 'react'
import {
  FaUsers,
  FaCalendarCheck,
  FaStar,
  FaMagic,
  FaHeart,
  FaMapMarkerAlt,
  FaChevronDown,
} from 'react-icons/fa'

import styles from './WhyUsSection.module.css'

// 📸 Замени на свои фото из assets/gallery/
import img2 from '../../assets/gallery/2.jpg'
// import img3 from '../../assets/gallery/3.jpg'
import img4 from '../../assets/gallery/4.jpg'
import img5 from '../../assets/gallery/5.jpg'
import img6 from '../../assets/gallery/6.jpg'

const sliderImages = [
  { src: img2, alt: 'Веселый хоровод с детьми' },
  // { src: img3, alt: 'Дед Мороз и Снегурочка на празднике - Вручение подарков' },
  { src: img4, alt: 'Костюмы в деталях' },
  { src: img5, alt: 'Индивидуальный подход' },
  { src: img6, alt: 'Праздник в любом месте' },
]

type Advantage = {
  icon: React.FC<{ className?: string }>
  title: string
  desc: string
  priority?: boolean
}

export default function WhyUsSection() {
  const [currentSlide, setCurrentSlide] = useState(0)
  const [showAll, setShowAll] = useState(false)

  // Автослайдер
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % sliderImages.length)
    }, 4000)
    return () => clearInterval(interval)
  }, [])

  const advantages: Advantage[] = [
    {
      icon: FaUsers,
      title: 'Любая возрастная группа',
      desc: 'От 1 года до 16 лет — подстраиваемся под каждого ребенка!',
      priority: true,
    },
    {
      icon: FaCalendarCheck,
      title: '17 лет опыта',
      desc: 'Радую Оренбург с 2008 года — проверенное волшебство!',
      priority: true,
    },
    {
      icon: FaStar,
      title: '10 000+ праздников',
      desc: 'Один из лучших аниматоров города — тысячи счастливых семей!',
      priority: true,
    },
    {
      icon: FaMagic,
      title: 'Любое мероприятие',
      desc: 'День Рождения, Новый год, выпускной, корпоратив — организуем идеально!',
    },
    {
      icon: FaHeart,
      title: 'Индивидуальный подход',
      desc: 'Уникальная программа под вашего ребенка — без шаблонов!',
    },
    {
      icon: FaMapMarkerAlt,
      title: 'Выезд везде',
      desc: 'Дом, школа, улица, за город — адаптируемся под любое место!',
    },
  ]

  const visibleAdvantages = showAll
    ? advantages
    : advantages.filter((a) => a.priority)

  const nextSlide = () =>
    setCurrentSlide((prev) => (prev + 1) % sliderImages.length)
  const prevSlide = () =>
    setCurrentSlide(
      (prev) => (prev - 1 + sliderImages.length) % sliderImages.length
    )

  return (
    <section className={styles.whyUsSection}>
      {/* Фон */}
      <div className={styles.whyUsBg}></div>

      <div className="container">
        <h2 className={styles.title}>
          Почему <span className={styles.gradientText}>Мир Улыбок</span>
          <span className={styles.questionMark}>?</span>
        </h2>

        {/* Карточки */}
        <div className={styles.advantagesGrid}>
          {visibleAdvantages.map((adv, i) => {
            const Icon = adv.icon
            return (
              <div
                key={i}
                className={styles.advantageCard}
                style={{ animationDelay: `${i * 0.1}s` }}
              >
                <div className={styles.advantageIcon}>
                  <Icon />
                </div>
                <div>
                  <h3>{adv.title}</h3>
                  <p>{adv.desc}</p>
                </div>
              </div>
            )
          })}
        </div>

        {/* Кнопка "Показать ещё" — только на мобиле */}
        {!showAll && advantages.some((a) => !a.priority) && (
          <div className={styles.showMoreWrapper}>
            <button
              className={styles.showMoreBtn}
              onClick={() => setShowAll(true)}
            >
              Показать ещё <FaChevronDown className={styles.rotateIcon} />
            </button>
          </div>
        )}

        {/* Слайдер */}
        <div className={styles.slider}>
          <div className={styles.sliderWrapper}>
            <div className={styles.sliderImage}>
              <img
                src={sliderImages[currentSlide].src}
                alt={sliderImages[currentSlide].alt}
                loading="lazy"
              />
            </div>
            <div className={styles.sliderNav}>
              <button
                onClick={prevSlide}
                className={`${styles.navBtn} ${styles.prev}`}
              >
                ❮
              </button>
              <div className={styles.sliderDots}>
                {sliderImages.map((_, i) => (
                  <button
                    key={i}
                    className={
                      i === currentSlide
                        ? `${styles.dot} ${styles.active}`
                        : styles.dot
                    }
                    onClick={() => setCurrentSlide(i)}
                  />
                ))}
              </div>
              <button
                onClick={nextSlide}
                className={`${styles.navBtn} ${styles.next}`}
              >
                ❯
              </button>
            </div>
            <div className={styles.sliderCounter}>
              {currentSlide + 1} / {sliderImages.length}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
