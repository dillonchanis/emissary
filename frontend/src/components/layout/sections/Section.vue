<template functional>
  <section class="mt-6 mb-6">
    <header class="font-display text-display font-black border-l-4 border-primary px-2 text-xl mb-6">
      {{ props.title }}
    </header>
    <slot/>
  </section>
</template>

<script>

export default {
  name: 'Section',
  functional: true,
  props: {
    title: {
      type: String,
      required: true
    }
  }
}
</script>
