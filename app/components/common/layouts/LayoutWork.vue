<script lang="ts" setup>
import { NuxtImg } from '#components'

import CommonTechStack from '@/components/common/CommonTechStack.vue'

export interface Args {
  imageSource: string
  imageData: string
  imageHeight: string
  textTitle: string
  textSubtitle: string
  callToActionButton?: string
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

const {
  imageSource,
  imageData,
  imageHeight,
  textTitle,
  textSubtitle,
  hasVue,
  hasAngular,
  hasNet,
  hasReact,
  hasJquery,
  hasTypescript,
  hasPhp,
} = toRefs(props.args)

const dateStart = computed(() => props.args.dateStart)
const dateEnd = computed(() => props.args.dateEnd)

const { description } = useWorkDuration({
  startDate: dateStart,
  endDate: dateEnd,
})
</script>

<template>
  <section class="layout-work" data-cy="layout-work">
    <article class="layout-work__business-data" data-cy="layout-work-business-data">
      <NuxtImg
        :src="imageSource"
        :alt="imageData"
        :title="imageData"
        provider="cloudflare"
        sizes="100vw xs:25vw sm:50vw md:400px"
        loading="lazy"
        width="250"
        :height="imageHeight"
        class="layout-work__business-image"
        data-cy="layout-work-business-image"
      />
      <h1 class="layout-work__business-name" data-cy="layout-work-business-name">
        {{ textTitle }}
      </h1>
      <h2 class="layout-work__business-role" data-cy="layout-work-business-role">
        {{ textSubtitle }}
      </h2>
      <p class="layout-work__business-period" data-cy="layout-work-business-period">
        {{ description }}
      </p>
      <slot name="business-data" />
      <div class="layout-work__technologies-container" data-cy="layout-work-technologies-container">
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
          data-cy="layout-work-tech-stack"
        />
      </div>
    </article>
    <article class="layout-work__personal-data card" data-cy="layout-work-personal-data">
      <slot />
    </article>
  </section>
</template>

<style lang="scss" scoped>
@use '@/assets/styles/mixins/all' as mixins;

.layout-work {
  display: flex;
  padding: 100px 150px 55px;

  @include mixins.tablet {
    padding: 100px 25px 55px;
  }

  @include mixins.mobile {
    flex-direction: column;
  }

  &__business-data {
    padding: 25px;
    backdrop-filter: blur(5px);
    z-index: 1;

    @include mixins.mobile {
      display: flex;
      flex-direction: column;
      align-items: center;
    }
  }

  &__personal-data {
    padding: 25px;
    width: -webkit-fill-available;
    border-radius: 15px;
    position: relative;
    z-index: 1;
  }

  &__business-name {
    font-size: 1.5rem;
  }

  &__business-role {
    font-size: 1.25rem;
  }

  &__business-period {
    font-size: 1rem;
  }
}
</style>
