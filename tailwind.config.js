/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [ './index.html','./src/*.tsx','./src/**/*.tsx'],
  darkMode: ['class'],
  theme: {
    extend: {
      fontSize: {
        xxs: '0.625rem'
      },
      lineHeight: {
        xxs: '0.75rem'
      },
      boxShadow: {
        btn: 'inset 0 0 0 1px rgba(0, 0, 0, 0.3)',
      },
      colors: {
        'surface-accent': 'var(--color-surface-accent)',
        'accent-1': 'var(--accent-1)',
        'accent-2': 'var(--accent-2)',
        'accent-3': 'var(--accent-3)',
        'accent-4': 'var(--accent-4)',
        'accent-5': 'var(--accent-5)',
        'accent-6': 'var(--accent-6)',
        'accent-7': 'var(--accent-7)',
        'accent-8': 'var(--accent-8)',
        'accent-9': 'var(--accent-9)',
        'accent-9-contrast': 'var(--accent-9-contrast)',
        'accent-10': 'var(--accent-10)',
        'accent-11': 'var(--accent-11)',
        'accent-12': 'var(--accent-12)',
        'accent-a1': 'var(--accent-a1)',
        'accent-a2': 'var(--accent-a2)',
        'accent-a3': 'var(--accent-a3)',
        'accent-a4': 'var(--accent-a4)',
        'accent-a5': 'var(--accent-a5)',
        'accent-a6': 'var(--accent-a6)',
        'accent-a7': 'var(--accent-a7)',
        'accent-a8': 'var(--accent-a8)',
        'accent-a9': 'var(--accent-a9)',
        'accent-a10': 'var(--accent-a10)',
        'accent-a11': 'var(--accent-a11)',
        'accent-a12': 'var(--accent-a12)',
      },
    },
  },
  plugins: []
}

