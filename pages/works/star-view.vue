<script lang="ts" setup>
import LayoutWork from "@/components/common/layouts/LayoutWork.vue";

import { useWorksExperienceStore } from "@/stores/worksExperienceStore";

const worksExperienceStore = useWorksExperienceStore();

const workExperiences = computed(() => worksExperienceStore.workArgs[2]);
const i18n = useI18n();

useSeoMeta({
  title: i18n.t("views.works.star.seo.title"),
  ogTitle: i18n.t("views.works.star.seo.title"),
  description: i18n.t("views.works.star.seo.description"),
  ogDescription: i18n.t("views.works.star.seo.description"),
  keywords: i18n.t("views.works.star.seo.keywords"),
});

useSchemaOrg([
  defineWebSite({
    name: i18n.t("views.works.star.seo.title"),
  }),
  defineWebPage(),
]);
</script>

<template>
  <LayoutWork :args="workExperiences">
    <h3>{{ $t("views.works.star.title") }}</h3>
    <p>
      {{ $t("views.works.star.intro") }}
    </p>
    <h4>{{ $t("views.works.star.coolProjects") }}</h4>
    <ul>
      <li>
        <strong>{{ $t("views.works.star.smartSearchTitle") }}</strong
        >{{ $t("views.works.star.smartSearch") }}
      </li>
      <li>
        <strong>{{ $t("views.works.star.techServiceTitle") }}</strong>
        {{ $t("views.works.star.techService") }}
      </li>
      <li>
        <strong>{{ $t("views.works.star.smartSearchTitle") }}</strong>
        {{ $t("views.works.star.smartSearch") }}
      </li>
      <li>
        <strong>{{ $t("views.works.star.dataManagerTitle") }}</strong>
        {{ $t("views.works.star.dataManager") }}
      </li>
      <li>
        <strong>{{ $t("views.works.star.wholesaleTitle") }}</strong>
        {{ $t("views.works.star.wholesale") }}
      </li>
    </ul>
  </LayoutWork>
</template>

<style lang="scss" scoped>
//styles
</style>
