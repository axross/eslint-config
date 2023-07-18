/* eslint-env node */

module.exports = {
  overrides: [
    {
      files: ["*.@(jsx|tsx)", "use*.@(js|ts)"],
      plugins: ["react-hooks"],
      extends: ["plugin:react-hooks/recommended"],
    },
  ],
};
