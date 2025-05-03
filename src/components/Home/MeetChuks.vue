<script lang="ts" setup>
import { useGSAP } from '@/assets/compositions/useGsap'
import { SplitText } from 'gsap/SplitText'
import { onMounted } from 'vue'

const { gsap } = useGSAP()

const triggerAnimation = () => {
  document.fonts.ready.then(() => {
    const meetChuks = {
      heading: document.querySelector('#meet_chuks_heading'),
      text_container: document.querySelector('#meet_chuks_text_container'),
      textOne: SplitText.create('#meet_chuks_text_one', { type: 'words' }),
      textTwo: SplitText.create('#meet_chuks_text_two', { type: 'words' }),
      textThree: SplitText.create('#meet_chuks_text_three', { type: 'words' }),
      textFour: SplitText.create('#meet_chuks_text_four', { type: 'words' }),
    }

    const halfOfContainerWidth = (meetChuks.text_container as HTMLElement).offsetWidth / 2

    gsap
      .timeline({
        scrollTrigger: {
          trigger: '#meet_chuks_container',
          start: 'top 40%',
          end: 'bottom 50%',
          scrub: true,
        },
      })
      .from(meetChuks.heading, {
        x: halfOfContainerWidth,
        duration: 0.4,
        ease: 'power4.out',
      })
      .to(meetChuks.heading, {
        x: 0,
        duration: 0.4,
        ease: 'power4.out',
      })
      .from(meetChuks.textOne.words, {
        duration: 0.4,
        opacity: 0,
        ease: 'power4.out',
        stagger: 0.05,
      })
      .to(meetChuks.textOne.words, {
        duration: 0.4,
        opacity: 1,
        ease: 'power4.out',
        stagger: 0.05,
      })
      .from(meetChuks.textTwo.words, {
        duration: 0.4,
        opacity: 0,
        ease: 'power4.out',
        stagger: 0.05,
      })
      .to(meetChuks.textTwo.words, {
        duration: 0.4,
        opacity: 1,
        ease: 'power4.out',
        stagger: 0.05,
      })
      .from(meetChuks.textThree.words, {
        duration: 0.4,
        opacity: 0,
        ease: 'power4.out',
        stagger: 0.05,
      })
      .to(meetChuks.textThree.words, {
        duration: 0.4,
        opacity: 1,
        ease: 'power4.out',
        stagger: 0.05,
      })
      .from(meetChuks.textFour.words, {
        duration: 0.4,
        opacity: 0,
        ease: 'power4.out',
        stagger: 0.05,
      })
      .to(meetChuks.textFour.words, {
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
  <section class="my-24 mx-5" id="meet_chuks_container">
    <div class="max-w-[1058px] mx-auto flex gap-10 md:gap-20 flex-col md:flex-row w-full">
      <h2
        class="w-[266px] font-cherry text-[#0B3834] text-4xl md:text-[75px] shrink-0"
        id="meet_chuks_heading"
      >
        Meet Mr Chuks Abanum
      </h2>

      <div
        class="w-full flex flex-col gap-10 text-base md:text-lg text-[#4e3f3f] text-justify"
        id="meet_chuks_text_container"
      >
        <p id="meet_chuks_text_one">
          Introducing Monday Abanum, a visionary entrepreneur and community leader renowned for his
          innovative approach to sustainable development. With a deep-seated passion for empowering
          local businesses, Monday has dedicated his career to fostering economic growth and social
          change in his community.
        </p>

        <p id="meet_chuks_text_two">
          He believes that by supporting small enterprises, he can create a ripple effect that
          uplifts the entire region. When he's not working on his latest project, you can find him
          exploring the vibrant streets of his hometown, engaging with residents from all walks of
          life, and inspiring the next generation of leaders through workshops and mentorship
          programs.
        </p>

        <p id="meet_chuks_text_three">
          His commitment to sustainability extends beyond business; he actively participates in
          local environmental initiatives, advocating for green practices that benefit both the
          economy and the planet. Monday's vision is not just about profit; it's about building a
          thriving community where everyone has the opportunity to succeed.
        </p>

        <p id="meet_chuks_text_four">
          His commitment to sustainability extends beyond business; he actively participates in
          local environmental initiatives, advocating for green practices that benefit both the
          economy and the planet. Monday's vision is not just about profit; it's about building a
          thriving community where everyone has the opportunity to succeed.
        </p>
      </div>
    </div>
  </section>
</template>
