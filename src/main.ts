import { createApp } from 'vue';
import axios from 'axios';
import App from './App.vue';
import http from './http/http';
import router from './router/index';
import 'lib-flexible'
// import { Popup, Swipe, Lazyload, SwipeItem, Tab, Tabs, List, Cell, Notify, Sticky } from 'vant'
// 获取static中配置的config信息
const app = createApp(App);
app.use(router);
app.config.globalProperties.$http = http;
app.mount('#app');