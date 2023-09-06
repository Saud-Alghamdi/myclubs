import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import enValidation from "./locales/en/validation.json";
import enToast from "./locales/en/toast.json";
import arValidation from "./locales/ar/validation.json";
import arToast from "./locales/ar/toast.json";

i18n.use(initReactI18next).init({
  resources: {
    en: {
      validation: enValidation,
      toast: enToast,
    },
    ar: {
      validation: arValidation,
      toast: arToast,
    },
  },
  lng: "en",
  fallbackLng: "en",
  interpolation: {
    escapeValue: false,
  },
  ns: ["validation", "toast"],
  defaultNS: "validation",
});

export default i18n;
