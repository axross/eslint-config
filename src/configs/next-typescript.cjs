const hasPkg = require("has-pkg");
const { baseNamingConvention } = require("../constants.cjs");

const config = [];

if (
  hasPkg("@typescript-eslint/parser") && hasPkg("@typescript-eslint/eslint-plugin")
) {
  const typescriptPlugin = require("@typescript-eslint/eslint-plugin");
  const typescriptParser = require("@typescript-eslint/parser");

  config.push({
    files: ["**/app/**/route.?(m|c)ts?(x)"],
    plugins: {
      "@typescript-eslint": typescriptPlugin,
    },
    languageOptions: {
      parser: typescriptParser,
      parserOptions: {
        project: "./tsconfig.json",
      },
    },
    rules: {
      "@typescript-eslint/naming-convention": [
        "error",
        ...baseNamingConvention,
        {
          selector: "function",
          format: ["camelCase"],
          leadingUnderscore: "forbid",
          trailingUnderscore: "forbid",
          filter: {
            regex: "^(GET|POST|PUT|PATCH|DELETE|OPTIONS)$",
            match: false,
          },
        },
      ],
    },
  });
}

module.exports = config;
