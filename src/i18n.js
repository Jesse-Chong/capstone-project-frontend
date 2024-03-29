import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';
import Backend from 'i18next-http-backend';
const url = import.meta.env.VITE_BASE_URL;
i18n
  .use(Backend)
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    fallbackLng: 'en',
    debug: true,
    ns: ['translations'],
    defaultNS: 'translations',
    interpolation: {
      escapeValue: false
    },
    backend: {
        loadPath: `${url}/translations/{{lng}}`,
        parse: (data) => {
            const parsedData = JSON.parse(data);
            // Return first key of the parsed json data basically extracting tranlsations
            return parsedData[Object.keys(parsedData)[0]];
    },
},
  });

export default i18n;