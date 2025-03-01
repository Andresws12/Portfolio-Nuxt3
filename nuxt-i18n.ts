import en from "./i18n/locales/en-US.json";
import es from "./i18n/locales/es-ES.json";

export default defineI18nConfig(() => {
  return {
    legacy: false,
    locale: "es-ES",
    fallbackLocale: "es-ES",
    globalInjection: true,
    messages: {
      "en-US": en,
      "es-ES": es,
    },
    numberFormats: {
      "en-US": {
        currency: { style: "currency", currency: "USD" },
      },
      "es-ES": {
        currency: { style: "currency", currency: "EUR" },
      },
    },
  };
});
