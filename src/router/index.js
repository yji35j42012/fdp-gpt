import Vue from 'vue'
import VueRouter from 'vue-router'
import Front from '../views/Front.vue'
import Backend from '../views/Backend.vue'

Vue.use(VueRouter)

const routes = [
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
    // component: HomeView
  },
  // {
  //   path: '/about',
  //   name: 'about',
  //   // route level code-splitting
  //   // this generates a separate chunk (about.[hash].js) for this route
  //   // which is lazy-loaded when the route is visited.
  //   component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
  // }
]

const router = new VueRouter({
  // mode: 'history',
  mode: '',
  base: process.env.BASE_URL,
  routes
})

export default router
