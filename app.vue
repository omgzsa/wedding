<script setup lang="ts">
const nuxtApp = useNuxtApp();
const loading = ref(false);

nuxtApp.hook('page:start', () => {
  console.log('start');
  loading.value = true;
});
nuxtApp.hook('page:finish', () => {
  console.log('finish');
  loading.value = false;
});
</script>

<template>
  <NuxtPage />
  <TheFooter />
  <UNotifications />
</template>
