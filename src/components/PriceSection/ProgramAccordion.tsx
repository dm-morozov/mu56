// src/components/PriceSection/ProgramAccordion.tsx
import { useState, useMemo } from 'react'
import ProgramGallery from './ProgramGallery'
import styles from './ProgramAccordion.module.css'
import sharedStyles from '../../SharedStyles.module.css'

// ДАННЫЕ — из .ts
import { programs, type Program as RawProgram } from './PriceData'

// КОМПОНЕНТЫ — из .tsx (ОБЯЗАТЕЛЬНО .tsx!)
import {
  HomeIcon,
  SchoolIcon,
  YardIcon,
  ArrowDown,
  CheckIcon,
} from './PriceData.tsx'

type Program = RawProgram & { icon: React.FC; id: string }

type Props = { type: 'home' | 'class' | 'yard'; subtitle: string }

export default function ProgramAccordion({ type, subtitle }: Props) {
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  // Мемоизируем данные с иконками и стабильными ID
  const data: Program[] = useMemo(() => {
    const rawData = programs[type] || []
    const iconMap = {
      home: HomeIcon,
      class: SchoolIcon,
      yard: YardIcon,
    }

    return rawData.map((prog, idx) => ({
      ...prog,
      icon: iconMap[type],
      id: `${type}-${idx}-${prog.title.slice(0, 10)}`, // Стабильный ID
    }))
  }, [type])

  const handleToggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index)
  }

  return (
    <div className={styles.accordionWrapper}>
      <div className={styles.sectionDivider}></div>
      <p className={sharedStyles.sectionSubtitle}>{subtitle}</p>

      <div className={styles.accordion}>
        {data.map((prog, i) => {
          const isOpen = openIndex === i
          const Icon = prog.icon

          return (
            <div key={prog.id} className={styles.accordionItem}>
              <div
                className={styles.programCard}
                onClick={() => handleToggle(i)}
              >
                <div className={styles.programHeader}>
                  <div className={styles.programTitle}>
                    <Icon />
                    {prog.title}
                  </div>
                  <div className={styles.programPrice}>{prog.price}</div>
                </div>
                <div className={styles.programDuration}>{prog.duration}</div>

                {prog.items.length > 0 && (
                  <div className={styles.programItems}>
                    {prog.items.map((item, idx) => (
                      <div
                        key={`${prog.id}-item-${idx}`}
                        className={styles.programItem}
                      >
                        <span className={styles.itemName}>{item.name}</span>
                        <span className={styles.itemPrice}>{item.price}</span>
                      </div>
                    ))}
                    {prog.total && (
                      <div className={styles.programTotal}>
                        {prog.total.length > 15
                          ? prog.total
                          : `Итого: ${prog.total}`}
                      </div>
                    )}
                  </div>
                )}

                <button
                  className={styles.toggleButton}
                  type="button"
                  aria-expanded={isOpen}
                >
                  {isOpen ? 'Скрыть' : 'Подробности'}
                  <ArrowDown className={isOpen ? styles.rotated : ''} />
                </button>
              </div>

              {isOpen && (
                <div className={styles.accordionContent}>
                  {prog.gallery && prog.gallery.length > 0 && (
                    <ProgramGallery images={prog.gallery} />
                  )}

                  <ul className={styles.descriptionList}>
                    {prog.description.map((d, idx) => (
                      <li key={`${prog.id}-desc-${idx}`}>
                        <CheckIcon />
                        {d}
                      </li>
                    ))}
                  </ul>

                  {prog.addons && prog.addons.length > 0 && (
                    <div className={styles.addonsSection}>
                      <h3 className={styles.addonsTitle}>
                        Доп. шоу от Деда Мороза и Снегурочки (они же ведущие!):
                      </h3>
                      <div className={styles.addonsGrid}>
                        {prog.addons.map((addon, idx) => (
                          <div
                            key={`${prog.id}-addon-${idx}`}
                            className={styles.addonCard}
                          >
                            <img
                              src={addon.image}
                              alt={`Доп. шоу: ${addon.name} — новогодний праздник в Оренбурге`}
                              loading="lazy"
                            />
                            <div className={styles.addonInfo}>
                              <strong>{addon.name}</strong>
                              <div className={styles.addonMeta}>
                                {addon.duration} — {addon.price}
                              </div>
                              <p className={styles.addonDesc}>
                                <span className={styles.addonHosts}>
                                  Дед Мороз и Снегурочка — ваши ведущие!
                                </span>{' '}
                                {addon.description.split('! ')[1] ||
                                  addon.description}
                              </p>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}

                  <div className={styles.bottomToggle}>
                    <button
                      className={`${styles.toggleButton} ${styles.bottom}`}
                      onClick={(e) => {
                        e.stopPropagation()
                        setOpenIndex(null)
                      }}
                      type="button"
                    >
                      Скрыть
                      <ArrowDown className={styles.rotated} />
                    </button>
                  </div>
                </div>
              )}
            </div>
          )
        })}
      </div>
    </div>
  )
}
