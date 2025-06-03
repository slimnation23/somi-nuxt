<template>
    <div class="hero-slider flex items-center justify-between relative rounded-3xl" v-if="allCases.length > 0">
        <div class="w-full">
            <Swiper
                :slides-per-view="1"
                :navigation="navigationOptions"
                :loop="true"
                :modules="modules"
                :pagination="pagination"
                @swiper="onSwiper"
                @slideChange="onSlideChange"
            >
                <SwiperSlide v-for="(slide, index) in allCases" :key="index" :data-history="index">
                    <CardHero :cardData="slide" />
                </SwiperSlide>
            </Swiper>
        </div>

        <div class="rightArrow">
            <button
                @click="handleSlideToNext"
                class="next-btn absolute top-2 right-4 shadow-card bg-white w-14 h-14 rounded-full flex justify-center items-center || sm:-top-20 sm:right-8 md:right-8 lg:right-5 md:-top-3 lg:w-20 lg:h-20"
            >
                <NuxtImg
                    src="/icons/right-arrow.svg"
                    width="18"
                    height="29"
                    class="max-w-5 max-h-5 || lg:max-h-fit lg:max-w-fit"
                    alt="right-arrow"
                />
            </button>
        </div>
    </div>
</template>

<script>
import { Swiper, SwiperSlide } from "swiper/vue";
import { Navigation, Pagination, History } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import CardHero from "~/components/CardHero.vue";

import { useMainStore } from "~/src/stores/mainStore";

export default {
    components: {
        CardHero,
        Swiper,
        SwiperSlide,
    },
    data() {
        return {
            swiper: null,
            navigationOptions: {
                nextEl: ".next-btn",
            },
            modules: [Navigation, Pagination, History],
            pagination: {
                clickable: true,
            },
        };
    },
    computed: {
        allCases() {
            const mainStore = useMainStore();
            return mainStore.getActiveClaims;
        },
    },
    mounted() {
        const mainStore = useMainStore();
        mainStore.fetchAllCases();
    },
    methods: {
        onSwiper(swiperInstance) {
            this.swiper = swiperInstance;
        },
        onSlideChange(swiperInstance) {
            this.swiper = swiperInstance;
        },
        handleSlideToNext() {
            if (this.swiper) {
                this.swiper.slideNext();
            }
        },
    },
};
</script>

<style lang="scss">
.hero-slider {
    .tag {
        position: absolute;
        top: 2.5rem;
        left: 0rem;
        z-index: 2;

        span {
            font-size: 1rem;
            font-style: normal;
            font-weight: 400;
            line-height: normal;
        }
    }

    .swiper-pagination {
        position: static;
        margin-top: theme("space.5") !important;
        padding-left: theme("space.3");

        .swiper-pagination-bullet {
            width: 0.75rem;
            height: 0.75rem;
            display: inline-block;
            opacity: 1;
            border-width: 2px;
            border-color: #000aff;
            border-radius: 9999px;
            background: #f0ebe8;

            &.swiper-pagination-bullet-active {
                background-color: #000aff;
            }
        }

        @media (max-width: 1024px) {
            margin-top: theme("space.4") !important;
            padding-left: theme("space.0");
        }
    }

    .swiper {
        width: 100%;
        height: 100%;
        border-radius: 1.5rem;

        .swiper-slide {
            img {
                width: 100%;
                height: 100%;
                object-fit: cover;
            }
        }
    }
}
.rightArrow {
    position: absolute;
    z-index: 1;
    right: -2rem;
    top: 11rem;
}

.leftArrow {
    position: absolute;
    z-index: 2;
    left: -2rem;
    top: 11rem;
}

@media (min-width: 640px) {
    .rightArrow {
        right: -4rem;
        top: 17.5rem;
    }

    .leftArrow {
        left: -3.5rem;
        top: 17.5rem;
    }
}

@media (min-width: 1024px) {
    .rightArrow {
        right: -3rem;
        top: 16.5rem;
    }

    .leftArrow {
        left: -2.25rem;
        top: 16.5rem;
    }
}
</style>
