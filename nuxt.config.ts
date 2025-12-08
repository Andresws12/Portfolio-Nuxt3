// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules: [
    '@nuxt/eslint',
    '@nuxt/image',
    '@nuxt/hints',
    '@nuxtjs/i18n',
    '@pinia/nuxt',
    'nuxt-schema-org',
    '@nuxtjs/robots',
    '@nuxtjs/sitemap',
  ],
  devtools: { enabled: true },
  nitro: {
    compressPublicAssets: true,
  },
  app: {
    head: {
      charset: 'utf-8',
      viewport: 'width=device-width, initial-scale=1',
    },
  },
  css: ['assets/styles/main.scss'],
  site: {
    baseURL: 'https://andres-hernandez.com/',
    url: 'https://andres-hernandez.com/',
    name: 'Andres Felipe Hernandez Galindo - Website',
    autoI18n: true,
  },
  compatibilityDate: '2025-07-15',
  eslint: {
    config: {
      stylistic: false,
    },
  },
  i18n: {
    vueI18n: './nuxt-i18n.ts',
    baseUrl: 'https://andres-hernandez.com',
    defaultLocale: 'es-ES',
    strategy: 'prefix_and_default',
    detectBrowserLanguage: {
      useCookie: true,
      cookieKey: 'i18n_redirected',
      redirectOn: 'root',
    },
    locales: [
      {
        code: 'en-US',
        iso: 'en-US',
        language: 'en-US',
        name: 'English',
        file: 'en-US.json',
      },
      {
        code: 'es-ES',
        iso: 'es-ES',
        language: 'es-ES',
        name: 'Español',
        file: 'es-ES.json',
      },
    ],
    langDir: 'locales/',
  },
  image: {
    densities: [1, 2],
    format: ['webp'],
    quality: 80,
    cloudflare: {
      baseURL: 'https://andres-hernandez.com',
    },
  },
})
