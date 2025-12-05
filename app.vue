<template>
  <div>
    <NuxtPage />
    <button-translation></button-translation>
  </div>
</template>

<script setup lang="ts">
import { createHead } from 'unhead';

const i18n = useI18n();

import ButtonTranslation from '@/components/common/ButtonTranslation.vue';

createHead();

const i18nHead = useLocaleHead({
  addDirAttribute: true,
  addSeoAttributes: true,
  route: useRoute(),
});

useServerHead({
  htmlAttrs: {
    lang: i18nHead.value.htmlAttrs!.lang,
  },
  link: [...(i18nHead.value.link || [])],
  meta: [...(i18nHead.value.meta || [])],
});

useServerSeoMeta({
  author: i18n.t('common.seo.author'),
  publisher: i18n.t('common.seo.author'),
  robots: 'index, follow',
  googleSiteVerification: 'wd0T2xFbSwhH9Pv08VAGT59eyVVSXjlkEL1_sckqUBY',
});

useSchemaOrg([
  definePerson({
    email: 'andreshernandez12.1995@gmail.com',
    jobTitle: i18n.t('views.home.homeDescription.subtitle'),
    worksFor: i18n.t('common.works.iskaypet.name'),
    image: '/img/andres-front-programador.webp',
    sameAs: ['https://github.com/Andresws12'],
  }),
  defineWebPage(),
]);
</script>
