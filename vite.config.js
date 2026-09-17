import react from '@vitejs/plugin-react';
import { defineConfig } from 'vite';

export default defineConfig({
  plugins: [react()],
  preview: {
    host: '0.0.0.0', // Exposes the server to container network interfaces
    port: process.env.PORT ? parseInt(process.env.PORT) : 80, // Binds to process.env.PORT if available, else 80
    strictPort: false, // Prevents Vite from throwing an error locally if Port 80 is occupied
    allowedHosts: true // Allows incoming proxy requests from Laravel Cloud / Nginx
  },
});