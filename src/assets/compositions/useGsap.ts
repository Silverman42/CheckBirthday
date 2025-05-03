import { gsap } from 'gsap'
import { Observer } from 'gsap/Observer'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { SplitText } from 'gsap/SplitText'

export const useGSAP = () => {
  const resgisterPlugins = () => {
    gsap.registerPlugin(ScrollTrigger, Observer, SplitText)
  }

  return {
    gsap,
    resgisterPlugins,
  }
}
