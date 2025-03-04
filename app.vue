<script setup lang="ts">
import { createHead } from "unhead";
import { NuxtPage } from "#components";
import { useMainStore } from "@/stores/mainStore";

import ButtonTranslation from "@/components/common/ButtonTranslation.vue";
import TechnologiesIcons from "@/components/common/TechnologiesIcons.vue";
import ToggleThemeButton from "~/components/common/ToggleThemeButton.vue";

const i18n = useI18n();

createHead();

const i18nHead = useLocaleHead();

const mainStore = useMainStore();

const theme = computed(() => mainStore.theme);

useServerHead({
  htmlAttrs: {
    lang: i18nHead.value.htmlAttrs!.lang || "es",
  },
  link: [...(i18nHead.value.link || [])],
  meta: [...(i18nHead.value.meta || [])],
});

useServerSeoMeta({
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
    image: "/img/andres-front-programador.webp",
    sameAs: ["https://github.com/Andresws12"],
  }),
  defineWebPage(),
]);
console.log(`
⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⢀⣀⣀⣀⣀⡀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠀⠀⢰⠖⢶⠖⢦⡀⠀⢀⣠⠤⠒⠚⠉⠉⠁⠀⠀⠀⠀⠉⠉⠙⠒⠦⣄⡀⠀⣠⢤⣄⢤⡄⠀⠀⠀⠀⠀⠀⠀
⣀⣠⡴⢻⠟⢹⡄⠈⣇⠈⣇⠀⣧⠖⠋⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠉⣻⠁⢰⠇⢰⠃⢠⡗⢲⡦⢄⡀⠀
⣹⠀⡇⢸⡀⢸⡅⠀⢹⠀⢹⠄⢹⠀⠀⠀⠋⠀⠀⣀⠔⠲⣄⠀⢀⡤⠲⣄⠀⠀⠀⠀⢠⡏⠀⡏⠀⣾⠀⢸⡇⢸⠀⢸⠉⡇
⢿⠀⢳⠀⣇⠈⣇⠀⣸⠀⠏⠀⣸⠀⠰⣄⠀⠀⠀⠧⣀⠀⠈⠙⠁⠀⣠⠼⠃⠂⠀⠀⠸⡇⠀⢧⠀⣇⠀⢸⠁⢸⠀⣸⠀⡇
⠘⣇⠈⢧⠘⠆⠈⢻⠏⠀⢠⣴⠇⠀⠀⢠⣤⠀⠀⣀⡼⠧⠄⠘⠣⠽⠧⡄⠀⠐⠇⣀⠀⢿⣶⣄⣆⢹⠖⠃⢰⠃⢠⠇⣸⠃
⠀⠘⢦⣌⣁⣀⣀⣠⣾⣷⡿⢻⠀⠀⠠⠀⠀⠀⣀⣻⣕⣩⣞⣉⣳⣄⣵⠋⠀⠀⠀⠀⠀⠀⢳⣝⡿⣷⣤⣄⣀⣰⣫⡴⠃⠀
⠀⠀⠀⠉⠛⠛⠛⠿⣏⡉⠓⣊⣹⣆⠤⠖⠚⠉⠁⠀⠀⢠⡀⠀⠀⠀⠈⠉⠙⠒⠤⣀⠀⢴⣿⣿⣍⠽⠛⠛⠛⠋⠁⠀⠀⠀
⠀⠀⠀⠀⠀⠀⠀⠀⢠⡿⣯⠞⠋⢀⡀⠀⠀⢀⣀⠤⠤⠖⠷⢤⡤⣀⣀⣀⠀⠀⠀⠈⠙⢾⣋⡩⣽⡄⠀⠀⠀⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠀⠀⠀⣠⠟⠡⠀⠀⣀⠤⠒⠉⢁⣀⠠⠤⠀⠐⠛⠳⠤⢤⣈⠉⠑⠺⢵⡆⠀⠙⢦⠁⠀⠀⠀⠀⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠀⠀⣼⠃⠀⣀⠴⠋⠀⣤⠴⠋⠁⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠙⠲⣄⠀⠉⠳⣄⠀⠱⡄⠀⠀⠀⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠀⠘⣿⠀⡼⠃⠠⢀⡞⠁⠀⠀⢑⢦⡄⠀⠀⠀⠀⠀⠀⣤⢤⡆⠀⠈⠳⡀⠀⠘⣆⠀⢹⡄⠀⠀⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠀⠀⢿⣼⠣⢨⡀⠘⡆⠀⢠⣾⣿⣭⣷⠀⠀⠀⠀⠀⠀⣿⣿⣯⣕⡆⠀⣹⡦⢀⣘⡆⢸⠇⠀⠀⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠀⠀⠀⠻⣍⠠⠁⣄⣹⡀⠘⣿⣿⣿⡽⠀⢴⣒⡶⠄⠀⢿⣿⣿⡯⠃⢠⠇⠁⠐⢢⣿⡎⠀⠀⠀⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠀⠀⠀⠀⠈⠙⠲⢤⣄⣳⡀⠀⠀⠀⠐⠦⣤⠿⣤⡼⠂⠀⠀⠀⢀⣴⠃⣈⣣⡤⠖⠉⠀⠀⠀⠀⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠈⠓⠦⢤⣀⣀⣙⣶⡋⢀⣤⣠⣤⣶⡯⠼⠿⣏⡇⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⢀⣴⡿⣿⣿⣏⣿⣿⡟⢭⡧⢭⡷⣞⣶⠟⠁⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⢀⣴⣿⠟⠁⢻⡿⣯⣿⣏⡿⠀⠹⡄⠹⡄⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⣴⣟⣉⣻⡄⢀⡀⠑⠊⠀⠁⣀⣀⠀⣳⠀⢱⡀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⢰⢯⡧⠼⢻⡋⠉⠉⠉⠉⠉⠉⠉⣉⣹⡇⠀⠀⢳⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⢠⣞⡀⠀⠀⠀⠻⣽⣷⣶⣶⣶⣿⣿⡿⠋⠀⠀⠀⠈⣇⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠉⠙⢦⠀⠀⣀⣈⣽⣿⡤⢨⣿⣭⣤⠤⢤⠤⠖⠋⠉⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠉⠉⠻⠥⠷⠹⠀⠛⠒⠣⠿⠂⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠀`);
</script>

<template>
  <div :class="theme" class="app-container">
    <NuxtPage />
    <ButtonTranslation />
    <TechnologiesIcons />
    <ToggleThemeButton />
  </div>
</template>

<style lang="scss">
.app-container {
  height: 100%;
}
</style>
