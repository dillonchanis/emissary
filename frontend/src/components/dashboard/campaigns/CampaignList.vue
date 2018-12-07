<template>
  <div>
    <app-campaign v-for="campaign in campaigns"
                  :key="campaign.id"
                  :campaign="campaign"/>
  </div>
</template>

<script>
import AppCampaign from './Campaign'

export default {
  name: 'CampaignList',
  components: {
    AppCampaign
  },
  props: {
    campaigns: {
      type: Array,
      default: () => []
    }
  }
}
</script>
