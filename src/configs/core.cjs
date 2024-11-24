const hasPkg = require("has-pkg");
const { ignoredMagicNumbers, maxComplexity } = require("../constants.cjs");
const fileMatch = require("../utils/file-match.cjs");

function getConfigs() {
  /** @type {import('@typescript-eslint/utils').TSESLint.FlatConfig.ConfigArray} */
  const config = [];

  if (hasPkg("@eslint/js")) {
    const eslintJs = require("@eslint/js");

    config.push(
      {
        languageOptions: {
          globals: {
            console: "readonly",
          },
        },
      },
      {
        files: [fileMatch.allJsTs],
        rules: {
          ...eslintJs.configs.all.rules,
          "arrow-body-style": "error",
          "capitalized-comments": ["error", "never"],
          complexity: ["error", maxComplexity],
          curly: ["error", "all"],
          "func-style": ["error", "declaration", { allowArrowFunctions: true }],
          "id-length": ["error", { exceptions: ["i", "v"] }],
          "max-classes-per-file": "off",
          "max-lines": "off",
          "max-lines-per-function": "off",
          "max-statements": "off",
          "multiline-comment-style": "off",
          "no-console": "warn",
          "no-continue": "off",
          "no-magic-numbers": [
            "error",
            {
              ignore: ignoredMagicNumbers,
              ignoreArrayIndexes: true,
              ignoreDefaultValues: true,
            },
          ],
          "no-undefined": "off",
          "no-use-before-define": "off",
          "no-void": ["error", { allowAsStatement: true }],
          "one-var": ["error", "never"],
          "prefer-destructuring": [
            "error",
            { array: false, object: false },
            { enforceForRenamedProperties: true },
          ],
          "quote-props": ["error", "as-needed"],
          radix: ["error", "as-needed"],
          "sort-imports": ["error", { ignoreDeclarationSort: true }],
          "sort-keys": "off",
          strict: "off",
        },
      },
      {
        files: [fileMatch.allJsxTsx],
        rules: {
          "no-ternary": "off",
        },
      },
      {
        files: ["**/*.?(c)js?(x)"],
        languageOptions: {
          globals: {
            require: "readonly",
            module: "readonly",
          },
        },
      },
      {
        files: ["**/*rc.?(m|c)@(j|t)s?(x)", "**/*.config.?(m|c)@(j|t)s?(x)"],
        rules: {
          "no-magic-numbers": "off",
          "no-ternary": "off",
        },
      },
      {
        files: ["**/*rc.?(c)js?(x)", "**/*.config.?(c)js?(x)"],
        languageOptions: {
          globals: {
            module: "readonly",
            require: "readonly",
          },
        },
      }
    );

    if (hasPkg("eslint-plugin-import")) {
      config.push({
        files: [fileMatch.allJsTs],
        rules: {
          // disabled in favor of import/no-duplicates
          "no-duplicate-imports": "off",
        },
      });
    }

    if (hasPkg("typescript-eslint")) {
      config.push({
        files: [fileMatch.allTs],
        rules: {
          // disabled in favor of @typescript-eslint/class-methods-use-this
          camelcase: "off",
          "class-methods-use-this": "off",
          "default-param-last": "off",
          "dot-notation": "off",
          "init-declarations": "off",
          "max-params": "off",
          "no-loop-func": "off",
          "no-magic-numbers": "off",
          "no-restricted-imports": "off",
          "no-shadow": "off",
          "no-use-before-define": "off",
          "prefer-destructuring": "off",
        },
      });
    }
  }

  return config;
}

module.exports = getConfigs;
