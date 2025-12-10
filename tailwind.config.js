/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['"Inter"', 'system-ui', 'sans-serif'],
        display: ['"Inter"', 'system-ui', 'sans-serif'],
      },
      colors: {
        background: '#FFFFFF',
        surface: '#F7F8F9',
        'surface-hover': '#F3F4F6',
        border: '#E2E4E9',
        primary: '#5E6AD2',
        'primary-hover': '#4E5AC0',
        secondary: '#6B7280',
        'text-main': '#1D1F24',
        'text-muted': '#646A76',
        'glass': 'rgba(255, 255, 255, 0.7)',
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'hero-glow': 'radial-gradient(ellipse at 50% 0%, rgba(94, 106, 210, 0.15) 0%, rgba(255, 255, 255, 0) 50%)',
      },
      animation: {
        'fade-in': 'fadeIn 0.5s ease-in',
        'slide-up': 'slideUp 0.5s ease-out',
        'shimmer': 'shimmer 2s linear infinite',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { transform: 'translateY(10px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
        shimmer: {
          from: { backgroundPosition: '0 0' },
          to: { backgroundPosition: '-200% 0' },
        }
      },
    },
  },
  plugins: [],
}
