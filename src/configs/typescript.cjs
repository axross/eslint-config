const hasPkg = require("has-pkg");
const {
  ignoredMagicNumbers,
  baseNamingConvention,
} = require("../constants.cjs");
const fileMatch = require("../utils/file-match.cjs");

function getConfigs({ tsconfigRootDir } = {}) {
  /** @type {import('@typescript-eslint/utils').TSESLint.FlatConfig.ConfigArray} */
  const config = [];

  if (hasPkg("typescript-eslint")) {
    const typescriptPlugin = require("typescript-eslint");

    config.push(
      {
        plugins: {
          "@typescript-eslint": typescriptPlugin.plugin,
        },
      },
      {
        files: [fileMatch.allTs],
        languageOptions: {
          parser: typescriptPlugin.parser,
          parserOptions: {
            projectService: {
              allowDefaultProject: [
                "*.config.{js,mjs,cjs,jsx,mjsx,cjsx,ts,mts,cts,tsx,mtsx,ctsx}",
              ],
            },
            tsconfigRootDir,
          },
          ecmaVersion: "latest",
          sourceType: "module",
        },
      },
      {
        files: [fileMatch.allTs],
        rules: {
          ...typescriptPlugin.configs.strictTypeChecked.rules,
          ...typescriptPlugin.configs.stylisticTypeChecked.rules,
          // extending typescript-eslint v8.15.0
          // [supported rules](https://typescript-eslint.io/rules/#supported-rules)
          "@typescript-eslint/class-methods-use-this": "error",
          "@typescript-eslint/consistent-type-exports": "error",
          "@typescript-eslint/consistent-type-imports": [
            "error",
            {
              prefer: "type-imports",
              fixStyle: "inline-type-imports",
            },
          ],
          "@typescript-eslint/default-param-last": "error",
          "@typescript-eslint/dot-notation": "error",
          "@typescript-eslint/explicit-function-return-type": [
            "error",
            { allowExpressions: true },
          ],
          "@typescript-eslint/explicit-member-accessibility": "error",
          "@typescript-eslint/explicit-module-boundary-types": "error",
          "@typescript-eslint/init-declarations": "error",
          "@typescript-eslint/max-params": "error",
          // "@typescript-eslint/member-delimiter-style": "error",
          "@typescript-eslint/member-ordering": "error",
          "@typescript-eslint/method-signature-style": "error",
          "@typescript-eslint/naming-convention": [
            "error",
            ...baseNamingConvention,
          ],
          "@typescript-eslint/no-import-type-side-effects": "off",
          "@typescript-eslint/no-loop-func": "error",
          "@typescript-eslint/no-magic-numbers": [
            "error",
            {
              ignore: ignoredMagicNumbers,
              ignoreArrayIndexes: true,
              enforceConst: true,
              ignoreEnums: true,
            },
          ],
          "@typescript-eslint/no-misused-promises": [
            "error",
            {
              checksConditionals: true,
              checksVoidReturn: true,
              checksSpreads: true,
            },
          ],
          "@typescript-eslint/no-restricted-imports": "error",
          "@typescript-eslint/no-restricted-types": "error",
          "@typescript-eslint/no-shadow": "error",
          "@typescript-eslint/no-unnecessary-parameter-property-assignment":
            "error",
          "@typescript-eslint/no-unnecessary-qualifier": "error",
          "@typescript-eslint/no-unsafe-type-assertion": "error",
          "@typescript-eslint/no-use-before-define": "off",
          "@typescript-eslint/no-useless-empty-export": "error",
          "@typescript-eslint/parameter-properties": "error",
          "@typescript-eslint/prefer-destructuring": "error",
          "@typescript-eslint/prefer-enum-initializers": "error",
          "@typescript-eslint/prefer-readonly": "error",
          "@typescript-eslint/prefer-readonly-parameter-types": "off",
          "@typescript-eslint/promise-function-async": "off",
          "@typescript-eslint/require-array-sort-compare": "error",
          "@typescript-eslint/sort-type-constituents": "error",
          "@typescript-eslint/strict-boolean-expressions": "error",
          "@typescript-eslint/switch-exhaustiveness-check": "error",
          "@typescript-eslint/type-annotation-spacing": "error",
          "@typescript-eslint/typedef": "error",
        },
      },
      {
        files: [fileMatch.allTsx],
        rules: {
          "@typescript-eslint/naming-convention": [
            "error",
            ...baseNamingConvention,
            {
              selector: "variableLike",
              format: ["camelCase", "PascalCase"],
              leadingUnderscore: "forbid",
              trailingUnderscore: "forbid",
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
          ],
        },
      },
      {
        files: [
          "**/app/**/layout.?(m|c)ts?(x)",
          "**/app/**/template.?(m|c)ts?(x)",
          "**/app/**/page.?(m|c)ts?(x)",
        ],
        rules: {
          "@typescript-eslint/naming-convention": [
            "error",
            ...baseNamingConvention,
            {
              selector: "variableLike",
              format: ["camelCase", "PascalCase"],
              leadingUnderscore: "forbid",
              trailingUnderscore: "forbid",
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
          ],
        },
      },
      {
        files: ["**/app/**/route.?(m|c)ts?(x)"],
        rules: {
          "@typescript-eslint/naming-convention": [
            "error",
            ...baseNamingConvention,
            {
              selector: "function",
              format: null,
              leadingUnderscore: "forbid",
              trailingUnderscore: "forbid",
              filter: {
                match: true,
                regex: "^(GET|POST|PUT|PATCH|DELETE|OPTIONS)$",
              },
            },
          ],
        },
      },
      {
        files: ["**/*.stories.?(m|c)@(j|t)s?(x)"],
        rules: {
          "@typescript-eslint/naming-convention": [
            "error",
            ...baseNamingConvention,
            {
              selector: "variableLike",
              format: ["camelCase", "PascalCase"],
              leadingUnderscore: "forbid",
              trailingUnderscore: "forbid",
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
          ],
          "@typescript-eslint/no-magic-numbers": [
            "error",
            {
              ignore: ignoredMagicNumbers,
              ignoreArrayIndexes: true,
              enforceConst: true,
              ignoreEnums: true,
            },
          ],
        },
      },
      {
        files: ["**/*.@(spec|test).?(m|c)ts?(x)"],
        rules: { "@typescript-eslint/unbound-method": "off" },
      }
    );
  }

  return config;
}

module.exports = getConfigs;
