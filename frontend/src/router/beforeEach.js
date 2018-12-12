import store from '../store'

const beforeEach = (to, from, next) => {
  const routeRequiresAuth = to.matched.some(route => route.meta.requiresAuth)
  const userIsAuth = store.state.auth.user.authenticated
  const intendedRoute = localStorage.getItem('intended')

  if (intendedRoute && userIsAuth) {
    next({ name: intendedRoute })
    return
  }

  if (routeRequiresAuth && !userIsAuth) {
    localStorage.setItem('intended', to.name)
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
