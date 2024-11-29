const hasPkg = require("has-pkg");

function getConfigs({ allowedUnassignedImports = [] } = {}) {
  /** @type {import('@typescript-eslint/utils').TSESLint.FlatConfig.ConfigArray} */
  const config = [];

  if (hasPkg("eslint-plugin-import-x")) {
    const importXPlugin = require("eslint-plugin-import-x");

    config.push(
      {
        name: importXPlugin.flatConfigs.recommended.name,
        plugins: importXPlugin.flatConfigs.recommended.plugins,
      },
      importXPlugin.flatConfigs.typescript,
      {
        files: ["**/*.?(m|c)@(j|t)s?(x)"],
        rules: {
          // i avoid using the config itself because this config includes their
          // own languageOptions, which overwrites the globals
          ...importXPlugin.flatConfigs.recommended.rules,
          "import-x/consistent-type-specifier-style": ["error", "prefer-inline"],
          "import-x/dynamic-import-chunkname": "off",
          "import-x/exports-last": "off",
          "import-x/extensions": "error",
          "import-x/first": "error",
          "import-x/group-exports": "error",
          "import-x/max-dependencies": ["error", { max: 20 }],
          "import-x/newline-after-import": "error",
          "import-x/no-absolute-path": "error",
          "import-x/no-amd": "error",
          "import-x/no-anonymous-default-export": "error",
          "import-x/no-commonjs": "error",
          "import-x/no-cycle": "error",
          "import-x/no-default-export": "error",
          "import-x/no-deprecated": "error",
          "import-x/no-duplicates": "error",
          "import-x/no-dynamic-require": "error",
          "import-x/no-empty-named-blocks": "error",
          "import-x/no-extraneous-dependencies": "error",
          "import-x/no-import-module-exports": "error",
          "import-x/no-internal-modules": "off",
          "import-x/no-mutable-exports": "error",
          "import-x/no-named-as-default": "off",
          "import-x/no-named-as-default-member": "error",
          "import-x/no-named-default": "off",
          "import-x/no-named-export": "off",
          "import-x/no-nodejs-modules": "off",
          "import-x/no-relative-packages": "off",
          "import-x/no-relative-parent-imports": "off",
          "import-x/no-restricted-paths": "off",
          "import-x/no-self-import": "error",
          "import-x/no-unused-modules": "error",
          "import-x/no-useless-path-segments": "error",
          "import-x/no-webpack-loader-syntax": "error",
          "import-x/prefer-default-export": "off",
          "import-x/unambiguous": "off",
          "import-x/no-namespace": [
            "error",
            {
              ignore: [
                "@amplitude/analytics-react-native",
                "expo-*",
                "valibot",
                "uuid",
              ],
            },
          ],
          "import-x/no-unassigned-import": [
            "error",
            {
              allow: [
                "**/*.css",
                "server-only",
                ...allowedUnassignedImports,
              ],
            },
          ],
          "import-x/order": [
            "error",
            {
              "alphabetize": { order: "asc" },
              "newlines-between": "never",
              "groups": [
                "builtin",
                "external",
                "internal",
                "parent",
                "sibling",
                "index",
              ],
              "pathGroups": [
                {
                  group: "internal",
                  pattern: "~/**",
                },
              ],
            },
          ],
        },
      },
      {
        files: ["**/*.?(m|c)ts?(x)"],
        rules: { "import-x/namespace": "off" },
      },
      {
        files: ["**/*.@(js|cjs)"],
        rules: { "import-x/no-commonjs": "off" },
      },
      {
        files: ["**/app/**/page.?(m|c)@(j|t)sx", "**/app/**/layout.?(m|c)@(j|t)sx"],
        rules: {
          "import-x/no-default-export": "off",
          "import-x/prefer-default-export": ["error", { target: "any" }],
        },
      },
      {
        files: ["**/*.stories.?(m|c)@(j|t)s?(x)"],
        rules: {
          "import-x/group-exports": "off",
          "import-x/no-default-export": "off",
        },
      },
    );

    if (hasPkg("prettier") && hasPkg("eslint-config-prettier")) {
      config.push({
        files: ["**/*.?(m|c)@(j|t)s?(x)"],
        rules: { "import-x/order": "off" },
      });
    }
  }

  return config;
}

module.exports = getConfigs;
