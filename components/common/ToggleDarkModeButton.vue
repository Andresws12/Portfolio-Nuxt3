<script lang="ts" setup>
import { computed } from "vue";
import { NuxtImg } from "#components";
import { useMainStore } from "@/stores/mainStore";

const mainStore = useMainStore();

const isDarkMode = computed(() => mainStore.isDark);
</script>

<template>
  <div class="toggle-dark-mode" @click="mainStore.toggleDarkMode()">
    <transition name="fade" mode="out-in">
      <NuxtImg
        v-if="isDarkMode"
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
        v-else
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
    </transition>
  </div>
</template>

<style scoped lang="scss">
.toggle-dark-mode {
  position: absolute;
  top: 20px;
  right: 80px;

  &__icon-sun {
    cursor: pointer;
    filter: var(--secondary-filter-color);
  }

  &__icon-moon {
    cursor: pointer;
  }
}
</style>
