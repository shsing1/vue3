import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/attributes',
      name: 'attributes',
      component: () => import('./views/Attributes.vue')
    },
    {
      path: '/plaintext',
      name: 'plaintext',
      component: () => import('./views/PlainText.vue')
    },
  ]
})
