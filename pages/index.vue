<template>
  <main id="main-content" aria-label="main-content" class="home">
    <home-description />
    <!-- Hidden links for skipping blocks -->
    <accessibility-skips />
  </main>
</template>

<script lang="ts" setup>
import HomeDescription from '@/components/home/HomeDescription.vue';
import AccessibilitySkips from '@/components/common/AccessibilitySkips.vue';

const i18n = useI18n();

useSeoMeta({
  title: i18n.t('views.home.seo.title'),
  ogTitle: i18n.t('views.home.seo.title'),
  description: i18n.t('views.home.seo.description'),
  ogDescription: i18n.t('views.home.seo.description'),
  keywords: i18n.t('views.home.seo.keywords'),
});

useSchemaOrg([
  defineWebSite({
    name: i18n.t('views.home.seo.title'),
  }),
  defineWebPage(),
]);
</script>

<style lang="scss" scoped>
.home {
  padding: 55px 200px 0;
  display: flex;

  @include tablet {
    padding: 55px 55px 0;
    justify-content: center;
  }

  @include mobile {
    padding: 55px 25px 0;
    justify-content: center;
  }
}
</style>
