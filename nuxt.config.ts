import { fileURLToPath } from "node:url";

export default defineNuxtConfig({
    devtools: { enabled: false },
    css: ["~/assets/scss/main.scss"],
    postcss: {
        plugins: {
            tailwindcss: {},
            autoprefixer: {},
        },
    },
    modules: ["@nuxtjs/i18n", "@nuxt/image", "@pinia/nuxt"],
    i18n: {
        langDir: "locales",
        strategy: "prefix_except_default",
        locales: [
            { code: "nl", name: "Netherlands", file: "nl.json" },
            { code: "en", name: "English", file: "en.json" },
        ],
        defaultLocale: "nl",
        warnHtmlMessage: false,
        escapeParameterHtml: false,
    },
    vite: {
        resolve: {
            alias: {
                "@": fileURLToPath(new URL("./src", import.meta.url)),
            },
        },
        server: {
            proxy: {
                "/template": {
                    target: "http://localhost:3000/",
                    changeOrigin: true,
                    rewrite: (path) => path.replace(/^\/template/, ""),
                },
            },
        },
    },
    plugins: [{ src: "src/plugins/translateMixin.client.js", mode: "client" }],
});
