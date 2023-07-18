/* eslint-env node */

// extending eslint-plugin-import v2.25.2 recommended rules

module.exports = {
  plugins: ["import"],
  extends: ["plugin:import/recommended"],
  rules: {
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
  },
  overrides: [
    {
      files: ["*.js"],
      rules: { "import/no-commonjs": "off" },
    },
    {
      files: ["*.@(ts|tsx)"],
      settings: { "import/resolver": { typescript: true } },
      extends: ["plugin:import/typescript"],
    },
    {
      files: ["*.stories.@(ts|tsx)"],
      rules: { "import/prefer-default-export": "off" },
    },
    {
      files: ["*/app/**/page.@(jsx|tsx)", "*/app/**/layout.@(jsx|tsx)"],
      rules: {
        "import/no-default-export": "off",
        "import/prefer-default-export": ["error", { target: "any" }],
      },
    },
  ],
};
