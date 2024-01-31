const hasPkg = require("has-pkg");

const config = [];

if (hasPkg("next")) {
  config.push({
    ignores: [".next/*"],
  });
}

if (hasPkg("eslint-plugin-next")) {
  const nextPlugin = require("eslint-plugin-next");

  config.push({
    files: ["**/*.?(m|c)@(j|t)s?(x)"],
    plugins: {
      "@next/next": nextPlugin,
    },
    rules: {
      ...nextPlugin.configs.recommended.rules,
      ...nextPlugin.configs["core-web-vitals"].rules,
    },
  });
}

if (hasPkg("eslint-plugin-unicorn")) {
  const unicornPlugin = require("eslint-plugin-unicorn");

  config.push({
    files: ["**/app/**/route.?(m|c)ts?(x)"],
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
  });
}

module.exports = config;
