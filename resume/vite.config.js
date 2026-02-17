import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  base: '/Alexander_Kane/resume/',
  build: {
    outDir: '../docs/resume',
    emptyOutDir: true,
  },
})
