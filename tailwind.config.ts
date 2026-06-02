import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['var(--font-archivo)', 'sans-serif'],
      },
      colors: {
        background: 'rgb(255, 255, 255)',
        foreground: 'rgb(0, 0, 0)',
        'text-primary': 'rgb(0, 0, 0)',
        'text-secondary': 'rgb(102, 102, 102)',
        'text-tertiary': 'rgb(153, 153, 153)',
        'border-light': 'rgb(229, 229, 229)',
        'border-medium': 'rgb(204, 204, 204)',
        'border-dark': 'rgb(102, 102, 102)',
        'surface-1': 'rgb(255, 255, 255)',
        'surface-2': 'rgb(250, 250, 250)',
        'surface-3': 'rgb(245, 245, 245)',
        'surface-4': 'rgb(235, 235, 235)',
        'hover': 'rgb(242, 242, 242)',
        'active': 'rgb(204, 204, 204)',
        'surface-dark': 'rgb(245, 245, 245)',
      },
      spacing: {
        'nav-height': '60px',
      },
      typography: {
        DEFAULT: {
          css: {
            color: 'rgb(0, 0, 0)',
            fontFamily: 'Arial, Helvetica, sans-serif',
          },
        },
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        fadeOut: {
          '0%': { opacity: '1' },
          '100%': { opacity: '0' },
        },
        slideInLeft: {
          '0%': { transform: 'translateX(-30px)', opacity: '0' },
          '100%': { transform: 'translateX(0)', opacity: '1' },
        },
        slideInRight: {
          '0%': { transform: 'translateX(30px)', opacity: '0' },
          '100%': { transform: 'translateX(0)', opacity: '1' },
        },
        slideInUp: {
          '0%': { transform: 'translateY(20px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
        slideInDown: {
          '0%': { transform: 'translateY(-20px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
        zoomIn: {
          '0%': { transform: 'scale(0.95)', opacity: '0' },
          '100%': { transform: 'scale(1)', opacity: '1' },
        },
        scaleUp: {
          '0%': { transform: 'scale(0.98)', opacity: '0.5' },
          '100%': { transform: 'scale(1)', opacity: '1' },
        },
      },
      animation: {
        'fade-in': 'fadeIn 0.6s ease-out',
        'fade-out': 'fadeOut 0.6s ease-out',
        'slide-in-left': 'slideInLeft 0.6s ease-out',
        'slide-in-right': 'slideInRight 0.6s ease-out',
        'slide-in-up': 'slideInUp 0.6s ease-out',
        'slide-in-down': 'slideInDown 0.6s ease-out',
        'zoom-in': 'zoomIn 0.6s ease-out',
        'scale-up': 'scaleUp 0.5s ease-out',
      },
    },
  },
  plugins: [],
}

export default config
