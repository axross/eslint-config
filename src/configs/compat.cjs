const hasPkg = require("has-pkg");
const { fileMatch } = require("../utils/file-match.cjs");

function getConfig() {
  /** @type {import('@typescript-eslint/utils').TSESLint.FlatConfig.ConfigArray} */
  const config = [];

  if (hasPkg("eslint-plugin-compat")) {
    const compatPlugin = require("eslint-plugin-compat");

    config.push({
      files: [fileMatch.allJsTs],
      plugins: {
        compat: compatPlugin,
      },
      rules: {
        ...compatPlugin.configs.recommended.rules,
      },
    });
  }

  return config;
}

module.exports = getConfig;
