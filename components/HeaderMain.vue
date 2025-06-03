<template>
    <header class="fixed top-0 z-50 bg-header shadow-teams rounded-b-lg w-full py-6 backdrop-blur-xl">
        <div class="wrapper">
            <nav>
                <div class="flex flex-row items-center justify-between gap-6">
                    <a href="/" class="flex items-center">
                        <NuxtImg
                            src="/icons/logo.svg"
                            alt="logo"
                            width="144"
                            height="47"
                            class="h-7 w-24 || lg:w-36 lg:h-12"
                        />
                    </a>

                    <ul class="hidden gap-6 xl:gap-11 items-center font-semibold text-lg || lg:flex">
                        <li>
                            <NuxtLink
                                :to="localPath('/documents')"
                                class="hover:text-blue-900 hover:underline transition-all duration-300"
                            >
                                Documents
                            </NuxtLink>
                        </li>
                        <li>
                            <NuxtLink
                                :to="localPath('/news')"
                                class="hover:text-blue-900 hover:underline transition-all duration-300"
                            >
                                News
                            </NuxtLink>
                        </li>
                    </ul>

                    <div class="flex items-center gap-2.5 || lg:gap-6 xl:gap-8">
                        <div class="hidden || lg:flex lg:gap-6 xl:gap-8">
                            <a href="https://my.somi.nl/sign-in" target="_blank">
                                <NuxtImg
                                    src="/icons/profile.svg"
                                    width="32"
                                    height="32"
                                    class="w-8 h-8"
                                    alt="profile"
                                />
                            </a>
                        </div>
                        <LangSwitcher />
                        <Hamburger />
                    </div>
                </div>
            </nav>

            <div
                class="bg-white fixed top-4 bottom-4 w-[95%] h-dvh overflow-auto pointer-events-auto rounded-3xl shadow-card z-40 duration-300 ease-in-out lg:hidden -right-full"
                :class="{
                    'left-1/2 -translate-x-1/2': store.getNav,
                    '-left-full': !store.getNav,
                }"
            >
                <nav class="flex items-center py-9 px-12">
                    <div
                        class="absolute top-8 right-8 text-2xl text-primary font-bold cursor-pointer"
                        @click="store.hideNav()"
                    >
                        x
                    </div>
                    <ul class="flex gap-8 flex-col text-lg font-semibold">
                        <li>
                            <NuxtLink :to="localPath('/')" class="menu-item" @click="store.hideNav">Home</NuxtLink>
                        </li>
                        <li>
                            <NuxtLink :to="localPath('/news')" class="menu-item" @click="store.hideNav">News</NuxtLink>
                        </li>
                        <li>
                            <NuxtLink :to="localPath('/documents')" class="menu-item" @click="store.hideNav">
                                Documents
                            </NuxtLink>
                        </li>
                        <li>
                            <a href="https://my.somi.nl/sign-in" target="_blank" class="menu-item">Login</a>
                        </li>
                    </ul>
                </nav>
            </div>
        </div>
    </header>
</template>

<script setup>
import { useMainStore } from "@/stores/mainStore";

const localPath = useLocalePath();
const store = useMainStore();
</script>
