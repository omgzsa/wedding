<script lang="ts" setup>
import { useMotion } from '@vueuse/motion';

const img = ref<HTMLElement>();

useMotion(img, {
  initial: {
    opacity: 0,
  },
  enter: {
    opacity: 1,
    transition: {
      stiffness: 250,
      damping: 100,
      delay: 250,
    },
  },
});
</script>

<template>
  <div
    class="grid gap-10 pt-16 border-b xl:pt-24 place-items-center border-neutral-400/50"
  >
    <div class="flex items-center justify-between gap-8">
      <h2 class="font-display">András</h2>
      <span class="font-display">&</span>
      <h2 class="relative font-display">
        Rebeka
        <span class="absolute left-0 -bottom-6">
          <SvgAkaBunde class="w-24" />
        </span>
      </h2>
    </div>
    <div class="w-full border-t border-dark-200/25" />
    <div class="flex gap-4">
      <p class="font-normal">2024. 07. 05.</p>
      <p class="text-neutral-800">//</p>
      <p class="font-normal uppercase">Achilles park, győr</p>
    </div>
    <div class="mx-auto glow">
      <img
        ref="img"
        src="/bunde-bander.png"
        width="400"
        height="400"
        alt="Bunde es Bander"
      />
    </div>
  </div>
</template>

<style>
.glow {
  position: relative;
  display: inline-block;
}

.glow::before {
  content: '';
  position: absolute;
  width: 100px;
  height: 100px;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: -1;
  border-radius: 50%;
  background-color: transparent;
  opacity: 0;
  animation: glowAnimation 2s ease-in-out infinite alternate;
}

@keyframes glowAnimation {
  0% {
    opacity: 0;
  }
  100% {
    opacity: 0.8;
    box-shadow: 0 0 180px 10px #e0e0e0;
  }
}
</style>
