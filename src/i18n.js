import i18n from "i18next";
import detector from "i18next-browser-languagedetector";
import { initReactI18next } from "react-i18next";

import en from './translations/locales/en';
import vi from './translations/locales/vi';

// the translations
// (tip move them in a JSON file and import them)
const resources = {
    en: {
        translation: en
    },
    vi: {
        translation: vi
    }
};

i18n
    .use(detector)
    .use(initReactI18next) // passes i18n down to react-i18next
    .init({
        resources
    });

export default i18n;