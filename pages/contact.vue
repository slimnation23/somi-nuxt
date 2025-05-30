<template>
    <div class="flex flex-col justify-center items-center">
        <h1 class="text-2xl font-semibold">{{ $t("contact_title") }}</h1>
        <div class="flex gap-5 mb-5">
            <NuxtLink :to="localPath('/')" class="text-blue-500 bg-gray-100 p-2 rounded">Home</NuxtLink>
            <NuxtLink :to="localPath('/about')" class="text-blue-500 bg-gray-100 p-2 rounded">About</NuxtLink>
            <NuxtLink :to="localPath('/contact')" class="text-blue-500 bg-gray-100 p-2 rounded">Contact</NuxtLink>
        </div>
        <LangSwitcher />
    </div>
</template>

<script setup>
const localPath = useLocalePath();
</script>
