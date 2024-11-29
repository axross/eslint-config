const hasPkg = require("has-pkg");

function getConfig() {
  /** @type {import('@typescript-eslint/utils').TSESLint.FlatConfig.ConfigArray} */
  const config = [];

  if (hasPkg("eslint-plugin-compat")) {
    const compatPlugin = require("eslint-plugin-compat");

    config.push({
      files: ["**/*.?(m|c)@(j|t)s?(x)"],
      plugins: { compat: compatPlugin },
      rules: { ...compatPlugin.configs.recommended.rules },
    });
  }

  return config;
}

module.exports = getConfig;
