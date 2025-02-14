import { dirname } from "path";
import { fileURLToPath } from "url";
import { FlatCompat } from "@eslint/eslintrc";
import prettierPlugin from "eslint-plugin-prettier";
import cypress from "cypress";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const compat = new FlatCompat({
  baseDirectory: __dirname,
});

const eslintConfig = [
  ...compat.extends("next/core-web-vitals"),
  ...compat.extends("plugin:prettier/recommended"),
  ...compat.extends("plugin:cypress/recommended"),

  {
    files: ["**/*.js", "**/*.jsx"],
    plugins: {
      prettier: prettierPlugin,
      cypress: cypress,
    },
    rules: {
      "no-undef": "error",
      "prettier/prettier": [
        "error",
        {
          singleQuote: true,
          semi: true,
          tabWidth: 2,
          trailingComma: "all",
          printWidth: 80,
          bracketSpacing: true,
          arrowParens: "avoid",
        },
      ],
    },
  },
];

export default eslintConfig;
