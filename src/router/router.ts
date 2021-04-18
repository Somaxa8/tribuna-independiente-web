import Vue from 'vue'
import VueRouter, { RouteConfig } from 'vue-router'

Vue.use(VueRouter)

const routes: Array<RouteConfig> = [
  {
    path: '/',
    name: 'Home',
    component: () => import("../views/HomeView.vue")
  },
  {
    path: '/noticias',
    name: 'News',
    component: () => import("../views/NewsView.vue")
  },
  {
    path: '/noticias/:id',
    name: 'New',
    component: () => import("../views/NewView.vue")
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
