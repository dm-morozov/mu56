// src/components/Snowflakes/Snowflakes.tsx
import { useEffect, useRef, useLayoutEffect } from 'react'
import styles from './Snowflakes.module.css'

interface SnowflakesProps {
  density?: number
  minDuration?: number
  maxDuration?: number
  minSize?: number
  maxSize?: number
  colors?: string[]
  wind?: boolean
  maxSnowflakes?: number
  autoAdjustDuration?: boolean
}

export default function Snowflakes({
  density = 1.5,
  minDuration = 8,
  maxDuration = 20,
  minSize = 0.7,
  maxSize = 1.6,
  colors = ['#ffffff', '#e0f7ff', '#b3e5ff', '#87cefa'],
  wind = true,
  maxSnowflakes = 40,
  autoAdjustDuration = true,
}: SnowflakesProps = {}) {
  const containerRef = useRef<HTMLDivElement>(null)
  const frameRef = useRef<number | null>(null)
  const lastSpawnRef = useRef(0)
  const snowflakesCountRef = useRef(0)
  const heightRef = useRef(0)

  // === ИЗМЕРЯЕМ ВЫСОТУ КОНТЕЙНЕРА ===
  useLayoutEffect(() => {
    const updateHeight = () => {
      if (containerRef.current) {
        heightRef.current = containerRef.current.offsetHeight
      }
    }

    updateHeight()
    const observer = new ResizeObserver(updateHeight)
    if (containerRef.current) observer.observe(containerRef.current)

    return () => observer.disconnect()
  }, [])

  useEffect(() => {
    const container = containerRef.current
    if (!container || heightRef.current === 0) return

    const icons = ['❄', '❅', '❆', '✻', '✼', '❉']

    const spawn = (timestamp: number) => {
      if (!container) return

      const elapsed = timestamp - lastSpawnRef.current
      const interval = 1000 / density

      if (elapsed > interval && snowflakesCountRef.current < maxSnowflakes) {
        const flake = document.createElement('div')
        flake.className = styles.snowflake
        flake.innerHTML = icons[Math.floor(Math.random() * icons.length)]
        flake.style.color = colors[Math.floor(Math.random() * colors.length)]
        flake.style.left = `${Math.random() * 100}%`
        flake.style.fontSize = `${
          Math.random() * (maxSize - minSize) + minSize
        }em`
        flake.style.opacity = (Math.random() * 0.4 + 0.6).toFixed(2)

        // === АДАПТИВНАЯ ДЛИТЕЛЬНОСТЬ ПО ВЫСОТЕ ===
        let baseDuration =
          Math.random() * (maxDuration - minDuration) + minDuration
        if (autoAdjustDuration && heightRef.current > 0) {
          const baseHeight = 400 // как в хедере
          const heightFactor = heightRef.current / baseHeight
          baseDuration *= Math.max(0.8, Math.min(3, heightFactor))
        }

        // Устанавливаем кастомные свойства
        flake.style.setProperty('--duration', `${baseDuration}s`)
        flake.style.setProperty(
          '--fall-distance',
          `${heightRef.current + 100}px`
        ) // +100px буфер

        if (wind) {
          const windShift = (Math.random() - 0.5) * 80
          flake.style.setProperty('--wind-shift', `${windShift}px`)
        }

        container.appendChild(flake)
        snowflakesCountRef.current++

        // Удаляем после анимации
        setTimeout(() => {
          if (flake.parentNode) {
            flake.remove()
            snowflakesCountRef.current--
          }
        }, baseDuration * 1000 + 1000)

        lastSpawnRef.current = timestamp
      }

      frameRef.current = requestAnimationFrame(spawn)
    }

    frameRef.current = requestAnimationFrame(spawn)

    return () => {
      if (frameRef.current) cancelAnimationFrame(frameRef.current)
    }
  }, [
    density,
    minDuration,
    maxDuration,
    minSize,
    maxSize,
    colors,
    wind,
    maxSnowflakes,
    autoAdjustDuration,
  ])

  return <div ref={containerRef} className={styles.snowflakesContainer} />
}
