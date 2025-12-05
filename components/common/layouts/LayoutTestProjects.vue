<script lang="ts" setup>
import { useI18n } from "vue-i18n";
import { NuxtImg } from "#components";

export interface Args {
  title: string;
  description: string;
  link: string;
  imageSource: string;
  imageData?: string;
}
interface Props {
  args: Args;
}
const props = withDefaults(defineProps<Props>(), {
  args: () => ({
    title: "",
    description: "",
    link: "",
    imageSource: "",
    imageData: "",
  }),
});

const { t } = useI18n();
const { title, description, link, imageSource, imageData } = toRefs(props.args);
</script>

<template>
  <div class="layout-test-projects card">
    <NuxtImg
      :src="imageSource"
      :alt="imageData"
      :title="imageData"
      loading="lazy"
      class="layout-test-projects__image"
      data-cy="layout-work-business-image"
    />
    <div class="layout-test-projects__content">
      <h3 class="layout-test-projects__title is-subtitle is-strong">
        {{ title }}
      </h3>
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
  </div>
</template>

<style lang="scss" scoped>
@use "@/assets/styles/mixins/all" as mixins;

.layout-test-projects {
  padding: 0px;
  margin: 10px;
  width: 550px;

  display: flex;

  @include mixins.mobile {
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }

  &__image {
    width: 250px;
    height: 250px;
    object-fit: scale-down;
  }

  &__button {
    display: flex;
    text-align: center;
    justify-content: center;
  }

  &__content {
    padding: 25px;
  }
}
</style>
