// src/components/PriceSection.tsx
import { useState } from 'react'
import ProgramAccordion from './ProgramAccordion'

export default function PriceSection() {
  const [filter, setFilter] = useState<'all' | 'home' | 'class' | 'yard'>('all')

  return (
    <>
      <h2 className="section-title">Какой праздник вас интересует?</h2>
      {/* Переключатель фильтров */}
      <div className="filter-tabs">
        <button
          className={`filter-tab ${filter === 'all' ? 'active' : ''}`}
          onClick={() => setFilter('all')}
        >
          Все
        </button>
        <button
          className={`filter-tab ${filter === 'home' ? 'active' : ''}`}
          onClick={() => setFilter('home')}
        >
          Домашний
        </button>
        <button
          className={`filter-tab ${filter === 'class' ? 'active' : ''}`}
          onClick={() => setFilter('class')}
        >
          Школа / Сад
        </button>
        <button
          className={`filter-tab ${filter === 'yard' ? 'active' : ''}`}
          onClick={() => setFilter('yard')}
        >
          На улице
        </button>
      </div>

      {/* Условный рендеринг разделов */}
      {(filter === 'all' || filter === 'home') && (
        <>
          <h3 className="section-title">Домашний Праздник</h3>
          <ProgramAccordion
            type="home"
            subtitle="С Дедом Морозом и Снегурочкой"
          />
        </>
      )}

      {(filter === 'all' || filter === 'class') && (
        <>
          <h3 className="section-title">
            Для классов и <br />
            детских садов
          </h3>
          <ProgramAccordion
            type="class"
            subtitle="Дедушка Мороз и Снегурочка"
          />
        </>
      )}

      {(filter === 'all' || filter === 'yard') && (
        <>
          <h3 className="section-title">На улице</h3>
          <ProgramAccordion
            type="yard"
            subtitle="Дедушка Мороз со Снегурочкой"
          />
        </>
      )}
    </>
  )
}
