import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// Vite Configuration
export default defineConfig({
  plugins: [react()],
  server: {
    port: 5173, // Ensure this port is available
    open: true, // Opens the browser automatically
    watch: {
      usePolling: true, // Fix for WebSocket issues in some environments
    },
    proxy: {
      // Optional: add if dealing with API calls
      '/api': {
        target: 'http://localhost:5000',
        changeOrigin: true,
      },
    },
  },
});
