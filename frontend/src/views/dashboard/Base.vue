<template>
  <div class="min-h-screen md:flex">
    <app-sidebar />
    <div class="flex-1 container mx-auto py-4 px-8 max-h-screen overflow-scroll">
      <router-view/>
    </div>
  </div>
</template>

<script>
import AppSidebar from '@/components/navigation/Sidebar'

export default {
  name: 'Base',
  components: { AppSidebar }
}
</script>
