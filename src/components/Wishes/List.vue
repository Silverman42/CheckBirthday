<script lang="ts" setup>
import { useGSAP } from '@/assets/compositions/useGsap'
import AppWishCard from '@/components/App/WishCard.vue'
import { SplitText } from 'gsap/SplitText'
import { onMounted } from 'vue'

const { gsap } = useGSAP()

const triggerAnimations = () => {
  document.fonts.ready.then(() => {
    const wishes = {
      heading: SplitText.create('#wishes_heading', { type: 'chars' }),
      text: document.querySelector('#wishes_text'),
      illustration: document.querySelector('#wishes_illustration'),
      container: document.querySelector('#wishes_container'),
      cards: document.querySelectorAll('.wishes_card'),
      cards_container: document.querySelector('#wishes_card_container'),
    }

    gsap
      .timeline({
        delay: 0.6,
      })
      .from(wishes.heading.chars, {
        y: 50,
        opacity: 0,
        ease: 'power4.out',
        stagger: 0.1,
      })
      .to(wishes.heading.chars, {
        y: 0,
        duration: 0.4,
        opacity: 1,
        ease: 'power4.out',
        stagger: 0.1,
      })
      .from(wishes.illustration, {
        scale: 0.1,
        duration: 0.2,
        opacity: 0,
        ease: 'power4.out',
        stagger: 0.05,
      })
      .to(wishes.illustration, {
        scale: 1,
        duration: 0.2,
        opacity: 1,
        ease: 'power4.out',
        stagger: 0.05,
      })
      .from(wishes.text, {
        x: 50,
        duration: 0.2,
        opacity: 0,
        ease: 'power4.out',
      })
      .to(wishes.text, {
        x: 0,
        duration: 0.2,
        opacity: 1,
        ease: 'power4.out',
      })
  })
}

onMounted(() => {
  triggerAnimations()
})
</script>

<template>
  <section class="mb-20 mx-5" id="wishes_container">
    <div class="max-w-[1058px] mx-auto w-full">
      <div class="flex gap-5 justify-between items-end mb-16">
        <div class="flex gap-3 flex-col md:flex-row md:items-center">
          <h2
            class="font-cherry text-[#0B3834] text-4xl md:text-[75px] shrink-0"
            id="wishes_heading"
          >
            Birthday <br />
            Wishes
          </h2>
          <div class="flex flex-row items-center md:flex-col md:items-start gap-3">
            <img
              src="/img/majesticons_shooting-star.svg"
              class="w-[49.59px]"
              id="wishes_illustration"
              alt="shooting star"
            />
            <p class="text-sm md:text-lg text-[#0B3834] max-w-[216px]" id="wishes_text">
              See what others have said to Mr Chuks
            </p>
          </div>
        </div>
      </div>

      <div class="grid grid-cols-1 md:grid-cols-2 gap-4" id="wishes_card_container">
        <AppWishCard v-for="i in 8" class="w-full wishes_card">
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
