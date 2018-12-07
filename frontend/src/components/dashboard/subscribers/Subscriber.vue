<template>
  <div class="mb-6">
    <span class="block font-bold text-display">{{ subscriber.name }}</span>
    <span class="block text-body">{{ subscriber.email }}</span>
  </div>
</template>

<script>
export default {
  name: 'Subscriber',
  props: {
    subscriber: {
      type: Object,
      required: true
    }
  }
}
</script>
