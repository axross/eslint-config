const hasPkg = require("has-pkg");

function getConfigs() {
  /** @type {import('@typescript-eslint/utils').TSESLint.FlatConfig.ConfigArray} */
  const config = [];

  if (hasPkg("eslint-plugin-unicorn")) {
    const unicornPlugin = require("eslint-plugin-unicorn");

    config.push(
      unicornPlugin.configs["flat/all"],
      {
        rules: {
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
        files: ["**/*.?(m|c)@(j|t)sx"],
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
        files: ["use*.?(m|c)@(j|t)s?(x)"],
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
        files: ["**/app/**/route.?(m|c)ts?(x)"],
        rules: {
          "unicorn/prevent-abbreviations": [
            "error",
            {
              replacements: {
                params: false,
                searchParams: false,
              },
            },
          ],
        },
      },
      {
        files: ["*rc.?(m)js?(x)", "*.config.?(m)js?(x)"],
        rules: {
          "unicorn/prefer-module": "off",
        },
      }
    );
  }

  return config;
}

module.exports = getConfigs;
