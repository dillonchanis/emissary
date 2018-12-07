<template>
  <div id="app" class="font-sans antialiased min-h-screen md:flex">
    <app-sidebar />
    <div class="flex-1 container mx-auto py-4 px-8 max-h-screen overflow-scroll">
      <router-view/>
    </div>
  </div>
</template>

<script>
import AppSidebar from '@/components/navigation/Sidebar'

export default {
  name: 'App',
  components: { AppSidebar }
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
