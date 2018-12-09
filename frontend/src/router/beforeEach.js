import store from '../store'

const beforeEach = (to, from, next) => {
  store.dispatch('auth/checkTokenExists').then(() => {
    next()
  }).catch(() => {
    if (to.meta.requiresAuth) {
      window.localstorage.setItem('intended', to.name)
      next({ name: 'login' })
      return
    }

    next()
  })
}

export default beforeEach
