<script setup lang="ts">
import { useHead } from '#imports'
import { NuxtPage } from '#components'

import ButtonTranslation from '@/components/common/ButtonTranslation.vue'
import TechnologiesIcons from '@/components/common/TechnologiesIcons.vue'
import ToggleThemeButton from '@/components/common/ToggleThemeButton.vue'
import CharacterMe from '@/components/common/CharacterMe.vue'

const i18n = useI18n()

const i18nHead = useLocaleHead()

const mainStore = useMainStore()

const theme = computed(() => mainStore.theme)
const isMounted = ref(false)

onMounted(() => {
  isMounted.value = true
})

useHead({
  htmlAttrs: {
    lang: i18nHead.value.htmlAttrs!.lang || 'es',
  },
  link: [...(i18nHead.value.link || [])],
  meta: [...(i18nHead.value.meta || [])],
})

useSchemaOrg([
  definePerson({
    email: 'andreshernandez12.1995@gmail.com',
    jobTitle: i18n.t('views.home.homeDescription.subtitle'),
    worksFor: i18n.t('common.works.iskaypet.name'),
    image: '/img/andres-front-programador.webp',
    sameAs: ['https://github.com/Andresws12'],
  }),
  defineWebPage(),
])

useSeoMeta({
  author: i18n.t('common.seo.author'),
  publisher: i18n.t('common.seo.author'),
  robots: 'index, follow',
  googleSiteVerification: 'wd0T2xFbSwhH9Pv08VAGT59eyVVSXjlkEL1_sckqUBY',
  ogImage: '/img/andres-front-programador.webp',
  twitterCard: 'summary_large_image',
})
</script>

<template>
  <div :class="isMounted ? theme : 'dark'" class="app-container site">
    <NuxtPage />
    <ButtonTranslation />
    <TechnologiesIcons />
    <ToggleThemeButton />
    <CharacterMe />
  </div>
</template>

<style lang="scss">
.app-container {
  height: 100%;
}
</style>
