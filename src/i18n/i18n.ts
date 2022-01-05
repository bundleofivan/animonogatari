import i18n from 'i18next';
import { initReactI18next } from 'react-i18next'

import en from 'i18n/locales/en.json'

const isDev  = process.env.NODE_ENV === 'development'

i18n.use(initReactI18next).init({
    resources: {
       en: { translation: en }
    }, 
    fallbackLng: 'en',
    debug: isDev,
})

export default i18n;