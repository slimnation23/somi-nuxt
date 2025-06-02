<template>
    <div class="flex relative">
        <div
            @click="show = !show"
            class="flex items-center gap-1.5 font-semibold rounded-3xl lg:bg-white cursor-pointer uppercase px-3 py-1.5 || lg:w-20 lg:text-xl lg:font-extrabold"
        >
            {{ locale.toUpperCase() }}
            <NuxtImg src="/icons/arrow-down.svg" alt="arrow" class="w-2.5 lg:w-4" />
        </div>

        <transition name="slide-in-up">
            <div v-if="show" class="rounded-3xl absolute z-40 w-16 || lg:w-20">
                <ul class="overflow-hidden rounded-2xl cursor-pointer bg-white">
                    <li
                        v-for="lang in locales"
                        :key="lang.code"
                        class="hover:bg-blue-900 hover:text-white"
                        @click="selectLocale(lang.code)"
                    >
                        <span
                            class="flex py-1.5 px-3 lg:text-xl transition duration-300 font-semibold uppercase || lg:font-extrabold"
                        >
                            {{ lang.code }}
                        </span>
                    </li>
                </ul>
            </div>
        </transition>
    </div>
</template>

<script setup>
import { ref } from "vue";
import { useI18n } from "vue-i18n";

const show = ref(false);
const { locales, locale, setLocale } = useI18n();

function selectLocale(code) {
    setLocale(code);
    show.value = false; // закриваємо меню після вибору
}
</script>
