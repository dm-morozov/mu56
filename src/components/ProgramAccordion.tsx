// src/components/ProgramAccordion.tsx
import { useState } from 'react'

type Program = {
  title: string
  duration: string
  price: string
  items: { name: string; price: string }[]
  total?: string
  description: string[]
}

const programs: { [key: string]: Program[] } = {
  home: [
    {
      title: 'Экспресс-поздравление',
      duration: '≈ 15 минут',
      price: '3 500 ₽',
      items: [],
      description: [
        'Приветствие от Деда Мороза и Снегурочки',
        'Игра "Елочка, гори!"',
        'Короткий хоровод',
        'Вручение подарков и фото',
        'Прощание с пожеланиями',
      ],
    },
    {
      title: 'Новогодняя программа',
      duration: '≈ 30 минут',
      price: '4 500 ₽',
      items: [],
      description: [
        'Яркое приветствие и знакомство',
        'Игра "Да / Нет"',
        'Наряжаем Деда Мороза',
        'Паровозик или снежки',
        'Хоровод + танец',
        'Загадки и "Заморожу"',
        'Вручение подарков',
      ],
    },
    {
      title: 'Новогодняя сказка',
      duration: '≈ 60 минут',
      price: '6 000 ₽',
      items: [],
      description: [
        'Театрализованное приветствие',
        'Игра "Елочка гори!" + "Да / Нет"',
        'Наряжаем ДМ и СН',
        'Паровозик / Снежки',
        'Хоровод + танец "Xi Shua Shua"',
        'Игра "Пройди под сосулькой"',
        'Загадки + "Заморожу"',
        'Песенная угадайка',
        'Собери снеговика',
        'Стихотворения, подарки, фото',
      ],
    },
  ],
  class: [
    {
      title: 'Базовая программа',
      duration: '≈ 60 минут',
      price: '10 000 ₽',
      items: [
        { name: 'Дед Мороз и Снегурочка', price: '8 000 ₽' },
        { name: 'Колонка JBL + микрофоны Shure', price: '2 000 ₽' },
      ],
      total: '10 000 ₽',
      description: [
        'Полная новогодняя программа с Дедом Морозом и Снегурочкой',
        'Активные игры, хоровод, танцы, загадки',
        'Вручение подарков и общее фото',
        'Мощный звук на всё мероприятие',
      ],
    },
    {
      title: 'С азотным шоу',
      duration: '≈ 105 минут',
      price: '18 000 ₽',
      items: [
        { name: 'Дед Мороз и Снегурочка', price: '8 000 ₽' },
        { name: 'Азотное шоу + мороженое', price: '8 000 ₽' },
        { name: 'Колонка JBL + микрофоны', price: '2 000 ₽' },
      ],
      total: '18 000 ₽',
      description: [
        'Полная программа + азотное шоу',
        'Заморозка, взрывы, дым, попкорн',
        'Дети готовят мороженое',
        'Яркий финал с туманом',
      ],
    },
  ],
  yard: [
    {
      title: 'До 12 детей',
      duration: '≈ 60 минут',
      price: '8 000 ₽',
      items: [
        { name: 'Дед Мороз и Снегурочка', price: '6 000 ₽' },
        { name: 'Колонка JBL + микрофоны', price: '2 000 ₽' },
      ],
      total: '8 000 ₽',
      description: [
        'Уличная программа с Дедом Морозом',
        'Игры на свежем воздухе',
        'Хоровод, снежки, фото',
        'Звук на всю площадку',
      ],
    },
    {
      title: 'Массовый (от 15 детей)',
      duration: '30–60 минут',
      price: '8 000–10 000 ₽',
      items: [
        { name: '≈ 30 минут', price: '8 000 ₽' },
        { name: '≈ 45 минут', price: '9 000 ₽' },
        { name: '≈ 60 минут', price: '10 000 ₽' },
        { name: 'Колонка JBL + микрофоны', price: 'включено' },
      ],
      description: [
        'Масштабный уличный праздник',
        'Активные игры для большой группы',
        'Хороводы, конкурсы, флешмобы',
        'Звук на всю площадку',
      ],
    },
  ],
}

type Props = { type: 'home' | 'class' | 'yard' }

export default function ProgramAccordion({ type }: Props) {
  const [openIndex, setOpenIndex] = useState<number | null>(null)
  const data = programs[type]

  return (
    <div className="accordion">
      {data.map((prog, i) => (
        <div key={i} className="accordion-item">
          {/* === ВСЕГДА ВИДНО === */}
          <div className="program-card">
            <div className="program-header">
              <h3 className="program-title">{prog.title}</h3>
              <p className="program-duration">{prog.duration}</p>
            </div>

            {prog.items.length > 0 && (
              <div className="program-items">
                {prog.items.map((item, idx) => (
                  <div key={idx} className="program-item">
                    <span className="item-name">{item.name}</span>
                    <span className="item-price">{item.price}</span>
                  </div>
                ))}
                {prog.total && (
                  <div className="program-total">Итого: {prog.total}</div>
                )}
              </div>
            )}

            {/* === КНОПКА ОТКРЫТИЯ === */}
            <button
              className="toggle-button"
              onClick={(e) => {
                e.stopPropagation()
                setOpenIndex(openIndex === i ? null : i)
              }}
            >
              Подробности
              <svg
                className={`arrow ${openIndex === i ? 'rotated' : ''}`}
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
              >
                <path d="M6 9l6 6 6-6" strokeWidth="2" strokeLinecap="round" />
              </svg>
            </button>
          </div>

          {/* === ТОЛЬКО ОПИСАНИЕ В АККОРДЕОНЕ === */}
          {openIndex === i && (
            <div className="accordion-content">
              <ul>
                {prog.description.map((d, idx) => (
                  <li key={idx}>{d}</li>
                ))}
              </ul>
            </div>
          )}
        </div>
      ))}
    </div>
  )
}
