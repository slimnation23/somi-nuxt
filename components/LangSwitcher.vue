<template>
    <div>
        <select class="border-2 rounded p-2 text-sm" :value="locale" @change="changeLocale($event.target.value)">
            <option v-for="lang in locales" :key="lang.code" :value="lang.code">
                {{ lang.name }}
            </option>
        </select>
    </div>
</template>

<script setup>
import { useI18n } from "vue-i18n";

const { locales, locale, setLocale } = useI18n();

function changeLocale(code) {
    setLocale(code);
}
</script>
