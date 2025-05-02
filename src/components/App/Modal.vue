<script setup lang="ts">
import { ref } from 'vue'

const modalProps = withDefaults(defineProps<{ level?: number }>(), {
  level: 1,
})

const modalIsOpen = ref<boolean>(false)
const emit = defineEmits(['closeModal', 'openModal'])

const openModal = () => {
  modalIsOpen.value = true
  document.querySelector('body')?.classList.add('overflow-y-hidden')
  emit('openModal')
}

const closeModal = () => {
  modalIsOpen.value = false
  document.querySelector('body')?.classList.remove('overflow-y-hidden')
  emit('closeModal')
}

defineExpose({
  closeModal,
  openModal,
})
</script>
<template>
  <transition name="fade">
    <div
      v-if="modalIsOpen"
      @click="closeModal"
      class="fixed w-screen h-screen top-0 left-0 backdrop-blur-lg bg-[black]/30"
      :style="{
        zIndex: modalProps.level * 260,
      }"
    ></div>
  </transition>
  <transition name="slideUpModal">
    <div
      v-if="modalIsOpen"
      class="w-full md:w-[40rem] left-[50%] translate-x-[-50%] fixed bottom-[50%] translate-y-[50%] max-h-[90vh] rounded-3xl bg-white p-2 bg-gradient-to-t border border-slate-100 from-slate-200 to-slate-50"
      :style="{
        zIndex: modalProps.level * 261,
      }"
    >
      <div class="w-full h-full bg-white rounded-[19px] border-2 border-slate-200">
        <div class="max-w-7xl mx-auto flex flex-col h-full">
          <div class="w-full flex-grow overflow-y-auto px-6 -mt-5">
            <slot></slot>
          </div>
        </div>
      </div>
    </div>
  </transition>
</template>

<style scoped>
.slideUpModal-enter-active,
.slideUpModal-leave-active {
  transition: all 0.5s ease;
}

.slideUpModal-enter-from,
.slideUpModal-leave-to {
  opacity: 0;
  transform: translateY(80%) translateX(0%);
}
</style>
