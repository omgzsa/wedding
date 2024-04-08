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
    class="hidden grid-cols-3 gap-10 pt-16 border-b lg:grid xl:pt-24 place-items-center border-neutral-400/50"
  >
    <p class="font-normal uppercase col-span-full line-1 anim-typewriter">
      2024. 07. 05. // Achilles park, Győr
    </p>

    <h2 class="col-span-1 font-display">András</h2>

    <div class="col-span-1 glow">
      <img
        ref="img"
        src="/bunde-bander.png"
        width="400"
        height="400"
        alt="Bunde es Bander"
      />
    </div>

    <h2 class="relative col-span-1 font-display">
      Rebeka
      <span class="absolute left-0 -bottom-6">
        <SvgAkaBunde class="w-24" />
      </span>
    </h2>
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

.line-1 {
  position: relative;
  top: 40px;
  width: 18.5em;
  margin: 0 auto;
  border-right: 2px solid rgba(255, 255, 255, 0.75);
  font-size: 112.5%;
  text-align: center;
  white-space: nowrap;
  overflow: hidden;
  transform: translateY(-50%);
}

/* Animation */
.anim-typewriter {
  animation: typewriter 4s steps(44) 1s 1 normal both,
    blinkTextCursor 500ms steps(44) infinite normal;
}
@keyframes typewriter {
  from {
    width: 0;
  }
  to {
    width: 18.5em;
  }
}
@keyframes blinkTextCursor {
  from {
    border-right-color: rgba(255, 255, 255, 0.75);
  }
  to {
    border-right-color: transparent;
  }
}
</style>
