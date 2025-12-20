import {i18n} from '@/lang/importLangs'
import { createApp } from 'vue'
import App from './App.vue'

let app = createApp(App)

app.use(i18n)
app.mount('#app')
