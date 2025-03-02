<script lang="ts" setup>
import { computed } from "vue";
import { NuxtImg } from "#components";
import { useMainStore } from "@/stores/mainStore";

const mainStore = useMainStore();

// Se asume que mainStore.theme puede ser "dark", "light" o "multicolor"
const currentTheme = computed(() => mainStore.theme);
</script>

<template>
  <div class="toggle-dark-mode" @click="mainStore.toggleTheme()">
    <transition name="fade" mode="out-in">
      <NuxtImg
        v-if="currentTheme === 'light'"
        key="sun"
        alt="Sun icon"
        title="Sun icon"
        src="/img/sun.svg"
        class="toggle-dark-mode__icon-sun"
        quality="100"
        height="25"
        width="25"
        loading="lazy"
      />
      <NuxtImg
        v-else-if="currentTheme === 'dark'"
        key="moon"
        alt="Moon icon"
        title="Moon icon"
        src="/img/moon.svg"
        class="toggle-dark-mode__icon-moon"
        quality="100"
        height="25"
        width="25"
        loading="lazy"
      />
      <NuxtImg
        v-else
        key="multicolor"
        alt="Multicolor icon"
        title="Multicolor icon"
        src="/img/multicolor.svg"
        class="toggle-dark-mode__icon-multicolor"
        quality="100"
        height="25"
        width="25"
        loading="lazy"
      />
    </transition>
  </div>
</template>

<style scoped lang="scss">
.toggle-dark-mode {
  position: absolute;
  top: 20px;
  right: 80px;

  &__icon-sun,
  &__icon-moon,
  &__icon-multicolor {
    cursor: pointer;
  }

  &__icon-moon {
    filter: var(--secondary-filter-color);
  }

  &__icon-multicolor {
    filter: var(--main-filter-color-dark);
  }
}
</style>
