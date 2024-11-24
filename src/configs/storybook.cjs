const hasPkg = require("has-pkg");

function getConfig() {
  /** @type {import('@typescript-eslint/utils').TSESLint.FlatConfig.ConfigArray} */
  const config = [];

  if (hasPkg("eslint-plugin-storybook")) {
    const storybookPlugin = require("eslint-plugin-storybook");

    config.push(
      {
        plugins: {
          storybook: storybookPlugin,
        },
      },
      {
        files: ["**/*.stories.?(m|c)@(j|t)s?(x)"],
        rules: {
          ...storybookPlugin.configs.recommended.rules,
          ...storybookPlugin.configs["csf-strict"].rules,
          ...storybookPlugin.configs["addon-interactions"].rules,
        },
      }
    );
  }

  return config;
}

module.exports = getConfig;
