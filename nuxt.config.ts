import { useI18n } from "vue-i18n";
export default defineNuxtConfig({
    modules: ["@nuxtjs/tailwindcss", "@nuxtjs/i18n"],
    css: ["~/assets/css/tailwind.css"],
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
        ],
        defaultLocale: "en",
    },
});
