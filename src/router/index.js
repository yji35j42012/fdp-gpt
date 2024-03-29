import Vue from 'vue'
import VueRouter from 'vue-router'
import Front from '../views/Front.vue'
import Backend from '../views/Backend.vue'
import Landing from '../views/Landing.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'landing',
    component: Landing
  },
  {
    path: '/front',
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
    name: 'landing',
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
