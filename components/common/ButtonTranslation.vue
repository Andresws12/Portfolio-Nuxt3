<script setup lang="ts">
// const { locale, setLocale } = useI18n();
// const changeLanguage = () => {
//   locale.value === "es-ES" ? setLocale("en-US") : setLocale("es-ES");
// };
</script>

<template>
  <button
    class="button button-translations"
    data-cy="button-translation"
    type="button"
    @click="changeLanguage()"
  >
    <span>{{ locale.slice(0, 2) }}</span>
  </button>
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
