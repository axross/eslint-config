const hasPkg = require("has-pkg");

const config = [];

if (hasPkg("eslint-plugin-import")) {
  const importPlugin = require("eslint-plugin-import");

  config.push({
    files: ["**/*.stories.?(m|c)@(j|t)s?(x)"],
    plugins: {
      import: importPlugin,
    },
    rules: {
      "import/group-exports": "off",
      "import/no-default-export": "off",
    },
  });
}

if (hasPkg("eslint-plugin-react-hooks")) {
  const reactHooksPlugin = require("eslint-plugin-react-hooks");

  config.push({
    files: ["**/*.stories.?(m|c)@(j|t)s?(x)"],
    plugins: {
      "react-hooks": reactHooksPlugin,
    },
    rules: {
      "react-hooks/rules-of-hooks": "off",
    },
  });
}

if (hasPkg("eslint-plugin-storybook")) {
  const storybookPlugin = require("eslint-plugin-storybook");

  config.push({
    files: ["**/*.stories.?(m|c)@(j|t)s?(x)"],
    plugins: {
      storybook: storybookPlugin,
    },
    rules: {
      ...storybookPlugin.configs.recommended.rules,
      ...storybookPlugin.configs["csf-strict"].rules,
      ...storybookPlugin.configs["addon-interactions"].rules,
    },
  });
}

module.exports = config;
