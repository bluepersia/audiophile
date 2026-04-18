import js from "@eslint/js";
import globals from "globals";
import react from "eslint-plugin-react";
import reactHooks from "eslint-plugin-react-hooks";
import reactRefresh from "eslint-plugin-react-refresh";
import jsxA11y from "eslint-plugin-jsx-a11y";
import tseslint from "typescript-eslint";
import { defineConfig, globalIgnores } from "eslint/config";

export default defineConfig([
  globalIgnores(["dist"]),
  {
    files: ["**/*.{ts,tsx}"],
    extends: [
      js.configs.recommended,
      tseslint.configs.recommended,
      reactHooks.configs.flat.recommended,
      reactRefresh.configs.vite,
    ],
    languageOptions: {
      ecmaVersion: 2020,
      globals: globals.browser,
    },
    plugins: {
      react,
      "jsx-a11y": jsxA11y,
    },
    rules: {
      ...react.configs.recommended.rules,
      ...jsxA11y.configs.recommended.rules,

      "react/react-in-jsx-scope": "off",

      // Prefer type inference, but enforce consistency
      "@typescript-eslint/consistent-type-imports": [
        "warn",
        { prefer: "type-imports" },
      ],

      // Enforce consistent type definitions (type vs interface)
      "@typescript-eslint/consistent-type-definitions": ["warn", "type"],

      // Require explicit return types ONLY for exported functions
      "@typescript-eslint/explicit-module-boundary-types": "warn",

      // Avoid unnecessary type annotations (keeps code clean)
      "@typescript-eslint/no-inferrable-types": "warn",

      // Enforce consistent array types (T[] instead of Array<T>)
      "@typescript-eslint/array-type": ["warn", { default: "array-simple" }],

      /**
       * --- Safety & Clarity ---
       */

      // Prevent using "any" casually
      "@typescript-eslint/no-explicit-any": "warn",

      // Encourage better type narrowing
      "@typescript-eslint/strict-boolean-expressions": "off",

      // Catch unused vars but allow _
      "@typescript-eslint/no-unused-vars": [
        "warn",
        { argsIgnorePattern: "^_" },
      ],
    },
    settings: {
      react: {
        version: "detect",
      },
    },
  },
]);
