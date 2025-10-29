// src/components/PriceCard.tsx
type PriceItem = { name: string; price: string }
type PriceCardProps = {
  title: string
  items: PriceItem[]
  total?: string
  icon: 'home' | 'school' | 'yard'
}

const icons = {
  home: (
    <svg className="card-icon" viewBox="0 0 24 24">
      <path d="M3 13h2l-1 7h16l-1-7h2L12 5l-9 8zm5-2v7h8v-7l-4-3.5L8 11z" />
    </svg>
  ),
  school: (
    <svg className="card-icon" viewBox="0 0 24 24">
      <path d="M5 13.18v4L12 21l7-3.82v-4L12 17l-7-3.82zM12 3L1 9l11 6 9-4.91V17h2V9L12 3z" />
    </svg>
  ),
  yard: (
    <svg className="card-icon" viewBox="0 0 24 24">
      <path d="M20 6h-4V4c0-1.1-.9-2-2-2h-4c-1.1 0-2 .9-2 2v2H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V8c0-1.1-.9-2-2-2zM10 4h4v2h-4V4zm10 16H4V8h16v12z" />
    </svg>
  ),
}

export default function PriceCard({
  title,
  items,
  total,
  icon,
}: PriceCardProps) {
  return (
    <div className="price-card">
      <div className="card-header">
        {icons[icon]}
        <h3 className="card-title">{title}</h3>
      </div>
      <div className="items">
        {items.map((item, i) => (
          <div key={i} className="item">
            <span className="item-name">{item.name}</span>
            <span className="price">{item.price}</span>
          </div>
        ))}
      </div>
      {total && <div className="total">Итого: {total}</div>}
    </div>
  )
}
