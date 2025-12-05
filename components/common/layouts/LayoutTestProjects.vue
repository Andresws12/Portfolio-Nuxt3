<script lang="ts" setup>
import { useI18n } from "vue-i18n";
export interface Args {
  title: string;
  description: string;
  link: string;
}
interface Props {
  args: Args;
}
const props = withDefaults(defineProps<Props>(), {
  args: () => ({
    title: "",
    description: "",
    link: "",
  }),
});

const { t } = useI18n();
const { title, description, link } = toRefs(props.args);
</script>

<template>
  <div class="layout-test-projects card">
    <h3 class="layout-test-projects__title">{{ title }}</h3>
    <p class="layout-test-projects__description">{{ description }}</p>
    <a
      type="button"
      class="button layout-test-projects__button is-secondary"
      data-cy="common-card-experience-button"
      target="_blank"
      rel="noopener noreferrer"
      :href="link"
    >
      {{ t("views.home.homeTestProjects.callToActionButton") }}
    </a>
  </div>
</template>

<style lang="scss" scoped>
.layout-test-projects {
  padding: 20px;
  margin: 10px;

  &__title {
    font-size: 1.5rem;
    margin: 10px;
  }

  &__description {
    margin: 10px;
  }

  &__button {
    display: flex;
    text-align: center;
    justify-content: center;
  }
}
</style>
