<template>
  <div class="bg-grey-lighter flex w-full h-screen items-center justify-center p-4">
    <div class="w-full max-w-sm">
      <form class="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4"
            @submit.prevent="submit">
        <div class="text-center mb-4">
          <emissary-logo/>
        </div>
        <div class="mb-4">
          <label class="block text-grey-darker text-sm font-bold mb-2"
                 for="name">
            Name
          </label>
          <input class="shadow appearance-none border rounded w-full py-2 px-3 text-grey-darker leading-tight focus:outline-none focus:shadow-outline"
                 id="name"
                 type="text"
                 required
                 v-model="name">
        </div>
        <div class="mb-4">
          <label class="block text-grey-darker text-sm font-bold mb-2"
                 for="email">
            Email
          </label>
          <input class="shadow appearance-none border rounded w-full py-2 px-3 text-grey-darker leading-tight focus:outline-none focus:shadow-outline"
                 id="email"
                 type="email"
                 required
                 v-model="email">
        </div>
        <div class="mb-6">
          <label class="block text-grey-darker text-sm font-bold mb-2"
                 for="password">
            Password
          </label>
          <input class="shadow appearance-none border rounded w-full py-2 px-3 text-grey-darker mb-3 leading-tight focus:outline-none focus:shadow-outline"
                 id="password"
                 type="password"
                 v-model="password">
        </div>
        <div class="flex items-center justify-between">
          <button class="bg-primary hover:bg-teal-dark text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                  type="submit">
            Sign Up
          </button>
          <!-- <a class="inline-block align-baseline font-bold text-sm text-blue hover:text-blue-darker" href="#">
            Forgot Password?
          </a> -->
        </div>
      </form>
      <p class="text-center text-white text-xs">
        ©{{ year }} Emissary. All rights reserved.
      </p>
    </div>
  </div>
</template>

<script>
import { mapActions } from 'vuex'
import EmissaryLogo from '@/components/Logo'

export default {
  name: 'Register',
  components: { EmissaryLogo },
  data () {
    return {
      name: '',
      email: '',
      password: ''
    }
  },
  computed: {
    year () {
      return (new Date()).getFullYear()
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
