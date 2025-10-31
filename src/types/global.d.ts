// src/types/global.d.ts
interface Window {
  ym?: (
    counterId: number,
    method: 'init' | 'reachGoal' | 'hit' | string,
    event?: string,
    params?: Record<string, unknown>
  ) => void
}
