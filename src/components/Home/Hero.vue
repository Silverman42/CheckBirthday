<script setup lang="ts">
import { useGSAP } from '@/assets/compositions/useGsap'
import { SplitText } from 'gsap/SplitText'
import { onMounted } from 'vue'

const { gsap } = useGSAP()

const triggerAnimation = () => {
  document.fonts.ready.then(() => {
    const heroTextOne = SplitText.create('#hero_text_1', { type: 'chars' })
    const heroTextTwo = SplitText.create('#hero_text_2', { type: 'chars,words' })
    const heroTextThree = SplitText.create('#hero_text_3', { type: 'chars' })
    const heroTextFour = SplitText.create('#hero_text_4', { type: 'chars,words' })
    const heroTextFive = SplitText.create('#hero_text_5', { type: 'chars,words,' })

    const timeline = gsap.timeline({
      delay: 0.6,
    })
    timeline
      .from(heroTextOne.chars, {
        y: 100,
        duration: 0.4,
        opacity: 0,
        ease: 'power4.out',
        stagger: 0.05,
      })
      .to(heroTextOne.chars, { y: 0, duration: 0.4, opacity: 1, ease: 'power4.out', stagger: 0.05 })
      .from(heroTextTwo.chars, {
        x: -100,
        duration: 0.4,
        opacity: 0,
        ease: 'power4.out',
        stagger: 0.05,
      })
      .to(heroTextTwo.chars, { x: 0, duration: 0.4, opacity: 1, ease: 'power4.out', stagger: 0.05 })
      .from(heroTextThree.chars, {
        x: -100,
        duration: 0.4,
        opacity: 0,
        ease: 'power4.out',
        stagger: 0.05,
      })
      .to(heroTextThree.chars, {
        x: 0,
        duration: 0.4,
        opacity: 1,
        ease: 'power4.out',
        stagger: 0.05,
      })
      .from(heroTextFour.chars, {
        y: 100,
        duration: 0.4,
        opacity: 0,
        ease: 'power4.out',
        stagger: 0.05,
      })
      .to(heroTextFour.chars, {
        y: 0,
        duration: 0.4,
        opacity: 1,
        ease: 'power4.out',
        stagger: 0.05,
      })
      .from(heroTextFive.chars, {
        y: 100,
        duration: 0.4,
        opacity: 0,
        ease: 'power4.out',
        stagger: 0.05,
      })
      .to(heroTextFive.chars, {
        y: 0,
        duration: 0.4,
        opacity: 1,
        ease: 'power4.out',
        stagger: 0.05,
      })
  })
}
onMounted(() => {
  triggerAnimation()
})
</script>
<template>
  <section class="relative min-h-[140vh]">
    <img
      src="/img/hero-img.png"
      class="w-full absolute left-0 top-0 z-[1] h-full object-cover object-center"
    />
    <div
      class="absolute top-0 left-0 h-full w-full z-3 bg-gradient-to-b from-black/50 from-60%"
    ></div>

    <div class="min-h-screen max-w-[938px] mx-auto flex items-center w-full relative z-8 px-5">
      <h1 class="sr-only">Celebrating A DISRUPTIVE Leader</h1>

      <div class="max-w-[717px]" aria-hidden="true">
        <div
          class="text-white font-cherry text-4xl md:text-[114.23px] leading-[100%]"
          id="hero_text_1"
        >
          Celebrating
        </div>
        <div
          class="text-[50px] md:text-[114.23px] font-bold text-[#F9E095] tracking-tighter whitespace-nowrap block leading-[100%] md:mt-[-1rem]"
          id="hero_text_2"
        >
          A DISRUPTIVE
        </div>
        <div class="flex items-end gap-x-3 mt-3 md:mt-7">
          <div
            class="text-white font-cherry text-5xl md:text-[132.95px] leading-[55%] text-nowrap"
            id="hero_text_3"
          >
            Leader
          </div>
          <img src="/img/Union.svg" class="w-[50px] md:w-[96px]" alt="" />
          <div class="text-[18px] md:text-[38px]">
            <div class="leading-[100%] text-[#8BEAE2] font-bold whitespace-nowrap" id="hero_text_4">
              MR. CHUKS
            </div>
            <div class="leading-[100%] text-[#8BEAE2] font-bold" id="hero_text_5">ABANUM</div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
