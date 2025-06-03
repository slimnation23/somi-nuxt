import { useMainStore } from "@/stores/mainStore";

const isEmptyObject = (obj) => {
    for (var prop in obj) {
        if (Object.prototype.hasOwnProperty.call(obj, prop)) {
            return false;
        }
    }
    return JSON.stringify(obj) === JSON.stringify({});
};

export const translateMixin = {
    methods: {
        Translate(input, langParam = null, load = 0) {
            const mainStore = useMainStore();
            const lang = langParam || mainStore.lang;
            const dic = mainStore.dictionary;

            let res = input;

            if (isEmptyObject(dic)) {
                if (!load) {
                    setTimeout(() => this.Translate(input, lang, 1), 300);
                }
            } else {
                for (const { key, ...translations } of dic) {
                    if (input === key) {
                        res = translations[lang] || translations["en"];
                        break;
                    }
                }
            }

            return res;
        },
    },
};
