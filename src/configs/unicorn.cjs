const hasPkg = require("has-pkg");
const fileMatch = require("../utils/file-match.cjs");
const getLanguageOptions = require("../utils/language-options.cjs");

function getConfig(options = {}) {
  /** @type {import('@typescript-eslint/utils').TSESLint.FlatConfig.ConfigArray} */
  const config = [];

  if (hasPkg("eslint-plugin-unicorn")) {
    const unicornPlugin = require("eslint-plugin-unicorn");

    config.push(
      {
        files: [fileMatch.allJsTs],
        languageOptions: getLanguageOptions(options),
        plugins: {
          unicorn: unicornPlugin,
        },
        rules: {
          ...unicornPlugin.configs.all.rules,
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
        languageOptions: getLanguageOptions(options),
        plugins: {
          unicorn: unicornPlugin,
        },
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
        languageOptions: getLanguageOptions(options),
        plugins: {
          unicorn: unicornPlugin,
        },
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
        languageOptions: getLanguageOptions(options),
        plugins: {
          unicorn: unicornPlugin,
        },
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
        plugins: {
          unicorn: unicornPlugin,
        },
        rules: {
          "unicorn/prefer-module": "off",
        },
      },
    );
  }

  return config;
}

module.exports = getConfig;
