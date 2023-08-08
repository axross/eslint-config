# @axross/eslint-config

A hand-picked configuration set for [ESLint](https://eslint.org/).

[![npm version](https://badge.fury.io/js/@axross%2Feslint-config.svg)](https://badge.fury.io/js/@axross%2Feslint-config) [![license](http://img.shields.io/badge/license-MIT-brightgreen.svg?style=flat)](LICENSE)

## Installation (minimal)

Install this package along with ESlint:

```sh
npm i -D eslint @eslint/js @axross/eslint-config
```

And extends your ESLint config (`.eslint.js`) with:

```javascript
/* eslint-env node */

module.exports = {
  root: true,
  // ...
  extends: [
    // ...
    "@axross/eslint-config",
  ],
};
```

## Plugin Configurations

If you have installed some plugins listed below, this eslint-config will automatically detects the plugin existence and extends the config.

- [`eslint-plugin-compat`](https://github.com/amilajack/eslint-plugin-compat)
- [`eslint-plugin-import`](https://github.com/import-js/eslint-plugin-import)
- [`prettier-eslint`](https://github.com/prettier/prettier-eslint), [`eslint-config-prettier`](https://github.com/prettier/eslint-config-prettier) and [`eslint-plugin-prettier`](https://github.com/prettier/eslint-plugin-prettier)
- [`@typescript-eslint/eslint-plugin`](https://github.com/typescript-eslint/typescript-eslint), [`@typescript-eslint/parser`](https://github.com/typescript-eslint/typescript-eslint) (and [`eslint-import-resolver-typescript`](https://github.com/import-js/eslint-import-resolver-typescript))
- [`eslint-plugin-react`](https://github.com/jsx-eslint/eslint-plugin-react)
- [`eslint-plugin-react-hooks`](https://github.com/facebook/react/tree/main/packages/eslint-plugin-react-hooks)
- [`eslint-plugin-jsx-a11y`](https://github.com/jsx-eslint/eslint-plugin-jsx-a11y)
- [`eslint-plugin-tailwindcss`](https://github.com/francoismassart/eslint-plugin-tailwindcss)
- [`eslint-plugin-storybook`](https://github.com/storybookjs/eslint-plugin-storybook)
- [`eslint-plugin-jest`](https://github.com/jest-community/eslint-plugin-jest)
- [`eslint-plugin-jest-formatting`](https://github.com/dangreenisrael/eslint-plugin-jest-formatting)
- [`eslint-plugin-testing-library`](https://github.com/testing-library/eslint-plugin-testing-library)
- [`eslint-plugin-jest-dom`](https://github.com/testing-library/eslint-plugin-jest-dom)

## License

[MIT](/LICENSE)
