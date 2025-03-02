export const useMainStore = defineStore(
  "useMainStore",
  () => {
    const theme = ref("light");

    const toggleTheme = () => {
      if (theme.value === "light") {
        theme.value = "dark";
      } else if (theme.value === "dark") {
        theme.value = "multicolor";
      } else {
        theme.value = "light";
      }
    };

    return { theme, toggleTheme };
  },
  {
    persist: true,
  },
);
