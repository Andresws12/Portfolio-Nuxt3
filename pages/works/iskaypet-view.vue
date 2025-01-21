<script lang="ts" setup>
import LayoutWork from "@/components/common/layouts/LayoutWork.vue";

import { useWorksExperienceStore } from "@/stores/worksExperienceStore";

const worksExperienceStore = useWorksExperienceStore();

const workExperiences = computed(() => worksExperienceStore.workArgs[0]);
const i18n = useI18n();

useSeoMeta({
  title: i18n.t("views.works.iskaypet.seo.title"),
  ogTitle: i18n.t("views.works.iskaypet.seo.title"),
  description: i18n.t("views.works.iskaypet.seo.description"),
  ogDescription: i18n.t("views.works.iskaypet.seo.description"),
  keywords: i18n.t("views.works.iskaypet.seo.keywords"),
});

useSchemaOrg([
  defineWebSite({
    name: i18n.t("views.works.iskaypet.seo.title"),
  }),
  defineWebPage(),
]);
</script>

<template>
  <LayoutWork :args="workExperiences">
    <h3>{{ $t("views.works.iskaypet.title") }}</h3>
    <p>{{ $t("views.works.iskaypet.intro") }}</p>
    <h4>{{ $t("views.works.iskaypet.coolProjects") }}</h4>
    <ul>
      <li>
        <strong>{{ $t("views.works.iskaypet.ecommerceTitle") }}</strong>
        {{ $t("views.works.iskaypet.ecommerce") }}
      </li>
      <li>
        <strong>{{ $t("views.works.iskaypet.componentLibraryTitle") }}</strong>
        {{ $t("views.works.iskaypet.componentLibrary") }}
      </li>
      <li>
        <strong>{{ $t("views.works.iskaypet.ssrProjectTitle") }}</strong>
        {{ $t("views.works.iskaypet.ssrProject") }}
      </li>
    </ul>
  </LayoutWork>
</template>

<style lang="scss" scoped>
//styles
</style>
