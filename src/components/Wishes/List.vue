<script setup lang="ts">
import AppWishCard from '@/components/App/WishCard.vue'
</script>

<template>
  <section class="mb-20 mx-5">
    <div class="max-w-[1058px] mx-auto w-full">
      <div class="flex gap-5 justify-between items-end mb-16">
        <div class="flex gap-3 flex-col md:flex-row md:items-center">
          <h2 class="font-cherry text-[#0B3834] text-4xl md:text-[75px] shrink-0">
            Birthday <br />
            Wishes
          </h2>
          <div class="flex flex-row items-center md:flex-col md:items-start gap-3">
            <img src="/img/majesticons_shooting-star.svg" class="w-[49.59px]" alt="shooting star" />
            <p class="text-sm md:text-lg text-[#0B3834] max-w-[216px]">
              See what others have said to Mr Chuks
            </p>
          </div>
        </div>
      </div>

      <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
        <AppWishCard v-for="i in 8" class="w-full">
          <template #default>
            Happy Birthday, Chuks! You’ve been an incredible boss, role-model, and friend. Your
            drive and inspiration have pushed me to be better, and it fills my heart with joy to see
            you turn a new age. On this special day, I wish you and your beloved a joyful
            celebration and a lifetime of bliss together. Amen.
          </template>
          <template #footer> Peremobowei Agiddi </template>
        </AppWishCard>
      </div>
    </div>
  </section>
</template>
