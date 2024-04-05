<script setup lang="ts">
import { ref, onMounted } from 'vue';
import type { Program } from '@/types';

const isActive = ref(false);

onMounted(() => {
  isActive.value = true;
});

defineProps<{
  program: Program;
}>();
</script>

<template>
  <div
    class="flex flex-col items-center mx-auto"
    :class="{ 'program-item': true, active: isActive }"
  >
    <NuxtImg
      :src="`../../symbols/${program.image}`"
      :alt="program.name"
      class="w-32 h-32 my-auto mb-4 md:w-24 md:h-24"
    />
    <NuxtImg
      :src="`../../dividers/y-divider.svg`"
      :alt="program.name"
      class="hidden my-auto mb-4 md:block"
    />
    <h3 class="mt-auto text-lg">{{ program.name }}</h3>
    <p class="text-sm">{{ program.time }}</p>
  </div>
</template>

<style>
.program-item {
  opacity: 0;
  transform: translateY(10px);
  transition: opacity 0.3s ease, transform 0.3s ease;
}

/* Animation delay for each item */
.program-item:nth-child(1) {
  transition-delay: 0.15s; /* 150ms delay for the first item */
}

.program-item:nth-child(2) {
  transition-delay: 0.3s; /* 150ms delay for the second item */
}

.program-item:nth-child(3) {
  transition-delay: 0.45s; /* 150ms delay for the third item */
}

.program-item:nth-child(4) {
  transition-delay: 0.6s; /* 150ms delay for the fourth item */
}

.program-item:nth-child(5) {
  transition-delay: 0.75s; /* 150ms delay for the fifth item */
}

.program-item:nth-child(6) {
  transition-delay: 0.9s; /* 150ms delay for the sixth item */
}

/* Show items when opacity changes */
.program-item.active {
  opacity: 1;
  transform: translateY(0);
}
</style>
