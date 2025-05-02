<script setup lang="ts">
import { useFooterHandler } from '@/assets/compositions/useFooterHandler'

const { footerPatterIsVisible } = useFooterHandler()
</script>
<template>
  <section class="mt-32 mx-5">
    <ul
      class="max-w-[1058px] mx-auto w-full flex flex-col md:flex-row md:items-center justify-center gap-10 md:gap-7"
      :class="{
        'mb-32': !footerPatterIsVisible,
      }"
    >
      <li class="flex flex-col items-center gap-1">
        <h4 class="text-[#010101] text-center text-xs">Cooked By</h4>
        <p class="text-center underline text-[24px] font-cherry text-[#144B48]">SahPee</p>
      </li>
      <li class="border-l h-[9px] border-[#C1C3D2] hidden md:block"></li>
      <li class="flex flex-col items-center gap-1">
        <h4 class="text-[#010101] text-center text-xs">Designed By</h4>
        <p class="text-center underline text-[24px] font-cherry text-[#144B48]">The.Sun.Dev</p>
      </li>
      <li class="border-l h-[9px] border-[#C1C3D2] hidden md:block"></li>
      <li class="flex flex-col items-center gap-1">
        <h4 class="text-[#010101] text-center text-xs">Assembled By</h4>
        <p class="text-center underline text-[24px] font-cherry text-[#144B48]">Macrotom</p>
      </li>
    </ul>

    <div
      v-if="footerPatterIsVisible"
      class="h-[221px] max-w-[1500px] mx-auto relative flex justify-between items-end mt-10 overflow-hidden"
    >
      <img src="/img/plane.svg" class="w-[175px]" alt="" />

      <img src="/img/planet.svg" class="w-[144px]" alt="" />

      <img src="/img/spaceship.svg" class="w-[136px]" alt="" />

      <img src="/img/rainbow.svg" class="w-[175px]" alt="" />
    </div>
  </section>
</template>
