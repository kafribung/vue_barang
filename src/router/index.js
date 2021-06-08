import Vue from 'vue'
import VueRouter from 'vue-router'
import Dashboard from '../views/Dashboard.vue'
import Inventory from '../views/Inventory.vue'
import axios from 'axios'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    redirect: '/dashboard',
  },
  {
    path: '/dashboard',
    name: 'Dashboard',
    component: Dashboard,
    beforeEnter: (to, from, next) => {
      const token = localStorage.getItem('token')
      const accessToken = {
          headers: {
              'Authorization': `Bearer ${token}`
          }
      }
      axios.get('127.0.0.1/api/inventory', accessToken)
        .then((response) => { 
          console.log(response);
        })
      .catch(() => next('/login'))
    }

  },
  {
    path: 'inventory',
    name: 'Inventory',
    component: Inventory, 
    beforeEnter: (to, from, next) => {
      const token = localStorage.getItem('token')
      const accessToken = {
          headers: {
              'Authorization': `Bearer ${token}`
          }
      }
      axios.get('/api/inventory', accessToken)
        .then(() => { 
          next()
        }).
        catch(() => next('/login'))
    }
  },
  {
    path: '/login',
    name: 'Login',
    component: () => import(/* webpackChunkName: "about" */ '../views/Auth/Login.vue'),
    // beforeEach: (to, from, next) => {
    //   if (localStorage.getItem('token') == '') {
    //       next()
    //   } else next('/dashboard')
    // }
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
