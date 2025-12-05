<script lang="ts" setup>
import HomeDescription from "@/components/home/HomeDescription.vue";
import AccessibilitySkips from "@/components/common/AccessibilitySkips.vue";
import HomeExperience from "@/components/home/HomeExperience.vue";
import HomeTestProjects from "@/components/home/HomeTestProjects.vue";

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

<template>
  <main
    id="main-content"
    :aria-label="$t('common.ariaLabel.ariaLabelMainContent')"
    class="home"
  >
    <HomeDescription />
    <HomeExperience />
    <HomeTestProjects />
    <!-- Hidden links for skipping blocks -->
    <AccessibilitySkips />
  </main>
</template>

<style lang="scss" scoped>
@use "@/assets/styles/mixins/all" as mixins;

.home {
  padding: 55px 200px 0;
  display: flex;
  flex-direction: column;

  @include mixins.tablet {
    padding: 55px 55px 0;
    justify-content: center;
  }

  @include mixins.mobile {
    padding: 55px 15px 0;
    justify-content: center;
  }
}
</style>
