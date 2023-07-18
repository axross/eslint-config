/* eslint-env node */

module.exports = {
  root: true,
  env: {
    browser: true,
  },
  extends: [
    "./eslint.js",
    "./typescript.js",
    "./compat.js",
    "./import.js",
    "./react.js",
    "./react-hooks.js",
    "./jest.js",
    "./storybook.js",
    "plugin:prettier/recommended",
  ],
};
