// src/components/PriceSection/PriceSection.tsx
import { useState, useCallback } from 'react'
import ProgramAccordion from './ProgramAccordion'
import styles from './PriceSection.module.css'
import sharedStyles from '../../SharedStyles.module.css'
import PriceNote from '../PriceNote/PriceNote'

export default function PriceSection() {
  const [filter, setFilter] = useState<'all' | 'home' | 'class' | 'yard'>('all')

  // Мемоизируем обработчик для предотвращения лишних ререндеров
  const handleFilterChange = useCallback((newFilter: typeof filter) => {
    setFilter(newFilter)
  }, [])

  return (
    <section
      id="prices"
      className={styles.priceSection}
      aria-label="Цены на детские праздники с Дедом Морозом и Снегурочкой"
    >
      <div className={styles.sectionBg} />

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
            onClick={() => handleFilterChange('home')}
            type="button"
            aria-pressed={filter === 'home'}
          >
            Домашний
          </button>
          <button
            className={`${styles.filterTab} ${
              filter === 'class' ? styles.active : ''
            }`}
            onClick={() => handleFilterChange('class')}
            type="button"
            aria-pressed={filter === 'class'}
          >
            Школа / Сад
          </button>
          <button
            className={`${styles.filterTab} ${
              filter === 'yard' ? styles.active : ''
            }`}
            onClick={() => handleFilterChange('yard')}
            type="button"
            aria-pressed={filter === 'yard'}
          >
            На улице
          </button>
          <button
            className={`${styles.filterTab} ${
              filter === 'all' ? styles.active : ''
            }`}
            onClick={() => handleFilterChange('all')}
            type="button"
            aria-pressed={filter === 'all'}
          >
            Все
          </button>
        </div>

        {(filter === 'all' || filter === 'home') && (
          <div key="home" className={styles.programSection} data-type="home">
            <h3 className={sharedStyles.sectionTitle}>Домашний Праздник</h3>
            <ProgramAccordion
              type="home"
              subtitle="С Дедом Морозом и Снегурочкой"
            />
          </div>
        )}

        {(filter === 'all' || filter === 'class') && (
          <div key="class" className={styles.programSection} data-type="class">
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
          <div key="yard" className={styles.programSection} data-type="yard">
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
