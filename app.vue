<template>
  <div>
    <NuxtPage />
    <NuxtParticles
      id="tsparticles"
      :options="optionsParticles"
      :particles-init="particlesInit"
    ></NuxtParticles>
    <button-translation></button-translation>
  </div>
</template>

<script setup lang="ts">
import { createHead } from "unhead";
import { loadSlim } from "tsparticles-slim";
import type { Engine } from "tsparticles-engine";

const { locale } = useI18n();

import { optionsParticles } from "@/utils/vueParticlesConfiguration";

import ButtonTranslation from "@/components/common/ButtonTranslation.vue";

createHead();

const particlesInit = async (engine: Engine): Promise<void> => {
  await loadSlim(engine);
};
useHead({
  htmlAttrs: {
    lang: locale,
  },
});
</script>
