const hasPkg = require("has-pkg");
const getLanguageOptions = require("../utils/language-options.cjs");

function getConfig(options = {}) {
  /** @type {import('@typescript-eslint/utils').TSESLint.FlatConfig.ConfigArray} */
  const config = [];

  if (hasPkg("eslint-plugin-storybook")) {
    const storybookPlugin = require("eslint-plugin-storybook");

    config.push({
      files: ["**/*.stories.?(m|c)@(j|t)s?(x)"],
      languageOptions: getLanguageOptions(options),
      plugins: {
        storybook: storybookPlugin,
      },
      rules: {
        ...storybookPlugin.configs.recommended.rules,
        ...storybookPlugin.configs["csf-strict"].rules,
        ...storybookPlugin.configs["addon-interactions"].rules,
      },
    });
  }

  return config;
}

module.exports = getConfig;
