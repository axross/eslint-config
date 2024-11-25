const hasPkg = require("has-pkg");

function getConfig() {
  /** @type {import('@typescript-eslint/utils').TSESLint.FlatConfig.ConfigArray} */
  const config = [];

  if (hasPkg("eslint-plugin-perfectionist")) {
    const perfectionistPlugin = require("eslint-plugin-perfectionist");

    config.push(perfectionistPlugin.configs["recommended-natural"], {
      rules: {
        "perfectionist/sort-classes": [
          "error",
          {
            groups: [
              "index-signature",
              ["property", "accessor-property"],
              ["protected-property", "protected-accessor-property"],
              ["private-property", "private-accessor-property"],
              ["get-method", "set-method"],
              ["protected-get-method", "protected-set-method"],
              ["private-get-method", "private-set-method"],
              ["method", "function-property"],
              ["protected-method", "protected-function-property"],
              ["private-method", "private-function-property"],
              "constructor",
              "static-block",
              "static-property",
              "static-method",
              "unknown",
            ],
          },
        ],
        "perfectionist/sort-named-imports": [
          "error",
          { groupKind: "types-first" },
        ],
        "perfectionist/sort-modules": [
          "error",
          {
            groups: [
              [
                "declare-enum",
                "declare-interface",
                "declare-type",
                "declare-class",
                "declare-function",
              ],
              [
                "interface",
                "export-interface",
                "type",
                "export-type",
                "enum",
                "export-enum",
              ],
              ["class", "export-class"],
              ["function", "export-function"],
            ],
          },
        ],
        "perfectionist/sort-objects": [
          "error",
          {
            groups: [
              "id",
              "index",
              "name",
              "unknown",
              "timestamp",
              "method",
              "multiline",
            ],
            customGroups: {
              id: ["id$", "key$"],
              index: ["index$"],
              name: ["^name$", "^title$"],
              timestamp: ["edAt$"],
            },
          },
        ],
        "perfectionist/sort-union-types": [
          "error",
          {
            groups: [
              "conditional",
              "intersection",
              "union",
              "object",
              "tuple",
              "function",
              "named",
              "operator",
              "import",
              "literal",
              "keyword",
              "nullish",
            ],
          },
        ],
      },
    });
  }

  return config;
}

module.exports = getConfig;
