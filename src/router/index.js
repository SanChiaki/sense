import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      name: 'index',
      component: () => import('@/components/index.vue')
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