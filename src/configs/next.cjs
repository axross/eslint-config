const hasPkg = require("has-pkg");
const getLanguageOptions = require("../utils/language-options.cjs");

function getConfig(options = {}) {
  /** @type {import('@typescript-eslint/utils').TSESLint.FlatConfig.ConfigArray} */
  const config = [];

  if (hasPkg("next")) {
    config.push({
      ignores: [".next/*"],
    });
  }

  if (hasPkg("eslint-plugin-next")) {
    const nextPlugin = require("eslint-plugin-next");

    config.push({
      files: ["**/*.?(m|c)@(j|t)s?(x)"],
      languageOptions: getLanguageOptions(options),
      plugins: {
        "@next/next": nextPlugin,
      },
      rules: {
        ...nextPlugin.configs.recommended.rules,
        ...nextPlugin.configs["core-web-vitals"].rules,
      },
    });
  }

  return config;
}

module.exports = getConfig;
