<template>
  <layout-work
    image-source="/img/pantallazo.webp"
    :image-height="workImageHeight.PANTALLAZO"
    :image-data="$t('common.images.dataPantallazoImage')"
    :business-name="$t('common.works.pantallazo.name')"
    :business-role="$t('common.works.pantallazo.title')"
    :business-period="$t('common.works.pantallazo.period')"
  >
    <h3>{{ $t("views.works.pantallazo.title") }}</h3>
    <p>
      {{ $t("views.works.pantallazo.intro") }}
    </p>
    <h4>{{ $t("views.works.pantallazo.coolProjects") }}</h4>
    <ul>
      <li>
        <strong>{{ $t("views.works.pantallazo.posTitle") }}</strong
        >{{ $t("views.works.pantallazo.pos") }}
      </li>
      <li>
        <strong>{{ $t("views.works.pantallazo.wordpressTitle") }}</strong>
        {{ $t("views.works.pantallazo.wordpress") }}
      </li>
    </ul>
  </layout-work>
</template>

<script lang="ts" setup>
import LayoutWork from "@/components/common/layouts/LayoutWork.vue";

import { workImageHeight } from "@/models/ImagesHeight";

const i18n = useI18n();

useSeoMeta({
  title: i18n.t("views.works.pantallazo.seo.title"),
  ogTitle: i18n.t("views.works.pantallazo.seo.title"),
  description: i18n.t("views.works.pantallazo.seo.description"),
  ogDescription: i18n.t("views.works.pantallazo.seo.description"),
  keywords: i18n.t("views.works.pantallazo.seo.keywords"),
});

useSchemaOrg([
  defineWebSite({
    name: i18n.t("views.works.pantallazo.seo.title"),
  }),
  defineWebPage(),
]);
</script>

<style lang="scss" scoped>
//styles
</style>
