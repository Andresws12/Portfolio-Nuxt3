// import { createResolver } from '@nuxt/kit'
// const { resolve } = createResolver(import.meta.url)
// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules: [
    "@nuxtjs/i18n",
    "@nuxt/image",
    "@nuxtjs/robots",
    "nuxt-purgecss",
    "nuxt-delay-hydration",
    "@nuxtjs/sitemap",
    "nuxt-schema-org",
  ],
  site: {
    baseURL: "https://andres-hernandez.com/",
    url: "https://andres-hernandez.com/",
    name: "Andres Felipe Hernandez Galindo - Website",
    autoI18n: true,
  },
  delayHydration: {
    // enables nuxt-delay-hydration in dev mode for testing
    debug: process.env.NODE_ENV === "development",
    mode: "init",
  },
  image: {
    densities: [0.5, 1],
    format: ["webp"],
    quality: 50,
  },
  i18n: {
    /* module options */
    baseUrl: "https://andres-hernandez.com",
    lazy: true,
    langDir: "locales",
    strategy: "prefix_except_default",
    locales: [
      {
        code: "en-US",
        iso: "en-US",
        name: "English(US)",
        file: "en-US.json",
      },
      {
        code: "es-ES",
        iso: "es-ES",
        name: "Español",
        file: "es-ES.json",
        isCatchallLocale: true,
      },
    ],
    defaultLocale: "es-ES",
  },
  css: ["assets/styles/main.scss"],
  vite: {
    css: {
      preprocessorOptions: {
        scss: {
          additionalData: '@use "assets/styles/utilities.scss" as *;',
        },
      },
    },
  },
  app: {
    head: {
      charset: "utf-8",
      viewport: "width=device-width, initial-scale=1",
    },
  },
});
