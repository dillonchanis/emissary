import axios from 'axios'
import TokenService from '@/services/token.service'
import { setHttpToken } from '@/utils'
const BASE_URL = '/api/auth'

const UserService = {
  /**
   * Register a new user and stores the access token to localStorage
   *
   * @return {object} User details and token details
   */
  async register (credentials) {
    const response = await axios.post(`${BASE_URL}/register`, credentials)
    TokenService.save(response.data.access_token)
    setHttpToken(response.data.access_token)

    return response
  },

  /**
   * Login a user and stores the access token to localStorage
   *
   * @return {string} access_token
   */
  async login (credentials) {
    const response = await axios.post(`${BASE_URL}/login`, credentials)
    TokenService.save(response.data.access_token)
    setHttpToken(response.data.access_token)

    return response.access_token
  },

  /**
   * Logout a user and removes the access token from localStorage
   * Set Authorization header to null
   *
   * @return {string} access_token
   */
  async logout () {
    await axios.post(`${BASE_URL}/logout`)
    TokenService.remove()
    setHttpToken(null)
  }
}

export default UserService
