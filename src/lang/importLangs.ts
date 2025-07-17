import { createI18n } from 'vue-i18n';
import { deepmerge } from "deepmerge-ts";

import config from './config.json'
// translations imports 
import messages_en from './en.json'
import messages_fr from './fr.json'

const en = deepmerge(config, messages_en);
const fr = deepmerge(config, messages_fr);

// translation of the website
export const i18n = createI18n({
  locale: localStorage.getItem('lang') || 'en',
  fallbackLocale: 'en',
  messages: {en, fr}
})