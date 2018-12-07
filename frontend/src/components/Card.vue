<template>
  <div class="w-full md:w-1/3 bg-grey-lightest rounded border-t-4 border-primary shadow mr-12 py-6 px-4 mb-6">
    <header class="text-body font-bold text-sm tracking-wide">
      {{ title }}
    </header>
    <div class="text-huge font-bold text-display">
      {{ data }}
    </div>
  </div>
</template>

<script>
export default {
  name: 'Card',
  props: {
    data: {
      type: String,
      required: true
    },
    title: {
      type: String,
      required: true
    }
  }
}
</script>
