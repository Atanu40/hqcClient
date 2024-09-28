import './assets/main.css'

import { createApp } from 'vue'

import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import * as ElementPlusIconsVue from '@element-plus/icons-vue'

import router from './router/index';

import App from './App.vue'
import { createPinia } from 'pinia'
import { setupStore } from './store'

const app = createApp(App)
const pinia = createPinia()

app.use(pinia) // Make sure this comes first
setupStore(app)

for (const [key, component] of Object.entries(ElementPlusIconsVue)) {
  app.component(key, component)
}
app.use(router)
app.use(ElementPlus)
app.mount('#app')
