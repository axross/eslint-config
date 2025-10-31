const hasPkg = require("has-pkg");

function getConfig() {
  /** @type {import('@typescript-eslint/utils').TSESLint.FlatConfig.ConfigArray} */
  const config = [];

  if (hasPkg("eslint-plugin-storybook")) {
    const storybookPlugin = require("eslint-plugin-storybook");

    config.push(
      ...storybookPlugin.configs['flat/recommended'],
      ...storybookPlugin.configs['flat/csf-strict'],
      ...storybookPlugin.configs['flat/addon-interactions']
    );
  }

  return config;
}

module.exports = getConfig;
