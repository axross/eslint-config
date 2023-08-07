/* eslint-env node */

module.exports = {
  overrides: [
    {
      files: ["*.@(spec|test).@(jsx|tsx)"],
      plugins: ["jest-dom", "testing-library"],
      extends: ["plugin:jest-dom/recommended", "plugin:testing-library/react"],
      rules: {
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
    },
  ],
};
