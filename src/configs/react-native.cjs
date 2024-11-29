const hasPkg = require("has-pkg");

function getConfig() {
  /** @type {import('@typescript-eslint/utils').TSESLint.FlatConfig.ConfigArray} */
  const config = [];

  if (hasPkg("react-native")) {
    config.push({
      ignores: [
        "android/*",
        "ios/*",
        ".expo/*",
      ],
    });
  }

  if (hasPkg("@react-native/eslint-plugin")) {
    const reactNativePlugin = require("@react-native/eslint-plugin");

    config.push(
      { plugins: { "@react-native": reactNativePlugin } },
      {
        files: ["**/*.?(m|c)@(j|t)s?(x)"],
        rules: { "@react-native/platform-colors": "error" },
      },
    );
  }

  return config;
}

module.exports = getConfig;
