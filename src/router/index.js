import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Register from '../views/Register.vue'
import Examples from '../views/Examples.vue'
import Contact from '../views/Contact.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: Home
  },
  {
    path: '/register',
    name: 'register',
    component: Register
  },
  {
    path: '/examples',
    name: 'examples',
    component: Examples
  },
  {
    path: '/contact',
    name: 'contact',
    component: Contact
  },
  {
    path: '/documentation',
    name: 'documentation',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/Doc.vue')
  }
]

const router = new VueRouter({
  routes
})

export default router
