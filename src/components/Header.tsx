// src/components/Header.tsx — ФИНАЛЬНАЯ ВЕРСИЯ С ФИКСИРОВАННЫМИ ПОЗИЦИЯМИ ПАРАЛЛАКСА И УМЕНЬШЕННЫМ ХЕДЕРОМ

import { useState, useEffect, useRef } from 'react'
import logo from '../assets/mu_logo.svg'
import blueBall from '../assets/header/blue-ball.png'
import blueBallBlurred from '../assets/header/blue-ball_blurred.png'
import goldenBall from '../assets/header/golden-ball.png'
import pinkBall from '../assets/header/pink-ball.png'
import subtractBig from '../assets/header/Subtract_big.png'
// import subtractMedium from '../assets/header/Subtract_medium.png'
import subtractSmall from '../assets/header/Subtract_small.png'
import clouds from '../assets/header/clouds.svg'

// --- 🛑 СТАТИЧЕСКИЕ ПОЗИЦИИ ДЛЯ ВСЕХ ШАРОВ ---
// Top: вертикальная позиция в % (10-25% - верхняя зона; 65-85% - нижняя зона)
// Left: горизонтальная позиция в %
// Size: размер в px
// MaxShift: максимальный сдвиг в px при параллаксе

const STATIC_PARALLAX_POSITIONS = {
  blueBalls: [
    { left: 10, top: 15, size: 70, maxShiftX: 8, maxShiftY: 7 }, // Лево, верх
    { left: 75, top: 75, size: 50, maxShiftX: 6, maxShiftY: 5 }, // Право, низ
    { left: 40, top: 10, size: 85, maxShiftX: 9, maxShiftY: 8 }, // Центр, верх
  ],
  blurredBlueBalls: [
    { left: 90, top: 20, size: 100, maxShiftX: 4, maxShiftY: 3 }, // Право, верх (фоновый, медленный)
    { left: 25, top: 80, size: 90, maxShiftX: 5, maxShiftY: 4 }, // Лево, низ (фоновый, медленный)
  ],
  goldenBalls: [
    { left: 85, top: 70, size: 60, maxShiftX: 7, maxShiftY: 6 }, // Право, низ
  ],
  pinkBalls: [
    { left: 20, top: 78, size: 45, maxShiftX: 8, maxShiftY: 7 }, // Лево, низ
    { left: 60, top: 18, size: 75, maxShiftX: 6, maxShiftY: 5 }, // Право, верх
  ],
  // Крупные формы (для более слабого эффекта)
  subtractsBig: [
    { left: 5, top: 68, size: 160, maxShiftX: 4, maxShiftY: 3 }, // Лево, низ
  ],
  subtractsMedium: [], // Удалили
  subtractsSmall: [
    { left: 95, top: 85, size: 70, maxShiftX: 5, maxShiftY: 4 }, // Крайний право, низ
  ],
}
// --- КОНЕЦ СТАТИЧЕСКИХ ПОЗИЦИЙ ---

export default function Header() {
  const [mousePercent, setMousePercent] = useState({ x: 0.5, y: 0.5 })
  // ИЗМЕНЕНИЕ 1: Добавляем | null к типу и устанавливаем начальное значение null
  const requestRef = useRef<number | null>(null)
  // ИЗМЕНЕНИЕ 2: Добавляем | null к типу и устанавливаем начальное значение null
  const previousTimeRef = useRef<number | null>(null)
  const headerRef = useRef<HTMLDivElement>(null)

  // Плавное обновление позиции мыши
  useEffect(() => {
    let currentX = 0.5
    let currentY = 0.5
    let targetX = 0.5
    let targetY = 0.5
    const easing = 0.08

    const handleMouseMove = (e: MouseEvent) => {
      if (!headerRef.current) return
      const rect = headerRef.current.getBoundingClientRect()
      targetX = (e.clientX - rect.left) / rect.width
      targetY = (e.clientY - rect.top) / rect.height
      targetX = Math.max(0, Math.min(1, targetX))
      targetY = Math.max(0, Math.min(1, targetY))
    }

    const animate = (time: number) => {
      if (previousTimeRef.current !== undefined) {
        currentX += (targetX - currentX) * easing
        currentY += (targetY - currentY) * easing
        setMousePercent({ x: currentX, y: currentY })
      }
      previousTimeRef.current = time
      requestRef.current = requestAnimationFrame(animate)
    }

    window.addEventListener('mousemove', handleMouseMove)
    requestRef.current = requestAnimationFrame(animate)

    return () => {
      window.removeEventListener('mousemove', handleMouseMove)
      if (requestRef.current) cancelAnimationFrame(requestRef.current)
    }
  }, [])

  // 🛑 Инициализация из статических данных
  const [parallaxPositions] = useState(STATIC_PARALLAX_POSITIONS)

  const {
    blueBalls,
    blurredBlueBalls,
    goldenBalls,
    pinkBalls,
    subtractsBig,
    // subtractsMedium,
    subtractsSmall,
  } = parallaxPositions

  const renderParallaxElement = (
    src: string,
    positions: (typeof STATIC_PARALLAX_POSITIONS)[keyof typeof STATIC_PARALLAX_POSITIONS], // Указываем тип для статических позиций
    opacity = 0.7
  ) => {
    return positions.map((pos, i) => {
      // Логика параллакса остаётся прежней
      const shiftX = (0.5 - mousePercent.x) * pos.maxShiftX * 2
      const shiftY = (0.5 - mousePercent.y) * pos.maxShiftY * 2
      return (
        <img
          key={i}
          src={src}
          alt=""
          className="parallax-element"
          style={{
            position: 'absolute',
            // Используем статические left/top/size
            left: `${pos.left}%`,
            top: `${pos.top}%`,
            width: `${pos.size}px`,
            height: 'auto',
            opacity,
            // Применяем параллакс сдвиг
            transform: `translate(${shiftX}px, ${shiftY}px)`,
            transition: 'none',
            pointerEvents: 'none',
            filter: 'drop-shadow(0 4px 12px rgba(0,0,0,0.1))',
            zIndex: 1,
          }}
        />
      )
    })
  }

  return (
    <>
      {/* ФОН НА ВСЮ ШИРИНУ */}
      <div className="header-full-bg" ref={headerRef}>
        <div className="header-gradient"></div>
        <div className="header-background">
          {renderParallaxElement(blueBall, blueBalls)}
          {renderParallaxElement(blueBallBlurred, blurredBlueBalls, 0.5)}
          {renderParallaxElement(goldenBall, goldenBalls)}
          {renderParallaxElement(pinkBall, pinkBalls)}

          {/* Сниженная прозрачность для крупных элементов */}
          {renderParallaxElement(subtractBig, subtractsBig, 0.4)}
          {/* subtractsMedium теперь пустой массив, рендер не произойдёт */}
          {renderParallaxElement(subtractSmall, subtractsSmall, 0.4)}
        </div>
        <img src={clouds} alt="" className="header-clouds-full" />
      </div>

      {/* КОНТЕНТ В КОНТЕЙНЕРЕ */}
      <header className="header-enhanced container">
        <div className="header-content">
          <img
            src={logo}
            alt="Мир Улыбок — Детские праздники"
            className="logo"
          />
          <div className="header-text">
            <h1 className="logoTitle">Мир Улыбок</h1>
            <p>Одни из лучших аниматоров Оренбурга</p>{' '}
            {/* Укороченный параграф */}
          </div>
        </div>
      </header>
    </>
  )
}
