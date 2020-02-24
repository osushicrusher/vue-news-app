import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Words from '../views/Words.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/Words',
    name: 'Words',
    component: Words,
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
