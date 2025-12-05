<template>
  <button class="button button-translations" @click="changeLanguage()">
    <span>{{ locale.slice(0, 2) }}</span>
  </button>
</template>

<script setup lang="ts">
const { locale, setLocale } = useI18n();
const changeLanguage = () => {
  locale.value === 'es-ES' ? setLocale('en-US') : setLocale('es-ES');
};
</script>

<style lang="scss" scoped>
.button-translations {
  position: absolute;
  top: 20px;
  right: 20px;
  z-index: 20;
  text-transform: uppercase;
  font-weight: 700;

  &__locale {
    margin-left: 8px;
  }
}
</style>
