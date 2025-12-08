<script lang="ts" setup>
import { NuxtImg } from '#components'
import CommonTechStack from '@/components/common/CommonTechStack.vue'

/**
 * Represents the argument object for the CommonCardExperience component.
 */
export interface Args {
  imageSource: string
  imageData: string
  imageHeight: string
  textTitle: string
  textSubtitle: string
  callToActionButton: string
  isActive?: boolean
  activeTextButton?: string
  hasVue?: boolean
  hasAngular?: boolean
  hasNet?: boolean
  hasReact?: boolean
  hasJquery?: boolean
  hasTypescript?: boolean
  hasPhp?: boolean
  dateStart?: string
  dateEnd?: string
}

interface Props {
  args?: Args
}

/**
 * Defines props with default values assigned via `withDefaults`.
 */
const props = withDefaults(defineProps<Props>(), {
  args: () => ({
    imageSource: '',
    imageData: '',
    imageHeight: '',
    textTitle: '',
    textSubtitle: '',
    callToActionButton: '',
    isActive: false,
    activeTextButton: '',
    hasVue: false,
    hasAngular: false,
    hasNet: false,
    hasReact: false,
    hasJquery: false,
    hasTypescript: false,
    hasPhp: false,
    dateStart: '',
    dateEnd: '',
  }),
})

/**
 * Defines the `click` event emitted by this component.
 */
const emit = defineEmits<{
  (e: 'click'): void
}>()

const {
  imageSource,
  imageData,
  imageHeight,
  textTitle,
  textSubtitle,
  callToActionButton,
  isActive,
  activeTextButton,
  hasVue,
  hasAngular,
  hasNet,
  hasReact,
  hasJquery,
  hasTypescript,
  hasPhp,
  dateStart,
  dateEnd,
} = toRefs(props.args)

const { description } = useWorkDuration({
  startDate: dateStart,
  endDate: dateEnd,
})
</script>

<template>
  <article
    class="common-card-experience card"
    :class="{ 'is-active': isActive }"
    :aria-label="$t('common.ariaLabel.ariaLabelWorkData') + ' ' + textTitle"
    data-cy="common-card-experience"
  >
    <div
      class="common-card-experience__image-container"
      data-cy="common-card-experience-image-container"
    >
      <NuxtImg
        :src="imageSource"
        :alt="imageData"
        width="250"
        :height="imageHeight"
        densities="x1 x2"
        loading="lazy"
        provider="cloudflare"
        data-cy="common-card-experience-work-image"
      />
      <span
        v-if="isActive"
        class="common-card-experience__image-label is-extra is-strong"
        data-cy="common-card-experience-active-label"
      >
        {{ activeTextButton }}
      </span>
    </div>
    <div
      class="common-card-experience__text-container"
      data-cy="common-card-experience-text-container"
    >
      <h3 class="common-card-experience__title is-subtitle is-strong">
        {{ textTitle }}
      </h3>
      <h4 class="common-card-experience__subtitle is-light">
        {{ textSubtitle }}
      </h4>
      <p class="common-card-experience__description is-extra">
        {{ description }}
      </p>
    </div>
    <div
      class="common-card-experience__technologies-container"
      :aria-label="'Technologies ' + textTitle"
      data-cy="common-card-experience-technologies-container"
    >
      <CommonTechStack
        :tech-stack="{
          hasVue,
          hasAngular,
          hasNet,
          hasReact,
          hasJquery,
          hasTypescript,
          hasPhp,
        }"
        data-cy="common-card-experience-tech-stack"
      />
    </div>
    <div class="common-card-experience__button-container">
      <button
        type="button"
        class="button"
        data-cy="common-card-experience-button"
        @click="emit('click')"
      >
        {{ callToActionButton }}
      </button>
    </div>
  </article>
</template>

<style lang="scss" scoped>
@use '@/assets/styles/mixins/all' as mixins;

.common-card-experience {
  display: flex;
  flex-direction: column;
  margin: 10px;
  width: 300px;
  position: relative;

  @include mixins.mobile {
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

  &__text-container,
  &__button-container {
    padding: 0 15px 15px;
  }

  &__button-container {
    position: absolute;
    right: 0;
    bottom: 5px;
  }

  &__technologies-container {
    padding-left: 15px;
  }

  &__image-label {
    position: absolute;
    left: 15px;
    top: 15px;
  }
}
</style>
