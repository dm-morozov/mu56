// src/types/global.d.ts
interface Window {
  ym?: (counterId: number, method: string, event: string, params?: any) => void
}
