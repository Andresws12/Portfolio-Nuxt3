export const useMainStore = defineStore("useMainStore", () => {
  const isDark = ref(false);

  const toggleDarkMode = () => {
    isDark.value = !isDark.value;
  };
  return { isDark, toggleDarkMode };
});
