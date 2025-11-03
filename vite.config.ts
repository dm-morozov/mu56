// vite.config.ts
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import * as path from 'path'

export default defineConfig({
  base: '/',
  plugins: [react()],

  build: {
    rollupOptions: {
      output: {
        assetFileNames: (assetInfo) => {
          const fileName = assetInfo.names?.[0] || ''
          if (!fileName) return 'assets/[hash][extname]'

          const ext = path.extname(fileName).toLowerCase()

          // Для статики — иммутабельные имена с хешем
          if (/\.(png|jpg|jpeg|webp|svg|woff2|woff|ttf|pdf)$/.test(ext)) {
            return 'assets/[name].[hash][extname]'
          }
          if (ext === '.css') {
            return 'assets/[name].[hash][extname]'
          }
          return 'assets/[name].[hash][extname]'
        },
        chunkFileNames: 'assets/[name].[hash].js',
        entryFileNames: 'assets/[name].[hash].js',
      },
    },
  },

  // КЛЮЧЕВОЕ: только для preview (продакшен-симуляция)
  preview: {
    headers: {
      'Cache-Control': 'public, max-age=31536000, immutable',
    },
  },
})
