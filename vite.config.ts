import { dirname, resolve } from 'node:path'
import { fileURLToPath } from 'node:url'
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

const __dirname = dirname(fileURLToPath(import.meta.url))

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    origin: 'http://localhost:5173',
  },
  build: {
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'index.html'),
        // Страницы проеков
        uniqueChronicle: resolve(__dirname, 'projects/1/index.html'),
        friendship: resolve(__dirname, 'projects/2/index.html'),
        openPlay: resolve(__dirname, 'projects/3/index.html'),
        mastership: resolve(__dirname, 'projects/4/index.html'),
        nikolay: resolve(__dirname, 'projects/5/index.html'),
        twoInWorld: resolve(__dirname, 'projects/6/index.html'),
        esenin: resolve(__dirname, 'projects/7/index.html'),
        amplitude: resolve(__dirname, 'projects/8/index.html'),
        // Страницы услуг
        OT: resolve(__dirname, 'services/1/index.html'),
        events: resolve(__dirname, 'services/2/index.html'),
        design: resolve(__dirname, 'services/3/index.html'),
        content: resolve(__dirname, 'services/4/index.html'),
        masterClasses: resolve(__dirname, 'services/5/index.html'),
        lamp: resolve(__dirname, 'services/6/index.html'),
        smm: resolve(__dirname, 'services/7/index.html'),
      },
    },
  },
  // base: 'https://khruartem.github.io/otkter',
  //assetsInclude: ['*/*.svg']
})
