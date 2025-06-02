<template>
    <div class="flex flex-col justify-center items-center">
        <section class="pb-28 pt-36 lg:pt-44 lg:pb-52">
            <div class="w-full px-5 md:px-9 xl:px-28 2xl:mx-auto 2xl:container flex flex-col gap-11">
                <div class="flex items-center gap-5 || lg:gap-2.5">
                    <a href="/" class="h-4 w-4 || lg:h-6 lg:w-6 lg:-ml-8">
                        <NuxtImg src="/icons/left-arrow.png" alt="left-arrow" width="32" height="32" />
                    </a>
                    <h2>Documents</h2>
                </div>

                <ul class="text-primary title-2 flex flex-col gap-8 || lg:gap-10">
                    <li class="flex gap-4 items-start">
                        <NuxtImg src="/icons/open-new-window.svg" alt="new-window" width="24" height="24" />
                        <a
                            href="/storage/25919/afschrift_akte_van_statutenwijziging_stichting_onderzoek_marktinformatie_plus_doorlopende_tekst.pdf"
                            target="_blank"
                            class="underline"
                        >
                            Articles of association (NL)
                        </a>
                    </li>
                    <li class="flex gap-4 items-start">
                        <NuxtImg src="/icons/open-new-window.svg" alt="new-window" width="24" height="24" />
                        <a
                            href="/storage/38157/20240709-Claimcode-Compliance-Statement.pdf"
                            target="_blank"
                            class="underline"
                        >
                            Claim code compliance statement (NL)
                        </a>
                    </li>
                    <li class="flex gap-4 items-start">
                        <NuxtImg src="/icons/open-new-window.svg" alt="new-window" width="24" height="24" />
                        <a href="/storage/25916/toezichtverslag_2021.pdf" target="_blank" class="underline">
                            Supervisory report 2021 (NL)
                        </a>
                    </li>
                    <li class="flex gap-4 items-start">
                        <NuxtImg src="/icons/open-new-window.svg" alt="new-window" width="24" height="24" />
                        <a
                            href="/storage/25917/bestuursverslag-2021-somi-19-dec-2022.pdf"
                            target="_blank"
                            class="underline"
                        >
                            Management report 2021 (NL)
                        </a>
                    </li>
                    <li class="flex gap-4 items-start">
                        <NuxtImg src="/icons/open-new-window.svg" alt="new-window" width="24" height="24" />
                        <a href="/storage/25914/annual_report_2022.pdf" target="_blank" class="underline">
                            Annual report 2022
                        </a>
                    </li>
                    <li class="flex gap-4 items-start">
                        <NuxtImg src="/icons/open-new-window.svg" alt="new-window" width="24" height="24" />
                        <a href="/storage/25915/annual_report_2023.pdf" target="_blank" class="underline">
                            Annual report 2023
                        </a>
                    </li>
                    <li class="flex gap-4 items-start">
                        <NuxtImg src="/icons/open-new-window.svg" alt="new-window" width="24" height="24" />
                        <a href="/storage/54878/Annual-report-2024-SOMI-06032025.pdf" target="_blank" class="underline">
                            Annual report 2024
                        </a>
                    </li>
                    <li class="flex gap-4 items-start text-black">
                        <NuxtImg src="/icons/open-new-window.svg" alt="new-window" width="24" height="24" />
                        <span>
                            <a
                                class="underline text-primary"
                                href="https://www.rechtspraak.nl/Registers/Paginas/Insolventieregister.aspx"
                                target="_blank"
                            >
                                Centraal Insolventieregister (NL)
                            </a>
                            -Via the Central Insolvency Register website you can check that SOMI is not in a state of
                            bankruptcy, no petition for bankruptcy is pending, no suspension of payments has been
                            granted to SOMI and no (public) WHOA procedure is pending.
                        </span>
                    </li>
                </ul>
            </div>
        </section>
    </div>
</template>

<script setup>
const localPath = useLocalePath();
</script>
