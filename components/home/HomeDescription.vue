<template>
  <section data-cy="home-section" class="home-description card">
    <NuxtImg
      class="home-description__image"
      src="/img/andres-front-programador.webp"
      :alt="$t('common.images.dataBodyImage')"
      :title="$t('common.images.dataBodyImage')"
      sizes="220px sm:350px md:450px lg:550px xl:650px"
      width="200"
      height="200"
    />
    <article class="home-description__data">
      <h1 class="home-description__title is-title">
        {{ $t('views.home.homeDescription.title') }}
      </h1>
      <h2 class="home-description__subtitle is-subtitle">
        {{ $t('views.home.homeDescription.subtitle') }}
      </h2>

      <button-contact />
    </article>
  </section>
</template>

<script lang="ts" setup>
import ButtonContact from '@/components/common/ButtonContact.vue';
</script>

<style lang="scss" scoped>
//Styles
.home-description {
  display: flex;
  align-items: center;

  @include mobile {
    flex-direction: column;
  }

  &__data {
    padding: 0 35px;

    @include mobile {
      padding: 0;
    }
  }

  &__image {
    z-index: 2;
    border-radius: 50%;
    box-shadow:
      rgb(0 0 0 / 16%) 0 10px 36px 0,
      rgb(0 0 0 / 6%) 0 0 0 1px;
  }
}
</style>
