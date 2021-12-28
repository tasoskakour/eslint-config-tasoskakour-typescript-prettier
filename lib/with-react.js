/**
 * @type {import("eslint").Linter.Config}
 */
module.exports = {
	extends: [
		"airbnb",
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
		'unicorn/prevent-abbreviations': [
			'error',
			{
				allowList: {
					TArgs: true,
					props: true,
					Props: true,
					args: true,
					db: true,
					Fn: true,
					Arg: true,
					vars: true,
					Vars: true,
					var: true,
					Var: true,
					Ref: true,
					ref: true
				},
			},
		],
		"react/jsx-sort-props": [
			'warn',
			{
				shorthandFirst: true,
				callbacksLast: true,
				noSortAlphabetically: true,
			},
		],
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
        ],
		'unicorn/filename-case': [
            'error',
            {
                "cases": {
                    "kebabCase": true,
                    "pascalCase": true,
                },
            },
        ],
	},
};
