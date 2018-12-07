<template>
  <div class="mb-6">
    <span class="block font-bold text-display mb-1">{{ campaign.title }}</span>
    <span class="block text-body mb-1">{{ campaign.subcount }} subscribers</span>
    <span class="block text-body">Delivery on {{ campaign.date }}</span>
  </div>
</template>

<script>
export default {
  name: 'Campaign',
  props: {
    campaign: {
      type: Object,
      required: true
    }
  }
}
</script>
