<template>
  <layout-work
    image-source="/img/cloudappi.webp"
    :image-height="workImageHeight.CLOUDAPPI"
    :image-data="$t('common.images.dataCloudappiImage')"
    :business-name="$t('common.works.cloudappi.name')"
    :business-role="$t('common.works.cloudappi.title')"
    :business-period="$t('common.works.cloudappi.period')"
  >
    <h3>{{ $t("views.works.cloudappi.title") }}</h3>
    <p>
      {{ $t("views.works.cloudappi.intro") }}
    </p>
    <h4>{{ $t("views.works.cloudappi.coolProjects") }}</h4>
    <ul>
      <li>
        <strong>{{ $t("views.works.cloudappi.simulationTitle") }}</strong>
        {{ $t("views.works.cloudappi.simulation") }}
      </li>
      <li>
        <strong>{{ $t("views.works.cloudappi.mapManagementTitle") }}</strong>
        {{ $t("views.works.cloudappi.mapManagement") }}
      </li>
      <li>
        <strong>{{ $t("views.works.cloudappi.listingTitle") }}</strong>
        {{ $t("views.works.cloudappi.listing") }}
      </li>
    </ul>
  </layout-work>
</template>

<script lang="ts" setup>
import LayoutWork from "@/components/common/layouts/LayoutWork.vue";

import { workImageHeight } from "@/models/ImagesHeight";

const i18n = useI18n();

useSeoMeta({
  title: i18n.t("views.works.cloudappi.seo.title"),
  ogTitle: i18n.t("views.works.cloudappi.seo.title"),
  description: i18n.t("views.works.cloudappi.seo.description"),
  ogDescription: i18n.t("views.works.cloudappi.seo.description"),
});
</script>

<style lang="scss" scoped>
//styles
</style>
