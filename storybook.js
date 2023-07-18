/* eslint-env node */

module.exports = {
  overrides: [
    {
      files: ["*.stories.@(js|jsx|ts|tsx)"],
      plugins: ["react-hooks", "storybook"],
      extends: [
        "plugin:storybook/recommended",
        "plugin:storybook/csf-strict",
        "plugin:storybook/addon-interactions",
      ],
      rules: {
        "import/group-exports": "off",
        "import/no-default-export": "off",
        "react-hooks/rules-of-hooks": "off",
      },
    },
  ],
};
