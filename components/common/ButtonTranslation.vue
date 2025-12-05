<script setup lang="ts">
import { NuxtLink } from "#components";
const { locale } = useI18n();
const switchLocalePath = useSwitchLocalePath();
const targetLocale = computed(() =>
  locale.value === "es-ES" ? "en-US" : "es-ES",
);

async function handleLanguageSwitch() {
  const path = switchLocalePath(targetLocale.value);
  await navigateTo(path);
  window.location.reload();
}
</script>

<template>
  <NuxtLink
    :to="switchLocalePath(targetLocale)"
    class="button button-translations"
    data-cy="button-translation"
    @click.prevent="handleLanguageSwitch"
  >
    <span>{{ locale.slice(0, 2) }}</span>
  </NuxtLink>
</template>

<style lang="scss" scoped>
.button-translations {
  position: absolute;
  top: 12px;
  right: 20px;
  z-index: 20;
  text-transform: uppercase;

  &__locale {
    margin-left: 8px;
  }
}
</style>
