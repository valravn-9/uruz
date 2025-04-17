/** @type {import('tailwindcss').Config} */
import nativewindPreset from 'nativewind/preset';

export default {
  content: ['./app/**/*.{js,jsx,ts,tsx}', './components/**/*.{js,jsx,ts,tsx}'],
  presets: [nativewindPreset],
  theme: {
    extend: {
      colors: {
        primary: {
          light: '#3b82f6',
          dark: '#2563eb',
        },
        secondary: {
          light: '#fbbf24',
          dark: '#f59e0b',
        },
        background: {
          light: '#ffffff',
          dark: '#000000',
        },
        text: {
          light: '#000000',
          dark: '#ffffff',
        },
      },
      fontFamily: {
        branda: ['Branda', 'sans-serif'],
      },
      fontSize: {
        base: '16px',
        lg: '20px',
        xl: '24px',
      },
    },
  },
  plugins: [],
  darkMode: 'class',
};
