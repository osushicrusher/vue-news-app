import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import NYT from '../views/NYT.vue'
import Words from '../views/Words.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/NYT',
    name: 'NYT',
    component: NYT
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
