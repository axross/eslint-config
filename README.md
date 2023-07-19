# @axross/eslint-config

A hand-picked configuration set for [ESLint](https://eslint.org/).

[![npm version](https://badge.fury.io/js/@axross%2Feslint-config.svg)](https://badge.fury.io/js/@axross%2Feslint-config) [![license](http://img.shields.io/badge/license-MIT-brightgreen.svg?style=flat)](LICENSE)

## Installation

Install this as a NPM package:

```sh
npm i -D eslint @axross/eslint-config
```

And extends your ESLint config (`.eslint.js`) with:

```javascript
/* eslint-env node */

module.exports = {
  extends: ["@axross/eslint-config"],
};
```

This ESLint config includes the following plugins as dependencies:

- `@eslint/js`
- `@typescript-eslint/eslint-plugin`
- `@typescript-eslint/parser`
- `eslint-config-prettier`
- `eslint-import-resolver-typescript`
- `eslint-plugin-compat`
- `eslint-plugin-import`
- `eslint-plugin-jest`
- `eslint-plugin-jest-dom`
- `eslint-plugin-jest-formatting`
- `eslint-plugin-jsx-a11y`
- `eslint-plugin-prettier`
- `eslint-plugin-react`
- `eslint-plugin-react-hooks`
- `eslint-plugin-storybook`
- `eslint-plugin-tailwindcss`
- `eslint-plugin-testing-library`
- `prettier-eslint`

## License

[MIT](/LICENSE)
