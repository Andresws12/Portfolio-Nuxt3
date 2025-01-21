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
    "@nuxt/eslint",
    "@pinia/nuxt",
  ],
  pinia: {
    storesDirs: ["./stores/**"],
  },
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
    quality: 80,
    cloudflare: {
      baseURL: "https://andres-hernandez.com",
    },
  },

  i18n: {
    vueI18n: "./nuxt-i18n.ts", // custom path example
    baseUrl: "https://andres-hernandez.com",
  },
  css: ["assets/styles/main.scss"],
  app: {
    head: {
      charset: "utf-8",
      viewport: "width=device-width, initial-scale=1",
    },
  },

  compatibilityDate: "2025-01-07",
});
