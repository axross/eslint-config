/* eslint-env node */

module.exports = {
  overrides: [
    {
      files: ["*.@(spec|test).@(js|jsx|ts|tsx)"],
      plugins: ["jest", "jest-formatting"],
      extends: [
        "plugin:jest/recommended",
        "plugin:jest/style",
        "plugin:jest-formatting/strict",
      ],
      rules: {
        // extending eslint-plugin-jest v27.2.1
        "jest/consistent-test-it": [
          "error",
          { fn: "test", withinDescribe: "it" },
        ],
        "jest/expect-expect": "error",
        "jest/max-expects": "error",
        "jest/max-nested-describe": ["error", { max: 2 }],
        "jest/no-commented-out-tests": "error",
        "jest/no-conditional-in-test": "error",
        "jest/no-duplicate-hooks": "error",
        "jest/no-hooks": "off",
        "jest/no-large-snapshots": "off",
        "jest/no-restricted-jest-methods": "off",
        "jest/no-restricted-matchers": [
          "error",
          {
            toBeTruthy: "Use `expect(value).toBe(true)` instead.",
            toBeFalsy: "Use `expect(value).toBe(false)` instead.",
            toBeNull: "Use `expect(value).toBe(null)` instead.",
            toBeDefined: "Use `expect(value).not.toBe(undefined)` instead.",
            toBeUndefined: "Use `expect(value).toBe(undefined)` instead.",
            toThrowError: "Use `expect(func).toThrow(...)` instead.",
            toHaveLength: "Use `expect(value.length).toBe(length)` instead.",
            toHaveBeenCalledWith:
              "Use `.expect(mock).toHaveBeenNthCalledWith(...)` instead.",
            toReturnTimes:
              "Use `.expect(mock).toHaveReturnedTimes(...)` instead.",
            toHaveReturned:
              "Use `.expect(mock).toHaveNthReturnedWith(...)` instead.",
            toHaveReturnedWith:
              "Use `.expect(mock).toHaveNthReturnedWith(...)` instead.",
            toReturnWith:
              "Use `.expect(mock).toHaveNthReturnedWith(...)` instead.",
          },
        ],
        "jest/no-test-return-statement": "error",
        "jest/prefer-called-with": "error",
        "jest/prefer-comparison-matcher": "error",
        "jest/prefer-each": "error",
        "jest/prefer-equality-matcher": "error",
        "jest/prefer-expect-assertions": [
          "error",
          {
            onlyFunctionsWithAsyncKeyword: true,
            onlyFunctionsWithExpectInLoop: true,
            onlyFunctionsWithExpectInCallback: true,
          },
        ],
        "jest/prefer-expect-resolves": "error",
        "jest/prefer-hooks-in-order": "error",
        "jest/prefer-hooks-on-top": "error",
        "jest/prefer-lowercase-title": [
          "error",
          { ignoreTopLevelDescribe: true },
        ],
        "jest/prefer-mock-promise-shorthand": "error",
        "jest/prefer-snapshot-hint": "error",
        "jest/prefer-spy-on": "error",
        "jest/prefer-strict-equal": "error",
        "jest/prefer-todo": "error",
        "jest/require-hook": "error",
        "jest/require-to-throw-message": "error",
        "jest/require-top-level-describe": "warn",
      },
    },
    {
      files: ["*.@(spec|test).@(ts|tsx)"],
      rules: {
        "no-untyped-mock-factory": "error",
        "@typescript-eslint/unbound-method": "off",
        "unbound-method": "error",
      },
    },
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
