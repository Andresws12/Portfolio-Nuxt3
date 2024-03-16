<template>
  <section class="layout-work">
    <article class="layout-work__business-data">
      <NuxtImg
        :src="props.imageSource"
        :alt="props.imageData"
        :title="props.imageData"
        provider="cloudflare"
        sizes="100vw xs:25vw sm:50vw md:400px"
        loading="lazy"
        width="250"
        :height="props.imageHeight"
        class="layout-work__business-image"
      />
      <h1 class="layout-work__business-name">{{ businessName }}</h1>
      <h2 class="layout-work__business-role">{{ businessRole }}</h2>
      <p class="layout-work__business-period">{{ businessPeriod }}</p>
      <slot name="business-data" />
      <div class="layout-work__technologies-container">
        <NuxtImg
          v-if="props.hasVue"
          src="/img/tech/vue.svg"
          alt="vue"
          width="25"
          height="25"
          loading="lazy"
        />
        <NuxtImg
          v-if="props.hasAngular"
          src="/img/tech/angular.svg"
          alt="angular"
          width="25"
          height="25"
          loading="lazy"
        />
        <NuxtImg
          v-if="props.hasNet"
          src="/img/tech/net.svg"
          alt=".net"
          width="25"
          height="25"
          loading="lazy"
        />
        <NuxtImg
          v-if="props.hasReact"
          src="/img/tech/react.svg"
          alt="react"
          width="25"
          height="25"
          loading="lazy"
        />
        <NuxtImg
          v-if="props.hasJquery"
          src="/img/tech/jquery.svg"
          alt="jquery"
          width="25"
          height="25"
          loading="lazy"
        />
        <NuxtImg
          v-if="props.hasTypescript"
          src="/img/tech/typescript.svg"
          alt="typescript"
          width="25"
          height="25"
          loading="lazy"
        />
        <NuxtImg
          v-if="props.hasPhp"
          src="/img/tech/php.svg"
          alt="php"
          width="25"
          height="25"
          loading="lazy"
        />
      </div>
    </article>
    <article class="layout-work__personal-data card">
      <slot />
    </article>
  </section>
</template>

<script lang="ts" setup>
export interface Props {
  imageSource: string;
  imageData: string;
  imageHeight: string;
  businessName: string;
  businessRole: string;
  businessPeriod: string;
  isActive?: boolean;
  activeTextButton?: string;
  hasVue?: boolean;
  hasAngular?: boolean;
  hasNet?: boolean;
  hasReact?: boolean;
  hasJquery?: boolean;
  hasTypescript?: boolean;
  hasPhp?: boolean;
}

const props = withDefaults(defineProps<Props>(), {
  imageSource: '',
  imageData: '',
  imageHeight: '',
  businessName: '',
  businessRole: '',
  businessPeriod: '',
  isActive: false,
  activeTextButton: '',
  hasVue: false,
  hasAngular: false,
  hasNet: false,
  hasReact: false,
  hasJquery: false,
  hasTypescript: false,
  hasPhp: false,
});
</script>

<style lang="scss" scoped>
//styles
.layout-work {
  display: flex;
  padding: 100px 150px 55px;

  @include tablet {
    padding: 100px 25px 55px;
  }

  @include mobile {
    flex-direction: column;
  }

  &__business-data {
    padding: 25px;
    backdrop-filter: blur(5px);
    z-index: 1;

    @include mobile {
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
