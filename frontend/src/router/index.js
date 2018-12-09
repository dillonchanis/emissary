import Vue from 'vue'
import Router from 'vue-router'
import beforeEach from './beforeEach'

// Auth Routes
import Login from '@/views/auth/Login.vue'
import Register from '@/views/auth/Register.vue'

// App Routes
import Base from '@/views/dashboard/Base.vue'
import Home from '@/views/dashboard/Home.vue'

Vue.use(Router)

const router = new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '',
      component: Base,
      children: [
        {
          path: '',
          name: 'home',
          component: Home
        }
      ],
      meta: {
        requiresAuth: true
      }
    },
    {
      path: '/login',
      name: 'login',
      component: Login,
      meta: {
        requiresAuth: false
      }
    },
    {
      path: '/register',
      name: 'register',
      component: Register,
      meta: {
        requiresAuth: false
      }
    }
  ]
})

router.beforeEach(beforeEach)

export default router
