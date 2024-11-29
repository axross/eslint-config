const languageOptionsGlobals = require("../globals.cjs");

function getConfigs() {
  /** @type {import('@typescript-eslint/utils').TSESLint.FlatConfig.ConfigArray} */
  const config = [];

  config.push({ languageOptions: { globals: languageOptionsGlobals } });

  return config;
}

module.exports = getConfigs;
