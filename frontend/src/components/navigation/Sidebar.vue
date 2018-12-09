<template>
  <aside class="w-full flex-none md:max-w-xs bg-grey-lightest border-r-2 border-grey-light p-4">
    <emissary-logo/>

    <div class="mb-16 font-bold text-sm">
      Bespoke Coffee & Dry Goods
    </div>

    <nav class="">
      <ul class="list-reset mb-20">
        <li class="mb-4">
          <router-link active-class="active"
                       class="text-grey-darkest hover:text-black no-underline"
                       exact
                       to="/">Dashboard</router-link>
        </li>
        <li class="mb-4">
          <router-link active-class="active"
                       class="text-grey-darkest hover:text-black no-underline"
                       to="campaigns">Campaigns</router-link>
        </li>
        <li class="mb-4">
          <router-link active-class="active"
                       class="text-grey-darkest hover:text-black no-underline"
                       to="subscribers">Subscribers</router-link>
        </li>
        <li class="mb-4">
          <router-link active-class="active"
                       class="text-grey-darkest hover:text-black no-underline"
                       to="analytics">Analytics</router-link>
        </li>
      </ul>

      <ul class="list-reset">
        <li class="mb-4">
          <router-link active-class="active"
                       class="text-grey-darkest hover:text-black no-underline"
                       to="settings">Settings</router-link>
        </li>
        <li class="mb-4">
          <router-link active-class="active"
                       class="text-grey-darkest hover:text-black no-underline"
                       to="logout">Logout</router-link>
        </li>
      </ul>
    </nav>
  </aside>
</template>

<script>
import EmissaryLogo from '@/components/Logo'

export default {
  name: 'Sidebar',
  components: {
    EmissaryLogo
  }
}
</script>

<style scoped>
.active {
  color: #22292f;
  border-left: 3px solid #38A89D;
  padding-left: 5px;
  font-weight: bold;
}
</style>
