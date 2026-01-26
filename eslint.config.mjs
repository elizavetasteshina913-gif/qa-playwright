import js from "@eslint/js";
import globals from "globals";
import playwright from "eslint-plugin-playwright";
import prettier from "eslint-plugin-prettier";
import { defineConfig } from "eslint/config";

export default defineConfig([
  {
    files: ["**/*.{js,mjs,cjs}"],
    languageOptions: {
      ecmaVersion: "latest",
      sourceType: "module",
      globals: {
        ...globals.node,
      },
    },
    plugins: {
      playwright,
      prettier,
    },
    rules: {
      ...js.configs.recommended.rules,
      ...playwright.configs.recommended.rules,

      // 🔥 Prettier как ESLint-правило
      "prettier/prettier": "error",
    },
  },

  {
    files: ["**/*.spec.{js,mjs}", "**/*.test.{js,mjs}"],
    rules: {
      "playwright/no-focused-test": "error",
      "playwright/no-page-pause": "error",
      "playwright/no-wait-for-timeout": "warn",
    },
  },
]);
