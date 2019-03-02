import i18n from 'i18n-js';

import en from './locales/en.json';

i18n.defaultLocale = 'en';
i18n.locale = 'en';
i18n.fallbacks = true;
i18n.translations = { en };

export const translate = (key: string): string => {
  return i18n.t(key);
};
