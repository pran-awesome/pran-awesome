import { resolve } from 'path'
import { defineConfig } from 'vite'

export default defineConfig({
  root: '.',
  build: {
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'index.html'),
        landing: resolve(__dirname, 'templates/landing.html'),
        portfolio: resolve(__dirname, 'templates/portfolio.html'),
        social: resolve(__dirname, 'templates/social.html'),
        app: resolve(__dirname, 'templates/app-shell.html'),
      },
    },
  },
})
