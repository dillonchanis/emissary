<template functional>
  <div class="logo mb-1">
    <i class="fas fa-mail-bulk mr logo__icon"></i>
    <span class="font-display font-black text-xl logo__text">
      Emissary
    </span>
  </div>
</template>

<script>
export default {
  name: 'EmissaryLogo',
  functional: true
}
</script>

<style scoped>
.logo__icon,
.logo__text {
  color: #333333ad;
  transition: color 0.25s ease-in-out;
}

.logo:hover .logo__icon,
.logo:hover .logo__text {
  color: #38A89D;
}
</style>
