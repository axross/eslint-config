const hasPkg = require("has-pkg");
const { indent } = require("../constants.cjs");

function getConfigs() {
  /** @type {import('@typescript-eslint/utils').TSESLint.FlatConfig.ConfigArray} */
  const config = [];

  if (hasPkg("eslint-plugin-react")) {
    const reactPlugin = require("eslint-plugin-react");

    config.push(
      { plugins: { react: reactPlugin } },
      {
        files: ["**/*.?(m|c)@(j|t)sx"],
        settings: { react: { version: "detect" } },
        rules: {
          ...reactPlugin.configs.recommended.rules,
          ...reactPlugin.configs["jsx-runtime"].rules,
          "react/no-array-index-key": "error",

          // extending eslint-plugin-react v7.32.2 recommended rules
          "react/boolean-prop-naming": "off",
          "react/button-has-type": "error",
          "react/default-props-match-prop-types": "error",
          "react/destructuring-assignment": "error",
          "react/forbid-component-props": "off",
          "react/forbid-dom-props": "off",
          "react/forbid-elements": "off",
          "react/forbid-foreign-prop-types": "off",
          "react/forbid-prop-types": "off",
          "react/hook-use-state": "error",
          "react/iframe-missing-sandbox": "error",
          "react/jsx-boolean-value": ["error", "never"],
          "react/jsx-child-element-spacing": "error",
          "react/jsx-closing-bracket-location": "error",
          "react/jsx-closing-tag-location": "error",
          "react/jsx-curly-newline": "error",
          "react/jsx-curly-spacing": "error",
          "react/jsx-equals-spacing": "error",
          "react/jsx-first-prop-new-line": "error",
          "react/jsx-fragments": "error",
          "react/jsx-indent-props": ["error", indent],
          "react/jsx-max-depth": ["error", { max: 10 }],
          "react/jsx-newline": ["error", { prevent: false }],
          "react/jsx-no-bind": ["error", { allowArrowFunctions: true }],
          "react/jsx-no-constructed-context-values": "error",
          "react/jsx-no-leaked-render": "error",
          "react/jsx-no-literals": "error",
          "react/jsx-no-script-url": "error",
          "react/jsx-no-useless-fragment": "error",
          "react/jsx-one-expression-per-line": ["error", { allow: "literal" }],
          "react/jsx-pascal-case": "error",
          "react/jsx-props-no-multi-spaces": "error",
          "react/jsx-props-no-spreading": "off",
          "react/jsx-tag-spacing": "error",
          "react/jsx-wrap-multilines": "error",
          "react/no-access-state-in-setstate": "error",
          "react/no-adjacent-inline-elements": "error",
          "react/no-arrow-function-lifecycle": "error",
          "react/no-danger": "error",
          "react/no-did-mount-set-state": "error",
          "react/no-did-update-set-state": "error",
          "react/no-invalid-html-attribute": "error",
          "react/no-multi-comp": "off",
          "react/no-namespace": "error",
          "react/no-object-type-as-default-prop": "error",
          "react/no-redundant-should-component-update": "error",
          "react/no-set-state": "off",
          "react/no-this-in-sfc": "error",
          "react/no-typos": "error",
          "react/no-unsafe": "error",
          "react/no-unstable-nested-components": [
            "error",
            { allowAsProps: true },
          ],
          "react/no-unused-class-component-methods": "error",
          "react/no-unused-prop-types": "error",
          "react/no-unused-state": "error",
          "react/no-will-update-set-state": "error",
          "react/prefer-es6-class": "error",
          "react/prefer-exact-props": "error",
          "react/prefer-read-only-props": "error",
          "react/prefer-stateless-function": [
            "warn",
            { ignorePureComponents: true },
          ],
          "react/require-optimization": "error",
          "react/self-closing-comp": "error",
          "react/sort-comp": "error",
          "react/sort-default-props": "off",
          "react/state-in-constructor": "error",
          "react/static-property-placement": "error",
          "react/style-prop-object": "error",
          "react/void-dom-elements-no-children": "error",
          "react/function-component-definition": [
            "error",
            {
              namedComponents: "function-declaration",
              unnamedComponents: "arrow-function",
            },
          ],
          "react/jsx-curly-brace-presence": [
            "error",
            {
              children: "ignore",
              propElementValues: "always",
              props: "never",
            },
          ],
          "react/jsx-filename-extension": [
            "error",
            {
              allow: "as-needed",
              extensions: [".jsx", ".tsx"],
            },
          ],
          "react/jsx-handler-names": [
            "error",
            {
              checkInlineFunction: true,
              checkLocalVariables: true,
              eventHandlerPrefix: false,
              eventHandlerPropPrefix: "on",
            },
          ],
          "react/jsx-indent": [
            "error",
            indent,
            {
              checkAttributes: true,
              indentLogicalExpressions: true,
            },
          ],
          "react/jsx-max-props-per-line": [
            "error",
            {
              maximum: 1,
              when: "multiline",
            },
          ],
          "react/jsx-sort-props": [
            "error",
            {
              callbacksLast: true,
              noSortAlphabetically: true,
              reservedFirst: true,
              shorthandLast: true,
            },
          ],
          "react/require-default-props": [
            "error",
            {
              forbidDefaultForRequired: true,
              functions: "defaultArguments",
            },
          ],
          "react/sort-prop-types": [
            "error",
            {
              callbacksLast: true,
              noSortAlphabetically: true,
            },
          ],
        },
      },
      {
        files: ["**/*.tsx"],
        rules: {
          "react/require-default-props": "off",
          "react/style-prop-object": "off",
        },
      },
    );

    if (
      hasPkg("eslint-plugin-perfectionist")
      || hasPkg("@stylistic/eslint-plugin")
    ) {
      config.push({
        files: ["**/*.?(m|c)@(j|t)sx"],
        rules: { "react/jsx-sort-props": "off" },
      });
    }

    if (
      hasPkg("@stylistic/eslint-plugin")
      || hasPkg("eslint-config-prettier")
    ) {
      config.push({
        files: ["**/*.?(m|c)@(j|t)sx"],
        rules: {
          "react/jsx-child-element-spacing": "off",
          "react/jsx-closing-bracket-location": "off",
          "react/jsx-closing-tag-location": "off",
          "react/jsx-curly-newline": "off",
          "react/jsx-curly-spacing": "off",
          "react/jsx-equals-spacing": "off",
          "react/jsx-first-prop-new-line": "off",
          "react/jsx-indent": "off",
          "react/jsx-indent-props": "off",
          "react/jsx-max-props-per-line": "off",
          "react/jsx-newline": "off",
          "react/jsx-no-literals": "off",
          "react/jsx-one-expression-per-line": "off",
          "react/jsx-props-no-multi-spaces": "off",
          "react/self-closing-comp": "off",
          "react/jsx-curly-brace-presence": "off",
        },
      });
    }
  }

  if (hasPkg("eslint-plugin-jsx-a11y")) {
    const jsxA11yPlugin = require("eslint-plugin-jsx-a11y");

    config.push(
      { plugins: { "jsx-a11y": jsxA11yPlugin } },
      {
        files: ["**/*.?(m|c)@(j|t)sx"],

        rules: {
          ...jsxA11yPlugin.configs.recommended.rules,

          // extending eslint-plugin-jsx-a11y v6.6.0 rules
          "jsx-a11y/no-aria-hidden-on-focusable": "error",
          "jsx-a11y/prefer-tag-over-role": "warn",
        },
      },
    );
  }

  if (hasPkg("eslint-plugin-react-hooks")) {
    const reactHooksPlugin = require("eslint-plugin-react-hooks");

    config.push(
      { plugins: { "react-hooks": reactHooksPlugin } },
      {
        files: ["*.?(m|c)@(j|t)sx", "use*.@(js|ts)"],
        rules: { ...reactHooksPlugin.configs.recommended.rules },
      },
      {
        files: ["**/*.stories.?(m|c)@(j|t)s?(x)"],
        rules: { "react-hooks/rules-of-hooks": "off" },
      },
    );
  }

  return config;
}

module.exports = getConfigs;
