/**
 * @type {import("eslint").Linter.Config}
 */
module.exports = {
	extends: [
		"plugin:react/recommended",
		"./lib/default",
	],
	env: {
		browser: true,
		es2021: true
	},
	parserOptions: {
		ecmaFeatures: {
			jsx: true,
		},
        ecmaVersion: 12,
        sourceType: "module"
	},
	plugins: [
		"react",
		"react-hooks"
	],
	rules: {
		"react/jsx-sort-props": "warn",
        "react/no-array-index-key": "off",
        "react/require-default-props": "off",
        "react/jsx-props-no-spreading": "off",
		"react/prop-types": "off",
        "react-hooks/rules-of-hooks": "error",
        "react-hooks/exhaustive-deps": "warn",
        "react/react-in-jsx-scope":"off",
		"react/jsx-filename-extension": [ "warn", {"extensions": [".tsx"]} ],
		"import/extensions": [
            "error",
            "ignorePackages",
            {
				"js": "never",
				"ts": "never",
                "tsx": "never"
            }
        ]
	},
};
