// import Vue from 'vue'
// import iView from 'iview'
// import VueRouter from 'vue-router'
// import {routers} from './router'
//
//
// let $Vue = new Vue();
// Vue.use(VueRouter);
//
// // 路由配置
// const RouterConfig = {
//   routes: routers
// };
//
// export const router = new VueRouter(RouterConfig);
// //防止手动输入地址进行访问路由
// router.beforeEach((to, from, next) => {
//   if (to.name==='login'){
//     next();
//     return;
//   }
//   if (sessionStorage.userId === undefined) {
//     next({path:'/'});
//   }else{
//     next()
//   }
// });
// router.afterEach((to) => {
//   iView.LoadingBar.finish();
//   window.scrollTo(0, 0)
// });


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
    {
      path: '/my/order_list/Look_logistics/:id',
      name:'LookLogistics',
      component: resolve => {
        require(['@/views/MyView/OrderList/component/LookLogistics'], resolve)
      }
    },
    {
      path: '/home/coupon/:title',
      name:'Coupon',
      component: resolve => {
        require(['@/views/HomeView/component/Coupon'], resolve)
      }
    },
    {
      path: '/home/cloth/:hotIndex',
      name:'Cloth',
      component: resolve => {
        require(['@/views/HomeView/component/ClothingStyle'], resolve)
      }
    },
    {
      path: '/home/cloth/shopDetails/:id',
      name:'Details',
      component: resolve => {
        require(['@/views/HomeView/component/CommodityDetails'], resolve)
      }
    },
  ]
})
