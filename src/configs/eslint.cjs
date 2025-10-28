const globals = require("globals");
const hasPkg = require("has-pkg");
const { ignoredMagicNumbers, maxComplexity } = require("../constants.cjs");
const languageOptionsGlobals = require("../globals.cjs");

function getConfigs() {
  /** @type {import('@typescript-eslint/utils').TSESLint.FlatConfig.ConfigArray} */
  const config = [];

  if (hasPkg("@eslint/js")) {
    const eslintJs = require("@eslint/js");

    config.push(
      eslintJs.configs.all,
      {
        rules: {
          "no-void": ["error", { allowAsStatement: true }],
          "arrow-body-style": "error",
          "capitalized-comments": ["error", "never"],
          "complexity": ["error", maxComplexity],
          "curly": ["error", "all"],
          "max-classes-per-file": "off",
          "max-lines": "off",
          "max-lines-per-function": "off",
          "max-statements": "off",
          "multiline-comment-style": "off",
          "no-console": "warn",
          "no-continue": "off",
          "no-nested-ternary": "error",
          "no-undefined": "off",
          "no-unneeded-ternary": "error",
          "no-use-before-define": "off",
          "no-ternary": "off",
          "no-warning-comments": "warn",
          "one-var": ["error", "never"],
          "quote-props": ["error", "as-needed"],
          "radix": ["error", "as-needed"],
          "sort-imports": ["error", { ignoreDeclarationSort: true }],
          "sort-keys": "off",
          "strict": "off",
          "func-style": [
            "error",
            "declaration",
            { allowArrowFunctions: true },
          ],
          "id-length": [
            "error",
            {
              exceptions: [
                "_",
                "i",
                "v",
              ],
            },
          ],
          "no-magic-numbers": [
            "error",
            {
              ignore: ignoredMagicNumbers,
              ignoreArrayIndexes: true,
              ignoreDefaultValues: true,
            },
          ],
          "prefer-destructuring": [
            "error",
            {
              array: false,
              object: false,
            },
            { enforceForRenamedProperties: true },
          ],
        },
      },
      {
        files: ["**/*.?(m|c)ts?(x)"],
        rules: {
          "no-unused-vars": "off",
          "no-useless-assignment": "off",
        },
      },
      {
        files: ["**/*.?(c)js?(x)"],
        languageOptions: {
          globals: {
            ...languageOptionsGlobals,
            ...globals.commonjs,
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
            ...languageOptionsGlobals,
            ...globals.commonjs,
          },
        },
      },
    );

    if (hasPkg("eslint-plugin-import")) {
      config.push({
        files: ["**/*.?(m|c)@(j|t)s?(x)"],
        rules: {
          "no-duplicate-imports": "off",
          "sort-imports": "off",
        },
      });
    }

    if (hasPkg("typescript-eslint")) {
      config.push({
        files: ["**/*.?(m|c)@(j|t)s?(x)"],
        rules: {
          // disabled in favor of @typescript-eslint/class-methods-use-this
          "camelcase": "off",
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
