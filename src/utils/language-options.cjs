const hasPkg = require("has-pkg");

function getLanguageOptions({ tsconfigRootDir } = {}) {
  if (hasPkg("typescript-eslint")) {
    const typescriptPlugin = require("typescript-eslint");

    return {
      parser: typescriptPlugin.parser,
      parserOptions: {
        sourceType: "module",
        projectService: {
          allowDefaultProject: [
            "*.config.{js,mjs,cjs,jsx,mjsx,cjsx,ts,mts,cts,tsx,mtsx,ctsx}",
          ],
        },
        tsconfigRootDir,
      },
    };
  }

  return {};
}

module.exports = getLanguageOptions;
