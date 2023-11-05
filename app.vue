<template>
  <div>
    <NuxtPage />
    <NuxtParticles
      id="tsparticles"
      :options="optionsParticles"
      @load="onLoad"
    ></NuxtParticles>
    <button-translation></button-translation>
  </div>
</template>

<script setup lang="ts">
import type { Container } from "tsparticles-engine";
import { createHead } from "unhead";

const { locale } = useI18n();

import { optionsParticles } from "@/utils/vueParticlesConfiguration";

import ButtonTranslation from "@/components/common/ButtonTranslation.vue";

createHead();

const onLoad = (container: Container) => {
  container.play();
};

useHead({
  htmlAttrs: {
    lang: locale,
  },
});
</script>
