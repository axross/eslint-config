const process = require("node:process");
const hasPkg = require("has-pkg");

const fallbackOptions = { tsconfigRootDir: process.cwd() };

function getConfigs(options = fallbackOptions) {
  const config = [
    { ignores: ["*.d.ts"] },
    ...require("./configs/core.cjs")(options),
    ...require("./configs/eslint.cjs")(options),
    ...require("./configs/unicorn.cjs")(options),
    ...require("./configs/perfectionist.cjs")(options),
    ...require("./configs/stylistic.cjs")(options),
    ...require("./configs/import.cjs")(options),
    ...require("./configs/typescript.cjs")(options),
    ...require("./configs/react.cjs")(options),
    ...require("./configs/next.cjs")(options),
    ...require("./configs/react-native.cjs")(options),
    ...require("./configs/storybook.cjs")(options),
    ...require("./configs/testing-library.cjs")(options),
  ];

  if (hasPkg("eslint-config-prettier")) {
    const prettierConfig = require("eslint-config-prettier");

    config.push({
      files: ["**/*.?(m|c)@(j|t)s?(x)"],
      rules: { ...prettierConfig.rules },
    });
  }

  return config;
}

module.exports = getConfigs;
