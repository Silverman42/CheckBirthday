<script setup lang="ts">
import { useNavHandler } from '@/assets/compositions/useNavHandler'
import AppModal from '@/components/App/Modal.vue'
import { ref } from 'vue'
import NewWishlist from './NewWishlist.vue'
import LayoutSuccess from './Success.vue'
import IconMenu from '../icons/IconMenu.vue'
import IconClose2 from '../icons/IconClose2.vue'

const { navTheme, activeId } = useNavHandler()

const menuIsOpen = ref(false)

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

const showSuccessModal = () => {
  newWishModal.value.closeModal()
  successModal.value.openModal()
}

const toggleMenu = () => {
  menuIsOpen.value = !menuIsOpen.value
}

const closeMenu = () => {
  menuIsOpen.value = false
}

const createNewWishes = () => {
  menuIsOpen.value = false
  newWishModal.value.openModal()
}
</script>

<template>
  <AppModal ref="newWishModal">
    <NewWishlist @submit_form="showSuccessModal"></NewWishlist>
  </AppModal>

  <AppModal ref="successModal">
    <LayoutSuccess></LayoutSuccess>
  </AppModal>

  <header class="fixed top-0 left-0 right-0 z-100 pt-6 md:pt-12 px-5 md:px-0" :class="[navTheme]">
    <div
      class="max-w-[938px] flex items-center justify-between mx-auto rounded-[24px] border px-5 py-6 navbar-container"
    >
      <a href="#" class="w-[123px] h-[52px] rounded-[8px] bg-[#C1FFF9] hidden md:block"></a>

      <button
        @click="toggleMenu"
        class="w-11 aspect-square flex items-center rounded-[6px] md:hidden justify-center menu-btn"
      >
        <IconMenu :size="24"></IconMenu>
      </button>

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
        class="h-[52px] rounded-[12px] px-[20px] text-sm md:text-base border flex items-center justify-center navbar-cta"
      >
        Add wishes
      </button>
    </div>
  </header>

  <Transition name="slideInRight">
    <aside
      v-if="menuIsOpen"
      class="md:hidden w-full h-screen bg-white z-[120] fixed top-0 left-0 bottom-[0] px-5 pt-11 pb-6 flex flex-col gap-10"
    >
      <div class="flex w-full items-center justify-between">
        <a href="#" class="w-[123px] h-[52px] rounded-[8px] bg-[#C1FFF9] block"></a>
        <button>
          <button @click="closeMenu" class="cursor-pointer">
            <IconClose2 :size="40"></IconClose2>
          </button>
        </button>
      </div>

      <ul class="flex flex-col w-full gap-2">
        <li class="block w-[70%]" v-for="(link, index) in links" :key="index">
          <a
            class="py-5 border-b border-[#EAEBF0] inline-block w-full font-medium"
            :href="link.href"
          >
            {{ link.title }}
          </a>
        </li>
      </ul>

      <div class="mt-auto w-full">
        <button
          @click="createNewWishes"
          class="bg-[#258C83] text-[#FFFFF0] py-4 px-7 rounded-[12px] w-full"
        >
          Add wishes
        </button>
      </div>
    </aside>
  </Transition>
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
.dark .navbar-cta,
.dark .menu-btn {
  @apply text-[#C1FFF9] border border-[#C1FFF9] cursor-pointer;
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

.light .navbar-cta,
.light .menu-btn {
  @apply text-[#0B3834] border border-[#0B3834] cursor-pointer;
}

.slideInRight-enter-active,
.slideInRight-leave-active {
  transition: all 0.5s ease;
}

.slideInRight-enter-from,
.slideInRight-leave-to {
  opacity: 0;
  transform: translateX(-80%);
}
</style>
