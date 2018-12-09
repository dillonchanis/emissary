import axios from 'axios'
import { isEmpty, setHttpToken } from '@/utils'
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
    register () {},
    login ({ dispatch }, payload) {
      return axios.post(`${BASE_API}/login`, payload).then(response => {
        dispatch('setToken', response.data.access_token).then(() => {
          dispatch('fetchUser')
        })
      })
    },
    logout ({ dispatch }) {
      return axios.post(`${BASE_API}/logout`).then(() => {
        dispatch('clearAuthentication')
      })
    },
    setToken ({ commit, dispatch }, token) {
      if (isEmpty(token)) {
        return dispatch('checkTokenExists').then(token => {
          setHttpToken(token)
        })
      }

      commit(types.SET_TOKEN, token)
      setHttpToken(token)
    },
    fetchUser ({ commit }) {
      return axios.get(`${BASE_API}/me`).then(response => {
        commit(types.SET_AUTHENTICATED, true)
        commit(types.SET_USER, response.data)
      })
    },
    clearAuthentication ({ commit }) {
      commit(types.SET_AUTHENTICATED, false)
      commit(types.SET_USER, null)
      commit(types.SET_TOKEN, null)
      commit(types.CLEAR_INTENDED)
      setHttpToken(null)
    },
    checkTokenExists ({ commit, dispatch }) {
      const token = localStorage.getItem('authtoken')

      if (isEmpty(token)) {
        const error = new Error('NO_AUTH_TOKEN')
        return Promise.reject(error)
      }

      return Promise.resolve(token)
    }
  },
  mutations: {
    [types.SET_TOKEN] (state, token) {
      if (isEmpty(token)) {
        return localStorage.removeItem('authtoken')
      }

      localStorage.setItem('authtoken', token)
    },
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
