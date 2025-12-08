<script lang="ts" setup>
import { computed } from 'vue'
import { NuxtImg } from '#components'
import { useMainStore } from '@/stores/mainStore'
import { Theme } from '@/models/Theme'

const mainStore = useMainStore()
const currentTheme = computed(() => mainStore.theme)
</script>

<template>
  <NuxtImg
    src="/img/andres-personaje.webp"
    alt="Andres Hernandez"
    class="character__me"
    sizes="100vw xs:25vw sm:50vw md:400px"
    loading="lazy"
    width="367"
    height="550"
  />
  <Transition name="equipment" appear>
    <NuxtImg
      v-if="currentTheme === Theme.Light"
      src="/img/sunglases.webp"
      alt="Andres Hernandez"
      class="character__sunglasses"
      sizes="100vw xs:25vw sm:50vw md:400px"
      loading="lazy"
      width="100"
    />
  </Transition>
  <Transition name="equipment" appear>
    <NuxtImg
      v-if="currentTheme === Theme.Multicolor"
      src="/img/helmet.webp"
      alt="ChatGPT"
      class="character__helmet"
      sizes="100vw xs:25vw sm:50vw md:400px"
      loading="lazy"
      width="225"
    />
  </Transition>
</template>

<style lang="scss" scoped>
@use '@/assets/styles/mixins/all' as mixins;

.character {
  &__me {
    position: fixed;
    bottom: 0;
    right: 0;
  }

  &__sunglasses {
    position: fixed;
    bottom: 453px;
    right: 144px;
  }

  &__helmet {
    position: fixed;
    bottom: 415px;
    right: 80px;
  }

  @include mixins.tablet {
    &__me {
      height: 150px;
      width: auto;
      z-index: 1;
    }

    &__sunglasses {
      bottom: 125px;
      width: 26px;
      right: 40px;
      z-index: 1;
    }

    &__helmet {
      bottom: 112px;
      width: 63px;
      right: 21px;
      z-index: 1;
    }
  }
}
</style>
4
