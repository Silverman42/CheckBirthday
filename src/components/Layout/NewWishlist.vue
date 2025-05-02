<script setup lang="ts">
import { computed, reactive } from 'vue'

const emit = defineEmits(['submit_form'])

const maxChar = 500

const payload = reactive({
  firstName: '',
  lastName: '',
  message: '',
})

const getCharCount = computed(() => {
  return payload.message.length
})

const submitForm = () => {
  emit('submit_form')
}
</script>
<template>
  <form @submit.prevent="submitForm" class="flex flex-col pb-11 gap-11">
    <h1 class="text-[#0B3834] text-[52px] font-cherry leading-none">Make a Wish</h1>

    <div class="flex flex-col gap-6 w-full">
      <div>
        <label for="" class="font-medium mb-2 inline-block">What are your thoughts?</label>
        <div
          class="p-4 border border-[#EAEBF0] rounded-[16px] hover:border-[#258C83] focus:border-[#258C83]"
        >
          <textarea
            v-model="payload.message"
            name=""
            id=""
            :maxlength="maxChar"
            rows="3"
            class="w-full outline-none"
          ></textarea>
          <div class="flex items-center justify-end">
            <p class="text-[#010101] text-[10px]">{{ maxChar - getCharCount }} Characters left</p>
          </div>
        </div>
      </div>

      <div>
        <label for="" class="font-medium mb-2 inline-block">What are your thoughts?</label>
        <div class="w-full grid grid-cols-1 md:grid-cols-2 gap-4">
          <input
            type="text"
            v-model="payload.firstName"
            class="p-4 border border-[#EAEBF0] rounded-[16px] outline-none hover:border-[#258C83] focus:border-[#258C83]"
            placeholder="First Name"
          />
          <input
            type="text"
            v-model="payload.lastName"
            class="p-4 border border-[#EAEBF0] rounded-[16px] outline-none hover:border-[#258C83] focus:border-[#258C83]"
            placeholder="Last Name"
          />
        </div>
      </div>
    </div>

    <div>
      <button class="bg-[#258C83] text-[#FFFFF0] py-4 px-7 rounded-[12px]">Submit</button>
    </div>
  </form>
</template>
