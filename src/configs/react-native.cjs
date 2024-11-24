const hasPkg = require("has-pkg");
const getLanguageOptions = require("../utils/language-options.cjs");

function getConfig(options = {}) {
  /** @type {import('@typescript-eslint/utils').TSESLint.FlatConfig.ConfigArray} */
  const config = [];

  if (hasPkg("react-native")) {
    config.push({
      ignores: ["android/*", "ios/*", ".expo/*"],
    });
  }

  if (hasPkg("@react-native/eslint-plugin")) {
    const reactNativePlugin = require("@react-native/eslint-plugin");

    config.push({
      files: ["**/*.?(m|c)@(j|t)s?(x)"],
      languageOptions: getLanguageOptions(options),
      plugins: {
        "@react-native": reactNativePlugin,
      },
      rules: {
        "@react-native/platform-colors": "error",
      },
    });
  }

  return config;
}

module.exports = getConfig;
