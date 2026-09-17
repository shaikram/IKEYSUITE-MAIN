import react from '@vitejs/plugin-react'
import { defineConfig } from 'vite'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  preview: {
    host: '0.0.0.0',
    port: process.env.PORT ? parseInt(process.env.PORT) : 4173, // Reads $PORT on Linux/Cloud, falls back to 80 locally
    strictPort: true, // Forces Vite to fail if port 80/PORT is unavailable instead of changing to 3000
    allowedHosts: true // Allows proxy requests from Nginx/hosting domain
  },
})
