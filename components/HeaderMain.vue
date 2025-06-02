<template>
    <header class="fixed top-0 z-50 bg-header shadow-teams rounded-b-lg w-full py-6 backdrop-blur-xl">
        <div class="w-full px-5 md:px-9 xl:px-28 2xl:mx-auto 2xl:container">
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

                    <ul class="gap-6 xl:gap-11 items-center font-semibold text-lg flex">
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
                    </div>
                </div>
            </nav>
        </div>
    </header>
</template>

<script setup>
const localPath = useLocalePath();
</script>
