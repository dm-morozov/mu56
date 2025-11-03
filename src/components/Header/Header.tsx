import { useState, useEffect, useRef } from 'react'
import logo from '../../assets/mu_logo.svg'
import blueBall from '../../assets/header/blue-ball.png'
import blueBallBlurred from '../../assets/header/blue-ball_blurred.png'
import goldenBall from '../../assets/header/golden-ball.png'
import pinkBall from '../../assets/header/pink-ball.png'
import subtractBig from '../../assets/header/Subtract_big.png'
import subtractSmall from '../../assets/header/Subtract_small.png'
import clouds from '../../assets/header/clouds.svg'
import styles from './Header.module.css'
import Snowflakes from '../Snowflakes/Snowflakes'

// --- СТАТИЧЕСКИЕ ПОЗИЦИИ ДЛЯ ВСЕХ ШАРОВ ---
const STATIC_PARALLAX_POSITIONS = {
  blueBalls: [
    { left: 10, top: 15, size: 70, maxShiftX: 8, maxShiftY: 7 },
    { left: 75, top: 75, size: 50, maxShiftX: 6, maxShiftY: 5 },
    { left: 40, top: 10, size: 85, maxShiftX: 9, maxShiftY: 8 },
  ],
  blurredBlueBalls: [
    { left: 90, top: 20, size: 100, maxShiftX: 4, maxShiftY: 3 },
    { left: 25, top: 80, size: 90, maxShiftX: 5, maxShiftY: 4 },
  ],
  goldenBalls: [{ left: 85, top: 70, size: 60, maxShiftX: 7, maxShiftY: 6 }],
  pinkBalls: [
    { left: 20, top: 78, size: 45, maxShiftX: 8, maxShiftY: 7 },
    { left: 60, top: 18, size: 75, maxShiftX: 6, maxShiftY: 5 },
  ],
  subtractsBig: [{ left: 5, top: 68, size: 160, maxShiftX: 4, maxShiftY: 3 }],
  subtractsSmall: [{ left: 95, top: 85, size: 70, maxShiftX: 5, maxShiftY: 4 }],
}

export default function Header() {
  const [mousePercent, setMousePercent] = useState({ x: 0.5, y: 0.5 })
  const requestRef = useRef<number | null>(null)
  const previousTimeRef = useRef<number | null>(null)
  const headerRef = useRef<HTMLDivElement>(null)

  // Плавное обновление позиции мыши (логика без изменений)
  useEffect(() => {
    // ... (логика handleMouseMove и animate) ...
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

  const [parallaxPositions] = useState(STATIC_PARALLAX_POSITIONS)

  const {
    blueBalls,
    blurredBlueBalls,
    goldenBalls,
    pinkBalls,
    subtractsBig,
    subtractsSmall,
  } = parallaxPositions

  const renderParallaxElement = (
    src: string,
    positions: (typeof STATIC_PARALLAX_POSITIONS)[keyof typeof STATIC_PARALLAX_POSITIONS],
    opacity = 0.7
  ) => {
    return positions.map((pos, i) => {
      const shiftX = (0.5 - mousePercent.x) * pos.maxShiftX * 2
      const shiftY = (0.5 - mousePercent.y) * pos.maxShiftY * 2
      return (
        <img
          key={i}
          src={src}
          alt=""
          // 🛑 ИСПОЛЬЗУЕМ КЛАСС ИЗ МОДУЛЯ
          className={styles.parallaxElement}
          style={{
            position: 'absolute',
            left: `${pos.left}%`,
            top: `${pos.top}%`,
            width: `${pos.size}px`,
            height: 'auto',
            opacity,
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
      {/* 🛑 ИСПОЛЬЗУЕМ styles.headerFullBg */}
      <div className={styles.headerFullBg} ref={headerRef}>
        {/* 🛑 ИСПОЛЬЗУЕМ styles.headerGradient */}
        <div className={styles.headerGradient}></div>
        {/* 🛑 ИСПОЛЬЗУЕМ styles.headerBackground */}
        <div className={styles.headerBackground}>
          {renderParallaxElement(blueBall, blueBalls)}
          {renderParallaxElement(blueBallBlurred, blurredBlueBalls, 0.5)}
          {renderParallaxElement(goldenBall, goldenBalls)}
          {renderParallaxElement(pinkBall, pinkBalls)}
          {renderParallaxElement(subtractBig, subtractsBig, 0.4)}
          {renderParallaxElement(subtractSmall, subtractsSmall, 0.4)}
        </div>

        {/* 🛑 СНЕЖИНКИ — БЕЛЫЕ, НЕЖНЫЕ, С ВЕТРОМ */}
        {/* СНЕЖИНКИ — отдельный компонент */}
        <Snowflakes
          density={1.2}
          minDuration={10}
          maxDuration={18}
          maxSnowflakes={35}
          wind={true}
        />

        {/* 🛑 ИСПОЛЬЗУЕМ styles.headerCloudsFull */}
        <img src={clouds} alt="" className={styles.headerCloudsFull} />
      </div>

      {/* КОНТЕНТ В КОНТЕЙНЕРЕ */}
      {/* 🛑 ИСПОЛЬЗУЕМ styles.headerEnhanced */}
      <header className={`${styles.headerEnhanced} container`}>
        {/* 🛑 ИСПОЛЬЗУЕМ styles.headerContent */}
        <div className={styles.headerContent}>
          <img
            src={logo}
            alt="Мир Улыбок — Детские праздники"
            // 🛑 ИСПОЛЬЗУЕМ styles.logo
            className={styles.logo}
          />
          {/* 🛑 ИСПОЛЬЗУЕМ styles.headerText */}
          <div className={styles.headerText}>
            {/* 🛑 ИСПОЛЬЗУЕМ styles.logoTitle */}
            <h1 className={styles.logoTitle}>Мир Улыбок</h1>
            <p>Одни из лучших аниматоров Оренбурга</p>
          </div>
        </div>
      </header>
    </>
  )
}
