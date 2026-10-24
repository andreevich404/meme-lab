import vue from '@vitejs/plugin-vue'
import tailwindcss from '@tailwindcss/vite'
import { defineConfig } from 'vite'

// base './' — работает на GitHub Pages под любым именем репозитория
export default defineConfig({
  base: './',
  plugins: [vue(), tailwindcss()],
})
