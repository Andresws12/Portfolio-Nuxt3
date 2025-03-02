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
    "@nuxt/devtools",
    "pinia-plugin-persistedstate/nuxt",
  ],
  pinia: {
    storesDirs: ["./stores/**"],
  },
  future: { compatibilityVersion: 4 },
  compatibilityDate: "2024-07-30",
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
    vueI18n: "./nuxt-i18n.ts",
    baseUrl: "https://andres-hernandez.com",
    defaultLocale: "es-ES",
    strategy: "prefix_and_default",
    detectBrowserLanguage: {
      useCookie: true,
      cookieKey: "i18n_redirected",
      redirectOn: "root",
    },
    locales: [
      {
        code: "en-US",
        iso: "en-US",
        language: "en-US",
        name: "English",
        file: "en-US.json",
      },
      {
        code: "es-ES",
        iso: "es-ES",
        language: "es-ES",
        name: "Español",
        file: "es-ES.json",
      },
    ],
    lazy: true,
    langDir: "locales/",
  },
  css: ["assets/styles/main.scss"],
  app: {
    head: {
      charset: "utf-8",
      viewport: "width=device-width, initial-scale=1",
    },
  },
});
