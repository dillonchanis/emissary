<template>
  <div>
    <h1 class="font-display text-display text-3xl mb-6">Sign Up</h1>
    <form @submit.prevent="submit">
      <div class="mb-4">
        <input class="rounded-full h-12 appearance-none border rounded w-full py-2 px-3 text-grey-darker leading-tight focus:outline-none focus:shadow-outline"
              id="name"
              type="text"
              required
              aria-label="Name"
              placeholder="Name"
              v-model="name">
      </div>
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
          Sign Up
        </button>
      </div>
    </form>
  </div>
</template>

<script>
import { mapActions } from 'vuex'

export default {
  name: 'Register',
  data () {
    return {
      name: '',
      email: '',
      password: ''
    }
  },
  methods: {
    ...mapActions({
      register: 'auth/register'
    }),
    async submit () {
      await this.register({
        name: this.name,
        email: this.email,
        password: this.password
      })

      this.$router.replace({ name: 'home' })
    }
  }
}
</script>
