import Main from '@/views/Main.vue'

// 不作为Main组件的子页面展示的页面单独写，如下
export const page404 = {
  path: '/*',
  name: 'error-404',
  meta: {
    title: '404-页面不存在'
  },
  component: resolve => {
    require(['@/views/error-page/404.vue'], resolve)
  }
}

export const page403 = {
  path: '/403',
  meta: {
    title: '403-权限不足'
  },
  name: 'error-403',
  component: resolve => {
    require(['@/views/error-page/403.vue'], resolve)
  }
};

export const page500 = {
  path: '/500',
  meta: {
    title: '500-服务端错误'
  },
  name: 'error-500',
  component: resolve => {
    require(['@/views/error-page/500.vue'], resolve)
  }
};

export const topRouter = {
  path: '/home',
  name: 'otherRouter',
  component: Main,
  children:[
    {
      path: 'home',
      name: 'HomeView',
      component: resolve => {
        require(['@/views/HomeView/HomeView'], resolve)
      }
    },
    {
      path: 'shopping_cart',
      name: 'ShoppingCart',
      component: resolve => {
        require(['@/views/ShoppingCart/ShoppingCart'], resolve)
      }
    },
    {
      path: 'collect',
      name: 'CollectView',
      component:resolve => {
        require(['@/views/CollectView/CollectView'], resolve)
      }
    },
    {
      path: 'my',
      name: 'MyView',
      component: resolve => {
        require(['@/views/MyView/MyView'], resolve)
      }
    },
  ]
};

// export const otherRouter = [
//
// ];

// 所有上面定义的路由都要写在下面的routers里
export const routers = [
  topRouter,
  // otherRouter,
  page500,
  page403,
  page404,
]
