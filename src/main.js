import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
//import store from './store/index'
import 'bootstrap'
import 'jquery'



//import http from '@/http'



//vueConfig.productionTip = false
//Vue.prototype.$http = http

createApp(App).use(router).mount('#app')
