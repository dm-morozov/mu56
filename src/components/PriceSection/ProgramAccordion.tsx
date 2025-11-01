// src/components/PriceSection/ProgramAccordion.tsx
import { useState } from 'react'
import ProgramGallery from './ProgramGallery'
import styles from './ProgramAccordion.module.css'

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

type Program = RawProgram & { icon: React.FC }

type Props = { type: 'home' | 'class' | 'yard'; subtitle: string }

export default function ProgramAccordion({ type, subtitle }: Props) {
  const [openIndex, setOpenIndex] = useState<number | null>(null)
  const rawData = programs[type] || []

  const data: Program[] = rawData.map((prog) => ({
    ...prog,
    icon: type === 'home' ? HomeIcon : type === 'class' ? SchoolIcon : YardIcon,
  }))

  return (
    <div className={styles.accordionWrapper}>
      <div className={styles.accordionBg}></div>

      <p className="section-subtitle">{subtitle}</p>

      <div className={styles.accordion}>
        {data.map((prog, i) => (
          <div key={i} className={styles.accordionItem}>
            <div
              className={styles.programCard}
              onClick={() => setOpenIndex(openIndex === i ? null : i)}
            >
              <div className={styles.programHeader}>
                <div className={styles.programTitle}>
                  <prog.icon />
                  {prog.title}
                </div>
                <div className={styles.programPrice}>{prog.price}</div>
              </div>
              <div className={styles.programDuration}>{prog.duration}</div>

              {prog.items.length > 0 && (
                <div className={styles.programItems}>
                  {prog.items.map((item, idx) => (
                    <div key={idx} className={styles.programItem}>
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

              <button className={styles.toggleButton}>
                {openIndex === i ? 'Скрыть' : 'Подробности'}
                <ArrowDown className={openIndex === i ? styles.rotated : ''} />
              </button>
            </div>

            {openIndex === i && (
              <div className={styles.accordionContent}>
                {prog.gallery && prog.gallery.length > 0 && (
                  <ProgramGallery images={prog.gallery} />
                )}

                <ul className={styles.descriptionList}>
                  {prog.description.map((d, idx) => (
                    <li key={idx}>
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
                        <div key={idx} className={styles.addonCard}>
                          <img
                            src={addon.image}
                            alt={`Доп. шоу: ${addon.name} — новогодний праздник в Оренбурге`}
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
                    onClick={() => setOpenIndex(null)}
                  >
                    Скрыть
                    <ArrowDown className={styles.rotated} />
                  </button>
                </div>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  )
}
