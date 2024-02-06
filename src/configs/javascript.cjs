const hasPkg = require("has-pkg");
const { ignoredMagicNumbers, maxComplexity } = require("../constants.cjs");

const config = [];

if (hasPkg("@eslint/js")) {
  const eslintJs = require("@eslint/js");

  config.push(
    {
      files: ["**/*.?(m|c)@(j|t)s?(x)"],
      rules: {
        ...eslintJs.configs.recommended.rules,

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
        "func-style": ["error", "declaration", { allowArrowFunctions: true }],
        "grouped-accessor-pairs": "error",
        // dont use for-in
        "guard-for-in": "error",
        "id-denylist": "error",
        "id-length": ["error", { exceptions: ["t"] }],
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
            ignore: ignoredMagicNumbers,
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
        "prefer-destructuring": [
          "error",
          { array: false, object: false },
          { enforceForRenamedProperties: true },
        ],
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
      },
    },
    {
      files: ["**/*.?(m|c)js?(x)"],
      rules: {
        "no-magic-numbers": [
          "error",
          {
            ignore: ignoredMagicNumbers,
            ignoreArrayIndexes: true,
            enforceConst: true,
          },
        ],
      },
    },
  );
}

if (hasPkg("eslint-plugin-unicorn")) {
  const unicornPlugin = require("eslint-plugin-unicorn");

  config.push(
    {
      files: ["**/*.?(m|c)@(j|t)s?(x)"],
      plugins: {
        unicorn: unicornPlugin,
      },
      rules: {
        ...unicornPlugin.configs.recommended.rules,
        "unicorn/expiring-todo-comments": [
          "error",
          { allowWarningComments: true },
        ],
        "unicorn/no-null": "off",
        "unicorn/prevent-abbreviations": [
          "error",
          {
            replacements: {
              db: false,
              params: false,
              searchParams: false,
            },
          },
        ],
      },
    },
    {
      files: ["*rc.?(m)js?(x)", "*.config.?(m)js?(x)"],
      plugins: {
        unicorn: unicornPlugin,
      },
      rules: {
        "unicorn/prefer-module": "off",
      },
    },
  );
}

if (hasPkg("eslint-plugin-import")) {
  const importPlugin = require("eslint-plugin-import");

  config.push(
    {
      files: ["**/*.?(m|c)@(j|t)s?(x)"],
      plugins: {
        import: importPlugin,
      },
      rules: {
        ...importPlugin.configs.recommended.rules,
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
        "import/max-dependencies": ["error", { max: 20 }],
        "import/newline-after-import": "error",
        "import/no-anonymous-default-export": "error",
        "import/no-default-export": "error",
        "import/no-duplicates": "error",
        "import/no-named-default": "off",
        "import/no-namespace": "error",
        "import/no-unassigned-import": [
          "error",
          { allow: ["**/*.css", "server-only"] },
        ],
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
      files: ["**/*.@(js|cjs)"],
      plugins: {
        import: importPlugin,
      },
      rules: { "import/no-commonjs": "off" },
    },
    {
      files: [
        "**/app/**/page.?(m|c)@(j|t)sx",
        "**/app/**/layout.?(m|c)@(j|t)sx",
      ],
      plugins: {
        import: importPlugin,
      },
      rules: {
        "import/no-default-export": "off",
        "import/prefer-default-export": ["error", { target: "any" }],
      },
    },
    {
      files: ["**/*.stories.?(m|c)@(j|t)s?(x)"],
      plugins: {
        import: importPlugin,
      },
      rules: {
        "import/group-exports": "off",
        "import/no-default-export": "off",
      },
    },
  );
}

if (hasPkg("eslint-plugin-compat")) {
  const compatPlugin = require("eslint-plugin-compat");

  config.push({
    files: ["**/*.?(m|c)@(j|t)s?(x)"],
    plugins: {
      compat: compatPlugin,
    },
    rules: {
      ...compatPlugin.configs.recommended.rules,
    },
  });
}

module.exports = config;
