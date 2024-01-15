import Vue from 'vue'
import VueRouter from 'vue-router'
import Front from '../views/Front.vue'
import Backend from '../views/Backend.vue'
import Landing from '../views/Landing.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/landing',
    name: 'landing',
    component: Landing
  },
  {
    path: '/',
    name: 'front',
    component: Front
  },
  {
    path: '/backend',
    name: 'backend',
    component: Backend
  },
  {
    path: '*',
    name: 'front',
  },
]

const router = new VueRouter({
  // mode: 'history',
  mode: '',
  base: process.env.BASE_URL,
  routes
})

export default router
