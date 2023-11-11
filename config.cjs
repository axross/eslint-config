/* eslint-env node */
const hasPkg = require("has-pkg");
const {
  ignoredMagicNumbersInReact,
  indent,
  maxComplexity,
} = require("./constants.cjs");

const overrides = [
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
    files: [
      "*rc.@(js|mjs|cjs|ts|mts|cts|json)",
      "*.config.@(js|mjs|cjs|ts|mts|cts|json)",
    ],
    rules: {
      "no-magic-numbers": "off",
      "no-ternary": "off",
    },
  },
];

if (hasPkg("eslint-plugin-unicorn")) {
  overrides.push(
    {
      files: ["*.@(js|mjs|cjs|jsx|ts|mts|cts|tsx)"],
      extends: ["plugin:unicorn/recommended"],
      rules: {
        "unicorn/custom-error-definition": "error",
        "unicorn/expiring-todo-comments": [
          "error",
          { allowWarningComments: true },
        ],
        "unicorn/no-null": "off",
        "unicorn/numeric-separators-style": "off",
        "unicorn/prefer-ternary": "off",
        "unicorn/prevent-abbreviations": [
          "error",
          {
            replacements: {
              db: false,
              searchParams: false,
            },
          },
        ],
      },
    },
    {
      files: ["*.@(jsx|mjsx|cjsx|tsx|mtsx|ctsx)"],
      rules: {
        "unicorn/prevent-abbreviations": [
          "error",
          {
            replacements: {
              ref: false,
              refs: false,
              prop: false,
              props: false,
              searchParams: false,
            },
          },
        ],
      },
    },
    {
      files: [
        "*rc.@(js|mjs|cjs|ts|mts|cts|json)",
        "*.config.@(js|mjs|cjs|ts|mts|cts|json)",
      ],
      plugins: ["eslint-plugin-unicorn"],
      rules: {
        "unicorn/prefer-module": "off",
      },
    },
  );
}

if (hasPkg("eslint-plugin-compat")) {
  overrides.push({
    files: ["*.@(js|mjs|cjs|jsx|ts|mts|cts|tsx)"],
    extends: ["plugin:compat/recommended"],
  });
}

