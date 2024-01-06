const hasPkg = require("has-pkg");

const config = [];

if (
  hasPkg("@typescript-eslint/parser") &&
  hasPkg("@typescript-eslint/eslint-plugin")
) {
  const typescriptPlugin = require("@typescript-eslint/eslint-plugin");
  const typescriptParser = require("@typescript-eslint/parser");

  config.push({
    files: ["**/*.@(spec|test).?(m|c)ts?(x)"],
    plugins: {
      "@typescript-eslint": typescriptPlugin,
    },
    languageOptions: {
      parser: typescriptParser,
      parserOptions: {
        project: "./tsconfig.json",
      },
    },
    rules: { "@typescript-eslint/unbound-method": "off" },
  });
}

module.exports = config;
