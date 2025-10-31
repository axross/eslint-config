# @axross/eslint-config

A hand-crafted and adaptive [ESLint](https://eslint.org/) configuration set.

[![npm version](https://badge.fury.io/js/@axross%2Feslint-config.svg)](https://badge.fury.io/js/@axross%2Feslint-config) [![license](http://img.shields.io/badge/license-MIT-brightgreen.svg?style=flat)](LICENSE)

## Installation

As the minimal setup, you can install 📦 `@axross/eslint-config` along with ESLint:

```
npm i -D @axross/eslint-config
```

And create/update **eslint.config.cjs** as the following:

```js
module.exports = [
  ...require("@axross/eslint-config")({ tsconfigRootDir: __dirname }),
];
```

For further more refinement, please see [Recommended Setup](#recommended-setup) section.

## Supported Plugins

This config detects the installed plugins in your project and automatically opts in only the respective configurations. Currently this config supports the following plugins:

- [`@eslint/js`](https://github.com/eslint/eslint/tree/main/packages/js)
- [`typescript-eslint`](https://typescript-eslint.io/)
- [`eslint-plugin-unicorn`](https://github.com/sindresorhus/eslint-plugin-unicorn)
- [`eslint-plugin-compat`](https://github.com/amilajack/eslint-plugin-compat)
- [`eslint-plugin-import-x`](https://github.com/un-ts/eslint-plugin-import-x)
  - When you're using TypeScript, you need to install [`eslint-import-resolver-typescript`](https://github.com/import-js/eslint-import-resolver-typescript) as well
- [`@stylistic/eslint-plugin`](https://eslint.style/)
- [`eslint-plugin-perfectionist`](https://perfectionist.dev/)
- [`eslint-plugin-react`](https://github.com/jsx-eslint/eslint-plugin-react)
- [`eslint-plugin-react-hooks`](https://github.com/facebook/react/tree/main/packages/eslint-plugin-react-hooks)
- [`eslint-plugin-jsx-a11y`](https://github.com/jsx-eslint/eslint-plugin-jsx-a11y)
- [`eslint-plugin-next`](https://github.com/vercel/next.js/tree/canary/packages/eslint-plugin-next) (normally comes with [`next`](https://nextjs.org/))
- [`@react-native/eslint-plugin`](https://github.com/facebook/react-native/tree/main/packages/eslint-plugin-react-native)
- [`eslint-plugin-testing-library`](https://github.com/testing-library/eslint-plugin-testing-library)
- [`eslint-plugin-storybook`](https://github.com/storybookjs/eslint-plugin-storybook)
- [`eslint-plugin-tailwindcss`](https://github.com/francoismassart/eslint-plugin-tailwindcss)
- [`eslint-config-prettier`](https://github.com/prettier/eslint-config-prettier)

If you want any suggested plugin to support in this config, please create an issue.

## Recommended Setup

Here is several recommended setup based on your application arch-type. You can copy-and-paste the following list of plugins to your terminal (**PLEASE CHECK BEFORE RUN!**) to set up your eslint environment.

### React + Next.js

```
npm i -D @axross/eslint-config eslint @eslint/js typescript-eslint eslint-plugin-unicorn eslint-plugin-compat eslint-plugin-import-x eslint-plugin-perfectionist eslint-plugin-react eslint-plugin-react-hooks eslint-plugin-jsx-a11y eslint-plugin-next
```

### React Native + Expo

```
npm i -D @axross/eslint-config eslint @eslint/js typescript-eslint eslint-plugin-unicorn eslint-plugin-compat eslint-plugin-import eslint-plugin-perfectionist eslint-plugin-react eslint-plugin-react-hooks eslint-plugin-jsx-a11y @react-native/eslint-plugin
```

## License

[MIT](/LICENSE)
