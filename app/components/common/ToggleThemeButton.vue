<script lang="ts" setup>
import { computed } from 'vue'
import { NuxtImg } from '#components'
import { Theme } from '@/models/Theme'

const mainStore = useMainStore()

const toggleTheme = () => {
  console.log('toggleTheme')
  mainStore.toggleTheme()
}

const currentTheme = computed(() => mainStore.theme)
</script>

<template>
  <div class="toggle-dark-mode" @click="toggleTheme">
    <transition name="fade" mode="out-in">
      <NuxtImg
        v-if="currentTheme === Theme.Light"
        key="sun"
        alt="Sun icon"
        title="Sun icon"
        src="/img/sun.svg"
        class="toggle-dark-mode__icon-sun"
        quality="100"
        height="25"
        width="25"
        densities="x1 x2"
        loading="lazy"
      />
      <NuxtImg
        v-else-if="currentTheme === Theme.Dark"
        key="moon"
        alt="Moon icon"
        title="Moon icon"
        src="/img/moon.svg"
        class="toggle-dark-mode__icon-moon"
        quality="100"
        height="25"
        width="25"
        densities="x1 x2"
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
        densities="x1 x2"
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
  z-index: 9999;
  cursor: pointer;

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
