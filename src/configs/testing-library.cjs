const hasPkg = require("has-pkg");

const config = [];

if (
  hasPkg("eslint-plugin-testing-library") &&
  hasPkg("@testing-library/react")
) {
  const testingLibraryPlugin = require("eslint-plugin-testing-library");

  config.push({
    files: ["**/*.@(spec|test).?(m|c)@(j|t)sx"],
    plugins: {
      "testing-library": testingLibraryPlugin,
    },
    rules: {
      ...testingLibraryPlugin.configs.react.rules,

      // extending eslint-plugin-testing-library v5.11.0
      "testing-library/consistent-data-testid": [
        "error",
        {
          testIdPattern: "[a-z]+(-[a-z]+)*",
          testIdAttribute: ["data-testid"],
        },
      ],
      "testing-library/no-global-regexp-flag-in-query": "error",
      "testing-library/no-manual-cleanup": "error",
      "testing-library/prefer-explicit-assert": "error",
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
      "testing-library/prefer-user-event": "error",
      "testing-library/prefer-wait-for": "error",
    },
  });
}

module.exports = config;
