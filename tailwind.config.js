/** @type {import('tailwindcss').Config} */
import nativewindPreset from 'nativewind/preset';
import { colors, fontSizes } from './constants';

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
        xs: fontSizes.xs,
        sm: fontSizes.sm,
        md: fontSizes.md,
        lg: fontSizes.lg,
        xl: fontSizes.xl,
        '2xl': fontSizes['2xl'],
        '3xl': fontSizes['3xl'],
        '4xl': fontSizes['4xl'],
        '5xl': fontSizes['5xl'],
        '6xl': fontSizes['6xl'],
      },
    },
  },
  plugins: [],
  darkMode: 'class',
};
