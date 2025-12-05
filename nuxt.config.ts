// import { createResolver } from '@nuxt/kit'
// const { resolve } = createResolver(import.meta.url)
// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules: [
    "@nuxtjs/i18n",
    "nuxt-particles",
    "@nuxt/image",
    "@nuxtjs/robots",
    "nuxt-purgecss",
    "nuxt-delay-hydration",
    "nuxt-simple-sitemap",
    "nuxt-schema-org",
    "nuxt-security",
  ],
  site: {
    url: "https://andres-hernandez.onrender.com/",
    name: "My Website",
    autoI18n: true,
  },
  delayHydration: {
    // enables nuxt-delay-hydration in dev mode for testing
    debug: process.env.NODE_ENV === "development",
    mode: "init",
  },
  image: {
    densities: [1, 2],
    format: ["webp"],
    quality: 80,
  },
  particles: {
    mode: "slim", // 'full' | 'slim' | 'basic' | 'custom'
  },
  i18n: {
    /* module options */
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
      },
    ],
    defaultLocale: "en-US",
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
