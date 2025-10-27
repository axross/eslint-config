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
          "@stylistic/brace-style": ["error", "1tbs"],
          "@stylistic/curly-newline": ["error", "always"],
          "@stylistic/function-call-argument-newline": ["error", "consistent"],
          "@stylistic/function-call-spacing": ["error", "never"],
          "@stylistic/function-paren-newline": ["error", "multiline"],
          "@stylistic/generator-star-spacing": ["error", "after"],
          "@stylistic/implicit-arrow-linebreak": ["error", "below"],
          "@stylistic/jsx-child-element-spacing": "error",
          "@stylistic/jsx-closing-bracket-location": ["error", "line-aligned"],
          "@stylistic/jsx-first-prop-new-line": ["error", "multiline"],
          "@stylistic/jsx-newline": ["error", { prevent: false }],
          "@stylistic/line-comment-position": ["error", "above"],
          "@stylistic/linebreak-style": ["error", "unix"],
          "@stylistic/member-delimiter-style": "error",
          "@stylistic/multiline-comment-style": ["error", "separate-lines"],
          "@stylistic/newline-per-chained-call": ["error", { ignoreChainWithDepth: 1 }],
          "@stylistic/no-extra-semi": "error",
          "@stylistic/no-multi-spaces": "error",
          "@stylistic/nonblock-statement-body-position": ["error", "beside"],
          "@stylistic/object-property-newline": "error",
          "@stylistic/one-var-declaration-per-line": ["error", "initializations"],
          "@stylistic/semi-style": "error",
          "@stylistic/type-annotation-spacing": "error",
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
              consistent: true,
              minItems: 3,
              multiline: true,
            },
          ],
          "@stylistic/jsx-curly-brace-presence": [
            "error",
            {
              children: "always",
              propElementValues: "always",
              props: "never",
            },
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
              reservedFirst: ["key", "ref"],
              shorthandFirst: false,
              shorthandLast: true,
            },
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
              applyDefaultIgnorePatterns: true,
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
          "@stylistic/no-confusing-arrow": [
            "error",
            {
              allowParens: true,
              onlyOneSimpleParam: false,
            },
          ],
          "@stylistic/object-curly-newline": [
            "error",
            {
              ExportDeclaration: {
                consistent: true,
                minProperties: 2,
                multiline: true,
              },
              ImportDeclaration: {
                consistent: true,
                minProperties: 2,
                multiline: true,
              },
              ObjectExpression: {
                consistent: true,
                minProperties: 2,
                multiline: true,
              },
              ObjectPattern: {
                consistent: true,
                minProperties: 2,
                multiline: true,
              },
            },
          ],
          "@stylistic/object-curly-spacing": [
            "error",
            "always",
            {
              arraysInObjects: true,
              objectsInObjects: true,
            },
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
