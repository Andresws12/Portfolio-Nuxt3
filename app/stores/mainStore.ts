import { Theme } from '@/models/Theme'

export const useMainStore = defineStore('useMainStore', () => {
  const theme = ref<Theme>(Theme.Dark)

  const toggleTheme = () => {
    const themes = [Theme.Light, Theme.Dark, Theme.Multicolor]
    const currentIndex = themes.indexOf(theme.value)
    const nextIndex = (currentIndex + 1) % themes.length
    theme.value = themes[nextIndex] as Theme
  }

  return { theme, toggleTheme }
})
