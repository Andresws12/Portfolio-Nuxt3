<script lang="ts" setup>
import ButtonContact from "@/components/common/ButtonContact.vue";
import { NuxtImg } from "#components";
</script>

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
        {{ $t("views.home.homeDescription.title") }}
      </h1>
      <h2
        class="home-description__subtitle is-subtitle"
        data-cy="home-description-data-subtitle"
      >
        {{ $t("views.home.homeDescription.subtitle") }}
      </h2>

      <ButtonContact />
    </article>
  </section>
</template>

<style lang="scss" scoped>
@use "@/assets/styles/mixins/all" as mixins;

//Styles
.home-description {
  display: flex;
  max-width: max-content;
  align-items: center;

  @include mixins.mobile {
    flex-direction: column;
  }

  &__data {
    padding: 0 35px;
    align-self: start;

    @include mixins.mobile {
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
