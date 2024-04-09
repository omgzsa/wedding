<script setup lang="ts">
// const nuxtApp = useNuxtApp();
// const loading = ref(false);

// nuxtApp.hook('page:start', () => {
//   console.log('start');
//   loading.value = true;
// });
// nuxtApp.hook('page:finish', () => {
//   console.log('finish');
//   loading.value = false;
// });
</script>

<template>
  <div>
    <NuxtPage />
    <UNotifications />
  </div>
</template>

<style>
.page-enter-active,
.page-leave-active {
  transition: all 0.4s;
}
.page-enter-from,
.page-leave-to {
  opacity: 0;
  filter: blur(1rem);
}
</style>
