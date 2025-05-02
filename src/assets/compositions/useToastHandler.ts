import { reactive, ref } from 'vue'

type AlertTypes = 'success' | 'error' | 'info' | null

interface IAlert {
  type: AlertTypes
  message: string | undefined
}

const toastTimeoutId = ref<number>()

const toastBody = reactive<IAlert>({
  type: null,
  message: '',
})
export const useToastHandler = () => {
  const setDefaultState = () => {
    toastBody.type = null
    toastBody.message = ''
  }

  return {
    toastBody,

    triggerToast(message: string | undefined, type: AlertTypes) {
      setDefaultState()

      toastBody.type = type
      toastBody.message = message

      toastTimeoutId.value = setTimeout(() => {
        setDefaultState()
      }, 4000)
    },
    closeToast() {
      setDefaultState()

      clearTimeout(toastTimeoutId.value)
    },
  }
}
