// vite.config.ts — ГОТОВО!
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import * as path from 'path'

export default defineConfig({
  base: '/', // или '/твой-репозиторий/'
  plugins: [react()],
  assetsInclude: ['**/*.pdf', '**/*.svg', '**/*.jpg', '**/*.png', '**/*.webp'],

  build: {
    rollupOptions: {
      output: {
        assetFileNames: (assetInfo) => {
          const fileName = assetInfo.names?.[0] || ''
          if (!fileName) return 'assets/[hash][extname]'

          const ext = path.extname(fileName).slice(1)

          if (ext === 'css') return 'assets/[name].[hash][extname]'
          if (
            [
              'png',
              'jpg',
              'jpeg',
              'webp',
              'svg',
              'woff2',
              'woff',
              'ttf',
              'pdf',
            ].includes(ext)
          ) {
            return 'assets/[name].[hash][extname]'
          }
          return 'assets/[name].[hash][extname]'
        },
      },
    },
  },

  server: {
    headers: {
      'Cache-Control': 'public, max-age=0, must-revalidate',
    },
  },
})
