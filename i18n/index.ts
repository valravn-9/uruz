import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import * as Localization from 'expo-localization';
import translationDe from './de.json';
import translationEn from './en.json';

const resources = {
  'de-DE': { translation: translationDe },
  'en-US': { translation: translationEn },
};

const initI18n = async () => {
  i18n.use(initReactI18next).init({
    resources,
    lng: Localization.getLocales()[0].languageTag,
    fallbackLng: 'de-DE',
    interpolation: {
      escapeValue: false,
    },
  });
};

initI18n();

export default i18n;
