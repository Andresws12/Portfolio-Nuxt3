<script lang="ts" setup>
import { computed } from "vue";
import { useI18n } from "vue-i18n";

import CommonCardExperience from "@/components/common/CommonCardExperience.vue";

import { useWorksExperienceStore } from "@/stores/worksExperienceStore";

const { t } = useI18n();
const worksExperienceStore = useWorksExperienceStore();

const workExperiences = computed(() => worksExperienceStore.workArgs);
</script>

<template>
  <section
    id="experience-data"
    :aria-label="t('common.ariaLabel.ariaLabelExperienceData')"
    data-cy="home-experience"
    class="home-experience"
  >
    <h2
      class="home-experience__title is-subtitle is-strong"
      data-cy="home-experience-title"
    >
      {{ t("views.home.homeWorkExperience.title") }}
    </h2>
    <div class="home-experience__container-cards">
      <CommonCardExperience
        v-for="work in workExperiences"
        :key="work.id"
        :args="work"
        :data-cy="`home-experience-card-${work.id}`"
        @click="$router.push({ path: work.path })"
      />
    </div>
  </section>
</template>

<style lang="scss" scoped>
.home-experience {
  &__title {
    margin: 25px;
  }

  &__container-cards {
    flex-wrap: wrap;
    display: flex;
    gap: 20px;
  }
}
</style>
