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
const i18n = useI18n();

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

useSeoMeta({
  author: i18n.t("common.seo.author"),
  publisher: i18n.t("common.seo.author"),
  robots: "index, follow",
  googleSiteVerification: "wd0T2xFbSwhH9Pv08VAGT59eyVVSXjlkEL1_sckqUBY",
});

useSchemaOrg([
  definePerson({
    email: "andreshernandez12.1995@gmail.com",
    jobTitle: i18n.t("views.home.homeDescription.subtitle"),
    worksFor: i18n.t("common.works.iskaypet.name"),
    image: "/img/body.webp",
    sameAs: ["hhttps://github.com/Andresws12"],
  }),
  defineWebPage(),
]);
</script>
