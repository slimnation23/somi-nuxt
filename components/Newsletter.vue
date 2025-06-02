<template>
    <form class="flex flex-col" ref="form" @submit.prevent.stop="validate($event)">
        <div class="relative">
            <input
                id="newsletter-input"
                class="w-full rounded-xl italic shadow-inpShadow px-4 xl:px-6 py-4 text-black title-2"
                type="email"
                name="email"
                autocomplete="email"
                v-model="email"
                :placeholder="Translate('Type your email to subscribe')"
            />
            <button
                type="button"
                @click="validate"
                class="absolute right-1.5 top-1/2 -translate-y-1/2 w-8 h-8 md:w-10 md:h-10 cursor-pointer flex items-center justify-center"
            >
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" fill="none">
                    <circle
                        cx="16"
                        cy="16"
                        r="15"
                        transform="matrix(-1 0 0 1 32 0)"
                        fill="#000AFF"
                        stroke="#000AFF"
                        stroke-width="2"
                    />
                    <path
                        fill-rule="evenodd"
                        clip-rule="evenodd"
                        d="M20.905 16.7996L17.833 19.8716C17.6207 20.0839 17.6207 20.4281 17.833 20.6404C18.0453 20.8527 18.3894 20.8527 18.6017 20.6404L22.6376 16.6045C22.7489 16.4932 22.8019 16.3456 22.7965 16.1998C22.802 16.0539 22.7491 15.9062 22.6377 15.7947L18.6017 11.7588C18.3895 11.5465 18.0453 11.5465 17.833 11.7588C17.6207 11.9711 17.6207 12.3153 17.833 12.5276L20.905 15.5996H9.39688C9.0655 15.5996 8.79688 15.8682 8.79688 16.1996C8.79688 16.531 9.06551 16.7996 9.39688 16.7996H20.905Z"
                        fill="white"
                    />
                </svg>
            </button>
        </div>
        <div class="message-container w-full flex justify-end">
            <p
                v-show="submitted === 'success'"
                class="transition-all duration-300 ease-in-out message rounded-2xl text-[#00FF94] text-sm font-bold"
                :class="submitted"
            >
                {{ Translate("Thank you for subscribing!") }}
            </p>
            <p
                v-show="submitted === 'error'"
                class="transition-all duration-300 ease-in-out message rounded-2xl text-red text-sm font-bold"
                :class="submitted"
            >
                {{ Translate("Oops, something went wrong!") }}
            </p>
        </div>
    </form>
</template>

<script>
export default {
    name: "newsletter",
    data() {
        return {
            token: null,
            form: null,
            submitted: null,
            email: null,
        };
    },
    methods: {
        prepareData() {
            let data = {},
                items = this.form.elements;
            for (let item of items) {
                if (item.tagName === "INPUT" || item.tagName === "TEXTAREA") {
                    data[item.name] = item.value;
                }
            }

            const currentLang = this.$store.getters.getLang;
            data.lang = currentLang === "nl" ? "nl" : "en";

            console.log("Data before send", data);

            return data;
        },
        validate(e) {
            let data = {
                data: this.prepareData(),
            };
            this.submit(data);
        },
        submit(data) {
            this.submitted = null;
            Axios({
                method: "POST",
                url: this.$store.getters.getBaseUrl + "/api/v1/content-manger/submit-response/somi_newsletter",
                headers: {
                    "Content-Type": "application/json",
                    "X-CSRF-TOKEN": this.token,
                },
                data: JSON.stringify(data),
            })
                .then((response) => {
                    this.afterSubmit("success");
                })
                .catch((error) => {
                    this.afterSubmit("error");
                });
        },
        afterSubmit(status) {
            this.submitted = status;
            setTimeout(() => {
                this.submitted = null;
                this.email = null;
            }, 3000);
        },
        setup() {
            let tokenTag = document.querySelector('meta[name="csrf-token"]');
            this.token = !!tokenTag ? tokenTag.getAttribute("content") : null;
            this.form = this.$refs.form;
        },
    },
    mounted() {
        this.setup();
    },
};
</script>
<style scoped>
input::placeholder {
    @apply text-blue-dark text-sm xl:text-base;
}
</style>