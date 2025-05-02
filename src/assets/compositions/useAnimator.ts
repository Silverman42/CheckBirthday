import { ref } from 'vue'

const headingAnimation = ref<NodeList | []>([])
const bottomAnimation = ref<NodeList | []>([])
const topAnimation = ref<NodeList | []>([])
const popAnimation = ref<NodeList | []>([])
const leftAnimation = ref<NodeList | []>([])
const rightAnimation = ref<NodeList | []>([])
export const useAnimator = () => {
  const fetchElemnts = () => {
    headingAnimation.value = document.querySelectorAll('.unhide-heading-anime span')
    bottomAnimation.value = document.querySelectorAll('.unhide-bottom-anime span')
    topAnimation.value = document.querySelectorAll('.unhide-top-anime')
    popAnimation.value = document.querySelectorAll('.pop-anime')
    leftAnimation.value = document.querySelectorAll('.unhide-left-anime')
    rightAnimation.value = document.querySelectorAll('.unhide-right-anime')
  }

  const startAllAnimations = () => {
    headingAnimation.value.forEach((el, index) => {
      ;(el as HTMLElement).style.animationPlayState = 'running'
    })
    bottomAnimation.value.forEach((el, index) => {
      ;(el as HTMLElement).style.animationPlayState = 'running'
    })
    topAnimation.value.forEach((el, index) => {
      ;(el as HTMLElement).style.animationPlayState = 'running'
    })
    popAnimation.value.forEach((el, index) => {
      ;(el as HTMLElement).style.animationPlayState = 'running'
    })
    leftAnimation.value.forEach((el, index) => {
      ;(el as HTMLElement).style.animationPlayState = 'running'
    })
    rightAnimation.value.forEach((el, index) => {
      ;(el as HTMLElement).style.animationPlayState = 'running'
    })
  }

  const pauseAllAnimations = () => {
    headingAnimation.value.forEach((el, index) => {
      ;(el as HTMLElement).style.animationPlayState = 'paused'
    })
    bottomAnimation.value.forEach((el, index) => {
      ;(el as HTMLElement).style.animationPlayState = 'paused'
    })
    topAnimation.value.forEach((el, index) => {
      ;(el as HTMLElement).style.animationPlayState = 'paused'
    })
    popAnimation.value.forEach((el, index) => {
      ;(el as HTMLElement).style.animationPlayState = 'paused'
    })
    leftAnimation.value.forEach((el, index) => {
      ;(el as HTMLElement).style.animationPlayState = 'paused'
    })
    rightAnimation.value.forEach((el, index) => {
      ;(el as HTMLElement).style.animationPlayState = 'paused'
    })
  }

  return {
    fetchElemnts,
    startAllAnimations,
    pauseAllAnimations,
  }
}
