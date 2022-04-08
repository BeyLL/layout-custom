import Vue from 'vue'
import VueRouter from 'vue-router'
import Index from '../views/index'
import Edit from '../views/Edit'
import Check from '../views/Check'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    component: Index,
    redirect: '/check',
    children: [
      { path: '/edit', component: Edit },
      { path: '/check', component: Check }
    ]
  }
]

const router = new VueRouter({
  routes
})

export default router
