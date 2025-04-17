/** @type {import('tailwindcss').Config} */
import nativewindPreset from 'nativewind/preset';
import { colors } from './constants';

export default {
  content: ['./app/**/*.{js,jsx,ts,tsx}', './components/**/*.{js,jsx,ts,tsx}'],
  presets: [nativewindPreset],
  theme: {
    extend: {
      colors: {
        primary: colors.primary,
        secondary: colors.secondary,
        background: colors.background,
        text: colors.text,
      },
      fontFamily: {
        sanFrancisco: ['SanFrancisco', 'sans-serif'],
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
