import { ref } from 'vue'

const footerPatterIsVisible = ref(false)
export const useFooterHandler = () => {
  const showFooterPattern = () => {
    footerPatterIsVisible.value = true
  }
  const hideFooterPattern = () => {
    footerPatterIsVisible.value = false
  }

  return {
    showFooterPattern,
    footerPatterIsVisible,
    hideFooterPattern,
  }
}
