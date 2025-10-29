// src/components/PriceSection.tsx
import PriceCard from './PriceCard'

export default function PriceSection() {
  return (
    <>
      <h2 className="section-title">Домашний Праздник</h2>
      <PriceCard
        icon="home"
        title="Дед Мороз и Снегурочка"
        items={[
          { name: 'Экспресс поздравление (≈ 15 минут)', price: '3 500 ₽' },
          { name: 'Новогодняя программа (≈ 30 минут)', price: '4 500 ₽' },
          {
            name: 'Новогодняя сказка — полная программа (≈ 60 минут)',
            price: '6 000 ₽',
          },
        ]}
      />

      <h2 className="section-title">Для классов</h2>
      <PriceCard
        icon="school"
        title="Базовая программа"
        items={[
          { name: 'Дед Мороз и Снегурочка (≈ 60 мин)', price: '8 000 ₽' },
          { name: 'Колонка JBL + микрофоны Shure', price: '2 000 ₽' },
        ]}
        total="10 000 ₽"
      />
      <PriceCard
        icon="school"
        title="С азотным шоу"
        items={[
          { name: 'Дед Мороз и Снегурочка (≈ 60 мин)', price: '8 000 ₽' },
          { name: 'Азотное шоу (≈ 45 мин)', price: '8 000 ₽' },
          { name: 'Колонка JBL + микрофоны', price: '2 000 ₽' },
        ]}
        total="18 000 ₽"
      />

      <h2 className="section-title">Во дворе</h2>
      <PriceCard
        icon="yard"
        title="До 12 детей"
        items={[
          { name: 'Дед Мороз и Снегурочка (≈ 60 мин)', price: '6 000 ₽' },
          { name: 'Колонка JBL + микрофоны', price: '2 000 ₽' },
        ]}
        total="8 000 ₽"
      />
      <PriceCard
        icon="yard"
        title="Массовый (от 15 детей)"
        items={[
          { name: '≈ 30 минут', price: '8 000 ₽' },
          { name: '≈ 45 минут', price: '9 000 ₽' },
          { name: '≈ 60 минут', price: '10 000 ₽' },
          { name: 'Колонка JBL + микрофоны', price: 'включено' },
        ]}
      />
    </>
  )
}
