// @ts-check
import withNuxt from "./.nuxt/eslint.config.mjs";
import tsParser from "@typescript-eslint/parser";
import eslintConfigPrettier from "eslint-config-prettier";

export default withNuxt([
  // Workaround for missing parser configuration due to generation failure
  {
    files: ["**/*.vue"],
    languageOptions: {
      parserOptions: {
        parser: tsParser,
      },
    },
  },
  {
    files: ["**/*.ts", "**/*.tsx"],
    languageOptions: {
      parser: tsParser,
    },
  },
  {
    rules: {
      "vue/multi-word-component-names": "off",
      "no-unused-vars": "off",
    },
  },
  eslintConfigPrettier,
]);
