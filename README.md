# eslint-config-tasoskakour-typescript-prettier

> ESLint + Prettier Typescript shareable config for [tasoskakour](https://tasoskakour.com)’s coding style

This repo structure is heavily influenced by my buddy's Napoleon repo: [https://github.com/iamnapo/eslint-config-iamnapo](https://github.com/iamnapo/eslint-config-iamnapo)

## Install

> Make sure you have already installed `eslint` and `typescript` as they are required packages.

```console
yarn add -D eslint-config-tasoskakour-typescript-prettier
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

### Usage for React 

Adjust your `.eslintrc.js` like this:

```js
module.exports = {
	extends: "tasoskakour-typescript-prettier/with-react",
	rules: {
		// your overrides
	},
};
```

### Add .eslintignore for certain files

Personally I like to use this .eslintignore:

```
*.css
*.svg
```

### (Optional) Add .prettierc.json with my preferred configuration

```
{
    "printWidth": 100,
    "trailingComma": "es5",
    "tabWidth": 4,
    "semi": true,
    "singleQuote": true
}
```


### (Optional) Linting with vscode 

If you are using vscode this `.vscode/settings.json` file may come in handy: 

```
{
    "editor.defaultFormatter": "dbaeumer.vscode-eslint",
    "editor.formatOnSave": true,
    "eslint.alwaysShowStatus": true,
    "editor.codeActionsOnSave": {
        "source.fixAll.eslint": true
    },
    "editor.rulers": [100]
}
```
