<template>
  <div class="bg-white flex w-full h-screen items-center justify-center p-4">
    <div class="w-full max-w-sm">
      <div class="bg-white border-t-4 border-primary shadow-lg rounded px-8 pt-6 pb-8 mb-4">
        <component :is="component"></component>
        <p class="cursor-pointer mt-4 italic text-sm text-grey hover:text-grey-dark"
           @click="switchForm">
          {{ accountText }}
        </p>
      </div>
    </div>
  </div>
</template>

<script>
import Register from './Register'
import Login from './Login'

export default {
  name: 'AuthView',
  components: {
    Register,
    Login
  },
  data () {
    return {
      component: Login
    }
  },
  computed: {
    accountText () {
      return this.component === Login
        ? 'Need an account? Sign up!'
        : 'Already have an account? Sign in.'
    }
  },
  methods: {
    switchForm () {
      this.component = this.component === Login ? Register : Login
    }
  }
}
</script>

<style scoped>

</style>
