<script lang="ts" setup>
import LayoutWork from "@/components/common/layouts/LayoutWork.vue";
import { useWorksExperienceStore } from "@/stores/worksExperienceStore";

const worksExperienceStore = useWorksExperienceStore();

// Agregando una verificación para asegurar que workArgs existe y tiene elementos
const workExperiences = computed(() => {
  const { workArgs } = worksExperienceStore;
  return workArgs && workArgs.length > 0 ? workArgs[0] : null;
});

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
  <LayoutWork v-if="workExperiences" :args="workExperiences">
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
  <div v-else class="loading-state">
    {{ $t("common.loading") || "Loading..." }}
  </div>
</template>

<style lang="scss" scoped>
.loading-state {
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 200px;
  font-size: 1.2rem;
  color: var(--text-color, #333);
}
</style>
