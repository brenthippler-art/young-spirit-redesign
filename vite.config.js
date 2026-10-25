import react from '@vitejs/plugin-react'
import { defineConfig } from 'vite'
import { imagetools } from 'vite-imagetools'

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(),
    imagetools({
      defaultDirectives: () =>
        new URLSearchParams({ w: '1400', h: '1400', fit: 'inside', format: 'webp', quality: '75' }),
    }),
  ],
})