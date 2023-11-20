import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        // stone-50
        light: '#f9fafb',
        // slate-900
        dark: '#1a202c',
        primary: {
          // blue-600
          // DEFAULT: '#3182ce',
          DEFAULT: '#2C5AFF',
          // blue-700
          dark: '#2c5282',
          //  blue-500
          light: '#3b82f6',
        },
        secondary: {
          //  amber-600
          DEFAULT: '#d97706',
          // amber-700
          dark: '#b45309',
          // amber-500
          light: '#f59e0b',
        },
      },
    },
  },
  plugins: [],
}
export default config
