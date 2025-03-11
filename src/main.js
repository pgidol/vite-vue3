import { createApp } from 'vue'

import '@/assets/main.scss'

import App from './App.vue'
import router from '@/router'

const app = createApp(App)

app.use(router)
import pinia from '@/stores/index'
// app.use(createPinia())
// app.use(persist)
// pinia相关 持久化等 单独导出
// import { createPinia } from 'pinia'
// import persist from 'pinia-plugin-persistedstate'
app.use(pinia)

app.mount('#app')
