<template>
    <header class="fixed top-0 z-50 bg-header shadow-teams rounded-b-lg w-full py-6 backdrop-blur-xl">
        <div class="wrapper">
            <nav>
                <div class="flex flex-row items-center justify-between gap-6">
                    <NuxtLink :to="localPath('/')" class="flex items-center">
                        <NuxtImg
                            src="/icons/logo.svg"
                            alt="logo"
                            width="144"
                            height="47"
                            class="h-7 w-24 || lg:w-36 lg:h-12"
                        />
                    </NuxtLink>

                    <ul class="hidden gap-6 xl:gap-11 items-center font-semibold text-lg || lg:flex">
                        <li>
                            <NuxtLink
                                :to="localPath('/team')"
                                class="hover:text-blue-900 hover:underline transition-all duration-300"
                            >
                                Team
                            </NuxtLink>
                        </li>
                        <li>
                            <NuxtLink
                                :to="localPath('/all-cases')"
                                class="hover:text-blue-900 hover:underline transition-all duration-300"
                            >
                                Cases
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
                        <li>
                            <NuxtLink
                                :to="localPath('/investment')"
                                class="hover:text-blue-900 hover:underline transition-all duration-300"
                            >
                                Investment
                            </NuxtLink>
                        </li>
                        <li>
                            <NuxtLink
                                :to="localPath('/somi-app')"
                                class="hover:text-blue-900 hover:underline transition-all duration-300"
                            >
                                Somi App
                            </NuxtLink>
                        </li>

                        <li class="relative cursor-pointer group">
                            <div class="flex gap-2 items-center">
                                <span
                                    class="group-hover:text-primary group-hover:underline transition-all duration-300"
                                >
                                    More
                                </span>
                                <div
                                    class="border-black w-2.5 h-2.5 border-b-2 border-r-2 rotate-45 mb-1.5 group-hover:border-primary"
                                ></div>
                            </div>
                            <ul
                                class="absolute -left-5 -top-3.5 z-50 w-56 py-3.5 px-5 hidden flex-col gap-3.5 bg-white shadow-lg rounded-xl group-hover:flex"
                            >
                                <div class="flex gap-2 items-center cursor-pointer mb-1.5">
                                    <span
                                        class="group-hover:text-primary group-hover:underline transition-all duration-300"
                                    >
                                        More
                                    </span>
                                    <div
                                        class="border-black w-2.5 h-2.5 border-b-2 border-r-2 rotate-45 mb-1.5 group-hover:border-primary"
                                    ></div>
                                </div>
                                <li class="sub-menu-link">
                                    <NuxtLink :to="localPath('/documents')" class="menu-item">Documents</NuxtLink>
                                </li>
                                <li class="sub-menu-link">
                                    <NuxtLink :to="localPath('/mass-claim')" class="menu-item">Submit claim</NuxtLink>
                                </li>
                                <li class="sub-menu-link">
                                    <NuxtLink :to="localPath('/faq')" class="menu-item">FAQ</NuxtLink>
                                </li>
                                <li class="sub-menu-link">
                                    <NuxtLink :to="localPath('/referral')" class="menu-item">Referral campaign</NuxtLink>
                                </li>
                                <li class="sub-menu-link">
                                    <NuxtLink :to="localPath('/contact')" class="menu-item">Contact</NuxtLink>
                                </li>
                            </ul>
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
