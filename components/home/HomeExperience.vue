<script lang="ts" setup>
import CommonCardExperience from "@/components/common/CommonCardExperience.vue";
import { workImageHeight } from "@/models/ImagesHeight";
</script>

<template>
  <section
    id="experience-data"
    :aria-label="$t('common.ariaLabel.ariaLabelExperienceData')"
    data-cy="home-experience"
    class="home-experience"
  >
    <h2
      class="home-experience__title is-subtitle is-strong"
      data-cy="home-experience-title"
    >
      {{ $t("views.home.homeWorkExperience.title") }}
    </h2>
    <div class="home-experience__container-cards">
      <CommonCardExperience
        imageSource="img/iskaypet.webp"
        :imageHeight="workImageHeight.ISKAYPET"
        :imageData="$t('common.images.dataIskaypetImage')"
        :textTitle="$t('common.works.iskaypet.name')"
        :textSubtitle="$t('common.works.iskaypet.title')"
        :textDescription="$t('common.works.iskaypet.period')"
        :callToActionButton="
          $t('views.home.homeWorkExperience.callToActionButton')
        "
        :activeTextButton="$t('views.home.homeWorkExperience.activeButtonText')"
        isActive
        hasVue
        hasReact
        hasTypescript
        hasJquery
        data-cy="home-experience-card-iskaypet"
        @click="$router.push({ path: '/works/iskaypet-view' })"
      />
      <CommonCardExperience
        imageSource="img/cloudappi.webp"
        :imageHeight="workImageHeight.CLOUDAPPI"
        :imageData="$t('common.images.dataCloudappiImage')"
        :textTitle="$t('common.works.cloudappi.name')"
        :textSubtitle="$t('common.works.cloudappi.title')"
        :textDescription="$t('common.works.cloudappi.period')"
        :callToActionButton="
          $t('views.home.homeWorkExperience.callToActionButton')
        "
        hasVue
        hasReact
        hasAngular
        hasTypescript
        hasJquery
        hasNet
        data-cy="home-experience-card-cloudappi"
        @click="$router.push({ path: '/works/cloudappi-view' })"
      />
      <CommonCardExperience
        imageSource="img/star.webp"
        :imageHeight="workImageHeight.STAR"
        :imageData="$t('common.images.dataStarImage')"
        :textTitle="$t('common.works.star.name')"
        :textSubtitle="$t('common.works.star.title')"
        :textDescription="$t('common.works.star.period')"
        :callToActionButton="
          $t('views.home.homeWorkExperience.callToActionButton')
        "
        hasVue
        hasTypescript
        hasNet
        hasJquery
        data-cy="home-experience-card-star"
        @click="$router.push({ path: '/works/star-view' })"
      />
      <CommonCardExperience
        imageSource="img/pantallazo.webp"
        :imageHeight="workImageHeight.PANTALLAZO"
        :imageData="$t('common.images.dataPantallazoImage')"
        :textTitle="$t('common.works.pantallazo.name')"
        :textSubtitle="$t('common.works.pantallazo.title')"
        :textDescription="$t('common.works.pantallazo.period')"
        :callToActionButton="
          $t('views.home.homeWorkExperience.callToActionButton')
        "
        hasTypescript
        hasPhp
        hasJquery
        data-cy="home-experience-card-pantallazo"
        @click="$router.push({ path: '/works/pantallazo-view' })"
      />
    </div>
  </section>
</template>

<style lang="scss" scoped>
//Styles
.home-experience {
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
