<template>
  <div>
    <app-subscriber v-for="subscriber in subscribers"
                    :key="subscriber.id"
                    :subscriber="subscriber"/>
  </div>
</template>

<script>
import AppSubscriber from './Subscriber'

export default {
  name: 'SubscriberList',
  components: {
    AppSubscriber
  },
  props: {
    subscribers: {
      type: Array,
      default: () => []
    }
  }
}
</script>
