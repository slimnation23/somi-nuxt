export default defineNuxtConfig({
  modules: ['@nuxtjs/tailwindcss', '@nuxtjs/i18n'],
  tailwindcss: {
    exposeConfig: true,
  },
  css: ["~/assets/css/tailwind.css"],
})
