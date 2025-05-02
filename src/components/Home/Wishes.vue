<script lang="ts" setup>
import AppWishCard from '@/components/App/WishCard.vue'
</script>

<template>
  <section class="px-5 my-20 overflow-hidden">
    <div class="max-w-[1058px] mx-auto w-full">
      <div class="flex gap-5 justify-between items-end">
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

        <button
          class="rounded-[16px] border border-[#258C83] text-[#258C83] text-sm md:text-base px-[18px] whitespace-nowrap py-[12px] md:py-[20px] md:px-[35px] md:mb-5"
        >
          See all
        </button>
      </div>
    </div>

    <div class="max-w-[1058px] mx-auto w-full flex gap-x-4 mt-16">
      <AppWishCard class="w-[604px] min-w-[604px]">
        <template #default>
          Happy Birthday, Chuks! You’ve been an incredible boss, role-model, and friend. Your drive
          and inspiration have pushed me to be better, and it fills my heart with joy to see you
          turn a new age. On this special day, I wish you and your beloved a joyful celebration and
          a lifetime of bliss together. Amen.
        </template>
        <template #footer> Peremobowei Agiddi </template>
      </AppWishCard>
      <AppWishCard class="w-[604px] min-w-[604px]">
        <template #default>
          Happy Birthday, Chuks! You’ve been an incredible boss, role-model, and friend. Your drive
          and inspiration have pushed me to be better, and it fills my heart with joy to see you
          turn a new age. On this special day, I wish you and your beloved a joyful celebration and
          a lifetime of bliss together. Amen.
        </template>
        <template #footer> Peremobowei Agiddi </template>
      </AppWishCard>
      <AppWishCard class="w-[604px] min-w-[604px]">
        <template #default>
          Happy Birthday, Chuks! You’ve been an incredible boss, role-model, and friend. Your drive
          and inspiration have pushed me to be better, and it fills my heart with joy to see you
          turn a new age. On this special day, I wish you and your beloved a joyful celebration and
          a lifetime of bliss together. Amen.
        </template>
        <template #footer> Peremobowei Agiddi </template>
      </AppWishCard>
    </div>
  </section>
</template>
