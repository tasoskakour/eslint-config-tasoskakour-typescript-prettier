/**
 * @type {import("eslint").Linter.Config}
 */
module.exports = {
	env: {
		es6: true,
		jest: true,
		node: true,
		es2017: true,
		es2020: true,
		es2021: true,
	},
	parser: "@typescript-eslint/parser",
	parserOptions: {
		ecmaVersion: 2021,
		sourceType: "module",
	},
	extends: [
		"airbnb/base",
		"plugin:@typescript-eslint/recommended",
		"plugin:unicorn/recommended",
		"prettier",
		"prettier/prettier",
		"plugin:prettier/recommended"
	],
	plugins: ["@typescript-eslint", "unicorn"],
	settings: {
        "import/resolver": {
        	typescript: {}
        }
    },
	rules: {
		'unicorn/no-null': 'off',
        'unicorn/prevent-abbreviations': [
            'error',
            {
                "allowList": {
                    "props": true,
                    "Props": true,
                    "Fn": true,
                    "fn": true,
                    "ref": true,
                    "Ref": true,
                },
            },
        ],
		"no-console": ["warn", { "allow": ["warn", "error"] }],
        "import/prefer-default-export":"off",
		"no-use-before-define": "off",
		"@typescript-eslint/no-explicit-any": "off",
        "@typescript-eslint/no-use-before-define": ["error"],
        "@typescript-eslint/explicit-function-return-type": ["off"],
        "@typescript-eslint/explicit-module-boundary-types":["off"],
        "@typescript-eslint/no-unused-vars":["warn"],
		"import/extensions": [
            "error",
            "ignorePackages",
            {
				"js": "never",
                "ts": "never"
            }
        ]
	},
};
