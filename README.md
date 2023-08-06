# @axross/eslint-config

A hand-picked configuration set for [ESLint](https://eslint.org/).

[![npm version](https://badge.fury.io/js/@axross%2Feslint-config.svg)](https://badge.fury.io/js/@axross%2Feslint-config) [![license](http://img.shields.io/badge/license-MIT-brightgreen.svg?style=flat)](LICENSE)

## Installation (minimal)

Install this package along with ESlint:

```sh
npm i -D eslint @eslint/js eslint-plugin-compat eslint-plugin-import
npm i -D @axross/eslint-config
```

And extends your ESLint config (`.eslint.js`) with:

```javascript
/* eslint-env node */

module.exports = {
  root: true,
  // ...
  extends: [
    // ...
    "@axross/eslint-config/javascript",
  ],
};
```

### Prettier

If you have your project Prettier set up, install these packages as well:

```sh
npm i -D prettier-eslint eslint-config-prettier eslint-plugin-prettier
```

And add `"@axross/eslint-config/prettier"` to `extends` in your ESLint config:

```javascript
module.exports = {
  // ...
  extends: [
    // ...
    "@axross/eslint-config/prettier",
  ],
};
```

### TypeScript

If your project is written in TypeScript, install these packages as well:

```sh
npm i -D @typescript-eslint/eslint-plugin @typescript-eslint/parser eslint-import-resolver-typescript
```

And add `"@axross/eslint-config/typescript"` to `extends` in your ESLint config:

```javascript
module.exports = {
  // ...
  extends: [
    // ...
    "@axross/eslint-config/typescript",
  ],
};
```

### React

For React projects, install these packages as well:

```sh
npm i -D eslint-plugin-react eslint-plugin-react-hooks eslint-plugin-jsx-a11y
```

And add `"@axross/eslint-config/react"` to `extends` in your ESLint config:

```javascript
module.exports = {
  // ...
  extends: [
    // ...
    "@axross/eslint-config/react",
  ],
};
```

### Tailwind CSS

For a project with [Tailwind CSS](https://tailwindcss.com/), install these packages as well:

```sh
npm i -D eslint-plugin-tailwindcss
```

And add `"@axross/eslint-config/tailwindcss"` to `extends` in your ESLint config:

```javascript
module.exports = {
  // ...
  extends: [
    // ...
    "@axross/eslint-config/tailwindcss",
  ],
};
```

### Storybook

If you have your project [Storybook](https://storybook.js.org/) set up, install these packages as well:

```sh
npm i -D eslint-plugin-storybook
```

And add `"@axross/eslint-config/storybook"` to `extends` in your ESLint config:

```javascript
module.exports = {
  // ...
  extends: [
    // ...
    "@axross/eslint-config/storybook",
  ],
};
```

### Jest

If you're using [Jest](https://jestjs.io/) for testing, install these packages as well:

```sh
npm i -D eslint-plugin-jest eslint-plugin-jest-formatting
```

And add `"@axross/eslint-config/jest"` to `extends` in your ESLint config:

```javascript
module.exports = {
  // ...
  extends: [
    // ...
    "@axross/eslint-config/jest",
  ],
};
```

### Testing Library

If your tests rely on [Testing Library](https://testing-library.com/), install these packages as well:

```sh
npm i -D eslint-plugin-testing-library eslint-plugin-jest-dom
```

And add `"@axross/eslint-config/testing-library"` to `extends` in your ESLint config:

```javascript
module.exports = {
  // ...
  extends: [
    // ...
    "@axross/eslint-config/javascript",
    "@axross/eslint-config/testing-library",
  ],
};
```

## License

[MIT](/LICENSE)
