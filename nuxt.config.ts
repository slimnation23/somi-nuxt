export default defineNuxtConfig({
  modules: ['@nuxtjs/tailwindcss', '@nuxtjs/i18n'],
  i18n: {
    locales: [
      { code: 'en', name: 'English', file: 'en.json' },
      { code: 'uk', name: 'Українська', file: 'uk.json' }  // краще не використовувати nl для української
    ],
    defaultLocale: 'en',
    lazy: true,
    langDir: 'locales/',
  }
})
