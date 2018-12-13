import Vue from 'vue'
import Router from 'vue-router'
import beforeEach from './beforeEach'

// Auth Route
import AuthView from '@/views/auth/Auth'

// App Routes
import Base from '@/views/dashboard/Base'
import Home from '@/views/dashboard/Home'

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
      path: '/auth',
      name: 'auth',
      component: AuthView,
      meta: {
        requiresAuth: false
      }
    }
  ]
})

router.beforeEach(beforeEach)

export default router
