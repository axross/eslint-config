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

module.exports = config;
