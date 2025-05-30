<template>
    <header class="fixed top-0 z-50 bg-header rounded-b-lg shadow-teams w-full py-6 backdrop-blur-xl">
        <div class="wrapper">
            <nav v-active-menu-item>
                <div class="flex flex-row items-center justify-between gap-6">
                    <a href="/" class="flex items-center">
                        <!-- <img
                            src="/template/icons/logo.svg"
                            width="144"
                            height="47"
                            class="h-7 w-24 || lg:w-36 lg:h-12"
                            alt="Logo"
                        /> -->
                    </a>

                    <ul class="hidden gap-6 xl:gap-11 items-center font-semibold text-lg || lg:flex">
                        <li>
                            <a href="/team" class="menu-item">Team</a>
                        </li>
                        <li>
                            <a href="/all-cases" class="menu-item">Cases</a>
                        </li>
                        <li>
                            <a href="/news" class="menu-item">News</a>
                        </li>
                        <li>
                            <a href="/investment" class="menu-item">Investment</a>
                        </li>
                        <li>
                            <a href="/somi-app" class="menu-item">SOMI App</a>
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
                                    <a href="/document" class="menu-item">Documents</a>
                                </li>
                                <li class="sub-menu-link">
                                    <a href="/mass-claim" class="menu-item">Submit claim</a>
                                </li>
                                <li class="sub-menu-link">
                                    <a href="/faq" class="menu-item">FAQ</a>
                                </li>
                                <li class="sub-menu-link">
                                    <a href="/referral" class="menu-item">Referral campaign</a>
                                </li>
                                <li class="sub-menu-link">
                                    <a href="/contact" class="menu-item">Contact</a>
                                </li>
                            </ul>
                        </li>
                    </ul>

                    <div class="flex items-center gap-2.5 || lg:gap-6 xl:gap-8">
                        <div class="hidden || lg:flex lg:gap-6 xl:gap-8">
                            <a href="https://my.somi.nl/sign-in" target="_blank" class="menu-item">
                                <!-- <img
                                    src="/template/icons/profile.svg"
                                    width="32"
                                    height="32"
                                    class="w-8 h-8"
                                    alt="profile"
                                /> -->
                            </a>
                        </div>
                        <language-switch></language-switch>
                        <hamburger></hamburger>
                    </div>
                </div>
            </nav>
        </div>
    </header>
</template>

<script setup></script>