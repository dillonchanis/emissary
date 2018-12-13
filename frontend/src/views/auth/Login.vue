<template>
  <div>
    <h1 class="font-display text-display text-3xl mb-6">Sign In</h1>
    <form @submit.prevent="submit">
      <div class="mb-4">
        <input class="rounded-full h-12 appearance-none border rounded w-full py-2 px-3 text-grey-darker leading-tight focus:outline-none focus:shadow-outline"
              id="email"
              type="email"
              required
              aria-label="Email"
              placeholder="jane@example.com"
              v-model="email">
      </div>
      <div class="mb-4">
        <input class="rounded-full h-12 appearance-none border rounded w-full py-2 px-3 text-grey-darker leading-tight focus:outline-none focus:shadow-outline"
              id="password"
              type="password"
              aria-label="Password"
              placeholder="********"
              v-model="password">
      </div>
      <div class="flex w-full items-center justify-between">
        <button class="w-full h-12 bg-primary hover:bg-teal text-white font-bold py-2 px-4 rounded-full focus:outline-none focus:shadow-outline"
                type="submit">
          Sign In
        </button>
      </div>
    </form>
  </div>
</template>

<script>
import { mapActions } from 'vuex'

export default {
  name: 'Login',
  data () {
    return {
      email: '',
      password: ''
    }
  },
  methods: {
    ...mapActions({
      login: 'auth/login'
    }),
    async submit () {
      await this.login({ email: this.email, password: this.password })
      this.$router.replace({ name: 'home' })
    }
  }
}
</script>
