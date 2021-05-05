# eslint-config-tasoskakour-typescript-prettier

> ESLint + Prettier shareable config for [tasoskakour](https://tasoskakour.com)’s coding style

## Install

```console
$ npm i eslint-config-tasoskakour-typescript eslint eslint-plugin-import eslint-plugin-unicorn eslint-plugin-prettier eslint-import-resolver-typescript @typescript-eslint/eslint-plugin @typescript-eslint/parser -D
```

Then, add this to your `.eslintrc.js`:

```js
module.exports = {
	extends: "tasoskakour-typescript-prettier",
	rules: {
		// your overrides
	},
};
```

### With React support

```console
$ npx install-peerdeps --dev eslint-config-tasoskakour-typescript
```

Then, add this to your `.eslintrc.js`:

```js
module.exports = {
	extends: "tasoskakour-typescript-prettier/with-react",
	rules: {
		// your overrides
	},
};
```
