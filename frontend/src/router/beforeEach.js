import store from '../store'

const beforeEach = (to, from, next) => {
  const routeRequiresAuth = to.matched.some(route => route.meta.requiresAuth)
  const userIsAuth = store.getters['auth/authenticated']

  if (routeRequiresAuth && !userIsAuth) {
    next({ name: 'login' })
    return
  }

  if (to.path === '/login' && userIsAuth) {
    next({ name: 'home' })
    return
  }

  next()
}

export default beforeEach
