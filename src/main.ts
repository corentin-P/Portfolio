import './assets/styles/main.css'

import { createApp } from 'vue'
import { createI18n } from 'vue-i18n'
import App from './App.vue'
// translations imports 
import en from '@/lang/en.json'
import fr from '@/lang/fr.json'

// translation of the website
const i18n = createI18n({
  locale: 'en',
  fallbackLocale: 'en',
  messages: {en, fr}
})

let app = createApp(App)

app.use(i18n)
app.mount('#app')
