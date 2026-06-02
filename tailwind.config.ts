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
    },
  },
  plugins: [],
}

export default config
