const hasPkg = require("has-pkg");
const {
  indent, maxLineLength,
} = require("../constants.cjs");

function getConfig() {
  /** @type {import('@typescript-eslint/utils').TSESLint.FlatConfig.ConfigArray} */
  const config = [];

  if (hasPkg("@stylistic/eslint-plugin")) {
    const stylisticPlugin = require("@stylistic/eslint-plugin");

    config.push(
      stylisticPlugin.configs.customize({
        arrowParens: false,
        blockSpacing: true,
        braceStyle: "stroustrup",
        commaDangle: "always-multiline",
        flat: true,
        indent,
        jsx: true,
        quoteProps: "consistent-as-needed",
        quotes: "double",
        semi: true,
      }),
      {
        rules: {
          "@stylistic/jsx-child-element-spacing": "error",
          "@stylistic/jsx-props-no-multi-spaces": "error",
          "@stylistic/no-extra-semi": "error",
          "@stylistic/object-property-newline": "error",
          "@stylistic/semi-style": "error",
          "@stylistic/wrap-regex": "off",
          "@stylistic/array-bracket-newline": [
            "error",
            {
              minItems: 3,
              multiline: true,
            },
          ],
          "@stylistic/array-element-newline": [
            "error",
            {
              consistent: false,
              minItems: 3,
              multiline: true,
            },
          ],
          "@stylistic/curly-newline": [
            "error",
            "always",
          ],
          "@stylistic/function-call-argument-newline": [
            "error",
            "consistent",
          ],
          "@stylistic/function-call-spacing": [
            "error",
            "never",
          ],
          "@stylistic/function-paren-newline": [
            "error",
            "multiline",
          ],
          "@stylistic/generator-star-spacing": [
            "error",
            "after",
          ],
          "@stylistic/implicit-arrow-linebreak": [
            "error",
            "below",
          ],
          "@stylistic/jsx-indent": [
            "error",
            indent,
            {
              checkAttributes: true,
              indentLogicalExpressions: true,
            },
          ],
          "@stylistic/jsx-newline": [
            "error",
            { prevent: false },
          ],
          "@stylistic/jsx-pascal-case": [
            "error",
            {
              allowAllCaps: false,
              allowLeadingUnderscore: false,
              allowNamespace: false,
            },
          ],
          "@stylistic/jsx-self-closing-comp": [
            "error",
            {
              component: true,
              html: true,
            },
          ],
          "@stylistic/jsx-sort-props": [
            "error",
            {
              callbacksLast: true,
              ignoreCase: true,
              multiline: "last",
              noSortAlphabetically: true,
              shorthandFirst: false,
              shorthandLast: true,
              reservedFirst: [
                "key",
                "ref",
              ],
            },
          ],
          "@stylistic/line-comment-position": [
            "error",
            "above",
          ],
          "@stylistic/linebreak-style": [
            "error",
            "unix",
          ],
          "@stylistic/lines-around-comment": [
            "error",
            {
              afterBlockComment: false,
              afterHashbangComment: true,
              afterLineComment: false,
              allowArrayEnd: true,
              allowArrayStart: true,
              allowBlockEnd: true,
              allowBlockStart: true,
              allowClassEnd: true,
              allowClassStart: true,
              allowEnumEnd: true,
              allowEnumStart: true,
              allowInterfaceEnd: true,
              allowInterfaceStart: true,
              allowModuleEnd: true,
              allowModuleStart: true,
              allowObjectEnd: true,
              allowObjectStart: true,
              allowTypeEnd: true,
              allowTypeStart: true,
              applyDefaultIgnorePatterns: false,
              beforeBlockComment: true,
              beforeLineComment: true,
            },
          ],
          "@stylistic/max-len": [
            "error",
            {
              code: maxLineLength,
              comments: maxLineLength,
              ignoreComments: false,
              ignoreRegExpLiterals: true,
              ignoreStrings: true,
              ignoreTemplateLiterals: true,
              ignoreTrailingComments: false,
              ignoreUrls: true,
              tabWidth: indent,
            },
          ],
          "@stylistic/multiline-comment-style": [
            "error",
            "separate-lines",
          ],
          "@stylistic/newline-per-chained-call": [
            "error",
            { ignoreChainWithDepth: 1 },
          ],
          "@stylistic/no-confusing-arrow": [
            "error",
            {
              allowParens: true,
              onlyOneSimpleParam: false,
            },
          ],
          "@stylistic/nonblock-statement-body-position": [
            "error",
            "beside",
          ],
          "@stylistic/object-curly-newline": [
            "error",
            {
              consistent: false,
              minProperties: 2,
              multiline: true,
            },
          ],
          "@stylistic/one-var-declaration-per-line": [
            "error",
            "initializations",
          ],
          "@stylistic/padding-line-between-statements": [
            "error",
            {
              blankLine: "always",
              next: "*",
              prev: "block",
            },
            {
              blankLine: "always",
              next: "block",
              prev: "*",
            },
            {
              blankLine: "always",
              next: "*",
              prev: "block-like",
            },
            {
              blankLine: "always",
              next: "block-like",
              prev: "*",
            },
            {
              blankLine: "always",
              next: "*",
              prev: "class",
            },
            {
              blankLine: "always",
              next: "class",
              prev: "*",
            },
            {
              blankLine: "always",
              next: "*",
              prev: "directive",
            },
          ],
          "@stylistic/switch-colon-spacing": [
            "error",
            {
              after: true,
              before: false,
            },
          ],
        },
      },
    );

    if (hasPkg("eslint-plugin-perfectionist")) {
      config.push({
        rules: {
          // check https://perfectionist.dev/rules/sort-jsx-props
          "@stylistic/jsx-sort-props": "off",
        },
      });
    }
  }

  return config;
}

module.exports = getConfig;
