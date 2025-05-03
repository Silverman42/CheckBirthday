<script lang="ts" setup>
import { useGSAP } from '@/assets/compositions/useGsap'
import AppWishCard from '@/components/App/WishCard.vue'
import { SplitText } from 'gsap/SplitText'
import { onMounted } from 'vue'

const { gsap } = useGSAP()

const triggerAnimations = () => {
  document.fonts.ready.then(() => {
    const wishes = {
      heading: SplitText.create('#wishes_heading', { type: 'chars,words,lines' }),
      text: document.querySelector('#wishes_text'),
      illustration: document.querySelector('#wishes_illustration'),
      container: document.querySelector('#wishes_container'),
      cta: document.querySelector('#wishes_cta'),
      cards_container: document.querySelector('#wishes_card_container'),
      cards: document.querySelectorAll('.wishes_card'),
    }

    const cardContainerWidth = (wishes.cards_container as HTMLElement).offsetWidth
    let cardsWidth = 0
    wishes.cards.forEach((card) => {
      cardsWidth += (card as HTMLElement).offsetWidth + 16
    })

    const offsetWidth = cardsWidth - cardContainerWidth

    gsap
      .timeline({
        scrollTrigger: {
          trigger: wishes.container,
          start: 'top 10%',
          end: `bottom 20%`,
          scrub: 1,
          pin: true,
          pinSpacing: true,
        },
      })
      .from(wishes.heading.chars, {
        y: 50,
        duration: 0.2,
        opacity: 0,
        ease: 'power4.out',
        stagger: 0.05,
      })
      .to(wishes.heading.chars, {
        y: 0,
        duration: 0.2,
        opacity: 1,
        ease: 'power4.out',
        stagger: 0.05,
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
      .from(wishes.cta, {
        y: 50,
        duration: 0.2,
        opacity: 0,
        ease: 'power4.out',
        stagger: 0.05,
      })
      .to(wishes.cta, {
        y: 0,
        duration: 0.2,
        opacity: 1,
        ease: 'power4.out',
        stagger: 0.05,
      })
      .from(wishes.cards_container, {
        x: 0,
      })
      .to(wishes.cards_container, {
        x: `${-offsetWidth}px`,
        duration: 1.5,
        ease: 'power2.inOut',
      })
  })
}

onMounted(() => {
  triggerAnimations()
})
</script>

<template>
  <section
    class="px-5 my-20 overflow-hidden h-screen flex flex-col items-center justify-center"
    id="wishes_container"
  >
    <div class="max-w-[1058px] mx-auto w-full">
      <div class="flex gap-5 justify-between items-end">
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
              id="wishes_illustration"
              class="w-[49.59px]"
              alt="shooting star"
            />
            <p class="text-sm md:text-lg text-[#0B3834] max-w-[216px]" id="wishes_text">
              See what others have said to Mr Chuks
            </p>
          </div>
        </div>

        <button
          class="rounded-[16px] border border-[#258C83] text-[#258C83] text-sm md:text-base px-[18px] whitespace-nowrap py-[12px] md:py-[20px] md:px-[35px] md:mb-5"
          id="wishes_cta"
        >
          See all
        </button>
      </div>
    </div>

    <div class="max-w-[1058px] mx-auto w-full mt-16">
      <div class="flex gap-x-4" id="wishes_card_container">
        <AppWishCard
          v-for="i in 7"
          class="w-[90vw] min-w-[90vw] md:w-[604px] md:min-w-[604px] wishes_card"
        >
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
