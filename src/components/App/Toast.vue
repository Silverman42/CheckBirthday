<script lang="ts" setup>
import { computed, watch } from 'vue'
import { useToastHandler } from '@/assets/compositions/useToastHandler'
import IconX from '../icons/IconX.vue'
import IconClose from '../icons/IconClose.vue'
import IconError from '../icons/IconError.vue'
import IconConfirm from '../icons/IconConfirm.vue'

const { toastBody, closeToast } = useToastHandler()

const alertData = computed(() => {
  console.log(toastBody)
  return toastBody
})

watch(toastBody, (newData) => {
  console.log(newData)
})
</script>
<template>
  <transition name="slideDownModal">
    <div
      v-if="alertData.type !== null"
      :class="{
        'border-[#9D32FF]': alertData.type === 'success',
        'border-red-500': alertData.type === 'error',
        'border-primary-200 ': alertData.type === 'info',
      }"
      class="flex w-11/12 items-center gap-4 border px-4 py-5 md:w-[30rem] fixed top-3 translate-x-[-50%] left-[50%] shadow-xl z-[4000] font-display rounded-xl bg-white"
    >
      <!-- close button -->
      <button
        @click="closeToast()"
        class="absolute top-2 right-2 text-neutral-400 hover:text-neutral-800 focus:text-neutral-800"
      >
        <span class="sr-only">Close</span>
        <span
          class="inline-block p-1 border border-slate-300 text-slate-500 hover:border-slate-600 rounded-full"
        >
          <IconClose :size="20"></IconClose>
        </span>
      </button>
      <!-- close button end -->
      <div
        v-if="alertData.type === 'success' || alertData.type === 'info'"
        class="w-14 flex-shrink-0"
        :class="{
          'text-[#9D32FF]': alertData.type === 'success',
          'text-primary-500': alertData.type === 'success',
          'text-primary-200': alertData.type === 'info',
        }"
      >
        <IconConfirm :size="40"></IconConfirm>
      </div>
      <div v-if="alertData.type === 'error'" class="w-14 text-red-500 flex-shrink-0">
        <IconError :size="40"></IconError>
      </div>
      <div>
        <p class="mt-1 text-sm text-neutral-600 font-light">
          {{ alertData.message }}
        </p>
      </div>
    </div>
  </transition>
</template>

<style scoped>
.slideDownModal-enter-active,
.slideDownModal-leave-active {
  transition: all 0.5s ease;
}

.slideDownModal-enter-from,
.slideDownModal-leave-to {
  opacity: 0;
  transform: translateY(-80%) translateX(0%);
}
</style>
