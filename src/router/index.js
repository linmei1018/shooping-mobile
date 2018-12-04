import Vue from 'vue'
import Router from 'vue-router'
import HomeView from '@/views/HomeView/HomeView'
import ShoppingCart from '@/views/ShoppingCart/ShoppingCart'
import CollectView from '@/views/CollectView/CollectView'
import MyView from '@/views/MyView/MyView'

Vue.use(Router)

export default new Router({
  mode: 'history',
  redirect: '/',
  routes: [
    { path: "/", redirect: "/home" },
    {
      path: '/home',
      name: 'HomeView',
      component: HomeView
    },
    {
      path: '/shopping_cart',
      name: 'ShoppingCart',
      component: ShoppingCart
    },
    {
      path: '/collect',
      name: 'CollectView',
      component: CollectView
    },
    {
      path: '/my',
      name: 'MyView',
      component: MyView
    },
    {
      path: '/my/order_list',
      name:'OrderList',
      component: resolve => {
        require(['@/views/MyView/OrderList/OrderList'], resolve)
      }
    },
    // {
    //   path: '/my/order_list',
    //   name:'OrderList',
    //   component: resolve => {
    //     require(['@/views/MyView/OrderList/OrderList'], resolve)
    //   }
    // },

  ]
})
