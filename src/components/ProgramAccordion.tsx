// src/components/ProgramAccordion.tsx
import { useState } from 'react'

// === SVG ИКОНКИ ===
const HomeIcon = () => (
  <svg viewBox="0 0 24 24" width="20" height="20">
    <path
      d="M3 13h2l-1 7h16l-1-7h2L12 5l-9 8zm5-2v7h8v-7l-4-3.5L8 11z"
      fill="currentColor"
    />
  </svg>
)

const SchoolIcon = () => (
  <svg viewBox="0 0 24 24" width="20" height="20">
    <path
      d="M5 13.18v4L12 21l7-3.82v-4L12 17l-7-3.82zM12 3L1 9l11 6 9-4.91V17h2V9L12 3z"
      fill="currentColor"
    />
  </svg>
)

const YardIcon = () => (
  <svg viewBox="0 0 24 24" width="20" height="20">
    <path
      d="M20 6h-4V4c0-1.1-.9-2-2-2h-4c-1.1 0-2 .9-2 2v2H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V8c0-1.1-.9-2-2-2zM10 4h4v2h-4V4zm10 16H4V8h16v12z"
      fill="currentColor"
    />
  </svg>
)

const ArrowDown = () => (
  <svg viewBox="0 0 24 24" width="18" height="18" fill="currentColor">
    <path d="M7 10l5 5 5-5z" />
  </svg>
)

const CheckIcon = () => (
  <svg viewBox="0 0 24 24" width="16" height="16" fill="currentColor">
    <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z" />
  </svg>
)

// === ДАННЫЕ ПРОГРАММ ===
type Program = {
  title: string
  duration: string
  price: string
  items: { name: string; price: string }[]
  total?: string
  description: string[]
  icon: React.FC
}

const programs: { [key: string]: Program[] } = {
  home: [
    {
      title: 'Экспресс-поздравление',
      duration: '≈ 15 минут',
      price: '3 500 ₽',
      items: [],
      total: undefined,
      description: [
        'Приветствие от Деда Мороза и Снегурочки',
        'Игра "Елочка, гори!"',
        'Короткий хоровод',
        'Вручение подарков и фото',
        'Прощание с пожеланиями',
      ],
      icon: HomeIcon,
    },
    {
      title: 'Новогодняя программа',
      duration: '≈ 30 минут',
      price: '4 500 ₽',
      items: [],
      total: undefined,
      description: [
        'Яркое приветствие и знакомство',
        'Игра "Да / Нет"',
        'Наряжаем Деда Мороза',
        'Паровозик или снежки',
        'Хоровод + танец',
        'Загадки и "Заморожу"',
        'Вручение подарков',
      ],
      icon: HomeIcon,
    },
    {
      title: 'Новогодняя сказка',
      duration: '≈ 60 минут',
      price: '6 000 ₽',
      items: [],
      total: undefined,
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
      icon: HomeIcon,
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
        'Полная новогодняя программа',
        'Активные игры, хоровод, танцы, загадки',
        'Вручение подарков и общее фото',
        'Мощный звук на всё мероприятие',
      ],
      icon: SchoolIcon,
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
      icon: SchoolIcon,
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
        'Уличная программа',
        'Игры на свежем воздухе',
        'Хоровод, снежки, фото',
        'Звук на всю площадку',
      ],
      icon: YardIcon,
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
      total: undefined,
      description: [
        'Масштабный уличный праздник',
        'Активные игры для большой группы',
        'Хороводы, конкурсы, флешмобы',
        'Звук на всю площадку',
      ],
      icon: YardIcon,
    },
  ],
}

// === КОМПОНЕНТ ===
type Props = { type: 'home' | 'class' | 'yard'; subtitle: string }

export default function ProgramAccordion({ type, subtitle }: Props) {
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  // Защита от ошибки
  const data = programs[type] || []

  return (
    <>
      <p className="section-subtitle">{subtitle}</p>
      <div className="accordion">
        {data.map((prog, i) => (
          <div key={i} className="accordion-item">
            <div
              className="program-card"
              onClick={() => setOpenIndex(openIndex === i ? null : i)}
            >
              <div className="program-header">
                <div className="program-title">
                  <prog.icon />
                  {prog.title}
                </div>
                <div className="program-price">{prog.price}</div>
              </div>
              <div className="program-duration">{prog.duration}</div>

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

              <button className="toggle-button">
                {openIndex === i ? 'Скрыть' : 'Подробности'}
                <ArrowDown className={openIndex === i ? 'rotated' : ''} />
              </button>
            </div>

            {openIndex === i && (
              <div className="accordion-content">
                <ul>
                  {prog.description.map((d, idx) => (
                    <li key={idx}>
                      <CheckIcon />
                      {d}
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>
        ))}
      </div>
    </>
  )
}
