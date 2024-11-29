const hasPkg = require("has-pkg");

function getConfig() {
  /** @type {import('@typescript-eslint/utils').TSESLint.FlatConfig.ConfigArray} */
  const config = [];

  if (
    hasPkg("eslint-plugin-testing-library")
    && hasPkg("@testing-library/react")
  ) {
    const testingLibraryPlugin = require("eslint-plugin-testing-library");

    config.push(
      { plugins: { "testing-library": testingLibraryPlugin } },
      {
        files: ["**/*.@(spec|test).?(m|c)@(j|t)sx"],
        rules: {
          ...testingLibraryPlugin.configs.react.rules,

          // extending eslint-plugin-testing-library v5.11.0
          "testing-library/consistent-data-testid": [
            "error",
            {
              testIdAttribute: ["data-testid"],
              testIdPattern: "[a-z]+(-[a-z]+)*",
            },
          ],
          "testing-library/no-global-regexp-flag-in-query": "error",
          "testing-library/no-manual-cleanup": "error",
          "testing-library/prefer-explicit-assert": "error",
          "testing-library/prefer-user-event": "error",
          "testing-library/prefer-wait-for": "error",
          "testing-library/prefer-query-matchers": [
            "error",
            {
              validEntries: [
                {
                  matcher: "toBeVisible",
                  query: "get",
                },
              ],
            },
          ],
        },
      },
    );
  }

  return config;
}

module.exports = getConfig;
