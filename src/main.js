import Vue from 'vue'
import App from './App.vue'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import VeeValidate from 'vee-validate'

import './axios'
import router from './router'
import store from './store'

Vue.config.productionTip = false

Vue.use(ElementUI)
Vue.use(VeeValidate)

// 引入mockjs,线上移除这行
require('./mockjs/mock.js')

new Vue({
    router,
    store,
    render: h => h(App)
}).$mount('#app')
