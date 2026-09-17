import react from '@vitejs/plugin-react';
import { defineConfig } from 'vite';

export default defineConfig({
  plugins: [react()],
  preview: {
    host: '0.0.0.0',
    port: 80,
    strictPort: false,
    allowedHosts: true, // Crucial: Allows proxy requests from Nginx / Laravel Cloud health checks
  },
});