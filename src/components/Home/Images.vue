<template>
  <section class="my-20 mx-5">
    <div class="max-w-[1058px] mx-auto w-full">
      <h2 class="text-lg text-bold text-[#000000] mb-13">More photos of Mr Abanum</h2>

      <div class="grid grid-cols-2 md:grid-cols-5 gap-4">
        <div class="relative aspect-square rounded-xl overflow-hidden" v-for="i in 5" :key="i">
          <img
            :src="`/img/gallery_${i}.jpg`"
            class="w-full h-full object-cover object-center absolute top-0 left-0"
          />
        </div>
      </div>
    </div>
  </section>
</template>
