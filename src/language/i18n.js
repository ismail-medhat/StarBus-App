import i18n from 'i18next';
import {initReactI18next} from 'react-i18next';
import {store} from 'store';

const {appLang} = store.getState().auth;

let translations = {
  en: require('./en'),
  ar: require('./ar'),
};

i18n.use(initReactI18next).init({
  compatibilityJSON: 'v3',
  resources: {
    en: {
      translation: translations['en'],
    },
    ar: {
      translation: translations['ar'],
    },
  },
  lng: appLang,
  fallbackLng: 'en',
  interpolation: {
    escapeValue: false,
  },
});

export default i18n;
