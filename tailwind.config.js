// tailwind.config.js
import { defineConfig } from 'tailwindcss';

export default defineConfig({
  // отсюда Tailwind берёт все классы для tree-shaking
  content: ['./index.html', './src/**/*.{js,jsx,ts,tsx}'],
  // ничего не нужно расширять, всё через @theme в CSS
  theme: {
    extend: {},
  },
  plugins: [],
});
