import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources: {
      en: {
        translation: {
          home: 'Home',
          aboutUs: 'About Us',
          courses: 'Courses',
          contactUs: 'Contact Us',
          teachOnAwras: 'Teach on Awras',
          'Log In': 'Log In',
          explore: 'Explore',
          searchPlaceholder: 'Search for anything'
        }
      },
      am: {
        translation: {
          home: 'ዋና ገጽ',
          aboutUs: 'ስለ እኛ',
          courses: 'ኮርሶች',
          contactUs: 'አግኙን',
          teachOnAwras: 'በአውራስ ያስተምሩ',
          'Log In': 'ግባ',
          explore: 'ፈልግ',
          searchPlaceholder: 'ማንኛውንም ነገር ይፈልጉ'
        }
      }
    },
    fallbackLng: "en",
    interpolation: {
      escapeValue: false,
    },
  });

export default i18n;
