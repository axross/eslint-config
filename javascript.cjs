/* eslint-env node */
const {
  ignoredMagicNumbersInReact,
  indent,
  maxComplexity,
} = require("./constants.cjs");

module.exports = {
  env: {
    browser: true,
  },
  extends: ["eslint:recommended"],
  rules: {
    // extending ESLint v8.41.0 recommended rules
    // [possible problems](https://eslint.org/docs/latest/rules/#possible-problems)
    "array-callback-return": "error",
    "no-await-in-loop": "error",
    "no-constant-binary-expression": "error",
    "no-constructor-return": "error",
    "no-duplicate-imports": "error",
    "no-new-native-nonconstructor": "error",
    "no-promise-executor-return": "error",
    "no-self-compare": "error",
    "no-template-curly-in-string": "error",
    "no-unmodified-loop-condition": "error",
    "no-unreachable-loop": "error",
    "no-unused-private-class-members": "error",
    "no-use-before-define": "error",
    "require-atomic-updates": "error",

    // [suggestions](https://eslint.org/docs/latest/rules/#suggestions)
    "accessor-pairs": "error",
    "arrow-body-style": ["error", "always"],
    "block-scoped-var": "error",
    camelcase: "error",
    "capitalized-comments": ["error", "never"],
    "class-methods-use-this": "error",
    complexity: ["error", maxComplexity],
    "consistent-return": "error",
    "consistent-this": "error",
    curly: ["error", "all"],
    // typescript??
    "default-case": "error",
    "default-case-last": "error",
    "default-param-last": "error",
    "dot-notation": "error",
    eqeqeq: "error",
    "func-name-matching": "error",
    "func-names": "error",
    "func-style": ["error", "declaration"],
    "grouped-accessor-pairs": "error",
    // dont use for-in
    "guard-for-in": "error",
    "id-denylist": "error",
    "id-length": "error",
    "id-match": "error",
    "init-declarations": "error",
    "logical-assignment-operators": "error",
    "max-classes-per-file": "off",
    "max-depth": "error",
    "max-lines": "off",
    "max-lines-per-function": "off",
    "max-nested-callbacks": "error",
    "max-params": "error",
    "max-statements": 0,
    "multiline-comment-style": "off",
    "new-cap": "error",
    "no-alert": "error",
    "no-array-constructor": "error",
    "no-bitwise": "error",
    "no-caller": "error",
    "no-confusing-arrow": "error",
    "no-console": "error",
    "no-continue": 0,
    "no-div-regex": "error",
    "no-else-return": "error",
    "no-empty-function": "error",
    "no-empty-static-block": "error",
    "no-eq-null": "error",
    "no-eval": "error",
    "no-extend-native": "error",
    "no-extra-bind": "error",
    "no-extra-label": "error",
    "no-floating-decimal": "error",
    "no-implicit-coercion": "error",
    "no-implicit-globals": "error",
    "no-implied-eval": "error",
    "no-inline-comments": "error",
    "no-invalid-this": "error",
    "no-iterator": "error",
    "no-label-var": "error",
    "no-labels": "error",
    "no-lone-blocks": "error",
    "no-lonely-if": "error",
    "no-loop-func": "error",
    "no-magic-numbers": [
      "error",
      {
        ignoreArrayIndexes: true,
        ignoreDefaultValues: true,
      },
    ],
    "no-mixed-operators": "error",
    "no-multi-assign": "error",
    "no-multi-str": "error",
    "no-negated-condition": "error",
    "no-nested-ternary": "error",
    "no-new": "error",
    "no-new-func": "error",
    "no-new-object": "error",
    "no-new-wrappers": "error",
    "no-octal-escape": "error",
    "no-param-reassign": "error",
    "no-plusplus": "error",
    "no-proto": "error",
    "no-restricted-exports": "error",
    "no-restricted-globals": "error",
    "no-restricted-imports": "error",
    "no-restricted-properties": "error",
    "no-restricted-syntax": "error",
    "no-return-assign": "error",
    "no-return-await": "error",
    "no-script-url": "error",
    "no-sequences": "error",
    "no-shadow": "error",
    "no-ternary": "error",
    "no-throw-literal": "error",
    "no-undef-init": "error",
    "no-undefined": "off",
    "no-underscore-dangle": "error",
    "no-unneeded-ternary": "error",
    "no-unused-expressions": "error",
    "no-useless-call": "error",
    "no-useless-computed-key": "error",
    "no-useless-concat": "error",
    "no-useless-constructor": "error",
    "no-useless-rename": "error",
    "no-useless-return": "error",
    "no-var": "error",
    "no-void": ["error", { allowAsStatement: true }],
    "no-warning-comments": "error",
    "object-shorthand": "error",
    "one-var": ["error", "never"],
    "one-var-declaration-per-line": "error",
    "operator-assignment": "error",
    "prefer-arrow-callback": "error",
    "prefer-const": "error",
    "prefer-destructuring": "error",
    "prefer-exponentiation-operator": "error",
    "prefer-named-capture-group": "error",
    "prefer-numeric-literals": "error",
    "prefer-object-has-own": "error",
    "prefer-object-spread": "error",
    "prefer-promise-reject-errors": "error",
    "prefer-regex-literals": "error",
    "prefer-rest-params": "error",
    "prefer-spread": "error",
    "prefer-template": "error",
    "quote-props": ["error", "as-needed"],
    radix: ["error", "as-needed"],
    "require-await": "error",
    "require-unicode-regexp": "error",
    "sort-imports": ["error", { ignoreDeclarationSort: true }],
    "sort-keys": 0,
    "sort-vars": "error",
    "spaced-comment": "error",
    strict: 0,
    "symbol-description": "error",
    "vars-on-top": "error",
    yoda: "error",

    // layout & formatting
    "array-bracket-newline": "error",
    "array-bracket-spacing": "error",
    "array-element-newline": ["error", { multiline: true }],
    "arrow-parens": ["error", "as-needed"],
    "arrow-spacing": "error",
    "block-spacing": "error",
    "brace-style": "error",
    "comma-dangle": [
      "error",
      {
        arrays: "always-multiline",
        objects: "always-multiline",
        imports: "never",
        exports: "never",
        functions: "never",
      },
    ],
    "comma-spacing": "error",
    "comma-style": "error",
    "computed-property-spacing": "error",
    "dot-location": "error",
    "eol-last": "error",
    "func-call-spacing": "error",
    "function-call-argument-newline": ["error", "never"],
    "function-paren-newline": "error",
    "generator-star-spacing": "error",
    "implicit-arrow-linebreak": "error",
    indent: ["error", indent],
    "jsx-quotes": "error",
    "key-spacing": "error",
    "keyword-spacing": "error",
    "line-comment-position": "error",
    "linebreak-style": "error",
    "lines-around-comment": "error",
    "lines-between-class-members": "error",
    "max-len": ["error", { code: 120 }],
    "max-statements-per-line": "error",
    "multiline-ternary": ["error", "always-multiline"],
    "new-parens": "error",
    "newline-per-chained-call": "error",
    "no-extra-parens": "error",
    "no-mixed-spaces-and-tabs": "error",
    "no-multi-spaces": "error",
    "no-multiple-empty-lines": ["error", { max: 1 }],
    "no-tabs": "error",
    "no-trailing-spaces": "error",
    "no-whitespace-before-property": "error",
    "nonblock-statement-body-position": "error",
    "object-curly-newline": ["error", { multiline: true }],
    "object-curly-spacing": ["error", "always"],
    "object-property-newline": [
      "error",
      { allowAllPropertiesOnSameLine: true },
    ],
    "operator-linebreak": ["error", "before"],
    "padded-blocks": "error",
    "padding-line-between-statements": "error",
    quotes: "error",
    "rest-spread-spacing": "error",
    semi: "error",
    "semi-spacing": "error",
    "semi-style": "error",
    "space-before-blocks": "error",
    "space-before-function-paren": "error",
    "space-in-parens": "error",
    "space-infix-ops": "error",
    "space-unary-ops": "error",
    "switch-colon-spacing": "error",
    "template-curly-spacing": "error",
    "template-tag-spacing": "error",
    "unicode-bom": "error",
    "wrap-iife": "error",
    "wrap-regex": "error",
    "yield-star-spacing": "error",
  },
  overrides: [
    {
      files: ["*.@(js|mjs|cjs|jsx|ts|mts|cts|tsx)"],
      plugins: ["compat"],
      extends: ["plugin:compat/recommended"],
    },
    {
      files: ["*.jsx"],
      rules: {
        "no-magic-numbers": [
          "error",
          {
            // eslint-disable-next-line no-magic-numbers
            ignore: ignoredMagicNumbersInReact,
            ignoreArrayIndexes: true,
            enforceConst: true,
          },
        ],
      },
    },
    {
      files: ["*.@(js|mjs|cjs|jsx|ts|mts|cts|tsx)"],
      extends: ["plugin:import/recommended"],
      plugins: ["import"],
      rules: {
        // extending eslint-plugin-import v2.25.2 recommended rules
        "import/no-deprecated": "error",
        "import/no-empty-named-blocks": "error",
        "import/no-extraneous-dependencies": "error",
        "import/no-mutable-exports": "error",
        "import/no-named-as-default": "error",
        "import/no-named-as-default-member": "error",
        "import/no-unused-modules": "error",
        "import/no-amd": "error",
        "import/no-commonjs": "error",
        "import/no-import-module-exports": "error",
        "import/no-nodejs-modules": "off",
        "import/unambiguous": "off",
        "import/no-absolute-path": "error",
        "import/no-cycle": "error",
        "import/no-dynamic-require": "error",
        "import/no-internal-modules": "off",
        "import/no-relative-packages": "off",
        "import/no-relative-parent-imports": "off",
        "import/no-restricted-paths": "off",
        "import/no-self-import": "error",
        "import/no-useless-path-segments": "error",
        "import/no-webpack-loader-syntax": "error",
        "import/consistent-type-specifier-style": ["error", "prefer-inline"],
        "import/dynamic-import-chunkname": "off",
        "import/exports-last": "off",
        "import/extensions": "error",
        "import/first": "error",
        "import/group-exports": "error",
        "import/max-dependencies": "error",
        "import/newline-after-import": "error",
        "import/no-anonymous-default-export": "error",
        "import/no-default-export": "error",
        "import/no-duplicates": "error",
        "import/no-named-default": "off",
        "import/no-namespace": "error",
        "import/no-unassigned-import": ["error", { allow: ["**/*.css"] }],
        "import/order": [
          "error",
          {
            groups: ["builtin", "external", "parent", "sibling", "index"],
            pathGroups: [
              {
                pattern: "~/**",
                group: "parent",
                position: "before",
              },
            ],
            "newlines-between": "never",
            alphabetize: { order: "asc" },
          },
        ],
        "import/prefer-default-export": "off",

        // disabled in favor of import/no-duplicates
        "no-duplicate-imports": "off",
      },
    },
    {
      files: ["*.@(js|cjs)"],
      rules: { "import/no-commonjs": "off" },
    },
    {
      files: ["*.@(ts|mts|cts|tsx)"],
      settings: { "import/resolver": { typescript: true } },
      extends: ["plugin:import/typescript"],
    },
    {
      files: ["*.stories.@(ts|mts|cts|tsx)"],
      rules: { "import/prefer-default-export": "off" },
    },
    {
      files: ["**/app/**/page.@(jsx|tsx)", "**/app/**/layout.@(jsx|tsx)"],
      rules: {
        "import/no-default-export": "off",
        "import/prefer-default-export": ["error", { target: "any" }],
      },
    },
  ],
};
