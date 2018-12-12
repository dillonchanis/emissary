import axios from 'axios'
import UserService from '@/services/user.service'
import * as types from './mutation-types'

const BASE_API = '/api/auth'

export default {
  namespaced: true,
  state: {
    user: {
      authenticated: false,
      data: null
    }
  },
  getters: {
    user: (state) => state.user
  },
  actions: {
    async register (context, payload) {
      await UserService.register(payload)
    },
    async login ({ commit, dispatch }, payload) {
      await UserService.login(payload)

      commit(types.SET_AUTHENTICATED, true)
      dispatch('fetchUser')
    },
    async logout ({ dispatch }) {
      await UserService.logout()
      dispatch('clearAuthentication')
    },
    async fetchUser ({ commit }) {
      const response = await axios.get(`${BASE_API}/me`)

      commit(types.SET_USER, response.data)
    },
    clearAuthentication ({ commit }) {
      commit(types.SET_AUTHENTICATED, false)
      commit(types.SET_USER, null)
      commit(types.CLEAR_INTENDED)
    }
  },
  mutations: {
    [types.SET_AUTHENTICATED] (state, isAuth) {
      state.user.authenticated = isAuth
    },
    [types.SET_USER] (state, data) {
      state.user.data = data
    },
    [types.CLEAR_INTENDED] () {
      localStorage.removeItem('intended')
    }
  }
}
