const TOKEN_KEY = 'authtoken'

const TokenService = {
  /**
   * Retrieve the access_token from localStorage
   *
   * @return access_token
   */
  get () {
    return localStorage.getItem(TOKEN_KEY)
  },

  /**
   * Saves the access_token to localStorage
   *
   * @return void
   */
  save (token) {
    localStorage.setItem(TOKEN_KEY, token)
  },

  /**
   * Remove the access_token from localStorage
   *
   * @return void
   */
  remove () {
    localStorage.removeItem(TOKEN_KEY)
  }
}

export default TokenService
