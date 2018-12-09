import axios from 'axios'

export const isEmpty = val => val == null || !(Object.keys(val) || val).length

export const setHttpToken = token => {
  if (isEmpty(token)) {
    axios.defaults.headers.common['Authorization'] = null
    return
  }

  axios.defaults.headers.common['Authorization'] = `Bearer ${token}`
}
