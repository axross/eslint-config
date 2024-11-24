const hasPkg = require("has-pkg");
const fileMatch = require("../utils/file-match.cjs");
const getLanguageOptions = require("../utils/language-options.cjs");

function getConfig(options = {}) {
  /** @type {import('@typescript-eslint/utils').TSESLint.FlatConfig.ConfigArray} */
  const config = [];

  if (hasPkg("eslint-plugin-import")) {
    const importPlugin = require("eslint-plugin-import");

    config.push(
      {
        files: [fileMatch.allJsTs],
        languageOptions: getLanguageOptions(options),
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
          "import/prefer-default-export": "off",
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

    if (hasPkg("prettier") && hasPkg("eslint-config-prettier")) {
      config.push({
        files: [fileMatch.allJsTs],
        languageOptions: getLanguageOptions(options),
        plugins: {
          import: importPlugin,
        },
        rules: {
          "import/order": "off",
        },
      });
    }

    if (hasPkg("typescript-eslint")) {
      config.push({
        files: [fileMatch.allTs],
        languageOptions: getLanguageOptions(options),
        plugins: {
          import: importPlugin,
        },
        settings: {
          ...importPlugin.flatConfigs.typescript.settings,
        },
        rules: {
          "import/named": "off",
        },
      });
    }
  }

  return config;
}

module.exports = getConfig;
