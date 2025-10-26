const hasPkg = require("has-pkg");

function getConfig() {
  /** @type {import('@typescript-eslint/utils').TSESLint.FlatConfig.ConfigArray} */
  const config = [];

  if (hasPkg("eslint-plugin-perfectionist")) {
    const perfectionistPlugin = require("eslint-plugin-perfectionist");

    config.push(perfectionistPlugin.configs["recommended-natural"], {
      rules: {
        "perfectionist/sort-named-imports": [
          "error",
          { groupKind: "types-first" },
        ],
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
        "perfectionist/sort-imports": [
          "error",
          {
            newlinesBetween: "never",
            groups: [
              "side-effect",
              "builtin",
              ["external", "external-type"],
              ["internal", "internal-type"],
              ["parent", "parent-type"],
              ["sibling", "sibling-type"],
              "index",
              "index-type",
              "style",
              "unknown",
            ],
          },
        ],
        "perfectionist/sort-jsx-props": [
          "error",
          {
            customGroups: {
              key: "^key$",
              callback: "^on[A-Z]",
              children: "^children$",
              className: "^className$",
              ref: "^ref$",
              style: ["^style$", "^[s]?css$"],
            },
            groups: [
              "unknown",
              "shorthand",
              "multiline",
              "callback",
              "className",
              "style",
              "ref",
              "key",
              "children",
            ],
          },
        ],
        "perfectionist/sort-modules": "off",
        "perfectionist/sort-objects": "off",
        "perfectionist/sort-object-types": "off",
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
              "unsorted-literal",
              "keyword",
              "nullish",
            ],
            customGroups: [
              {
                groupName: "unsorted-literal",
                type: "unsorted",
                selector: "literal",
              },
            ],
          },
        ],
      },
    });
  }

  return config;
}

module.exports = getConfig;
