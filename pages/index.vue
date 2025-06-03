<template>
    <div>
        <section class="overflow-hidden bg-gradient">
            <div class="wrapper pt-36 pb-28 || lg:pt-44 lg:pb-40">
                <div class="grid grid-cols-1 gap-16 || lg:grid-cols-2 lg:gap-40">
                    <div class="flex flex-col gap-5 col-span-1 || lg:min-h-28 lg:gap-20 lg:pt-6">
                        <h1>
                            SOMI
                            <br />
                            All your Data
                            <br />
                            <span class="text-primary">All yours.</span>
                        </h1>
                        <p class="title-1">
                            SOMI is committed to protecting the fundamental rights of consumers and minors who use
                            online services. Learn how we work below.
                        </p>
                        <div class="hidden || lg:inline-flex">
                            <NuxtLink :to="localPath('/all-cases')" class="btn btn-secondary">Discover more</NuxtLink>
                        </div>
                    </div>
                    <div class="w-full col-span-1 mx-auto min-h-[656px] || sm:w-1/2 lg:w-full">
                        <hero-slider ref="heroSlide" class="pb-16 || lg:pb-0"></hero-slider>
                        <div class="flex flex-col justify-center items-center gap-3 || lg:hidden">
                            <NuxtLink :to="localPath('/all-cases')" class="btn btn-secondary">Discover more</NuxtLink>
                        </div>
                    </div>
                </div>
            </div>
            <div id="who-we-are" class="relative min-h-[800px] lg:min-h-[900px]">
                <div class="wrapper pb-[30rem] || md:pb-96">
                    <h2 class="mb-9 || lg:mb-11">
                        <span class="text-primary">Who</span>
                        are we?
                    </h2>
                    <p class="title-1 mb-16 || lg:mb-24">
                        The Foundation for Market Information Research (SOMI) is a non-profit organization set up to
                        <b>identify and influence</b>
                        issues of social importance
                        <br />
                        <br />
                        SOMI investigates abuses, informs the public, and helps disadvantaged people. SOMI does this,
                        among other things, by conducting collective proceedings and claiming compensation.
                    </p>

                    <div class="flex justify-center items-center">
                        <NuxtLink :to="localPath('/team')" class="btn btn-secondary">Meet the team</NuxtLink>
                    </div>
                </div>
            </div>
        </section>

        <section id="claims-scoreboard" class="bg-black">
            <div class="wrapper pt-px">
                <div class="info-section -mt-80 || md:-mt-80">
                    <div class="flex justify-between flex-col gap-12 items-start || md:flex-row lg:gap-20">
                        <div
                            class="w-40 rounded-3xl shadow-hard inline-flex relative -mt-32 mx-auto || md:mt-0 lg:w-60"
                        >
                            <NuxtImg
                                src="/images/eu-recognition.webp"
                                class="w-40 rounded-3xl || lg:w-64 lg:h-64"
                                alt="somi"
                                loading="lazy"
                                width="248"
                                height="252"
                            />
                        </div>
                        <div class="inline-flex flex-col flex-1 gap-9 || lg:gap-6">
                            <h2>
                                <span class="text-primary">EU</span>
                                Recognition
                            </h2>
                            <p class="title-1">
                                SOMI was designated as a competent authority for bringing cross-border representative
                                actions for consumers in the European Union. This means that SOMI can represent victims
                                across EU member states in our collective actions.
                                <br />
                                You can see the list of all entities on:
                            </p>
                        </div>
                    </div>
                    <div class="flex justify-center flex-col items-center flex-wrap gap-5 || md:flex-row">
                        <a
                            href="https://representative-actions-collaboration.ec.europa.eu/cross-border-qualified-entities"
                            class="btn btn-secondary"
                        >
                            <span>EU Commission</span>
                            <NuxtImg
                                src="/icons/arrow-right.svg"
                                class="w-7 h-auto"
                                width="35"
                                height="23"
                                alt="right wards"
                            />
                        </a>
                        <a
                            href="https://www.rijksoverheid.nl/documenten/publicaties/2023/12/08/lijst-met-aangewezen-organisaties-voor-collectieve-acties-in-de-europese-unie"
                            class="btn btn-secondary"
                        >
                            <span>Rijksoverheid.nl</span>
                            <NuxtImg
                                src="/icons/arrow-right.svg"
                                class="w-7 h-auto"
                                width="35"
                                height="23"
                                alt="right wards"
                            />
                        </a>
                    </div>
                </div>
            </div>
            <div class="section max-w-[1536px] mx-auto text-gray overflow-hidden">
                <div class="relative wrapper">
                    <h2 class="mb-20 || lg:mb-36">Active claims</h2>

                    <!-- Slider -->
                    <claim-slider></claim-slider>
                </div>
            </div>
        </section>

        <section class="bg-gradient py-28 overflow-hidden || lg:py-52">
            <div class="wrapper flex flex-col gap-20">
                <h2>
                    <span class="text-primary">Past</span>
                    actions
                </h2>
                <!-- Slider -->
                <past-case-slider></past-case-slider>

                <div class="hidden justify-end md:flex">
                    <a class="btn btn-secondary" href="/all-cases">Discover more</a>
                </div>
                <div class="flex justify-end || md:hidden">
                    <a class="btn btn-secondary w-auto" href="/all-cases">View all</a>
                </div>
            </div>
        </section>

        <section class="relative py-28 lg:py-52 overflow-hidden">
            <NuxtImg
                src="/images/bg-gradient.webp"
                alt="bg"
                loading="lazy"
                width="1536"
                height="1895"
                aria-hidden="true"
                class="absolute inset-0 w-full h-full object-cover z-[-1]"
            />
            <div class="wrapper flex flex-col gap-20 || md:gap-28">
                <div class="text-gray flex flex-col gap-9 || md:gap-11">
                    <h2>How do we work?</h2>
                    <p class="title-1 w-full || lg:w-3/4">
                        SOMI consists of a team of
                        <b>IT & legal experts</b>
                        who are the best in their field. Once we find a case in which the rights of a large group of
                        people are being violated, we will start a claim process as follows:
                    </p>
                </div>
                <div class="flex flex-col items-center">
                    <ul class="timeline border-l-3 pl-4 flex flex-col gap-11">
                        <li class="pl-0 || lg:pl-5">
                            <div
                                class="flex flex-col bg-gray p-8 rounded-3xl max-w-4xl || md:gap-20 md:flex-row lg:p-11"
                            >
                                <!-- <img
                                    src="/template/icons/undraw_forms.png"
                                    class="w-fit self-center || md:self-start md:h-full"
                                    alt="undraw_forms"
                                    width="100"
                                    height="100"
                                    loading="lazy"
                                /> -->
                                <div class="flex flex-col gap-5">
                                    <div class="title-4 text-primary-dark">01. File the complaint</div>
                                    <p class="title-2">
                                        SOMI informs the company of their wrongdoing(s) and invites them to have a
                                        formal discussion
                                    </p>
                                </div>
                            </div>
                        </li>
                        <li class="pl-0 || lg:pl-5">
                            <div
                                class="flex flex-col bg-gray p-8 rounded-3xl max-w-4xl || md:gap-20 md:flex-row lg:p-11"
                            >
                                <!-- <img
                                    src="/template/icons/undraw_join.png"
                                    class="w-fit self-center || md:self-start md:h-full"
                                    alt="undraw_join"
                                    width="100"
                                    height="100"
                                    loading="lazy"
                                /> -->
                                <div class="flex flex-col gap-5">
                                    <div class="title-4 text-primary-dark">02. Start the claim</div>
                                    <p class="title-2">
                                        If the solution has not been reached, SOMI starts a claim and recruits the
                                        victims to participate
                                    </p>
                                </div>
                            </div>
                        </li>
                        <li class="pl-0 || lg:pl-5">
                            <div
                                class="flex flex-col bg-gray p-8 rounded-3xl max-w-4xl || md:gap-20 md:flex-row lg:p-11"
                            >
                                <!-- <img
                                    src="/template/icons/undraw_resume.png"
                                    class="w-fit self-center || md:self-start md:h-full"
                                    alt="undraw_resume"
                                    width="100"
                                    height="100"
                                    loading="lazy"
                                /> -->
                                <div class="flex flex-col gap-5">
                                    <div class="title-4 text-primary-dark">03. Issue a Summons</div>
                                    <p class="title-2">
                                        SOMI issues a Summons and registers the claim on the central register for
                                        collective actions
                                    </p>
                                </div>
                            </div>
                        </li>
                        <li class="pl-0 || lg:pl-5">
                            <div
                                class="flex flex-col bg-gray p-8 rounded-3xl max-w-4xl || md:gap-20 md:flex-row lg:p-11"
                            >
                                <!-- <img
                                    src="/template/icons/undraw_judge.png"
                                    class="w-fit self-center || md:self-start md:h-full"
                                    alt="undraw_judge"
                                    width="100"
                                    height="100"
                                    loading="lazy"
                                /> -->
                                <div class="flex flex-col gap-5">
                                    <div class="title-4 text-primary-dark">04. Take the evidence to the court</div>
                                    <p class="title-2">
                                        SOMI fights the violation in court with a team of experienced lawyers. If
                                        needed, SOMI will launch an appeal
                                    </p>
                                </div>
                            </div>
                        </li>
                        <li class="pl-0 || lg:pl-5">
                            <div
                                class="flex flex-col bg-gray p-8 rounded-3xl max-w-4xl || md:gap-20 md:flex-row lg:p-11"
                            >
                                <!-- <img
                                    src="/template/icons/undraw_savings.png"
                                    class="w-fit self-center || md:self-start md:h-full"
                                    alt="undraw_savings"
                                    width="100"
                                    height="100"
                                    loading="lazy"
                                /> -->
                                <div class="flex flex-col gap-5">
                                    <div class="title-4 text-primary-dark">05.Distribute the compensation</div>
                                    <p class="title-2">
                                        If the claim reaches a positive judgment or settlement, SOMI will pay
                                        compensation to the victims
                                    </p>
                                </div>
                            </div>
                        </li>
                    </ul>
                </div>
            </div>
        </section>

        <section class="bg-gray pt-28 || lg:pt-52">
            <div class="wrapper flex flex-col gap-10 || lg:gap-20">
                <h2>
                    SOMI explained in a
                    <span class="text-primary">video</span>
                </h2>
                <div class="w-full h-60 m-auto || md:h-[37rem] lg:w-5/6">
                    <iframe
                        width="560"
                        height="315"
                        class="w-full h-full rounded-3xl aspect-square"
                        style="display: block !important"
                        src="https://www.youtube-nocookie.com/embed/S8f5KaaF0l8?si=6VEzapwqxNCbj74u&amp;start=1"
                        title="YouTube video player"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                        referrerpolicy="strict-origin-when-cross-origin"
                        allowfullscreen
                        data-cookieconsent="ignore"
                        loading="lazy"
                    ></iframe>
                </div>
            </div>
        </section>

        <section class="bg-gray pt-28 || lg:pt-52">
            <div class="wrapper flex flex-col gap-20 || lg:gap-28">
                <h2>
                    <span class="text-primary">Why</span>
                    SOMI?
                </h2>

                <div class="relative flex items-center gap-10 flex-wrap || sm:justify-around xl:flex-nowrap">
                    <!-- <img
                        class="absolute w-auto -top-10 right-0 || md:-top-1/4"
                        src="/template/images/dots-who.png"
                        alt="dots-who"
                        loading="lazy"
                    /> -->
                    <div class="somi-card somi-card-why">
                        <div class="somi-card-why-number">01.</div>
                        <div class="title-4 mb-2.5 || md:mb-5 lg:min-h-16">Action collective</div>
                        <p class="title-2">
                            En agissant collectivement, nous bénéficions d’une position de négociation très solide,
                            basée sur la législation européenne en matière de protection de la vie privée et des
                            consommateurs.
                        </p>
                    </div>

                    <div class="somi-card somi-card-why">
                        <div class="somi-card-why-number">02.</div>
                        <div class="title-4 mb-2.5 || md:mb-5 lg:min-h-16">Centre de connaissance</div>
                        <p class="title-2">
                            SOMI étudie les services numériques et met l’accent sur la transparence concernant
                            l’utilisation des données personnelles et les risques associés.
                        </p>
                    </div>

                    <div class="somi-card somi-card-why">
                        <div class="somi-card-why-number">03.</div>
                        <div class="title-4 mb-2.5 || md:mb-5 lg:min-h-16">Interessenvertretung</div>
                        <p class="title-2">
                            SOMI étudie les services numériques et met l’accent sur la transparence concernant
                            l’utilisation des données personnelles et les risques associés.
                        </p>
                    </div>
                    <!-- <img
                        class="absolute w-auto -bottom-10 md:-bottom-1/4 left-0 rotate-180"
                        src="/template/images/dots-who.png"
                        alt="dots-who"
                        loading="lazy"
                    /> -->
                </div>
            </div>
        </section>

        <section class="pt-28 pb-64 bg-gradient || md:pt-80 lg:pb-[29rem] lg:pt-52">
            <div class="wrapper flex justify-between flex-col gap-20 || md:flex-row" id="somi-app">
                <div class="flex flex-col gap-14 || lg:w-6/12 lg:justify-between lg:gap-20">
                    <div class="flex flex-col gap-10 || lg:gap-10">
                        <h2>
                            <span class="text-primary">SOMI app</span>
                        </h2>
                        <p class="title-1">
                            Every second on the Internet, your personal data is being collected and processed, even
                            without your consent. The General Data Protection Regulation
                            <b>(GDPR)</b>
                            entitles EU citizens to privacy rights, however exercising these rights on your own is not
                            easy. Enter SOMI app: a user-friendly and secure solution that empowers you to exercise your
                            GDPR rights and reclaim ownership of your personal data.
                        </p>
                    </div>
                    <div class="flex flex-col gap-8 || lg:gap-11">
                        <div class="flex flex-col items-center gap-12 mb-14 || lg:hidden">
                            <!-- <video
                                class="w-full h-80 rounded-2xl"
                                controls
                                muted
                                autoplay
                                loop
                                playsinline
                                data-cookieconsent="ignore"
                            >
                                <source src="/template/videos/somi-app.webm" type="video/webm" />
                                Your browser does not support HTML video.
                            </video> -->
                            <a
                                href="https://my.somi.nl/signup"
                                class="btn btn-secondary !flex || lg:!hidden"
                                target="_blank"
                            >
                                Register now
                            </a>
                        </div>
                        <div class="title-4">Discover the power of the SOMI app:</div>
                        <ul class="title-1">
                            <li class="flex gap-2.5 items-center || lg:items-start">
                                <span class="text-primary font-bold text-2xl lg:text-3xl">+</span>
                                Collect your data from various websites, platforms, and apps
                            </li>
                            <li class="flex gap-2.5 items-center || lg:items-start">
                                <span class="text-primary font-bold text-2xl lg:text-3xl">+</span>
                                Erase your data from any online sources
                            </li>
                            <li class="flex gap-2.5 items-center || lg:items-start">
                                <span class="text-primary font-bold text-2xl lg:text-3xl">+</span>
                                Check whether your data has been leaked on the Dark Web
                            </li>
                            <li class="flex gap-2.5 items-center || lg:items-start">
                                <span class="text-primary font-bold text-2xl lg:text-3xl">+</span>
                                Investigate the handling of your personal data
                            </li>
                            <li class="flex gap-2.5 items-center || lg:items-start">
                                <span class="text-primary font-bold text-2xl lg:text-3xl">+</span>
                                Take action and claim compensation for GDPR violations
                            </li>
                        </ul>
                    </div>
                    <div class="flex flex-col items-center flex-wrap || lg:flex-row lg:items-start lg:gap-5">
                        <a href="somi-app" class="appLink btn btn-primary lg:!w-full xl:!w-fit">Discover more</a>
                        <a
                            href="https://my.somi.nl/signup"
                            class="btn btn-secondary !hidden || lg:!flex lg:!w-full xl:!w-fit"
                            target="_blank"
                        >
                            Register now
                        </a>
                    </div>
                    <div class="flex justify-center gap-2.5 || lg:hidden">
                        <a
                            href="https://apps.apple.com/us/app/somi-gdpr-breach-compliance/id1526458829"
                            target="_blank"
                        >
                            <!-- <img
                                src="/template/images/apple-store.webp"
                                class="min-w-full rounded-md"
                                alt="app-store"
                                loading="lazy"
                                width="131"
                                height="43"
                            /> -->
                        </a>

                        <a href="https://play.google.com/store/apps/details?id=tech.dotswan.somi" target="_blank">
                            <!-- <img
                                src="/template/images/google-play.webp"
                                class="min-w-full rounded-md"
                                alt="google-play"
                                loading="lazy"
                                width="147"
                                height="43"
                            /> -->
                        </a>
                    </div>
                </div>

                <div class="hidden flex-col items-center || lg:flex lg:gap-20 lg:w-auto">
                    <div class="w-full max-w-[400px] mx-auto shadow-hard rounded-5xl">
                        <div class="relative w-full h-full p-2.5 bg-black rounded-5xl">
                            <video
                                class="w-full h-full object-contain rounded-4xl"
                                autoplay
                                loop
                                muted
                                playsinline
                                data-cookieconsent="ignore"
                            >
                                <!-- <source src="/template/videos/somi-app.webm" type="video/webm" /> -->
                                Your browser does not support HTML video.
                            </video>
                            <div
                                class="absolute top-4 left-1/2 -translate-x-1/2 w-28 h-8 rounded-3xl bg-black flex items-center justify-end px-2.5"
                            >
                                <!-- <img src="/template/images/camera-lens.png" class="w-3 h-3 brightness-50" alt="lens" /> -->
                            </div>
                            <div class="absolute w-1 h-20 bg-black -right-1 top-40 rounded-tr-md rounded-br-md"></div>
                            <div class="absolute w-1 h-10 bg-black -left-1 top-20 rounded-tl-md rounded-bl-md"></div>
                            <div class="absolute w-1 h-14 bg-black -left-1 top-40 rounded-tl-md rounded-bl-md"></div>
                            <div class="absolute w-1 h-14 bg-black -left-1 top-56 rounded-tl-md rounded-bl-md"></div>
                        </div>
                    </div>
                    <div class="flex flex-col || lg:gap-4 lg:flex-row">
                        <a
                            href="https://apps.apple.com/us/app/somi-gdpr-breach-compliance/id1526458829"
                            target="_blank"
                        >
                            <!-- <img
                                src="/template/images/apple-store.webp"
                                class="max-w-full rounded-md"
                                alt="app-store"
                                loading="lazy"
                                width="131"
                                height="43"
                            /> -->
                        </a>

                        <a href="https://play.google.com/store/apps/details?id=tech.dotswan.somi" target="_blank">
                            <!-- <img
                                src="/template/images/google-play.webp"
                                class="max-w-full rounded-md"
                                alt="google-play"
                                loading="lazy"
                                width="147"
                                height="43"
                            /> -->
                        </a>
                    </div>
                </div>
            </div>
        </section>

        <section class="bg-black pt-4">
            <div class="relative wrapper">
                <div class="info-section -mt-40 || lg:-mt-80">
                    <h2>
                        SOMI on the
                        <span class="text-primary">Media</span>
                    </h2>
                    <div class="flex justify-between gap-6 overflow-x-scroll">
                        <!-- @foreach(postService()->all(parentCategory: 'in-media',sort:['orderBy' =>
                                'desc','sortBy' => 'published_at'])->take(6) as $post) -->
                        <a href="/" class="somi-card somi-card-news">
                            <div class="title-2 font-semibold mih-h-10 line-clamp-2 || lg:min-h-14">
                                <!-- {{$post->title}} -->
                            </div>
                            <span class="flex items-center gap-4 text-xs">
                                <!-- <img src="/template/icons/calendar.svg" width="24" height="24" alt="calender" /> -->
                                <!-- {{$post->published_at}} -->
                            </span>
                            <p class="text-sm md:text-base line-clamp-4">
                                <!-- {!! $post->description !!} -->
                            </p>
                        </a>
                        <!-- @endforeach -->
                    </div>

                    <div class="flex items-center flex-wrap gap-5 justify-around || lg:justify-between">
                        <!-- <img
                            class="object-contain h-5 || lg:h-auto"
                            src="/template/icons/ad-logo.png"
                            alt="ad logo"
                            width="21"
                            height="20"
                            loading="lazy"
                        />
                        <img
                            class="object-contain h-5 || lg:h-auto"
                            src="/template/icons/de-volkskrant.png"
                            alt="de-volkskrant logo"
                            width="151"
                            height="20"
                            loading="lazy"
                        />

                        <img
                            class="object-contain h-5 || lg:h-auto"
                            src="/template/icons/rtl.png"
                            alt="rtl logo"
                            width="126"
                            height="20"
                            loading="lazy"
                        />
                        <img
                            class="object-contain h-5 || lg:h-auto"
                            src="/template/icons/telegraaf.png"
                            alt="telegraaf logo"
                            width="92"
                            height="20"
                            loading="lazy"
                        /> -->
                    </div>
                    <a class="btn btn-secondary ml-auto" href="/news">View all</a>
                </div>
            </div>
        </section>

        <section class="bg-black text-white pt-28 || lg:pt-52">
            <div class="wrapper flex flex-col gap-12 || lg:gap-20">
                <div class="flex flex-col gap-10">
                    <h2>Why invest in SOMI?</h2>
                    <p class="title-1">
                        Support us in protecting European citizens against the
                        <br />
                        manipulation of personal data from big tech companies.
                    </p>
                </div>
                <div class="payout-section">
                    <!-- <img
                        src="/template/images/footer-gradiane.webp"
                        alt="bg"
                        loading="lazy"
                        aria-hidden="true"
                        class="absolute inset-0 w-full h-full object-cover rounded-4xl z-0"
                        width="1536"
                        height="946"
                    /> -->
                    <div
                        class="absolute z-20 top-5 -right-3 shadow-badge px-4 pb-px bg-gradient-to-r from-secondary to-secondary-dark || lg:top-20 lg:-right-5 lg:px-6 lg:py-2"
                    >
                        <span class="text-xs text-black font-redHat lg:text-base">
                            over
                            <strong>€227.000</strong>
                            certificates sold!
                        </span>
                    </div>
                    <!-- <img
                        class="absolute left-0 top-0 z-0"
                        src="/template/images/dots-primary.png"
                        loading="lazy"
                        alt="dots"
                    /> -->

                    <div class="static z-20 flex flex-col gap-2.5 items-center || lg:gap-5">
                        <h2>Payout</h2>
                        <span
                            class="text-6xl font-medium bg-clip-text text-center text-transparent bg-gradient-to-r from-sticky to-secondary || lg:text-[6.25rem]"
                        >
                            500% - 600%
                        </span>
                        <p class="title-1">
                            Minimum investment from
                            <span class="text-secondary font-semibold">€1000,-</span>
                        </p>
                    </div>
                    <div class="flex z-20 justify-center flex-wrap gap-5 || lg:flex-nowrap lg:gap-10">
                        <a href="/investment" class="btn btn-white-secondary-button">Discover more</a>
                        <a href="/investment-application" class="btn btn-white-primary-button">Invest now</a>
                    </div>
                </div>
            </div>
        </section>

        <section class="bg-black text-white py-28 relative overflow-hidden || lg:py-52">
            <div class="wrapper w-full flex flex-col justify-between gap-10 || md:gap-1 md:flex-row">
                <div class="flex flex-col gap-10 || md:gap-20 md:w-1/2">
                    <div class="flex flex-col gap-10">
                        <h2>
                            Garantie Process certificate
                            <br />
                            and Process certificate Series 2025
                        </h2>
                        <p class="title-1">
                            Download our brochure for
                            <br />
                            more information.
                        </p>
                    </div>
                    <div class="hidden static z-20 gap-4 || md:flex">
                        <a
                            href="/storage/55163/Combined-Certificates-Serie-2025_compressed.pdf"
                            target="_blank"
                            class="btn btn-primary"
                        >
                            Download
                            <!-- <img
                                src="/template/icons/download.svg"
                                width="24"
                                height="24"
                                alt="download icon"
                                loading="lazy"
                            /> -->
                        </a>
                    </div>
                </div>
                <div class="relative z-20 flex flex-col items-center gap-14 || md:items-end md:w-1/2">
                    <!-- <img
                        src="https://somi.nl/storage/55394/Brochure-EN.webp"
                        class="w-full shadow-card3 rounded || sm:w-80 sm:h-[26rem]"
                        alt="brochure"
                        width="595"
                        height="842"
                        loading="lazy"
                    />
                    <img
                        class="absolute z-0 -top-16 right-[4%] || md:-right-20"
                        src="/template/images/dots-who-gray.png"
                        alt="dots"
                        loading="lazy"
                    /> -->
                    <a
                        href="https://somi.nl/storage/49878/NL---Garantie-Procescertificaten-Serie-2024---SOMI-compressed.pdf"
                        target="_blank"
                        class="btn btn-primary || md:hidden"
                    >
                        Download
                        <!-- <img
                            class="w-4 h-4"
                            src="/template/icons/download.svg"
                            width="24"
                            height="24"
                            alt="download icon"
                            loading="lazy"
                        /> -->
                    </a>
                </div>
            </div>
            <div class="absolute bottom-0 left-0 right-0 bg-gradient10 h-96 w-full z-0"></div>
        </section>
    </div>
</template>

<script setup>
import { useMainStore } from "~/src/stores/mainStore";
import { useLocalePath } from "#i18n";
import HeroSlider from "~/components/HeroSlider.vue";

const mainStore = useMainStore();
const localPath = useLocalePath();

mainStore.parseLang();
</script>
