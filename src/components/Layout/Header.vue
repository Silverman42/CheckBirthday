<script setup lang="ts">
import { useNavHandler } from '@/assets/compositions/useNavHandler'
import AppModal from '@/components/App/Modal.vue'
import { ref } from 'vue'

const { navTheme, activeId } = useNavHandler()

const links = [
  {
    href: '/#home',
    title: 'Home',
    activeId: 'home',
  },
  {
    href: '/#meet-chucks',
    title: 'Meet Chuks',
    activeId: 'meet-chucks',
  },
  {
    href: '/wishes',
    title: 'Wishes',
    activeId: 'wishes',
  },
]

const newWishModal = ref({
  openModal: () => {},
  closeModal: () => {},
})

const successModal = ref({
  openModal: () => {},
  closeModal: () => {},
})
</script>

<template>
  <AppModal ref="newWishModal"> </AppModal>

  <AppModal ref="successModal"> </AppModal>

  <header class="fixed top-0 left-0 right-0 z-100 pt-6 md:pt-12 px-5 md:px-0" :class="navTheme">
    <div
      class="max-w-[938px] flex items-center justify-between mx-auto rounded-[24px] border px-5 py-6 navbar-container"
    >
      <button class="w-[123px] h-[52px] rounded-[8px] bg-[#C1FFF9]"></button>

      <ul
        class="md:flex items-center gap-2 rounded-full px-[6px] py-[6px] hidden navlink-container"
      >
        <template v-for="(link, index) in links" :key="index">
          <li class="navlink">
            <a
              :href="link.href"
              class="py-[10px] px-[20px] inline-block rounded-full whitespace-nowrap"
              :class="{
                active: link.activeId === activeId,
              }"
              >{{ link.title }}</a
            >
          </li>
          <li v-if="index !== links.length - 1" class="h-[12px] navlink-seperator"></li>
        </template>
      </ul>

      <button
        @click="newWishModal.openModal()"
        class="h-[52px] rounded-[12px] px-[20px] text-sm md:text-base border flex items-center justify-center navbar-cta cursor-pointer"
      >
        Add wishes
      </button>
    </div>
  </header>

  <aside class="md:hidden"></aside>
</template>

<style scoped>
@reference '@/assets/main.css';

.dark .navbar-container {
  @apply border-[#2B2B2B] bg-[#0D0D0D94] backdrop-blur-md;
}

.dark .navlink-container {
  @apply border border-[#2B2B2B] bg-[#2F2F3280];
}

.dark .navlink a {
  @apply bg-[#2B2B2B] border border-[#2F2F32] text-[#FFFFF0] hover:text-[#0B3834] hover:bg-[#8BEAE2];
}
.dark .navlink a.active {
  @apply border border-[#8BEAE2] text-[#0B3834] bg-[#8BEAE2];
}

.dark .navlink-seperator {
  @apply border-l border-[#EDEFF2];
}
.dark .navbar-cta {
  @apply text-[#C1FFF9] border-[#C1FFF9];
}

.light .navbar-container {
  @apply border-[#F3F4F7] bg-[#FEFEFE33] backdrop-blur-md;
}

.light .navlink-container {
  @apply border border-[#EDEDEF] bg-[#F0F1F46E];
}

.light .navlink a {
  @apply bg-[#F0F1F4] border border-[#EAEBF0] text-[#144B48] hover:text-[#0B3834] hover:border-[#8BEAE2] hover:bg-[#8BEAE2];
}

.light .navlink a.active {
  @apply border border-[#8BEAE2] text-[#0B3834] bg-[#8BEAE2];
}

.light .navlink-seperator {
  @apply border-l border-[#EAEBF0];
}

.light .navbar-cta {
  @apply text-[#0B3834] border-[#0B3834];
}
</style>
