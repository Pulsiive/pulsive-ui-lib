import i18n from "i18next";
import LanguageDetector from "i18next-browser-languagedetector";
import {initReactI18next} from "react-i18next";
import {Locales} from "../src/utils/locale";

i18n.use(LanguageDetector)
    .use(initReactI18next)
    .init({
        resources: Locales,
        detection: {
            order: ["navigator"],
        },
        fallbackLng: "en",
        interpolation: {escapeValue: false},
        debug: false,
    });

export default i18n;
