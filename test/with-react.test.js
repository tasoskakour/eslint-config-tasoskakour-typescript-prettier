/* eslint-disable unicorn/prefer-module, @typescript-eslint/no-var-requires, unicorn/prefer-string-replace-all */
const test = require("ava");
const { ESLint } = require("eslint");

const config = require("../with-react");

const isObject = (value) =>
	value && typeof value === "object" && value.constructor === Object;

test("Basic ESLint Rules", async (t) => {
	const linter = new ESLint({ overrideConfigFile: "with-react.js" });
	const code = `
    import {createRoot} from "react-dom/client";

	const container = document.getElementById("app");
	const root = createRoot(container);
	root.render(<div>Hello world</div>);
	`.replace(/\t*/g, "");
	const [{ errorCount, messages }] = await linter.lintText(code);
	t.is(errorCount, 3);
	t.is(
		messages[0].message,
		"Replace `⏎····import·{createRoot` with `import·{·createRoot·`",
	);
	t.is(
		messages[1].message,
		"Unable to resolve path to module 'react-dom/client'.",
	);
	t.is(
		messages[2].message,
		"Prefer `.querySelector()` over `.getElementById()`.",
	);
});

test("Basic config structure", (t) => {
	const { plugins, rules } = config;

	t.true(Array.isArray(plugins));
	t.true(isObject(rules));
});
