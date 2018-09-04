import i18n from "i18next";
import Backend from "i18next-xhr-backend";
import LanguageDetector from "i18next-browser-languagedetector";
import { reactI18nextModule } from "react-i18next";

i18n
  .use(Backend)
  .use(LanguageDetector)
  .use(reactI18nextModule) // if not using I18nextProvider
  .init({
    backend: {      // for all available options read the backend's repository readme file
      loadPath: (!process.env.NODE_ENV || process.env.NODE_ENV === 'development') ?
        '/locales/{{lng}}/{{ns}}.json'
        :
        '/design-system-code/src/locales/{{lng}}/{{ns}}.json'
    }
    ,
    lng: "en", 
    fallbackLng: 'en',
    debug: true,
    interpolation: {
      escapeValue: false, // not needed for react!!
    },

    // react i18next special options (optional)
    react: {
      wait: false,
      bindI18n: 'languageChanged loaded',
      bindStore: 'added removed',
      nsMode: 'default'
    }
  });


export default i18n;