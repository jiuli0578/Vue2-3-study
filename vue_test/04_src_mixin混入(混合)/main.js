// 引入Vue
import Vue from 'vue';
// 引入App
import App from './App.vue'
// 全局引入mixin
// import {hunhe1,hunhe2} from './mixin'
// 关闭Vue的生产提示
Vue.config.productionTip = false
// Vue.mixin(hunhe1)
// Vue.mixin(hunhe2)
// 创建vm
new Vue({
    el:"#app",
    render: h => h(App)
})