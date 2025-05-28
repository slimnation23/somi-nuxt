<template>
    <div>
        <p>{{$t('title')}}</p>
        <NuxtLink :to="localPath('/about')" class="text-blue-500 hover:text-blue-700 bg-primary p-2 rounded">About</NuxtLink>
    </div>
</template>

<script setup>
const localPath = useLocalePath()
</script>