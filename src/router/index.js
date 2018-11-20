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
    }, {
      path: '/select',
      name: 'select',
      component: () => import('@/view/select')
    }, {
      path: '/input',
      name: 'input',
      component: () => import('@/view/input')
    }, {
      path: '/tag',
      name: 'tag',
      component: () => import('@/view/tag')
    }, {
      path: '/badge',
      name: 'badge',
      component: () => import('@/view/badge')
    }, {
      path: '/radio',
      name: 'radio',
      component: () => import('@/view/radio')
    }, {
      path: '/pagination',
      name: 'pagination',
      component: () => import('@/view/pagination')
    }, {
      path: '/alert',
      name: 'alert',
      component: () => import('@/view/alert')
    }, {
      path: '/dropdown',
      name: 'dropdown',
      component: () => import('@/view/dropdown')
    }, {
      path: '/popover',
      name: 'popover',
      component: () => import('@/view/popover')
    }
  ]
})