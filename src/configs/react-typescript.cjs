const hasPkg = require("has-pkg");
const { baseNamingConvention } = require("../constants.cjs");

const config = [];

if (
  hasPkg("@typescript-eslint/parser") &&
  hasPkg("@typescript-eslint/eslint-plugin")
) {
  const typescriptPlugin = require("@typescript-eslint/eslint-plugin");
  const typescriptParser = require("@typescript-eslint/parser");

  config.push({
    files: ["**/*.?(m|c)tsx"],
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
          selector: "variableLike",
          format: ["camelCase", "PascalCase"],
          leadingUnderscore: "forbid",
          trailingUnderscore: "forbid",
        },
        {
          selector: "objectLiteralProperty",
          types: ["number", "string"],
          format: null,
          filter: {
            match: true,
            regex: "^--[a-z]+(?:-[a-z]+)*$",
          },
          custom: {
            match: true,
            regex: "^--[a-z]+(?:-[a-z]+)*$",
          },
        },
        {
          selector: "objectLiteralProperty",
          types: ["string"],
          format: null,
          filter: {
            match: true,
            regex: "^(data|aria)-[a-z]+(?:-[a-z]+)*$",
          },
          custom: {
            match: true,
            regex: "^(data|aria)-[a-z]+(?:-[a-z]+)*$",
          },
        },
      ],
    },
  });
}

module.exports = config;
