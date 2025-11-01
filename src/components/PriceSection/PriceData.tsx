// src/components/PriceSection/PriceData.tsx
import React from 'react'

export const HomeIcon = () => (
  <svg viewBox="0 0 24 24" width="20" height="20">
    <path
      d="M3 13h2l-1 7h16l-1-7h2L12 5l-9 8zm5-2v7h8v-7l-4-3.5L8 11z"
      fill="currentColor"
    />
  </svg>
)

export const SchoolIcon = () => (
  <svg viewBox="0 0 24 24" width="20" height="20">
    <path
      d="M5 13.18v4L12 21l7-3.82v-4L12 17l-7-3.82zM12 3L1 9l11 6 9-4.91V17h2V9L12 3z"
      fill="currentColor"
    />
  </svg>
)

export const YardIcon = () => (
  <svg viewBox="0 0 24 24" width="20" height="20">
    <path
      d="M20 6h-4V4c0-1.1-.9-2-2-2h-4c-1.1 0-2 .9-2 2v2H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V8c0-1.1-.9-2-2-2zM10 4h4v2h-4V4zm10 16H4V8h16v12z"
      fill="currentColor"
    />
  </svg>
)

export const ArrowDown: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
  <svg
    viewBox="0 0 24 24"
    width="18"
    height="18"
    fill="currentColor"
    {...props}
  >
    <path d="M7 10l5 5 5-5z" />
  </svg>
)

export const CheckIcon = () => (
  <svg viewBox="0 0 24 24" width="16" height="16" fill="currentColor">
    <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z" />
  </svg>
)

export const SnowflakeIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="16"
    height="16"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M12 2v20M2 12h20M5.64 5.64l12.72 12.72M18.36 5.64L5.64 18.36M12 5.64l-6.36 6.36M12 18.36l6.36-6.36M5.64 12l6.36-6.36M18.36 12l-6.36-6.36" />
  </svg>
)
