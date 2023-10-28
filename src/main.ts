import './assets/main.css'

import { VueElement, createApp } from 'vue'
import App from './App.vue'
import router from './router'

import { OhVueIcon, addIcons } from 'oh-vue-icons'
import {
  RiArrowDropLeftLine,
  RiArrowDropRightLine,
  RiTeamFill,
  HiSolidArrowSmRight,
  HiSolidArrowSmLeft
} from 'oh-vue-icons/icons'
import { VueWindowSizePlugin } from 'vue-window-size/plugin'
import vClickOutside from 'v-click-outside'
import { createVuetify } from 'vuetify'
import * as components from 'vuetify/components'

const vuetify = createVuetify({
  components
})

addIcons(HiSolidArrowSmLeft, HiSolidArrowSmRight, RiArrowDropRightLine, RiArrowDropLeftLine, RiTeamFill)

const { bind, unbind } = vClickOutside.directive

const app = createApp(App)

app.directive('click-outside', {
  mounted(el, bindling) {
    bind(el, { value: bindling.value })
  },
  beforeUnmount(el) {
    unbind(el)
  }
})
app.use(router)
app.use(vuetify)
app.use(VueWindowSizePlugin)
app.component('VIcon', OhVueIcon)

app.mount('#app')
