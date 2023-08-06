/* eslint-env node */

const { ignoredMagicNumbersInReact, indent } = require("./constants");

module.exports = {
  overrides: [
    {
      files: ["*.@(ts|tsx)"],
      parser: "@typescript-eslint/parser",
      parserOptions: {
        ecmaVersion: "latest",
        ecmaFeatures: { jsx: true },
        project: true,
      },
      settings: {
        "import/resolver": {
          typescript: true,
          node: true,
        },
      },
      plugins: ["@typescript-eslint"],
      extends: [
        "plugin:@typescript-eslint/recommended",
        "plugin:@typescript-eslint/recommended-requiring-type-checking",
        "plugin:@typescript-eslint/strict",
      ],
      rules: {
        // extending @typescript-eslint v5.59.8
        // [supported rules](https://typescript-eslint.io/rules/#supported-rules)
        "@typescript-eslint/consistent-type-exports": "error",
        "@typescript-eslint/consistent-type-imports": [
          "error",
          {
            prefer: "type-imports",
            fixStyle: "inline-type-imports",
          },
        ],
        "@typescript-eslint/explicit-function-return-type": [
          "error",
          { allowExpressions: true },
        ],
        "@typescript-eslint/explicit-member-accessibility": "error",
        "@typescript-eslint/explicit-module-boundary-types": "error",
        "@typescript-eslint/member-delimiter-style": "error",
        "@typescript-eslint/member-ordering": "error",
        "@typescript-eslint/method-signature-style": "error",
        "@typescript-eslint/naming-convention": [
          "error",
          {
            selector: "default",
            format: ["camelCase"],
            leadingUnderscore: "forbid",
            trailingUnderscore: "forbid",
          },
          {
            selector: "typeLike",
            format: ["PascalCase"],
            leadingUnderscore: "forbid",
            trailingUnderscore: "forbid",
          },
        ],
        "@typescript-eslint/no-confusing-void-expression": "error",
        "@typescript-eslint/no-duplicate-type-constituents": "error",
        "@typescript-eslint/no-import-type-side-effects": "off",
        "@typescript-eslint/no-misused-promises": [
          "error",
          {
            checksConditionals: true,
            checksVoidReturn: true,
            checksSpreads: true,
          },
        ],
        "@typescript-eslint/no-redundant-type-constituents": "error",
        "@typescript-eslint/no-require-imports": "error",
        "@typescript-eslint/no-type-alias": [
          "error",
          {
            allowAliases: "in-unions-and-intersections",
            allowCallbacks: "always",
            allowConditionalTypes: "always",
            allowLiterals: "in-unions-and-intersections",
            allowMappedTypes: "in-unions-and-intersections",
            allowTupleTypes: "always",
            allowGenerics: "always",
          },
        ],
        "@typescript-eslint/no-unnecessary-qualifier": "error",
        "@typescript-eslint/no-useless-empty-export": "error",
        "@typescript-eslint/parameter-properties": "error",
        "@typescript-eslint/prefer-enum-initializers": "error",
        "@typescript-eslint/prefer-readonly": "error",
        "@typescript-eslint/prefer-readonly-parameter-types": "off",
        "@typescript-eslint/prefer-regexp-exec": "error",
        "@typescript-eslint/promise-function-async": "error",
        "@typescript-eslint/require-array-sort-compare": "error",
        "@typescript-eslint/sort-type-constituents": "error",
        "@typescript-eslint/strict-boolean-expressions": "error",
        "@typescript-eslint/switch-exhaustiveness-check": "error",
        "@typescript-eslint/type-annotation-spacing": "error",
        "@typescript-eslint/typedef": "error",

        // [extension rules](https://typescript-eslint.io/rules/#extension-rules)
        "block-spacing": "off",
        "@typescript-eslint/block-spacing": "error",
        "brace-style": "off",
        "@typescript-eslint/brace-style": "error",
        "comma-dangle": "off",
        "@typescript-eslint/comma-dangle": "error",
        "comma-spacing": "off",
        "@typescript-eslint/comma-spacing": "error",
        "default-param-last": "off",
        "@typescript-eslint/default-param-last": "error",
        "func-call-spacing": "off",
        "@typescript-eslint/func-call-spacing": "error",
        indent: "off",
        "@typescript-eslint/indent": ["error", indent],
        "init-declarations": "off",
        "@typescript-eslint/init-declarations": "error",
        "key-spacing": "off",
        "@typescript-eslint/key-spacing": "error",
        "keyword-spacing": "off",
        "@typescript-eslint/keyword-spacing": "error",
        "lines-around-comment": "off",
        "@typescript-eslint/lines-around-comment": "error",
        "lines-between-class-members": "off",
        "@typescript-eslint/lines-between-class-members": "error",
        "no-dupe-class-members": "off",
        "@typescript-eslint/no-dupe-class-members": "error",
        "no-duplicate-imports": "off",
        "@typescript-eslint/no-duplicate-imports": "error",
        "no-extra-parens": "off",
        "@typescript-eslint/no-extra-parens": "error",
        "no-invalid-this": "off",
        "@typescript-eslint/no-invalid-this": "error",
        "no-loop-func": "off",
        "@typescript-eslint/no-loop-func": "error",
        "no-magic-numbers": "off",
        "@typescript-eslint/no-magic-numbers": [
          "error",
          {
            // eslint-disable-next-line no-magic-numbers
            ignore: [1],
            ignoreArrayIndexes: true,
            enforceConst: true,
            ignoreEnums: true,
          },
        ],
        "no-redeclare": "off",
        "@typescript-eslint/no-redeclare": "error",
        "no-restricted-imports": "off",
        "@typescript-eslint/no-restricted-imports": "error",
        "no-shadow": "off",
        "@typescript-eslint/no-shadow": "error",
        "no-unused-expressions": "off",
        "@typescript-eslint/no-unused-expressions": "error",
        "no-use-before-define": "off",
        "@typescript-eslint/no-use-before-define": "error",
        "object-curly-spacing": "off",
        "@typescript-eslint/object-curly-spacing": ["error", "always"],
        "padding-line-between-statements": "off",
        "@typescript-eslint/padding-line-between-statements": "error",
        quotes: "off",
        "@typescript-eslint/quotes": "error",
        "no-return-await": "off",
        "@typescript-eslint/return-await": "error",
        semi: "off",
        "@typescript-eslint/semi": "error",
        "space-before-blocks": "off",
        "@typescript-eslint/space-before-blocks": "error",
        "space-before-function-paren": "off",
        "@typescript-eslint/space-before-function-paren": "error",
        "space-infix-ops": "off",
        "@typescript-eslint/space-infix-ops": "error",
      },
    },
    {
      files: ["*.@(jsx|tsx)", "*.stories.@(js|jsx|ts|tsx)"],
      rules: {
        "@typescript-eslint/naming-convention": [
          "error",
          {
            selector: "default",
            format: ["camelCase"],
            leadingUnderscore: "forbid",
            trailingUnderscore: "forbid",
          },
          {
            selector: "variable",
            format: ["camelCase", "PascalCase"],
            leadingUnderscore: "forbid",
            trailingUnderscore: "forbid",
          },
          {
            selector: "function",
            format: ["camelCase", "PascalCase"],
            leadingUnderscore: "forbid",
            trailingUnderscore: "forbid",
          },
          {
            selector: "objectLiteralProperty",
            format: ["camelCase", "PascalCase"],
          },
          {
            selector: "objectLiteralProperty",
            types: ["number", "string"],
            format: null,
            filter: {
              match: true,
              regex: "^--[a-z]+(?:-[a-z]+)*$",
            },
            custom: {
              match: true,
              regex: "^--[a-z]+(?:-[a-z]+)*$",
            },
          },
          {
            selector: "typeLike",
            format: ["PascalCase"],
            leadingUnderscore: "forbid",
            trailingUnderscore: "forbid",
          },
        ],
        "@typescript-eslint/no-magic-numbers": [
          "error",
          {
            // eslint-disable-next-line no-magic-numbers
            ignore: [1, ...ignoredMagicNumbersInReact],
            ignoreArrayIndexes: true,
            enforceConst: true,
            ignoreEnums: true,
          },
        ],
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
      files: ["**/app/**/route.ts"],
      rules: {
        "@typescript-eslint/naming-convention": [
          "error",
          {
            selector: "default",
            format: ["camelCase"],
            leadingUnderscore: "forbid",
            trailingUnderscore: "forbid",
            filter: {
              regex: "^(GET|POST|PUT|PATCH|DELETE|OPTIONS)$",
              match: false,
            },
          },
          {
            selector: "typeLike",
            format: ["PascalCase"],
            leadingUnderscore: "forbid",
            trailingUnderscore: "forbid",
          },
        ],
      },
    },
  ],
};
