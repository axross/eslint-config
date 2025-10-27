const hasPkg = require("has-pkg");

function getConfig() {
  /** @type {import('@typescript-eslint/utils').TSESLint.FlatConfig.ConfigArray} */
  const config = [];

  if (hasPkg("expo")) {
    config.push({
      // jS files can end up in build intermediates, eg:
      // android/app/build/intermediates/assets/debug/EXDevMenuApp.android.js
      ignores: ["android/app/build"],
    });
  }

  if (hasPkg("eslint-plugin-expo")) {
    const expoPlugin = require("eslint-plugin-expo");

    config.push({
      plugins: {
        expo: expoPlugin,
      },

      rules: {
        "expo/use-dom-exports": ["error"],
        "expo/no-env-var-destructuring": ["error"],
        "expo/no-dynamic-env-var": ["error"],
      },
    });
  }

  return config;
}

module.exports = getConfig;
