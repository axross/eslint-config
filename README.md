# @axross/eslint-config

A hand-crafted configuration set for [ESLint](https://eslint.org/).

[![npm version](https://badge.fury.io/js/@axross%2Feslint-config.svg)](https://badge.fury.io/js/@axross%2Feslint-config) [![license](http://img.shields.io/badge/license-MIT-brightgreen.svg?style=flat)](LICENSE)

## Prerequisites

- Later or equal than [ESLint v9.15.0](https://eslint.org/blog/2024/11/eslint-v9.15.0-released/)
- Flat config

## Installation

Install this package along with ESlint:

```sh
npm i -D eslint @eslint/js @axross/eslint-config
```

And extends your ESLint config (`eslint.config.js`):

```js
/* global __dirname:readonly */

module.exports = [
  ...require("./src/config.cjs")({ tsconfigRootDir: __dirname }),
];
```

## Plugin Support

If you have installed one of the following plugins, this ESLint config will automatically applies the corresponding rules.

- [`eslint-config-prettier`](https://github.com/prettier/eslint-config-prettier)
- [`eslint-plugin-compat`](https://github.com/amilajack/eslint-plugin-compat)
- [`typescript-eslint`](https://typescript-eslint.io/)
- [`eslint-plugin-import`](https://github.com/import-js/eslint-plugin-import)
  - When you're using TypeScript, you need to install [`typescript-eslint`](https://typescript-eslint.io/) and [`eslint-import-resolver-typescript`](https://github.com/import-js/eslint-import-resolver-typescript) as well
- [`eslint-plugin-jest`](https://github.com/jest-community/eslint-plugin-jest)
- [`eslint-plugin-jest-dom`](https://github.com/testing-library/eslint-plugin-jest-dom)
- [`eslint-plugin-jest-formatting`](https://github.com/dangreenisrael/eslint-plugin-jest-formatting)
- [`eslint-plugin-jsx-a11y`](https://github.com/jsx-eslint/eslint-plugin-jsx-a11y)
- [`eslint-plugin-next`](https://github.com/vercel/next.js/tree/canary/packages/eslint-plugin-next) (normally comes with [`next`](https://nextjs.org/))
- [`eslint-plugin-react`](https://github.com/jsx-eslint/eslint-plugin-react)
- [`eslint-plugin-react-hooks`](https://github.com/facebook/react/tree/main/packages/eslint-plugin-react-hooks)
- [`@react-native/eslint-plugin`](https://github.com/facebook/react-native/tree/main/packages/eslint-plugin-react-native)
- [`eslint-plugin-storybook`](https://github.com/storybookjs/eslint-plugin-storybook)
- [`eslint-plugin-tailwindcss`](https://github.com/francoismassart/eslint-plugin-tailwindcss)
- [`eslint-plugin-testing-library`](https://github.com/testing-library/eslint-plugin-testing-library)
- [`eslint-plugin-unicorn`](https://github.com/sindresorhus/eslint-plugin-unicorn)

## License

[MIT](/LICENSE)
