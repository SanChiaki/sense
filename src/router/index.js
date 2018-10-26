import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      name: 'index',
      component: () => import('@/view/index')
    }, {
      path: '/button',
      name: 'button',
      component: () => import('@/view/button')
    }, {
      path: '/checkbox',
      name: 'checkbox',
      component: () => import('@/view/checkbox')
    }
  ]
})