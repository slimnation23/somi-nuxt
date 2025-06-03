<template>
    <div :class="[{ 'flex justify-center': windowWidth < 640 }]">
        <div
            class="flex items-center justify-between relative rounded-4xl"
            v-show="pastActions.length"
        >
            <div class="w-full">
                <template v-if="windowWidth > 640">
                    <swiper
                        :slidesPerView="2.8"
                        :spaceBetween="20"
                        :navigation="false"
                        :pagination="false"
                        :loop="true"
                        :clickable="true"
                        :modules="modules"
                        :breakpoints="{
                            '1024': {
                                slidesPerView: 2.2,
                            },
                            '1170': {
                                slidesPerView: 3,
                            },
                        }"
                        @swiper="onSwiper"
                        @slideChange="onSlideChange"
                    >
                        <swiper-slide
                            v-for="(slider, index) in pastActions"
                            :key="index"
                            :data-history="index"
                        >
                            <past-case-card :cardData="slider" />
                        </swiper-slide>
                    </swiper>
                </template>
                <template v-if="windowWidth <= 640">
                    <swiper
                        :effect="'cards'"
                        :cardsEffect="{
                            perSlideOffset: 12,
                            perSlideRotate: 4,
                        }"
                        :grabCursor="true"
                        :modules="modules"
                        @swiper="onSwiper"
                        @update="onUpdate"
                        :loop="true"
                    >
                        <swiper-slide
                            class="rounded-4xl"
                            v-for="(slider, index) in pastActions"
                            :key="index"
                            :data-history="index"
                        >
                            <past-case-card :cardData="slider" />
                        </swiper-slide>
                    </swiper>
                </template>
            </div>
            <template v-if="windowWidth < 640">
                <div class="rightArrowEffectCard">
                    <button
                        @click="handleSlideToNext"
                        class="next-btn absolute shadow-card bg-white w-14 h-14 rounded-full pr-1 flex justify-center items-center right-3 top-0"
                    >
                        <NuxtImg
                            src="/icons/right-arrow.svg"
                            class="max-w-5 max-h-5 -mr-2"
                            alt="left-arrow"
                            width="12"
                            height="19"
                        />
                    </button>
                </div>
            </template>
            <template v-if="windowWidth > 640">
                <div class="rightArrow">
                    <button
                        @click="handleSlideToNext"
                        class="next-btn absolute shadow-card bg-white w-14 h-14 rounded-full flex pr-1 justify-center items-center top-0 right-3 || lg:right-0 lg:w-20 lg:h-20"
                    >
                        <NuxtImg
                            src="/icons/right-arrow.svg"
                            class="max-w-5 max-h-5 -mr-1 || lg:max-h-fit lg:max-w-fit"
                            alt="left-arrow"
                            width="18"
                            height="29"
                        />
                    </button>
                </div>
                <div class="leftArrow">
                    <button
                        @click="handleSlideToPrev"
                        class="prev-btn absolute shadow-card bg-white w-14 h-14 rounded-full flex justify-center items-center left-3 top-0 || lg:left-0 lg:w-20 lg:h-20"
                    >
                        <NuxtImg
                            src="/icons/right-arrow.svg"
                            class="max-w-5 max-h-5 -ml-1 -rotate-180 || lg:max-h-fit lg:max-w-fit"
                            alt="left-arrow"
                            width="18"
                            height="29"
                        />
                    </button>
                </div>
            </template>
        </div>
    </div>
</template>
<script>
import PastCaseCard from "~/components/PastCaseCard.vue";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Swiper, SwiperSlide } from "swiper/vue";
import { EffectCards } from "swiper/modules";
import { useMainStore } from "~/src/stores/mainStore";

export default {
    components: {
        Swiper,
        SwiperSlide,
        PastCaseCard,
    },
    data() {
        return {
            windowWidth: window.innerWidth,
            swiper: null,
        };
    },
    computed: {
        pastActions() {
            const mainStore = useMainStore();
            return mainStore.getPastActions;
        },
    },
    mounted() {
        const mainStore = useMainStore();
        mainStore.fetchAllCases();
        window.addEventListener("resize", this.handleResize);
    },
    beforeUnmount() {
        window.removeEventListener("resize", this.handleResize);
    },
    methods: {
        onSwiper(swiper) {
            this.swiper = swiper;
            this.windowWidth < 640 && this.swiper.slideTo(this.$store.getters.getPastActions.length - 1);
        },
        onSlideChange(swiper) {
            this.swiper = swiper;
        },
        handleSlideToNext() {
            this.swiper.slideNext();
        },
        handleSlideToPrev() {
            this.swiper.slidePrev();
        },
        handleResize() {
            this.windowWidth = window.innerWidth;
        },
        onUpdate() {
            this.handleSlideToNext();
            this.swiper.slideTo(this.$store.getters.getPastActions.length - 1);
        },
    },
    setup() {
        return {
            modules: [EffectCards],
        };
    },
};
</script>

<style scoped>
.swiper {
    width: 100%;
    height: 100% !important;
    border-radius: 1.5rem;
}

.swiper-slide {
    height: auto;
    color: #212529 !important;
}

.rightArrow {
    position: absolute;
    z-index: 1;
    right: -3.75rem;
    top: 11.25rem;
}

.arrowImg {
    width: 7.5rem;
    height: 7.5rem;
}

.leftArrow {
    position: absolute;
    z-index: 2;
    left: -3.75rem;
    top: 11.25rem;
}

@media (min-width: 320px) {
    .rightArrowEffectCard {
        position: absolute;
        z-index: 1;
        right: 0rem;
        top: 10rem;
    }
}

@media (min-width: 375px) {
    .rightArrowEffectCard {
        position: absolute;
        z-index: 1;
        right: -2.25rem;
    }
}

@media (min-width: 425px) {
    .rightArrowEffectCard {
        position: absolute;
        z-index: 1;
        right: -2.3rem;
        top: 9.5rem;
    }
}

@media (max-width: 639px) {
    .swiper {
        width: 18rem;
        height: 20rem;
        overflow: visible;
    }

    .swiper-slide {
        border-radius: 1.125rem;
        font-size: 1.375rem;
        font-weight: bold;
        color: #fff;
    }
}

@media (min-width: 640px) {
    .rightArrow {
        right: -2.063rem;
        top: 8.625rem;
    }

    .leftArrow {
        left: -2.25rem;
        top: 8.625rem;
    }

    .arrowImg {
        width: 5rem;
        height: 5.625rem;
    }
}

@media (min-width: 1024px) {
    .rightArrow {
        right: -2.063rem;
        top: 12.125rem;
    }

    .leftArrow {
        left: -2.25rem;
        top: 12.125rem;
    }

    .arrowImg {
        width: 5rem;
        height: 5.625rem;
    }
}
</style>
