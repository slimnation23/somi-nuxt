<template>
    <footer class="relative z-20 bg-cover text-gray py-16 lg:py-24">
        <NuxtImg
            src="/images/footer-gradiane-mobile.webp"
            alt="bg"
            loading="lazy"
            aria-hidden="true"
            class="absolute inset-0 w-full h-full object-cover z-[-1]"
            srcset="
                    /images/footer-gradiane-mobile.webp 767w,
                    /images/footer-gradiane.webp 768w"
            sizes="(min-width: 768px) 100vw, 100vw"
        />

        <div class="w-full px-5 md:px-9 xl:px-28 2xl:mx-auto 2xl:container flex flex-col gap-14 || lg:gap-36">
            <div class="grid gap-14 || sm:grid-cols-2 xl:grid-cols-10 xl:gap-28">
                <!-- Quick links -->
                <div class="flex flex-col gap-5 || sm:col-span-1 xl:col-span-3 xl:gap-20">
                    <div class="title-1 font-semibold">Quick links</div>
                    <ul class="flex flex-col gap-7 title-2 || lg:gap-8 lg:underline">
                        <li>
                            <NuxtLink :to="localPath('/faq')">FAQ</NuxtLink>
                        </li>
                        <li>
                            <NuxtLink :to="localPath('/terms-conditions')">General Terms & Conditions</NuxtLink>
                        </li>
                        <li>
                            <NuxtLink :to="localPath('/somi-app-terms-conditions')">
                                SOMI App Terms & Conditions
                            </NuxtLink>
                        </li>
                        <li>
                            <NuxtLink :to="localPath('/privacy-statement')">Privacy Statement</NuxtLink>
                        </li>
                        <li>
                            <NuxtLink :to="localPath('/cookies-statement')">Cookie Statement</NuxtLink>
                        </li>
                        <li>
                            <NuxtLink :to="localPath('/responsible-disclosure-policy')">
                                Responsible Disclosure Policy
                            </NuxtLink>
                        </li>
                        <li>
                            <NuxtLink :to="localPath('/referral-terms-and-conditions')">
                                Referral Terms & Conditions
                            </NuxtLink>
                        </li>
                    </ul>
                </div>
                <!-- Contact -->
                <div class="flex flex-col gap-5 || sm:col-span-1 xl:col-span-4 xl:gap-20">
                    <div class="title-1 font-semibold">Contact</div>
                    <div class="flex flex-col gap-14 title-2">
                        <div class="flex flex-col gap-8">
                            <div class="flex gap-5 flex-wrap">
                                <a href="mailto: welcome@somi.nl" class="flex items-center gap-1.5">
                                    <NuxtImg src="/icons/mail.svg" class="w-4 h-4 || lg:w-6 lg:h-6" alt="mail" />
                                    <p>welcome@somi.nl</p>
                                </a>
                                <a href="tel:+31208085182" class="flex items-center gap-1.5">
                                    <NuxtImg src="/icons/phone.svg" class="w-4 h-4 || lg:w-6 lg:h-6" alt="mail" />
                                    <p>+31 20 808 5182</p>
                                </a>
                            </div>
                            <div class="flex flex-col gap-2.5 flex-wrap || lg:gap-8">
                                <div class="flex gap-5">
                                    <p class="flex items-center gap-1.5">
                                        <NuxtImg src="/icons/bank.png" class="w-4 h-4 || lg:w-6 lg:h-6" alt="mail" />
                                        <span>
                                            <b>KvK:</b>
                                            66169208
                                        </span>
                                    </p>
                                    <p>
                                        <b>RSIN:</b>
                                        856425205
                                    </p>
                                </div>
                                <p>IBAN: NL 79 BUNQ 2066 6319 49</p>
                            </div>
                        </div>
                        <div class="flex gap-14 || sm:flex-col">
                            <div class="flex flex-col gap-3 || lg:gap-8">
                                <p class="font-bold">Visiting address:</p>
                                <p>Mr. G. Groen van Prinstererlaan 88A, 1181 TR Amstelveen, The Netherlands</p>
                            </div>
                            <div class="flex flex-col gap-3 || lg:gap-8">
                                <p class="font-bold">Postal address:</p>
                                <p>Postbus 59692 1040 LD Amsterdam, The Netherlands</p>
                            </div>
                        </div>
                    </div>
                </div>
                <!-- Social -->
                <div class="flex flex-col gap-5 || sm:col-span-1 xl:col-span-3 xl:gap-20">
                    <div class="title-1 font-semibold hidden || lg:block">Social</div>
                    <div class="flex flex-col gap-14 title-2">
                        <div class="flex flex-col gap-3.5 order-2 || lg:order-1">
                            <p class="hidden || lg:block">Check out our social media</p>
                            <div
                                class="flex justify-center flex-wrap items-center gap-11 || sm:justify-between sm:gap-5"
                            >
                                <a
                                    href="https://www.linkedin.com/company/stichting-onderzoek-marktinformatie/"
                                    target="_blank"
                                >
                                    <NuxtImg
                                        src="/icons/linkedin-brands.svg"
                                        class="w-12 h-12 rounded-xl"
                                        alt="linkedin icon"
                                    />
                                </a>
                                <a href="https://www.facebook.com/stichtingonderzoekmarktinformatie/" target="_blank">
                                    <NuxtImg
                                        src="/icons/square-facebook-brands.svg"
                                        class="w-12 h-12 rounded-xl"
                                        alt="linkedin icon"
                                    />
                                </a>
                                <a href="https://www.youtube.com/@stichtingonderzoekmarktinf3205" target="_blank">
                                    <NuxtImg
                                        src="/icons/square-youtube-brands.svg"
                                        class="w-12 h-12 rounded-xl"
                                        alt="youtube icon"
                                    />
                                </a>
                                <a href="https://www.instagram.com/somi_foundation/" target="_blank">
                                    <NuxtImg
                                        src="/icons/square-instagram-brands.svg"
                                        class="w-12 h-12 rounded-xl"
                                        alt="instagram"
                                    />
                                </a>
                                <a href="https://bsky.app/profile/somifoundation.bsky.social" target="_blank">
                                    <NuxtImg
                                        src="/icons/square-bluesky-brands.svg"
                                        class="w-12 h-12 rounded-xl"
                                        alt="bluesky"
                                    />
                                </a>
                            </div>
                        </div>
                        <div class="flex flex-col gap-11 order-1 || lg:order-2">
                            <p class="title-1 font-semibold">Newsletter</p>
                            <div class="flex flex-col gap-5">
                                <p>Subscribe to our newsletter</p>
                                <newsletter></newsletter>
                            </div>
                            <div class="text-center || sm:text-left">
                                <NuxtLink
                                    :to="localPath('/contact')"
                                    class="btn btn-white-secondary-button !w-full || lg:!w-fit"
                                >
                                    Contact us now
                                </NuxtLink>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <p class="title-2 text-center">Copyright © 2024 Foundation for Market Information Research (SOMI)</p>
        </div>
    </footer>
</template>

<script setup>
const localPath = useLocalePath();
</script>
