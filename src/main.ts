import { createApp } from 'vue'
import App from './App.vue'
import http from './http/http'
import router from './router/index'
import 'amfe-flexible'
import 'virtual:svg-icons-register'
import store from './store'
const app = createApp(App)

app.use(router).use(store)
app.config.globalProperties.$http = http
app.mount('#app')
