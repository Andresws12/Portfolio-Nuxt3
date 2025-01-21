<script lang="ts" setup>
import LayoutWork from "@/components/common/layouts/LayoutWork.vue";

import { useWorksExperienceStore } from "@/stores/worksExperienceStore";

const worksExperienceStore = useWorksExperienceStore();

const workExperiences = computed(() => worksExperienceStore.workArgs[1]);
const i18n = useI18n();

useSeoMeta({
  title: i18n.t("views.works.cloudappi.seo.title"),
  ogTitle: i18n.t("views.works.cloudappi.seo.title"),
  description: i18n.t("views.works.cloudappi.seo.description"),
  ogDescription: i18n.t("views.works.cloudappi.seo.description"),
  keywords: i18n.t("views.works.cloudappi.seo.keywords"),
});

useSchemaOrg([
  defineWebSite({
    name: i18n.t("views.works.cloudappi.seo.title"),
  }),
  defineWebPage(),
]);
</script>

<template>
  <LayoutWork :args="workExperiences">
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
  </LayoutWork>
</template>

<style lang="scss" scoped>
//styles
</style>
