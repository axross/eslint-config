const hasPkg = require("has-pkg");

function getConfig() {
  /** @type {import('@typescript-eslint/utils').TSESLint.FlatConfig.ConfigArray} */
  const config = [];

  if (hasPkg("next")) {
    config.push({ ignores: [".next/*"] });
  }

  if (hasPkg("eslint-plugin-next")) {
    const nextPlugin = require("eslint-plugin-next");

    config.push(
      { plugins: { "@next/next": nextPlugin } },
      {
        files: ["**/*.?(m|c)@(j|t)s?(x)"],
        rules: {
          ...nextPlugin.configs.recommended.rules,
          ...nextPlugin.configs["core-web-vitals"].rules,
        },
      },
    );
  }

  return config;
}

module.exports = getConfig;
