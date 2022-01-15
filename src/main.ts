import { createApp } from 'vue'
import App from './App.vue'
import http from './http/http'
import router from './router/index'
import 'amfe-flexible'
const app = createApp(App)
app.use(router)
app.config.globalProperties.$http = http
app.mount('#app')
