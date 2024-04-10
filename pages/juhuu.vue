<script setup>
// definePageMeta({
//   pageTransition: {
//     name: 'page',
//   },
// });
</script>

<template>
  <div class="grid h-screen bg-[#fbf3f1] place-content-center">
    <div class="text-center">
      <NuxtImg
        :src="`../../flat-design-party-ai-generative.jpg`"
        alt="koszonjuk splash"
        class="lg:max-w-4xl"
      />

      <h1
        class="mt-6 text-2xl font-bold tracking-tight text-gray-900 sm:text-4xl"
      >
        Köszönjük, hogy kitöltötted!
      </h1>

      <p class="mt-4 font-medium text-black">Hamarosan találkozunk!❤️</p>

      <UButton
        label="Vissza a főoldalra"
        to="/"
        color="amber"
        variant="link"
        size="sm"
        class="mt-4"
      />
    </div>
  </div>
</template>
