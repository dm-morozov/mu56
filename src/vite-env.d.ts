// src/vite-env.d.ts
/// <reference types="vite/client" />

// Поддержка импорта изображений с query-параметрами (vite-imagetools)
declare module '*?*'

declare module '*?w=*&format=*' {
  const src: string
  export default src
}

declare module '*?w=*&quality=*' {
  const src: string
  export default src
}
