<template>
  <home-description />
  <home-personal-description />
  <home-work-experience />
</template>

<script lang="ts" setup>
import HomeDescription from "@/components/home/HomeDescription.vue";
import HomePersonalDescription from "@/components/home/HomePersonalDescription.vue";
import HomeWorkExperience from "@/components/home/HomeWorkExperience.vue";

const i18n = useI18n();

useSeoMeta({
  title: i18n.t("views.home.seo.title"),
  ogTitle: i18n.t("views.home.seo.title"),
  description: i18n.t("views.home.seo.description"),
  ogDescription: i18n.t("views.home.seo.description"),
  keywords: i18n.t("views.home.seo.keywords"),
});
useSchemaOrg([
  defineWebSite({
    name: i18n.t("views.home.seo.title"),
  }),
  defineWebPage(),
]);
</script>
