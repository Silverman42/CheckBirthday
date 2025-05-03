<script lang="ts" setup>
import { SplitText } from 'gsap/SplitText'
import { onMounted } from 'vue'
import { useGSAP } from '@/assets/compositions/useGsap'

const { gsap } = useGSAP()

const triggerAnimation = () => {
  document.fonts.ready.then(() => {
    const memory_images = {
      heading: SplitText.create('#memory_images_heading', { type: 'chars,words,lines' }),
      images: document.querySelectorAll('.memory_images_img'),
    }

    gsap
      .timeline({
        scrollTrigger: {
          trigger: '#memory_images',
          start: 'top 40%',
          end: 'bottom 50%',
          scrub: true,
        },
      })
      .from(memory_images.heading.chars, {
        y: 50,
        duration: 0.4,
        opacity: 0,
        ease: 'power4.out',
        stagger: 0.05,
      })
      .to(memory_images.heading.chars, {
        y: 0,
        duration: 0.4,
        opacity: 1,
        ease: 'power4.out',
        stagger: 0.05,
      })
      .from(memory_images.images, {
        y: 50,
        duration: 0.4,
        opacity: 0,
        ease: 'power4.out',
        stagger: 0.05,
      })
      .to(memory_images.images, {
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
  <section class="my-20 mx-5" id="memory_images">
    <div class="max-w-[1058px] mx-auto w-full">
      <h2 class="text-lg text-bold text-[#000000] mb-13" id="memory_images_heading">
        More photos of Mr Abanum
      </h2>

      <div class="grid grid-cols-2 md:grid-cols-5 gap-4">
        <div
          class="relative aspect-square rounded-xl overflow-hidden memory_images_img"
          v-for="i in 5"
          :key="i"
        >
          <img
            :src="`/img/gallery_${i}.jpg`"
            class="w-full h-full object-cover object-center absolute top-0 left-0"
          />
        </div>
      </div>
    </div>
  </section>
</template>
