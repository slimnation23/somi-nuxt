<template>
    <div class="claim-slider">
        <Swiper
            :modules="[SwiperNavigation, SwiperPagination]"
            :slides-per-view="1"
            :space-between="20"
            :loop="true"
            :breakpoints="{
                '768': {
                    slidesPerView: 1.5,
                    spaceBetween: 40,
                },
                '1024': {
                    slidesPerView: 2.2,
                    spaceBetween: 0,
                },
            }"
            :pagination="{ clickable: true }"
        >
            <SwiperSlide v-for="(item, index) in ActiveClaimsSlider" :key="index">
                <div class="claims-card">
                    <div
                        class="absolute left-0 right-0 bg-gray-light flex justify-center items-center rounded-full m-auto -top-8 w-16 h-16 || md:-top-20 md:w-36 md:h-36"
                    >
                        <NuxtImg
                            width="150"
                            height="150"
                            class="w-10 h-auto || md:w-20"
                            :src="item.icon"
                            :alt="item.platform"
                            loading="lazy"
                        />
                    </div>
                    <div
                        class="absolute top-6 -left-2 shadow-badge rounded-sm px-4 pb-px || lg:-left-6 lg:px-6 lg:py-2"
                        :class="statusClasses(item.status)"
                    >
                        <span class="font-redHat text-black text-xs || lg:text-base">
                            status:
                            <strong>{{ item.status }}</strong>
                        </span>
                    </div>
                    <div class="relative">
                        <div
                            class="absolute inset-0 bg-blue-light blur-2xl opacity-30 rounded"
                            aria-hidden="true"
                        ></div>
                        <div :class="[item.title.length > 7 ? 'title-5' : 'title-3', 'font-redHat break-words']">
                            {{ item.title }}
                        </div>
                    </div>

                    <p v-if="item.text" class="title-1">{{ item.text }}</p>
                    <a :href="item.link" class="btn btn-primary">Join now</a>
                </div>
            </SwiperSlide>
            <!-- Pagination -->
            <div class="swiper-pagination"></div>
        </Swiper>
    </div>
</template>

<script>
import { Swiper, SwiperSlide } from "swiper/vue";
import { Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { useMainStore } from "~/src/stores/mainStore";

export default {
    components: { Swiper, SwiperSlide },
    setup() {
        return {
            SwiperNavigation: Navigation,
            SwiperPagination: Pagination,
        };
    },
    computed: {
        ActiveClaimsSlider() {
            const mainStore = useMainStore();
            return mainStore.getActiveClaimsSlider;
        },
    },
    mounted() {
        const mainStore = useMainStore();
        mainStore.fetchActiveClaimsSlider();
    },
    methods: {
        statusClasses(status) {
            return status === "active" || status === "actief" || status === "aktiv"
                ? "bg-gradient-to-r from-secondary to-secondary-dark"
                : "bg-gradient-to-r from-sticky to-secondary-dark";
        },
    },
};
</script>

<style scoped>
.swiper {
    overflow: visible;
}

.swiper-slide {
    max-width: 100%;
    margin: 0 auto;
}

@media (min-width: 640px) {
    .swiper-slide {
        max-width: 415px;
    }
}

::v-deep(.swiper-pagination) {
    bottom: -50px !important;
    display: flex;
    justify-content: center;
    align-items: center;
}

::v-deep(.swiper-pagination-bullet) {
    border: 2pt solid #fff;
    width: 14px;
    height: 14px;
    opacity: 1;
    transition: all 0.3s ease;
}

::v-deep(.swiper-pagination-bullet-active) {
    background: #fff;
    width: 14px;
    height: 14px;
}
</style>
