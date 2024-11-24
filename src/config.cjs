const hasPkg = require("has-pkg");

function getConfig(options = {}) {
  const config = [
    { ignores: ["*.d.ts"] },
    ...require("./configs/core.cjs")(options),
    ...require("./configs/unicorn.cjs")(options),
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

module.exports = getConfig;
