import axios from 'axios'
import TokenService from '@/services/token.service'
import { setHttpToken } from '@/utils'
const BASE_URL = '/api'

const UserService = {
  /** Register a User */
  register () {

  },

  /**
   * Login a user and stores the access token to localStorage
   *
   * @return access_token
   */
  async login (credentials) {
    const response = await axios.post(`${BASE_URL}/auth/login`, credentials)
    TokenService.save(response.data.access_token)
    setHttpToken(response.data.access_token)

    return response.access_token
  },

  /**
   * Logout a user and removes the access token from localStorage
   * Set Authorization header to null
   *
   * @return access_token
   */
  async logout () {
    await axios.post(`${BASE_URL}/auth/logout`)
    TokenService.remove()
    setHttpToken(null)
  }
}

export default UserService
