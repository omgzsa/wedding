<script lang="ts" setup>
import { useMotion } from '@vueuse/motion';

const leftBulb = ref<HTMLElement>();
const rightBulb = ref<HTMLElement>();
const fullBulb1 = ref<HTMLElement>();
const fullBulb2 = ref<HTMLElement>();

const refs = [leftBulb, rightBulb, fullBulb1, fullBulb2];

refs.forEach((ref, index) => {
  const { variant } = useMotion(ref, {
    initial: {
      y: 100,
      opacity: 0,
    },
    enter: {
      y: -8,
      opacity: 1,
      transition: {
        type: 'spring',
        stiffness: 250,
        damping: 100,
        delay: index * 200,
        onComplete: () => {
          variant.value = 'levitate';
        },
      },
    },
    levitate: {
      y: 0,
      transition: {
        duration: 1500,
        repeat: Infinity,
        ease: 'easeInOut',
        repeatType: 'mirror',
      },
    },
  });
});
</script>

<template>
  <div class="grid w-full grid-cols-5 md:grid-cols-12">
    <SvgBulbsRight ref="rightBulb" class="col-span-1 md:col-span-2" />
    <SvgBulbsFull ref="fullBulb1" class="col-span-3 md:col-span-4" />
    <SvgBulbsFull
      ref="fullBulb2"
      class="hidden col-span- md:col-span-4 md:flex"
    />
    <SvgBulbsLeft ref="leftBulb" class="col-span-1 md:col-span-2" />
  </div>
</template>
