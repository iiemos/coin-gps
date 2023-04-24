<script setup lang="ts">
const { $aos } = useNuxtApp()
onMounted(() => {
  $aos().init({
    // easing: 'ease-out-back',
    easing: 'ease-out-sine',
    duration: 700,
    delay: 100,
    once: true
  })
});
</script>
<template>
  <div data-aos="fade-up" class="mx-auto  lg:px-4 max-w-7xl flex px-4 pt-24 pb-4 sm:pb-8 md:pb-12 lg:pb-20 transition duration-700 relative opacity-100 flex-col">
    <slot />
  </div>
</template>
