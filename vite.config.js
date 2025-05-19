import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  base: '/mathieu/',
  plugins: [react()],
  server: {
    hmr: {
      overlay: true, // Zeigt Fehler-Overlay im Browser
    },
  },
});