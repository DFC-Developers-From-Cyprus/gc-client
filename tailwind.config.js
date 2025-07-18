// tailwind.config.js
import { defineConfig } from 'tailwindcss';

export default defineConfig({
  content: ['./index.html', './src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        yeseva: ['"Yeseva One"', 'cursive'],
        opensans: ['"Open Sans"', 'sans-serif'],
    },
  },
  plugins: [],
});
