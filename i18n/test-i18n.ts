import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import translationEn from './locales/en.json';

const resources = {
  en: { translation: translationEn },
};

const initI18n = async () => {
  i18n.use(initReactI18next).init({
    resources,
    lng: 'en',
    interpolation: { escapeValue: false },
  });
};

initI18n();

export default i18n;