if (hasPkg("eslint-plugin-import")) {
  overrides.push(
    {
      files: ["*.@(js|mjs|cjs|jsx|ts|mts|cts|tsx)"],
      extends: ["plugin:import/recommended"],
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
        "import/max-dependencies": ["error", { max: 20 }],
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
    {
      files: ["*.stories.@(js|mjs|cjs|jsx|ts|mts|cts|tsx)"],
      rules: {
        "import/group-exports": "off",
        "import/no-default-export": "off",
      },
    },
  );
}

if (
  hasPkg("@typescript-eslint/eslint-plugin") &&
  hasPkg("@typescript-eslint/parser")
) {
  overrides.push(
    {
      files: ["*.@(ts|mts|cts|tsx)"],
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
        "@typescript-eslint/comma-dangle": [
          "error",
          {
            arrays: "always-multiline",
            objects: "always-multiline",
            imports: "always-multiline",
            exports: "always-multiline",
            functions: "always-multiline",
          },
        ],
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
            ignore: [0, 1],
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
        "@typescript-eslint/space-before-function-paren": [
          "error",
          {
            anonymous: "never",
            named: "never",
            asyncArrow: "always",
          },
        ],
        "space-infix-ops": "off",
        "@typescript-eslint/space-infix-ops": "error",
      },
    },
    {
      files: ["*.@(jsx|tsx)", "*.stories.@(js|mjs|cjs|jsx|ts|mts|cts|tsx)"],
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
            selector: "objectLiteralProperty",
            types: ["string"],
            format: null,
            filter: {
              match: true,
              regex: "^(data|aria)-[a-z]+(?:-[a-z]+)*$",
            },
            custom: {
              match: true,
              regex: "^(data|aria)-[a-z]+(?:-[a-z]+)*$",
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
      files: ["**/app/**/route.@(ts|mts|cts)"],
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
    {
      files: ["*.@(spec|test).@(ts|mts|cts|tsx)"],
      rules: {
        "@typescript-eslint/unbound-method": "off",
      },
    },
  );
}

if (hasPkg("eslint-plugin-react")) {
  overrides.push(
    {
      files: ["*.@(jsx|tsx)"],
      extends: ["plugin:react/recommended", "plugin:react/jsx-runtime"],
      settings: { react: { version: "detect" } },
      rules: {
        "no-ternary": "off",

        // extending eslint-plugin-react v7.32.2 recommended rules
        "react/boolean-prop-naming": "off",
        "react/button-has-type": "error",
        "react/default-props-match-prop-types": "error",
        "react/destructuring-assignment": "error",
        "react/forbid-component-props": "off",
        "react/forbid-dom-props": "off",
        "react/forbid-elements": "off",
        "react/forbid-foreign-prop-types": "off",
        "react/forbid-prop-types": "off",
        "react/function-component-definition": [
          "error",
          {
            namedComponents: "function-declaration",
            unnamedComponents: "arrow-function",
          },
        ],
        "react/hook-use-state": "error",
        "react/iframe-missing-sandbox": "error",
        "react/jsx-boolean-value": ["error", "never"],
        "react/jsx-child-element-spacing": "error",
        "react/jsx-closing-bracket-location": "error",
        "react/jsx-closing-tag-location": "error",
        "react/jsx-curly-brace-presence": [
          "error",
          { props: "never", children: "ignore", propElementValues: "always" },
        ],
        "react/jsx-curly-newline": "error",
        "react/jsx-curly-spacing": "error",
        "react/jsx-equals-spacing": "error",
        "react/jsx-filename-extension": [
          "error",
          { allow: "as-needed", extensions: [".jsx", ".tsx"] },
        ],
        "react/jsx-first-prop-new-line": "error",
        "react/jsx-fragments": "error",
        "react/jsx-handler-names": [
          "error",
          {
            eventHandlerPrefix: false,
            eventHandlerPropPrefix: "on",
            checkLocalVariables: true,
            checkInlineFunction: true,
          },
        ],
        "react/jsx-indent": [
          "error",
          indent,
          {
            checkAttributes: true,
            indentLogicalExpressions: true,
          },
        ],
        "react/jsx-indent-props": ["error", indent],
        "react/jsx-max-depth": ["error", { max: 10 }],
        "react/jsx-max-props-per-line": [
          "error",
          { maximum: 1, when: "multiline" },
        ],
        "react/jsx-newline": ["error", { prevent: false }],
        "react/jsx-no-bind": ["error", { allowArrowFunctions: true }],
        "react/jsx-no-constructed-context-values": "error",
        "react/jsx-no-leaked-render": "error",
        "react/jsx-no-literals": "error",
        "react/jsx-no-script-url": "error",
        "react/jsx-no-useless-fragment": "error",
        "react/jsx-one-expression-per-line": ["error", { allow: "literal" }],
        "react/jsx-pascal-case": "error",
        "react/jsx-props-no-multi-spaces": "error",
        "react/jsx-props-no-spreading": "off",
        "react/jsx-sort-props": [
          "error",
          {
            callbacksLast: true,
            shorthandLast: true,
            reservedFirst: true,
            noSortAlphabetically: true,
          },
        ],
        "react/jsx-tag-spacing": "error",
        "react/jsx-wrap-multilines": "error",
        "react/no-access-state-in-setstate": "error",
        "react/no-adjacent-inline-elements": "error",
        "react/no-array-index-key": "error",
        "react/no-arrow-function-lifecycle": "error",
        "react/no-danger": "error",
        "react/no-did-mount-set-state": "error",
        "react/no-did-update-set-state": "error",
        "react/no-invalid-html-attribute": "error",
        "react/no-multi-comp": "off",
        "react/no-namespace": "error",
        "react/no-object-type-as-default-prop": "error",
        "react/no-redundant-should-component-update": "error",
        "react/no-set-state": "off",
        "react/no-this-in-sfc": "error",
        "react/no-typos": "error",
        "react/no-unsafe": "error",
        "react/no-unstable-nested-components": "error",
        "react/no-unused-class-component-methods": "error",
        "react/no-unused-prop-types": "error",
        "react/no-unused-state": "error",
        "react/no-will-update-set-state": "error",
        "react/prefer-es6-class": "error",
        "react/prefer-exact-props": "error",
        "react/prefer-read-only-props": "error",
        "react/prefer-stateless-function": [
          "warn",
          { ignorePureComponents: true },
        ],
        "react/require-default-props": [
          "error",
          {
            forbidDefaultForRequired: true,
            functions: "defaultArguments",
          },
        ],
        "react/require-optimization": "error",
        "react/self-closing-comp": "error",
        "react/sort-comp": "error",
        "react/sort-default-props": "off",
        "react/sort-prop-types": [
          "error",
          {
            callbacksLast: true,
            noSortAlphabetically: true,
          },
        ],
        "react/state-in-constructor": "error",
        "react/static-property-placement": "error",
        "react/style-prop-object": "error",
        "react/void-dom-elements-no-children": "error",
      },
    },
    {
      files: ["*.tsx"],
      rules: {
        "react/require-default-props": "off",
      },
    },
  );
}

if (hasPkg("eslint-plugin-jsx-a11y")) {
  overrides.push({
    files: ["*.@(jsx|tsx)"],
    extends: ["plugin:jsx-a11y/recommended"],
    rules: {
      // extending eslint-plugin-jsx-a11y v6.6.0 rules
      "jsx-a11y/no-aria-hidden-on-focusable": "error",
      "jsx-a11y/prefer-tag-over-role": "warn",
    },
  });
}

if (hasPkg("eslint-plugin-react-hooks")) {
  overrides.push(
    {
      files: ["*.@(jsx|tsx)", "use*.@(js|ts)"],
      extends: ["plugin:react-hooks/recommended"],
    },
    {
      files: ["*.stories.@(js|jsx|ts|tsx)"],
      rules: {
        "react-hooks/rules-of-hooks": "off",
      },
    },
  );
}

if (hasPkg("eslint-plugin-storybook")) {
  overrides.push({
    files: ["*.stories.@(js|jsx|ts|tsx)"],
    extends: [
      "plugin:storybook/recommended",
      "plugin:storybook/csf-strict",
      "plugin:storybook/addon-interactions",
    ],
  });

  if (hasPkg("eslint-plugin-import")) {
    overrides.push({
      files: ["*.stories.@(js|jsx|ts|tsx)"],
      plugins: ["import"],
      rules: {
        "import/group-exports": "off",
        "import/no-default-export": "off",
      },
    });
  }

  if (hasPkg("eslint-plugin-react-hooks")) {
    overrides.push({
      files: ["*.stories.@(js|jsx|ts|tsx)"],
      plugins: ["react-hooks"],
      rules: {
        "react-hooks/rules-of-hooks": "off",
      },
    });
  }
}

if (hasPkg("eslint-plugin-jest") && hasPkg("jest")) {
  overrides.push(
    {
      files: ["*.@(spec|test).@(js|jsx|ts|tsx)"],
      extends: ["plugin:jest/recommended", "plugin:jest/style"],
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
      files: ["*.@(spec|test).@(ts|mts|cts|tsx)"],
      rules: {
        "jest/no-untyped-mock-factory": "error",
        "jest/unbound-method": "error",
      },
    },
  );
}

if (hasPkg("eslint-plugin-jest-formatting")) {
  overrides.push({
    files: ["*.@(spec|test).@(js|jsx|ts|tsx)"],
    extends: ["plugin:jest-formatting/strict"],
  });
}

if (hasPkg("eslint-plugin-jest-dom")) {
  overrides.push({
    files: ["*.@(spec|test).@(jsx|tsx)"],
    extends: ["plugin:jest-dom/recommended"],
  });
}

if (
  hasPkg("eslint-plugin-testing-library") &&
  hasPkg("@testing-library/react")
) {
  overrides.push({
    files: ["*.@(spec|test).@(jsx|tsx)"],
    extends: ["plugin:testing-library/react"],
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
  });
}

if (hasPkg("eslint-plugin-prettier")) {
  overrides.push({
    files: ["*"],
    extends: ["plugin:prettier/recommended"],
  });
}

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
    "arrow-parens": ["error", "always"],
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
    "operator-linebreak": ["error", "after"],
    "padded-blocks": ["error", "never"],
    "padding-line-between-statements": "error",
    quotes: "error",
    "rest-spread-spacing": "error",
    semi: "error",
    "semi-spacing": "error",
    "semi-style": "error",
    "space-before-blocks": "error",
    "space-before-function-paren": [
      "error",
      {
        anonymous: "never",
        named: "never",
        asyncArrow: "always",
      },
    ],
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
  overrides,
};
