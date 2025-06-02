/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./components/**/*.{js,vue,ts}",
        "./layouts/**/*.vue",
        "./pages/**/*.vue",
        "./plugins/**/*.{js,ts}",
        "./app.vue",
        "./error.vue",
    ],
    theme: {
        extend: {
            fontFamily: {
                montserrat: ["Montserrat"],
                redHat: ["RedHat"],
            },
            boxShadow: {
                header: "0px 8px 16px 0px rgba(33, 37, 41, 0.16)",
                hard: "30px 30px 40px 0 rgba(162, 163, 172, 1)",
                hardDark: "30px 30px 40px 0 rgba(0, 0, 0, 0.6)",
                light: "4px 4px 20px 0 rgba(33, 37, 41, .1)",
                card: "20px 20px 50px 0 rgba(0, 10, 255, 0.15)",
                card2: "20px 20px 16px 0 rgba(0, 10, 255, 0.15)",
                card3: "-60px 60px 60px 0 rgba(0, 10, 255, 0.15)",
                dark: "4px 4px 30px 0 rgba(63, 61, 86, 0.20)",
                badge: "0 4px 8px 0px #858585",
                inpShadow: "0 4px 20px 0px rgba(0, 10, 255, 0.20) inset",
                teams: "0 4px 20px 0px rgba(0, 10, 255, 0.20)",
                payout: "0 0 20px 1px #ffbb763f",
                slider: "4px 4px 20px 0 rgba(33, 37, 41, 0.10)",
                stepper: "0px 4px 20px rgba(0, 10, 255, 0.30)",
            },
            aspectRatio: {
                poly: "4/3",
            },
            borderRadius: {
                "4xl": "30px",
                "5xl": "40px",
            },
            borderWidth: {
                3: "3px",
                5: "5px",
            },
            backgroundImage: {
                gradient: "linear-gradient(22deg, rgba(164, 168, 255, 0.80) -85.73%, rgba(240, 235, 232, 0.80) 69.8%)",
                gradient2:
                    "linear-gradient(180deg, rgba(33, 37, 41, 0.50) 0%, rgba(29, 34, 58, 0.43) 25%, rgba(26, 31, 79, 0.40) 50%, rgba(23, 29, 101, 0.31) 75%, rgba(0, 10, 255, 0.19) 100%)",
                gradient3: "linear-gradient(180deg, rgba(255, 255, 255, 0.40) 0%, rgba(255, 255, 255, 0.00) 100%)",
                gradient4:
                    "linear-gradient(180deg, rgba(255, 255, 255, 0.50) 0%, rgba(254, 255, 255, 0.00) 100%, lightgray 50% )",
                gradientNumber: "linear-gradient(180deg, rgba(0, 10, 255, 0.18) 0%, rgba(240, 235, 232, 0.00) 100%)",
                gradient5:
                    "linear-gradient(16deg, rgba(164, 168, 255, 0.80) -79.43%, rgba(240, 235, 232, 0.80) 76.56%)",
                gradient6:
                    "linear-gradient(6deg, rgba(164, 168, 255, 0.80) -123.75%, rgba(240, 235, 232, 0.80) 60.31%)",
                gradient7: "linear-gradient(260deg, #48A7FF 12.64%, #48A7FF 30.55%, #4FB8D6 67.52%, #52BEC6 128.17%)",
                gradient8: "linear-gradient(270deg, #000AFF 0.07%, #080838 99.91%)",
                gradient9: "linear-gradient(260deg, #A4A8FF 12.64%, #F0EBE8 128.17%)",
                gradient10:
                    "linear-gradient(180deg, rgba(33, 37, 41, 0.30) 0%, rgba(29, 34, 58, 0.26) 25%, rgba(26, 31, 79, 0.24) 50%, rgba(23, 29, 101, 0.19) 75%, rgba(0, 10, 255, 0.12) 100%)",
            },
            fontSize: {
                "10xl": "180px",
            },
            maxHeight: {
                500: "500px",
                400: "400px",
                1000: "1000px",
            },
            width: {
                inherit: "inherit",
                124: "124px",
                306: "306px",
            },
        },
        colors: {
            transparent: "transparent",
            current: "currentColor",
            header: "rgba(227, 227, 227, 0.55)",
            logo: "#000577",
            primary: {
                DEFAULT: "#000AFF",
                dark: "#071E55",
            },
            secondary: {
                DEFAULT: "#00FF94",
                dark: "#52BEC6",
            },
            sticky: {
                DEFAULT: "#4FB8D6",
                light: "#48A7FF",
            },
            gray: {
                DEFAULT: "#F0EBE8",
                400: "#9ca3af",
                light: "#D9D9D9",
                2: "#F0EBE8CC",
            },
            blue: {
                DEFAULT: "#24284C",
                dark: "#20477D",
                light: "#A4A8FF",
            },
            white: {
                DEFAULT: "#FFFFFF",
            },
            black: {
                DEFAULT: "#212529",
                soft: "#2A3333",
            },
            inactive: {
                DEFAULT: "#A2A3AC",
            },
            red: {
                DEFAULT: "#D65252",
            },
        },
    },
    plugins: [],
};
