<template>
  <section
    id="experience-data"
    :aria-label="$t('common.ariaLabel.ariaLabelExperienceData')"
    data-cy="home-experience"
    class="home-experience card"
  >
    <h2
      class="home-experience__title is-subtitle is-strong"
      data-cy="home-experience-title"
    >
      {{ $t('views.home.homeWorkExperience.title') }}
    </h2>
    <div class="home-experience__container-cards">
      <common-card-experience
        image-source="img/iskaypet.webp"
        :image-height="workImageHeight.ISKAYPET"
        :image-data="$t('common.images.dataIskaypetImage')"
        :text-title="$t('common.works.iskaypet.name')"
        :text-subtitle="$t('common.works.iskaypet.title')"
        :text-description="$t('common.works.iskaypet.period')"
        :call-to-action-button="
          $t('views.home.homeWorkExperience.callToActionButton')
        "
        :active-text-button="
          $t('views.home.homeWorkExperience.activeButtonText')
        "
        is-active
        has-vue
        has-react
        has-typescript
        has-jquery
        data-cy="home-experience-card-iskaypet"
        @click="$router.push({ path: '/works/iskaypet-view' })"
      />
      <common-card-experience
        image-source="img/cloudappi.webp"
        :image-height="workImageHeight.CLOUDAPPI"
        :image-data="$t('common.images.dataCloudappiImage')"
        :text-title="$t('common.works.cloudappi.name')"
        :text-subtitle="$t('common.works.cloudappi.title')"
        :text-description="$t('common.works.cloudappi.period')"
        :call-to-action-button="
          $t('views.home.homeWorkExperience.callToActionButton')
        "
        has-vue
        has-react
        has-angular
        has-typescript
        has-jquery
        has-net
        data-cy="home-experience-card-cloudappi"
        @click="$router.push({ path: '/works/cloudappi-view' })"
      />
      <common-card-experience
        image-source="img/star.webp"
        :image-height="workImageHeight.STAR"
        :image-data="$t('common.images.dataStarImage')"
        :text-title="$t('common.works.star.name')"
        :text-subtitle="$t('common.works.star.title')"
        :text-description="$t('common.works.star.period')"
        :call-to-action-button="
          $t('views.home.homeWorkExperience.callToActionButton')
        "
        has-vue
        has-typescript
        has-net
        has-jquery
        data-cy="home-experience-card-star"
        @click="$router.push({ path: '/works/star-view' })"
      />
      <common-card-experience
        image-source="img/pantallazo.webp"
        :image-height="workImageHeight.PANTALLAZO"
        :image-data="$t('common.images.dataPantallazoImage')"
        :text-title="$t('common.works.pantallazo.name')"
        :text-subtitle="$t('common.works.pantallazo.title')"
        :text-description="$t('common.works.pantallazo.period')"
        :call-to-action-button="
          $t('views.home.homeWorkExperience.callToActionButton')
        "
        has-typescript
        has-php
        has-jquery
        data-cy="home-experience-card-pantallazo"
        @click="$router.push({ path: '/works/pantallazo-view' })"
      />
    </div>
  </section>
</template>

<script lang="ts" setup>
import CommonCardExperience from '@/components/common/CommonCardExperience.vue';
import { workImageHeight } from '@/models/ImagesHeight';
</script>

<style lang="scss" scoped>
//Styles
.home-experience {
  padding: 30px;

  @include mobile {
    padding: 5px;
  }

  &__title {
    margin: 25px;
  }

  &__container-cards {
    flex-wrap: wrap;
    display: flex;
    gap: 20px;
  }
}
</style>
