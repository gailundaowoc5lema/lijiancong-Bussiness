import Vue from 'vue'
import Router from 'vue-router'
import GoodsList from '@/components/syjGoodsList'
import Shopcart from '@/components/syjShopcart'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'GoodsList',
      component: GoodsList
    },
    {
      path: '/shopcart', name: 'Shopcart', component: Shopcart
    }
  ]
})
