import { ref } from 'vue'

const navTheme = ref<'light' | 'dark'>('dark')
const activeId = ref<string>('')
export const useNavHandler = () => {
  const changeTheme = (theme: 'light' | 'dark') => {
    navTheme.value = theme
  }

  const changeActiveId = (id: string) => {
    activeId.value = id
  }

  return {
    navTheme,
    changeTheme,
    changeActiveId,
    activeId,
  }
}
