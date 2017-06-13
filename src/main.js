import Vue from 'vue'
import App from './App.vue'
// import store from './store/store.js'
import router from './router/router.js'

new Vue({
    el: '#app',
    router, // 挂载路由
    render: h => h(App)
})
