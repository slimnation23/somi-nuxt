<template>
    <div class="sm:pl-3">
        <div class="hidden tag px-5 py-1 bg-gradient-to-r from-secondary to-secondary-dark || lg:inline-flex">
            <span class="font-redHat">
                {{ $t("homepage.status") }}
                <strong>{{ $t("homepage.active") }}</strong>
            </span>
        </div>
        <a :href="cardData.url" target="_blank" rel="noopener noreferrer">
            <img
                class="card-image rounded-t-3xl !h-[220px] || md:!h-[296px]"
                :src="cardData.image"
                :alt="cardData.title"
                width="526"
                height="400"
                loading="lazy"
            />
        </a>
        <div class="rounded-b-3xl bg-white p-8 || lg:py-12 lg:px-10">
            <p class="title-7 pb-5 lg:pb-5">{{ cardData.title }}</p>
            <p class="title-2 pb-10">{{ truncatedDescription }}</p>
            <div class="flex justify-center">
                <a class="btn btn-primary" :href="cardData.url">
                    {{ $t("homepage.join-now") }}
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
    computed: {
        truncatedDescription() {
            const maxLength = 115;
            if (this.cardData.description.length > maxLength) {
                return this.cardData.description.slice(0, maxLength) + "...";
            } else {
                return this.cardData.description;
            }
        },
    },
};
</script>

<style lang="scss">
.card-image {
    width: 100%;
}

@media (max-width: 639px) {
    .card-image {
        width: 100%;
        height: 13.75rem;
    }

    .description-title {
        padding: 1.875rem 1.875rem 0 1.875rem;
    }

    .description-text {
        font-size: 0.875rem;
        line-height: 1.25rem;
        padding: 1.25rem 1.875rem 1.875rem 1.875rem;
    }
}

@media (max-width: 392px) {
    .description-title {
        font-size: 1rem;
    }
}
</style>
