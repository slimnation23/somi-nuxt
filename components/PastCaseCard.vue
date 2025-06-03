<template>
    <div class="flex flex-col rounded-4xl">
        <img
            class="rounded-t-4xl w-full h-44 object-cover || lg:h-60"
            loading="lazy"
            :src="cardData.image"
            alt="cardImage"
        />
        <div
            class="flex flex-col gap-5 bg-white rounded-b-4xl min-h-56 p-6 || sm:justify-between lg:min-h-[304px] lg:p-11"
        >
            <h3 class="break-words line-clamp-2 || md:min-h-14 lg:min-h-16">
                {{ cardData.title }}
            </h3>
            <p class="title-2 font-normal line-clamp-3">
                {{ cardData.description }}
            </p>
            <div class="hidden justify-end || sm:flex">
                <a
                    class="title-2 text-primary font-medium underline hover:font-semibold transition-all duration-500 ease-in-out"
                    href="all-cases"
                >
                    View claim
                </a>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    props: {
        cardData: {
            type: Object,
            required: true,
        },
    },
    data() {
        return {
            windowWidth: window.innerWidth,
        };
    },
    methods: {
        handleResize() {
            this.windowWidth = window.innerWidth;
        },
    },
};
</script>
