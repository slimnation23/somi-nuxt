<template>
    <div
        class="lg:hidden || relative w-6 h-5 flex items-center justify-center cursor-pointer"
        @click="hamClick"
        :class="[{ 'is-open': store.getNav }, { 'is-closed': !store.getNav }]"
    >
        <div class="h-4 w-6 absolute top-0 right-0 z-10 flex flex-col items-end justify-between">
            <span class="block h-0.5 w-6 rounded-xl bg-black"></span>
            <span class="block h-0.5 w-6 rounded-xl bg-black"></span>
            <span class="block h-0.5 w-6 rounded-xl bg-black"></span>
        </div>
    </div>
</template>

<script setup>
import { useMainStore } from "@/stores/mainStore";

const store = useMainStore();
function hamClick() {
    store.toggleNav();
}
</script>
