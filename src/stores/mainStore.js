// stores/mainStore.js
import { defineStore } from "pinia";
import axios from "axios";

export const useMainStore = defineStore("main", {
    state: () => ({
        device: {
            mobile: false,
            width: 0,
            os: null,
        },
        navStatus: false,
        lang: "nl",
        baseUrl: "",
        dictionary: [],
        dictionaryLoaded: false,
        modal: false,
        modalObj: {
            loadType: null,
            purgeOnClose: false,
            header: "",
            body: "",
            class: "",
            buttons: {},
            components: [],
            layout: "modal",
            closeBtnClass: "",
        },
        casesFilters: {
            sort: null,
            country: null,
            status: null,
        },
        newsSort: false,
        faq: [],
        cases: [],
        activeClaimsSlider: [],
        team: [],
    }),

    getters: {
        getBaseUrl: (state) => state.baseUrl,
        getDevice: (state) => state.device,
        getMobile: (state) => state.device.mobile,
        getNav: (state) => state.navStatus,
        currentLang: (state) => state.lang,
        getAllCases: (state) => state.cases,
        getCasesFilters: (state) => state.casesFilters,
        getDictionary: (state) => state.dictionary,
        getDictionaryLoaded: (state) => state.dictionaryLoaded,
        getLang: (state) => state.lang,
        getModal: (state) => state.modalObj,
        getModalState: (state) => state.modal,
        getNewsSort: (state) => state.newsSort,
        getActiveClaimsSlider: (state) => {
            const lang = state.lang;

            return state.activeClaimsSlider.filter((item) => {
                const category = item[`category-${lang}`];
                return item.language === lang && category === "running";
            });
        },
        getPastActions: (state) => {
            const lang = state.lang;

            return state.cases.filter((item) => {
                const category = item[`category-${lang}`];
                return item.language === lang && category !== "running";
            });
        },
        getActiveClaims: (state) => {
            const langFiltered = state.cases.filter((c) => c.language === state.lang);
            return langFiltered.filter((c) => !!c.status);
        },
        getSortedAllCases: (state) => {
            let languageFilteredList = state.cases.filter((c) => c.language === state.lang);

            if (state.casesFilters.sort || state.casesFilters.country || state.casesFilters.status) {
                return languageFilteredList.filter((caseItem) => {
                    let matches = true;
                    if (state.casesFilters.sort) {
                        matches = matches && caseItem[`category-${state.lang}`].includes(state.casesFilters.sort);
                    }
                    if (state.casesFilters.country) {
                        matches = matches && caseItem[`category-${state.lang}`].includes(state.casesFilters.country);
                    }
                    if (state.casesFilters.status) {
                        matches = matches && caseItem[`category-${state.lang}`].includes(state.casesFilters.status);
                    }
                    return matches;
                });
            }
            return languageFilteredList;
        },
        getFilteredFAQ: (state) => {
            return state.faq.filter((faq) => faq.language === state.lang).map((faq) => ({ ...faq, open: false }));
        },
    },

    actions: {
        async parseLang() {
            try {
                const response = await axios.get("https://somi.nl/api/v1/translations");
                this.dictionary = response.data;
                this.dictionaryLoaded = true;
            } catch (error) {
                console.error(error);
            }
        },

        setLang(lang) {
            this.lang = lang;
        },

        async setDevice() {
            this.device.mobile = await this.isMobile();
            this.device.width = window.innerWidth;
        },

        detectLanguage() {
            this.lang = "nl";
            const qs = new URL(document.location.href);
            if (qs.pathname.includes("/nl")) this.lang = "nl";
            else if (qs.pathname.includes("/en")) this.lang = "en";
            else if (qs.pathname.includes("/fr")) this.lang = "fr";
            else if (qs.pathname.includes("/it")) this.lang = "it";
            else if (qs.pathname.includes("/de")) this.lang = "de";
            else this.lang = "nl";
        },

        toggleNav() {
            this.navStatus = !this.navStatus;
        },

        hideNav() {
            this.navStatus = false;
        },

        async fetchTeam() {
            try {
                const response = await axios.get(
                    `${this.baseUrl}/api/v1/content-manger/get-data/somi-team?sortBy=id&orderBy=asc`
                );
                this.setData({ data: response.data.result, source: "team" });
            } catch (error) {
                console.error(error);
            }
        },

        async fetchFaqs() {
            try {
                const response = await axios.get(`${this.baseUrl}/api/v1/content-manger/get-data/somi-website-faq`);
                this.faq = response.data.result;
            } catch (error) {
                console.error(error);
            }
        },

        async fetchAllCases() {
            if (!this.baseUrl) {
                this.setBaseUrl();
            }
            try {
                const response = await axios.get(`${this.baseUrl}/api/v1/content-manger/get-data/cases`);
                this.cases = response.data.result;
            } catch (error) {
                console.error(error);
            }
        },

        async fetchActiveClaimsSlider() {
            try {
                const response = await axios.get("https://somi.nl/api/v1/content-manger/get-data/active-claims-slider");
                this.activeClaimsSlider = response.data.result;
            } catch (error) {
                console.error(error);
            }
        },

        setBaseUrl() {
            this.baseUrl = window.location.origin;
            if (this.baseUrl.includes("localhost")) {
                this.baseUrl = "https://somi.nl";
            }
        },

        setData({ data, source }) {
            const list = [];
            const lang = this.lang;
            data.forEach((d) => {
                if (d.language === lang) {
                    d.status = false;
                    const cat = d[`section-${lang}`];
                    const found = list.find((item) => item.category === cat);
                    if (found) {
                        found.items.push(d);
                    } else {
                        list.push({ category: cat, items: [d], status: false });
                    }
                }
            });
            this[source] = list;
        },

        setCasesFilter({ filterType, value }) {
            this.casesFilters[filterType] = value;
        },

        clearCasesFilter(filterType) {
            if (filterType) {
                this.casesFilters[filterType] = null;
            } else {
                this.casesFilters = {
                    sort: null,
                    country: null,
                    status: null,
                };
            }
        },

        setNewsSort(sort) {
            this.newsSort = sort;
        },

        showModal() {
            document.body.style.overflow = "hidden";
            this.modal = true;
        },

        hideModal() {
            this.modal = false;
            document.body.style.overflow = "auto";
            if (this.modalObj.purgeOnClose) {
                setTimeout(() => {
                    this.unsetModal();
                }, 500);
            }
        },

        unsetModal() {
            this.modalObj = {
                loadType: null,
                purgeOnClose: false,
                header: "",
                body: "",
                class: "",
                buttons: {},
                components: [],
                layout: "modal",
                closeBtnClass: "",
            };
        },

        setModal(obj) {
            this.modalObj.loadType = obj.loadType;
            this.modalObj.purgeOnClose = obj.purgeOnClose;
            this.modalObj.header = obj.header;
            this.modalObj.body = obj.body;
            this.modalObj.class = obj.class;
            this.modalObj.component = obj.component;
            this.modalObj.layout = obj.layout;
            this.modalObj.closeBtnClass = obj.closeBtnClass;
            this.modalObj.buttons = obj.buttons || false;
            if (obj.loadType === "component") {
                this.modalObj.components = [obj.component.name];
            }
            this.showModal();
        },

        showFormModal(form) {
            const modal = {
                loadType: "component",
                component: { name: form.form, options: { data: form } },
                layout: "flat",
                purgeOnClose: true,
                closeBtnClass:
                    "absolute right-14 top-14 z-50 cursor-pointer text-yellow text-3xl leading-none || lg:text-5xl",
                buttons: false,
            };
            this.setModal(modal);
        },

        async isMobile() {
            return window.innerWidth <= 768;
        },
    },
});
