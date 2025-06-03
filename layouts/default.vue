<template>
    <div>
        <HeaderMain />
        <div>
            <slot />
        </div>
        <FooterMain />
    </div>
</template>

<script>
import { useMainStore } from "~/src/stores/mainStore";

export default {
    name: "DefaultLayout",

    setup() {
        const mainStore = useMainStore();

        mainStore.parseLang();

        return {
            mainStore,
        };
    },
};
</script>
