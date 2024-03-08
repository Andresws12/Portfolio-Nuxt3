<template>
  <article
    class="common-card-experience card"
    :class="{ 'is-active': isActive }"
    :aria-label="
      $t('common.ariaLabel.ariaLabelWorkData') + ' ' + props.textTitle
    "
  >
    <div class="common-card-experience__image-container">
      <NuxtImg
        :src="props.imageSource"
        :alt="props.imageData"
        :title="props.imageData"
        width="250"
        :height="props.imageHeight"
        loading="lazy"
      />
      <span
        v-if="isActive"
        class="common-card-experience__image-label is-extra is-strong"
      >
        {{ props.activeTextButton }}
      </span>
    </div>
    <div class="common-card-experience__text-container">
      <h3 class="common-card-experience__title is-subtitle is-strong">
        {{ props.textTitle }}
      </h3>
      <h4 class="common-card-experience__subtitle is-light">
        {{ props.textSubtitle }}
      </h4>
      <p class="common-card-experience__description is-extra">
        {{ props.textDescription }}
      </p>
    </div>
    <div class="common-card-experience__button-container">
      <button class="button" @click="emit('click')">
        {{ props.callToActionButton }}
      </button>
    </div>
  </article>
</template>

<script lang="ts" setup>
export interface Props {
  imageSource: string;
  imageData: string;
  imageHeight: string;
  textTitle: string;
  textDescription: string;
  textSubtitle: string;
  callToActionButton: string;
  isActive?: boolean;
  activeTextButton?: string;
}

const props = withDefaults(defineProps<Props>(), {
  imageSource: '',
  imageData: '',
  imageHeight: '',
  textTitle: '',
  textDescription: '',
  textSubtitle: '',
  callToActionButton: '',
  isActive: false,
  activeTextButton: '',
});

type EmitsType = {
  (e: 'click'): void;
};

const emit = defineEmits<EmitsType>();
</script>

<style lang="scss" scoped>
// styles
.common-card-experience {
  display: flex;
  flex-direction: column;
  margin: 10px;
  width: 300px;
  position: relative;
  box-shadow: rgb(149 157 165 / 20%) 0 8px 24px;

  @include mobile {
    width: 100%;
  }

  &__image-container {
    height: 180px;
    padding: 15px;
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;
  }

  &__subtitle {
    margin: 0;
  }

  &__description {
    margin-bottom: 0;
  }

  &__button-container,
  &__text-container {
    padding: 0 15px 15px;
  }

  &__button-container {
    position: absolute;
    right: 0;
    bottom: 15px;
  }

  &__image-label {
    position: absolute;
    left: 15px;
    top: 15px;
  }
}
</style>
