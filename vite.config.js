import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

export default defineConfig({
  plugins: [vue()],
  test: {
    globals: true,      // Para usar `describe`, `it`, etc. sin importar
    environment: 'jsdom' // Simula navegador
  }
})