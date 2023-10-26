import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import RNLanguageDetector from '@os-team/i18next-react-native-language-detector';
import en from './en';
import pl from './pl';

const resources = { en, pl };

i18n.use(RNLanguageDetector).use(initReactI18next)
    .init({
        fallbackLng: 'en',
        supportedLngs: ['en', 'pl'],
        compatibilityJSON: 'v3',
        resources,
        interpolation: {
            escapeValue: false,
        },
        ns: [],
        defaultNS: undefined,
    });

export default i18n;