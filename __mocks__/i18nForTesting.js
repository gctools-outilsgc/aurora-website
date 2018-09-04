import i18n from "i18next";
import Backend from "i18next-xhr-backend";
import LanguageDetector from "i18next-browser-languagedetector";

/** 
 * In order to run valid tests, there must be an i18n instance present.
 * The mock instance here is slightly different as the files are not accessed in the same way
 */

i18n
  .use(Backend)
  .use(LanguageDetector)
  .init({
    backend: {
      loadPath: '../src/locales/{{lng}}/{{ns}}.json'
    },
    lng: "en", 
    fallbackLng: 'en',
    resources: {
      en: {},
      fr: {}
    },
    debug: false,
    interpolation: {
      escapeValue: false, // not needed for react!!
    },

    // react i18next special options (optional)
    react: {
      wait: false,
      nsMode: 'fallback' // set it to fallback to let passed namespaces to translated hoc act as fallbacks
    }
  });


export default i18n;