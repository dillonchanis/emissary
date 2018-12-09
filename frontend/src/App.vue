<template>
  <div id="app" class="font-sans antialiased">
    <router-view />
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style>
@tailwind preflight;
@tailwind components;
@tailwind utilities;

::selection {
  background-color: #A0F0ED;
}

#app {
  border-top: 3px solid #38A89D;
}
</style>
