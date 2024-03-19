<template>
  <section
    id="personal-data"
    :aria-label="$t('common.ariaLabel.ariaLabelPersonalData')"
    data-cy="home-description"
    class="home-description card"
  >
    <NuxtImg
      class="home-description__image"
      data-cy="home-description-image"
      src="/img/andres-front-programador.webp"
      provider="cloudflare"
      :alt="$t('common.images.dataBodyImage')"
      sizes="220px sm:180px md:240px lg:250px xl:350px"
      densities="1x 2x"
      width="175"
      height="175"
    />
    <article class="home-description__data" data-cy="home-description-data">
      <h1
        class="home-description__title is-title"
        data-cy="home-description-data-title"
      >
        {{ $t('views.home.homeDescription.title') }}
      </h1>
      <h2
        class="home-description__subtitle is-subtitle"
        data-cy="home-description-data-subtitle"
      >
        {{ $t('views.home.homeDescription.subtitle') }}
      </h2>

      <button-contact data-cy="home-description-button-contact" />
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
  max-width: max-content;
  align-items: center;

  @include mobile {
    flex-direction: column;
  }

  &__data {
    padding: 0 35px;
    align-self: start;

    @include mobile {
      margin-top: 15px;
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
