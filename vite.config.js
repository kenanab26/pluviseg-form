import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  base: '/PluviSeg-IoT-Site/',
  plugins: [react()],
})
