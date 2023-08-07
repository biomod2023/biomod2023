import './assets/main.css'

import { VueElement, createApp } from 'vue'
import App from './App.vue'
import router from './router'

import { OhVueIcon, addIcons } from 'oh-vue-icons'
import { HiSolidArrowSmRight, HiSolidArrowSmLeft} from 'oh-vue-icons/icons'

addIcons(HiSolidArrowSmLeft, HiSolidArrowSmRight)

const app = createApp(App)

app.use(router)
app.component('v-icon', OhVueIcon)

app.mount('#app')
