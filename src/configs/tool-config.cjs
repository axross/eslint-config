const hasPkg = require("has-pkg");

const config = [];

if (hasPkg("@eslint/js")) {
  config.push(
    {
      files: [
        "**/*rc.?(m|c)@(j|t)s?(x)",
        "**/*.config.?(m|c)@(j|t)s?(x)",
      ],
      rules: {
        "no-magic-numbers": "off",
        "no-ternary": "off",
      },
    },
    {
      files: [
        "**/*rc.?(c)js?(x)",
        "**/*.config.?(c)js?(x)",
      ],
      languageOptions: {
        globals: {
          module: "readonly",
          require: "readonly",
        },
      },
    },
  );
}

module.exports = config;
