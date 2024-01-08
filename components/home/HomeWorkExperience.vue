<template>
  <section data-cy="home-section" class="home-work-experience">
    <h2>{{ $t("views.home.homeWorkExperience.title") }}</h2>
    <div class="home-work-experience__cards">
      <common-card
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
        @click="$router.push({ path: '/works/iskaypet-view' })"
      />
      <common-card
        image-source="img/cloudappi.webp"
        :image-height="workImageHeight.CLOUDAPPI"
        :image-data="$t('common.images.dataCloudappiImage')"
        :text-title="$t('common.works.cloudappi.name')"
        :text-subtitle="$t('common.works.cloudappi.title')"
        :text-description="$t('common.works.cloudappi.period')"
        :call-to-action-button="
          $t('views.home.homeWorkExperience.callToActionButton')
        "
        @click="$router.push({ path: '/works/cloudappi-view' })"
      />
      <common-card
        image-source="img/star.webp"
        :image-height="workImageHeight.STAR"
        :image-data="$t('common.images.dataStarImage')"
        :text-title="$t('common.works.star.name')"
        :text-subtitle="$t('common.works.star.title')"
        :text-description="$t('common.works.star.period')"
        :call-to-action-button="
          $t('views.home.homeWorkExperience.callToActionButton')
        "
        @click="$router.push({ path: '/works/pantallazo-view' })"
      />
      <common-card
        image-source="img/pantallazo.webp"
        :image-height="workImageHeight.PANTALLAZO"
        :image-data="$t('common.images.dataPantallazoImage')"
        :text-title="$t('common.works.pantallazo.name')"
        :text-subtitle="$t('common.works.pantallazo.title')"
        :text-description="$t('common.works.pantallazo.period')"
        :call-to-action-button="
          $t('views.home.homeWorkExperience.callToActionButton')
        "
        @click="$router.push({ path: '/works/star-view' })"
      />
    </div>
  </section>
</template>

<script lang="ts" setup>
import CommonCard from "@/components/common/CommonCard.vue";

import { workImageHeight } from "@/models/ImagesHeight";
</script>

<style lang="scss" scoped>
//Styles
.home-work-experience {
  padding: 25px 200px 0;

  @include tablet {
    padding: 25px;
  }

  @include mobile {
    flex-direction: column;
  }

  &__cards {
    display: flex;
    flex-wrap: wrap;
    @include tablet {
      padding: 25px;
      justify-content: center;
      align-items: center;
    }
  }
}
</style>
