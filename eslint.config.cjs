const getAxConfigs = require("./src/config.cjs");

// eslint-disable-next-line no-undef
module.exports = [...getAxConfigs({ tsconfigRootDir: __dirname })];
