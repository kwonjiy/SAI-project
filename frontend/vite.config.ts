import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  //백엔드 프록시 (vite.config.ts)
  server: { proxy: { '/api': 'http://localhost:8080' } }
})