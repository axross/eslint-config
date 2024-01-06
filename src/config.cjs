const hasPkg = require("has-pkg");

const config = [
  ...require("./configs/javascript.cjs"),
  ...require("./configs/react.cjs"),
  ...require("./configs/storybook.cjs"),
  ...require("./configs/testing-library.cjs"),
  ...require("./configs/tool-config.cjs"),
  ...require("./configs/typescript.cjs"),
  ...require("./configs/react-typescript.cjs"),
  ...require("./configs/next-typescript.cjs"),
  ...require("./configs/storybook-typescript.cjs"),
  ...require("./configs/vitest-typescript.cjs"),
];

if (hasPkg("eslint-config-prettier")) {
  const prettierConfig = require("eslint-config-prettier");

  config.push({
    files: ["**/*.?(m|c)@(j|t)s?(x)"],
    rules: {
      ...prettierConfig.rules,
    },
  });
}

module.exports = config;
