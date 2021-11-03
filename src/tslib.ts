import { readFileSync } from "fs";

import resolve from "resolve";

// The injected id for helpers.
export const TSLIB = "tslib";
export const TSLIB_VIRTUAL = "\0tslib.js";
export let tslibSource: string;
try
{
	// tslint:disable-next-line:no-string-literal no-var-requires
	const tslibPath = resolve.sync("tslib/tslib.es6.js");
	tslibSource = readFileSync(tslibPath, "utf8");
} catch (e)
{
	console.warn("Error loading `tslib` helper library.");
	throw e;
}
