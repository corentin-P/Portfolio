import {i18n} from '@/lang/importLangs'
import { createApp } from 'vue'
import router from './router.ts'
import App from './app.vue'

createApp(App)
    .use(i18n)
    .use(router)
    .mount('#app')
