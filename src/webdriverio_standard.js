const { writeFileSync } = require("fs");
const { stringify, sort } = require("../lib/common");
const { ASSERT, EXPECT, SHOULD } = require("./common/assertion");
const { CHAI, CUCUMBER, MOCHA, JASMINE } = require("./common/runner");
const { COMMONJS } = require("./common/javascript");

const BASE = "./v1/land/nodejs/framework/webdriverio/standard/";

(() => {
  const data = stringify(sort([COMMONJS]));
  writeFileSync(`${BASE}index.json`, data, "utf8");
})();

(() => {
  const data = stringify(sort([CUCUMBER, JASMINE, MOCHA]));
  writeFileSync(`${BASE}commonjs/index.json`, data, "utf8");
})();

(() => {
  const data = stringify(sort([ASSERT]));
  writeFileSync(`${BASE}commonjs/cucumber/index.json`, data, "utf8");
})();

(() => {
  const data = stringify(sort([ASSERT]));
  writeFileSync(`${BASE}commonjs/cucumber/assert/index.json`, data, "utf8");
})();

(() => {
  const data = stringify(sort([ASSERT, EXPECT]));
  writeFileSync(`${BASE}commonjs/jasmine/index.json`, data, "utf8");
})();

(() => {
  const data = stringify(sort([ASSERT]));
  writeFileSync(`${BASE}commonjs/jasmine/assert/index.json`, data, "utf8");
})();

(() => {
  const data = stringify(sort([EXPECT]));
  writeFileSync(`${BASE}commonjs/jasmine/expect/index.json`, data, "utf8");
})();

(() => {
  const data = stringify(sort([CHAI]));
  writeFileSync(`${BASE}commonjs/mocha/index.json`, data, "utf8");
})();

(() => {
  const data = stringify(sort([ASSERT, EXPECT, SHOULD]));
  writeFileSync(`${BASE}commonjs/mocha/chai/index.json`, data, "utf8");
})();

(() => {
  const data = stringify(sort([ASSERT]));
  writeFileSync(`${BASE}commonjs/mocha/chai/assert/index.json`, data, "utf8");
})();

(() => {
  const data = stringify(sort([EXPECT]));
  writeFileSync(`${BASE}commonjs/mocha/chai/expect/index.json`, data, "utf8");
})();

(() => {
  const data = stringify(sort([SHOULD]));
  writeFileSync(`${BASE}commonjs/mocha/chai/should/index.json`, data, "utf8");
})();
