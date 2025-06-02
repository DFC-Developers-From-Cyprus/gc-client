// vite.config.ts
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
// Вот он – первый плагин от Tailwind для Vite:
import tailwindcss from '@tailwindcss/vite';
// Для абсолютных импортов
import { fileURLToPath } from 'url';
import { dirname } from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

export default defineConfig({
  plugins: [
    react(),
    tailwindcss(), // ← добавили сюда
  ],
  resolve: {
    alias: {
      // '@' указывает на папку src для удобных абсолютных импортов
      '@': `${__dirname}/src`,
    },
  },
});
