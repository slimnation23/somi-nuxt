<template>
    <div>
        <p>{{$t('about_title')}}</p>
        <NuxtLink :to="localPath('/')" class="text-blue-500 hover:text-blue-700 bg-gray-100 p-2 rounded">Home</NuxtLink>
    </div>
</template>

<script setup>
const localPath = useLocalePath()
</script>