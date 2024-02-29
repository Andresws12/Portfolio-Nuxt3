<template>
  <article class="common-card" :class="{ 'is-active': isActive }">
    <div class="common-card__image-container">
      <NuxtImg
        :src="props.imageSource"
        :alt="props.imageData"
        :title="props.imageData"
        width="250"
        :height="props.imageHeight"
        loading="lazy"
      />
      <span v-if="isActive" class="common-card__image-label">
        {{ props.activeTextButton }}
      </span>
    </div>
    <div class="common-card__text-container">
      <h3 class="common-card__title">{{ props.textTitle }}</h3>
      <h4 class="common-card__subtitle">{{ props.textSubtitle }}</h4>
      <p class="common-card__description">{{ props.textDescription }}</p>
    </div>
    <div class="common-card__button-container">
      <button class="button is-extended is-secondary" @click="emit('click')">
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
.common-card {
  display: flex;
  flex-direction: column;
  margin: 10px;
  width: 350px;
  border-radius: 5px;
  box-shadow: 0 2px 5px 0 $main-color;
  background-color: $main-color;
  transition: 0.3s;
  color: $main-color-dark;
  position: relative;
  z-index: 1;

  @include tablet {
    width: 300px;
  }

  @include mobile {
    width: 100%;
  }

  &:hover {
    box-shadow: 0 4px 8px 0 $main-color;
  }

  &__image-container {
    height: 180px;
    padding: 15px;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 15px 15px 0 0;
    position: relative;
  }

  &__button-container {
    padding: 0 15px 15px;
  }

  &__text-container {
    padding: 0 15px;
  }

  &__title {
    font-size: 1.75rem;
    margin: 0;
  }

  &__subtitle {
    margin-top: 10px;
    margin-bottom: 0;
    font-size: 1.25rem;
  }

  &__description {
    font-size: 0.85rem;
  }

  &__image-label {
    position: absolute;
    left: 15px;
    top: 15px;
    font-size: 0.95rem;
    font-weight: 700;
  }
}
</style>
