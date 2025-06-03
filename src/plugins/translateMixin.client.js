import { translateMixin } from "@/mixins/translateMixin";

export default defineNuxtPlugin((nuxtApp) => {
    nuxtApp.vueApp.mixin(translateMixin);
});
