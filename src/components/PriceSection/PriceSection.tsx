// src/components/PriceSection/PriceSection.tsx
import { useState, useEffect, useRef } from 'react'
import ProgramAccordion from './ProgramAccordion'
import styles from './PriceSection.module.css'
import sharedStyles from '../../SharedStyles.module.css'
import PriceNote from '../PriceNote/PriceNote'

export default function PriceSection() {
  const [filter, setFilter] = useState<'all' | 'home' | 'class' | 'yard'>('all')
  const snowflakesRef = useRef<HTMLDivElement>(null)

  // === СНЕЖИНКИ — СРАЗУ В СЕКЦИИ, БЕЗ ЗАДЕРЖКИ ===
  useEffect(() => {
    if (!snowflakesRef.current) return

    const container = document.createElement('div')
    container.className = styles.snowflakesContainer
    snowflakesRef.current.appendChild(container)

    const snowflakeIcons = ['❄', '❅', '❆', '✻', '✼', '❉']
    const snowflakeColors = ['#ffffff', '#e0f7ff', '#b3e5ff', '#87cefa']

    const createSnowflake = () => {
      const flake = document.createElement('div')
      flake.className = styles.snowflake

      flake.innerHTML =
        snowflakeIcons[Math.floor(Math.random() * snowflakeIcons.length)]
      flake.style.color =
        snowflakeColors[Math.floor(Math.random() * snowflakeColors.length)]
      flake.style.left = `${Math.random() * 100}%`

      // СКОРОСТЬ: 6–12 сек
      flake.style.animationDuration = `${Math.random() * 25 + 50}s`

      // ПРОЗРАЧНОСТЬ: 0.6–1.0
      flake.style.opacity = (Math.random() * 0.4 + 0.6).toFixed(2)

      // РАЗМЕР: 0.7–1.6em
      const size = Math.random() * 0.9 + 0.7
      flake.style.fontSize = `${size}em`

      // КЛЮЧ: СЛУЧАЙНЫЙ СТАРТ ПО ВЫСОТЕ (0% – 30%)
      const startPos = Math.random() * 30 // от 0% до 30% высоты секции
      flake.style.top = `-${startPos}%`

      container.appendChild(flake)

      const duration = parseFloat(flake.style.animationDuration) * 1000 + 1000
      setTimeout(() => flake.remove(), duration)
    }

    const interval = setInterval(createSnowflake, Math.random() * 400 + 300)
    createSnowflake()

    return () => {
      clearInterval(interval)
      container.remove()
    }
  }, [])

  return (
    <section
      id="prices"
      className={styles.priceSection}
      aria-label="Цены на детские праздники с Дедом Морозом и Снегурочкой"
    >
      <div className={styles.sectionBg}></div>
      <div ref={snowflakesRef} className={styles.snowflakesWrapper}></div>

      <div className={styles.containerPrice}>
        <h2 className={styles.sectionTitle}>
          Какой праздник{' '}
          <span className={styles.gradientText}>вас интересует</span>
          <span className={styles.questionMark}>?</span>
        </h2>

        <div className={styles.filterTabs}>
          <button
            className={`${styles.filterTab} ${
              filter === 'home' ? styles.active : ''
            }`}
            onClick={() => setFilter('home')}
          >
            Домашний
          </button>
          <button
            className={`${styles.filterTab} ${
              filter === 'class' ? styles.active : ''
            }`}
            onClick={() => setFilter('class')}
          >
            Школа / Сад
          </button>
          <button
            className={`${styles.filterTab} ${
              filter === 'yard' ? styles.active : ''
            }`}
            onClick={() => setFilter('yard')}
          >
            На улице
          </button>
          <button
            className={`${styles.filterTab} ${
              filter === 'all' ? styles.active : ''
            }`}
            onClick={() => setFilter('all')}
          >
            Все
          </button>
        </div>

        {(filter === 'all' || filter === 'home') && (
          <div className={styles.programSection} data-type="home">
            <h3 className={sharedStyles.sectionTitle}>Домашний Праздник</h3>
            <ProgramAccordion
              type="home"
              subtitle="С Дедом Морозом и Снегурочкой"
            />
          </div>
        )}

        {(filter === 'all' || filter === 'class') && (
          <div className={styles.programSection} data-type="class">
            <h3 className={sharedStyles.sectionTitle}>
              Для классов и детских садов
            </h3>
            <ProgramAccordion
              type="class"
              subtitle="Дедушка Мороз и Снегурочка"
            />
          </div>
        )}

        {(filter === 'all' || filter === 'yard') && (
          <div className={styles.programSection} data-type="yard">
            <h3 className={sharedStyles.sectionTitle}>На улице</h3>
            <ProgramAccordion
              type="yard"
              subtitle="Дедушка Мороз со Снегурочкой"
            />
          </div>
        )}
        <PriceNote />
      </div>
    </section>
  )
}
