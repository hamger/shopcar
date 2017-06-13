import Vue from 'vue'
import VueRouter from 'vue-router'
import shopCar from '../components/shopCar.vue'
Vue.use(VueRouter)

Vue.component('shop-car',{
	render: h => h(shopCar)
})

// 创建组件
const ShopCar = { template: '<shop-car></shop-car>' }
const Pagea = { template: '<div>Page A</div>' }
const Pageb = { template: '<div>Page B</div>' }

// 映射路由
const routes = [{
    path: '/shopCar',
    component: ShopCar
}, {
    path: '/pagea',
    component: Pagea
}, {
    path: '/pageb',
    component: Pageb
}]

// 创建路由实例
export default new VueRouter({routes})
