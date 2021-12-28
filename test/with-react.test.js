const test = require("ava");
const { ESLint } = require("eslint");

const config = require('../with-react.js');

const isObject = (value) => value && typeof value === "object" && value.constructor === Object;

test("Basic ESLint Rules", async (t) => {
	const linter = new ESLint({ overrideConfigFile: "with-react.js" });
	const code = `
    import ReactDOM from "react-dom";

	const element = <h1>Hello, world</h1>;
	ReactDOM.render(element, document.querySelector("#root"));
	`.replace(/\t*/g, "");
	const [{ errorCount, messages }] = await linter.lintText(code);
	t.is(errorCount, 2);
	t.is(messages[0].message, "Delete `⏎····`");
	t.is(messages[1].message, "Unable to resolve path to module 'react-dom'.");
});

test("Basic config structure", (t) => {
	const { plugins, rules } = config;

	t.true(Array.isArray(plugins));
	t.true(isObject(rules));
});