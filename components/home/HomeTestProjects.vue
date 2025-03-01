<script lang="ts" setup>
import { useI18n } from "vue-i18n";
import LayoutTestProjects from "@/components/common/layouts/LayoutTestProjects.vue";
const { t } = useI18n();

const testProjects = ref([
  {
    id: "factorial",
    link: "https://factorial.andres-hernandez.com",
    title: t("views.home.homeTestProjects.projects.factorial.title"),
    description: t(
      "views.home.homeTestProjects.projects.factorial.description",
    ),
  },
  {
    id: "iskaypet",
    link: "https://iskaypet.andres-hernandez.com",
    title: t("views.home.homeTestProjects.projects.iskaypet.title"),
    description: t("views.home.homeTestProjects.projects.iskaypet.description"),
  },
  {
    id: "bjumper",
    link: "https://bjumper.andres-hernandez.com",
    title: t("views.home.homeTestProjects.projects.bjumper.title"),
    description: t("views.home.homeTestProjects.projects.bjumper.description"),
  },
  {
    id: "mayoral",
    link: "https://mayoral.andres-hernandez.com",
    title: t("views.home.homeTestProjects.projects.mayoral.title"),
    description: t("views.home.homeTestProjects.projects.mayoral.description"),
  },
  {
    id: "Patterson",
    link: "https://patterson.andres-hernandez.com",
    title: t("views.home.homeTestProjects.projects.Patterson.title"),
    description: t(
      "views.home.homeTestProjects.projects.Patterson.description",
    ),
  },
  {
    id: "acciona",
    link: "https://acciona.andres-hernandez.com",
    title: t("views.home.homeTestProjects.projects.acciona.title"),
    description: t("views.home.homeTestProjects.projects.acciona.description"),
  },
  {
    id: "cloudappi",
    link: "https://cloudappi.andres-hernandez.com",
    title: t("views.home.homeTestProjects.projects.cloudappi.title"),
    description: t(
      "views.home.homeTestProjects.projects.cloudappi.description",
    ),
  },
  {
    id: "azertiumit",
    link: "https://azertiumit.andres-hernandez.com",
    title: t("views.home.homeTestProjects.projects.azertiumit.title"),
    description: t(
      "views.home.homeTestProjects.projects.azertiumit.description",
    ),
  },
]);
</script>

<template>
  <section
    id="experience-data"
    :aria-label="t('common.ariaLabel.ariaLabelExperienceData')"
    data-cy="home-test-projects"
    class="home-test-projects"
  >
    <h2
      class="home-test-projects__title is-subtitle is-strong"
      data-cy="home-test-projects-title"
    >
      {{ t("views.home.homeTestProjects.title") }}
    </h2>
    <div class="home-test-projects__container-cards">
      <LayoutTestProjects
        v-for="project in testProjects"
        :key="project.title"
        :args="project"
      />
    </div>
  </section>
</template>

<style lang="scss" scoped>
.home-test-projects {
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
