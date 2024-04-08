<script lang="ts" setup>
import type { Program } from '../types';

const programs = ref<Program[]>([
  {
    id: 1,
    name: 'Érkezés',
    time: '16:00',
    image: '1-arrival.svg',
  },
  {
    id: 2,
    name: '"Igen"',
    time: '17:30',
    image: '2-ceremony.svg',
  },
  {
    id: 3,
    name: 'Fényképezés',
    time: '18:30',
    image: '3-photos.svg',
  },
  {
    id: 4,
    name: 'Vacsora',
    time: '19:00',
    image: '4-dinner.svg',
  },
  {
    id: 5,
    name: 'Torta',
    time: '20:30',
    image: '5-cake.svg',
  },
  {
    id: 6,
    name: 'Party!',
    time: '22:00',
    image: '6-party.svg',
  },
]);
</script>

<template>
  <main class="relative z-0">
    <Bulbs class="absolute -z-50" />

    <!-- <mode-switcher class="fixed top-4 right-4" /> -->

    <UContainer class="py-6">
      <h1 class="hidden">Rebeka és András esküvője || 2024. 07.05.</h1>

      <HeroMobile />
      <HeroDesktop />

      <Program>
        <ProgramItem v-for="p in programs" :key="p.id" :program="p" class="" />
      </Program>

      <InfoBlock />

      <InfoForm />
    </UContainer>
  </main>
</template>
