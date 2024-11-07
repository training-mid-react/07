// import { defineConfig } from 'vite'
import { defineConfig } from 'vitest/config'

import react from '@vitejs/plugin-react-swc'



// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      '@': '/src'
    }
  },
  test: { // Configuración de Vitest
    globals: true,
    environment: 'jsdom',
    setupFiles: './tests/setupTests.ts', // Archivo para configuraciones globales de pruebas (opcional)
  },
})
