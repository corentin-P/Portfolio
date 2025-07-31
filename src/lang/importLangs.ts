import { createI18n } from 'vue-i18n';
import { deepmerge } from "deepmerge-ts";

import config from './config.json'
// translations imports 
import messages_en from './en.json'
import messages_fr from './fr.json'
// --- add here the imports for the other langages ---

const en = deepmerge(config, messages_en);
const fr = deepmerge(config, messages_fr);

type Schema = typeof en

// translation of the website
export const i18n = createI18n<[Schema], "en" | "fr">({
  legacy: false,
  locale: localStorage.getItem('lang') || 'en',
  fallbackLocale: 'en',
  messages: {en, fr}
})