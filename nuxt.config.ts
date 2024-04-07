// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },

  devServer: {
    port: 3002,
  },

  tailwindcss: {
    cssPath: '~/assets/css/tailwind.css',
    configPath: '~/tailwind.config.js',
  },

  googleFonts: {
    // subsets: ['latin'],
    families: {
      // Oxanium: [200, 300, 400, 500, 600, 700, 800],
      Oxanium: [200, 400],
      'Rock Salt': true,
    },
    // download: true,
  },

  modules: [
    '@nuxtjs/google-fonts',
    '@nuxt/ui',
    '@nuxt/image',
    '@vueuse/nuxt',
    '@vueuse/motion/nuxt',
    '@formkit/auto-animate/nuxt',
  ],

  image: {
    dir: 'assets/img',
    presets: {
      hero: {
        modifiers: {
          format: 'webp',
        },
      },
    },
  },
});
