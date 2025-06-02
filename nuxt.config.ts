import { useI18n } from "vue-i18n";
export default defineNuxtConfig({
    devtools: { enabled: false },
    postcss: {
        plugins: {
            tailwindcss: {},
            autoprefixer: {},
        },
    },
    css: ['~/assets/scss/main.scss'],
    modules: ["@nuxtjs/i18n", "@nuxt/image"],
    i18n: {
        langDir: "locales",
        strategy: "prefix_except_default",
        locales: [
            {
                code: "en",
                name: "English",
                file: "en.json",
            },
            {
                code: "nl",
                name: "Netherlands",
                file: "nl.json",
            },
            {
                code: "sp",
                name: "Spain",
                file: "sp.json",
            },
        ],
        defaultLocale: "en",
    },
});
