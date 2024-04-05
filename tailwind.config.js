module.exports = {
  darkMode: 'class',
  content: [
    `./components/**/*.{vue,js,ts}`,
    `./layouts/**/*.vue`,
    `./pages/**/*.vue`,
    `./composables/**/*.{js,ts}`,
    `./plugins/**/*.{js,ts}`,
    `./utils/**/*.{js,ts}`,
    `./App.{js,ts,vue}`,
    `./app.{js,ts,vue}`,
    `./Error.{js,ts,vue}`,
    `./error.{js,ts,vue}`,
    `./app.config.{js,ts}`,
  ],
  theme: {
    fontFamily: {
      sans: ['Oxanium', 'sans-serif'],
      display: ['Rock Salt', 'cursive'],
    },
    extend: {
      colors: {
        dark: {
          100: '#222627',
          200: '#D0D0D0',
        },
        accent: {
          50: '#fffaeb',
          100: '#fff1c6',
          200: '#ffdd74',
          300: '#ffcd4a',
          400: '#ffb720',
          500: '#f99407',
          600: '#dd6d02',
          700: '#b74b06',
          800: '#94390c',
          900: '#7a2f0d',
          950: '#461702',
        },
      },
      screens: {
        xs: '454px',
      },
    },
  },
  variants: {},
  // plugins: [require('@tailwindcss/forms')],
};
