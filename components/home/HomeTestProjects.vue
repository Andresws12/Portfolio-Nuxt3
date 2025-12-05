<script lang="ts" setup>
import { useI18n } from "vue-i18n";
import LayoutTestProjects from "@/components/common/layouts/LayoutTestProjects.vue";
const { t } = useI18n();

const testProjects = ref([
  {
    id: "pokemon",
    link: "https://pokemon-next-base.andres-hernandez.com/",
    title: t("views.home.homeTestProjects.projects.pokemon.title"),
    description: t("views.home.homeTestProjects.projects.pokemon.description"),
    imageSource: "img/projects/pokemon.webp",
    imageData: t("views.home.homeTestProjects.projects.pokemon.title"),
  },
  {
    id: "dragonball",
    link: "https://dragonball-next-modern.vercel.app/",
    title: t("views.home.homeTestProjects.projects.dragonball.title"),
    description: t(
      "views.home.homeTestProjects.projects.dragonball.description",
    ),
    imageSource: "img/projects/dragonball.webp",
    imageData: t("views.home.homeTestProjects.projects.dragonball.title"),
  },
  {
    id: "asafe",
    link: "https://a-safe-dashboard.vercel.app/",
    title: t("views.home.homeTestProjects.projects.asafe.title"),
    description: t("views.home.homeTestProjects.projects.asafe.description"),
    imageSource: "img/projects/asafe.webp",
    imageData: t("views.home.homeTestProjects.projects.asafe.title"),
  },
  {
    id: "factorial",
    link: "https://factorial.andres-hernandez.com",
    title: t("views.home.homeTestProjects.projects.factorial.title"),
    description: t(
      "views.home.homeTestProjects.projects.factorial.description",
    ),
    imageSource: "img/projects/Bike.webp",
    imageData: t("views.home.homeTestProjects.projects.factorial.title"),
  },
  {
    id: "iskaypet",
    link: "https://iskaypet.andres-hernandez.com",
    title: t("views.home.homeTestProjects.projects.iskaypet.title"),
    description: t("views.home.homeTestProjects.projects.iskaypet.description"),
    imageSource: "img/projects/Todos.webp",
    imageData: t("views.home.homeTestProjects.projects.iskaypet.title"),
  },
  {
    id: "bjumper",
    link: "https://bjumper.andres-hernandez.com",
    title: t("views.home.homeTestProjects.projects.bjumper.title"),
    description: t("views.home.homeTestProjects.projects.bjumper.description"),
    imageSource: "img/projects/GithubUsers.webp",
    imageData: t("views.home.homeTestProjects.projects.bjumper.title"),
  },
  {
    id: "mayoral",
    link: "https://mayoral.andres-hernandez.com",
    title: t("views.home.homeTestProjects.projects.mayoral.title"),
    description: t("views.home.homeTestProjects.projects.mayoral.description"),
    imageSource: "img/projects/Vacations.webp",
    imageData: t("views.home.homeTestProjects.projects.mayoral.title"),
  },
  {
    id: "Patterson",
    link: "https://patterson.andres-hernandez.com",
    title: t("views.home.homeTestProjects.projects.Patterson.title"),
    description: t(
      "views.home.homeTestProjects.projects.Patterson.description",
    ),
    imageSource: "img/projects/Stores.webp",
    imageData: t("views.home.homeTestProjects.projects.Patterson.title"),
  },
  {
    id: "acciona",
    link: "https://acciona.andres-hernandez.com",
    title: t("views.home.homeTestProjects.projects.acciona.title"),
    description: t("views.home.homeTestProjects.projects.acciona.description"),
    imageSource: "img/projects/Users.webp",
    imageData: t("views.home.homeTestProjects.projects.acciona.title"),
  },
  {
    id: "cloudappi",
    link: "https://cloudappi.andres-hernandez.com",
    title: t("views.home.homeTestProjects.projects.cloudappi.title"),
    description: t(
      "views.home.homeTestProjects.projects.cloudappi.description",
    ),
    imageSource: "img/projects/UsersTable.webp",
    imageData: t("views.home.homeTestProjects.projects.cloudappi.title"),
  },
  {
    id: "azertiumit",
    link: "https://azertiumit.andres-hernandez.com",
    title: t("views.home.homeTestProjects.projects.azertiumit.title"),
    description: t(
      "views.home.homeTestProjects.projects.azertiumit.description",
    ),
    imageSource: "img/projects/GithubProjects.webp",
    imageData: t("views.home.homeTestProjects.projects.azertiumit.title"),
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
