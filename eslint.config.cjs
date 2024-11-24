/* global __dirname:readonly */

module.exports = [
  ...require("./src/config.cjs")({ tsconfigRootDir: __dirname }),
];
