import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import HttpBackend from "i18next-http-backend";

i18n
  .use(HttpBackend) // Use the HTTP backend to load translations
  .use(initReactI18next) // Initialize React i18next
  .init({
    lng: "en", // Default language
    fallbackLng: "en", // Fallback language
    backend: {
      loadPath: "/locales/{{lng}}/translation.json", // Path to translation files
    },
    interpolation: {
      escapeValue: false, // React already escapes values
    },
  });

export default i18n;
