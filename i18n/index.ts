import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import * as Localization from 'expo-localization';
import translationDe from './locales/de.json';
import translationEn from './locales/en.json';

const resources = {
  de: { translation: translationDe },
  en: { translation: translationEn },
};

const initI18n = async () => {
  i18n.use(initReactI18next).init({
    resources,
    lng: Localization.getLocales()[0].languageCode || 'en',
    interpolation: { escapeValue: false },
  });
};

initI18n();

export default i18n;
