const hasPkg = require("has-pkg");
const { ignoredMagicNumbers, maxComplexity } = require("../constants.cjs");
const fileMatch = require("../utils/file-match.cjs");
const getLanguageOptions = require("../utils/language-options.cjs");

function getConfig(options = {}) {
  /** @type {import('@typescript-eslint/utils').TSESLint.FlatConfig.ConfigArray} */
  const config = [];

  if (hasPkg("@eslint/js")) {
    const eslintJs = require("@eslint/js");

    config.push(
      {
        files: [fileMatch.allJsTs],
        languageOptions: getLanguageOptions(options),
        rules: {
          ...eslintJs.configs.all.rules,
          "arrow-body-style": ["error", "always"],
          "capitalized-comments": ["error", "never"],
          complexity: ["error", maxComplexity],
          curly: ["error", "all"],
          "func-style": ["error", "declaration", { allowArrowFunctions: true }],
          "id-length": ["error", { exceptions: ["t"] }],
          "max-classes-per-file": "off",
          "max-lines": "off",
          "max-lines-per-function": "off",
          "max-statements": "off",
          "multiline-comment-style": "off",
          "no-continue": 0,
          "no-magic-numbers": [
            "error",
            {
              ignore: ignoredMagicNumbers,
              ignoreArrayIndexes: true,
              ignoreDefaultValues: true,
            },
          ],
          "no-undefined": "off",
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
        languageOptions: getLanguageOptions(options),
        rules: {
          "no-ternary": "off",
        },
      },
      {
        files: ["**/*rc.?(m|c)@(j|t)s?(x)", "**/*.config.?(m|c)@(j|t)s?(x)"],
        languageOptions: getLanguageOptions(options),
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
        languageOptions: getLanguageOptions(options),
        rules: {
          // disabled in favor of import/no-duplicates
          "no-duplicate-imports": "off",
        },
      });
    }

    if (hasPkg("typescript-eslint")) {
      config.push({
        files: [fileMatch.allTs],
        languageOptions: getLanguageOptions(options),
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

module.exports = getConfig;
