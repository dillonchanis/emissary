import Vue from 'vue'
import Router from 'vue-router'

// Auth Routes
import Login from './views/auth/Login.vue'
import Register from './views/auth/Register.vue'

// App Routes
import Base from './views/dashboard/Base.vue'
import Home from './views/dashboard/Home.vue'

Vue.use(Router)

export default new Router({
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
      ]
    },
    {
      path: '/login',
      name: 'login',
      component: Login
    },
    {
      path: '/register',
      name: 'register',
      component: Register
    }
  ]
})
