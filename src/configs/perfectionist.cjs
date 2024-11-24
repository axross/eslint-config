const hasPkg = require("has-pkg");

function getConfig() {
  /** @type {import('@typescript-eslint/utils').TSESLint.FlatConfig.ConfigArray} */
  const config = [];

  if (hasPkg("eslint-plugin-perfectionist")) {
    const perfectionistPlugin = require("eslint-plugin-perfectionist");

    config.push(perfectionistPlugin.configs["recommended-natural"]);
  }

  return config;
}

module.exports = getConfig;
