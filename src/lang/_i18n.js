import i18n from 'i18next';
import {initReactI18next} from 'react-i18next';

import tr from './tr.json';
import en from './en.json';

i18n.use(initReactI18next).init({
  resources: {
    en: en,
    tr: tr,
  },
  lng: 'en',
  fallbackLng: 'en',
  interpolation: {escapeValue: false},
  compatibilityJSON: 'v3',
});
export default i18n;
