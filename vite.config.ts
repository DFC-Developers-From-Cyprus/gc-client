// vite.config.ts
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
// Вот он – первый плагин от Tailwind для Vite:
import tailwindcss from '@tailwindcss/vite';

export default defineConfig({
  plugins: [
    react(),
    tailwindcss(), // ← добавили сюда
  ],
});
