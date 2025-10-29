import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  // Указываем базовый путь для GitHub Pages
  base: '/mu56/',
  plugins: [react()],
  assetsInclude: ['**/*.pdf', '**/*.svg', '**/*.jpg', '**/*.png'],
})
