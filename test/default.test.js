const test = require("ava");
const { ESLint } = require("eslint");

const config = require('../index.js');

const isObject = (value) => value && typeof value === "object" && value.constructor === Object;

test("Basic ESLint Rules", async (t) => {
	const linter = new ESLint({ overrideConfigFile: "index.js" });
	const code = `const notUsed = 5;
	const fn = (x) => x;
	fn({a:1});
	`.replace(/\t*/g, "");
	const [{ errorCount, warningCount, messages }] = await linter.lintText(code);
	t.is(warningCount, 1);
	t.is(errorCount, 1);
	t.is(messages[0].message, "'notUsed' is assigned a value but never used.");
	t.is(messages[1].message, "Replace `a:1` with `·a:·1·`");
});

test("Basic config structure", (t) => {
	const { plugins, rules } = config;

	t.true(Array.isArray(plugins));
	t.true(isObject(rules));
});