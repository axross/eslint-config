const hasPkg = require("has-pkg");
const {
  ignoredMagicNumbers,
  baseNamingConvention,
} = require("../constants.cjs");

const config = [];

if (
  hasPkg("@typescript-eslint/parser") &&
  hasPkg("@typescript-eslint/eslint-plugin")
) {
  const typescriptPlugin = require("@typescript-eslint/eslint-plugin");
  const typescriptParser = require("@typescript-eslint/parser");

  const languageOptions = {
    parser: typescriptParser,
    parserOptions: {
      project: "./tsconfig.json",
    },
  };

  config.push({
    files: ["**/*.?(m|c)ts?(x)"],
    plugins: {
      "@typescript-eslint": typescriptPlugin,
    },
    languageOptions,
    rules: {
      ...typescriptPlugin.configs.recommended.rules,
      ...typescriptPlugin.configs["recommended-requiring-type-checking"].rules,
      ...typescriptPlugin.configs.strict.rules,
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
      camelcase: "off",
      "@typescript-eslint/naming-convention": [
        "error",
        ...baseNamingConvention,
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
      "@typescript-eslint/promise-function-async": "off",
      "@typescript-eslint/require-array-sort-compare": "error",
      "@typescript-eslint/sort-type-constituents": "error",
      "@typescript-eslint/strict-boolean-expressions": "error",
      "@typescript-eslint/switch-exhaustiveness-check": "error",
      "@typescript-eslint/type-annotation-spacing": "error",
      "@typescript-eslint/typedef": "error",

      // [extension rules](https://typescript-eslint.io/rules/#extension-rules)
      "default-param-last": "off",
      "@typescript-eslint/default-param-last": "error",
      "init-declarations": "off",
      "@typescript-eslint/init-declarations": "error",
      "no-dupe-class-members": "off",
      "@typescript-eslint/no-dupe-class-members": "error",
      "no-invalid-this": "off",
      "@typescript-eslint/no-invalid-this": "error",
      "no-loop-func": "off",
      "@typescript-eslint/no-loop-func": "error",
      "no-magic-numbers": "off",
      "@typescript-eslint/no-magic-numbers": [
        "error",
        {
          ignore: ignoredMagicNumbers,
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
      "no-return-await": "off",
      "@typescript-eslint/return-await": "error",
    },
  });

  if (hasPkg("eslint-plugin-import")) {
    const importPlugin = require("eslint-plugin-import");

    config.push(
      {
        files: ["**/*.?(m|c)ts?(x)"],
        settings: { "import/resolver": { typescript: true } },
        plugins: {
          import: importPlugin,
        },
        languageOptions,
        rules: {
          ...importPlugin.configs.typescript.rules,
        },
      },
      {
        files: ["**/*.stories.?(m|c)ts?(x)"],
        plugins: {
          import: importPlugin,
        },
        languageOptions,
        rules: { "import/prefer-default-export": "off" },
      },
    );
  }
}

module.exports = config;
