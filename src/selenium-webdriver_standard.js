const { writeFileSync } = require("fs");
const { stringify, sort } = require("../lib/common");
const { ASSERT, EXPECT, SHOULD } = require("./common/assertion");
const {
  CUCUMBER,
  JASMINE,
  MOCHA,
  CHAI,
  TAPE,
  JEST,
} = require("./common/runner");
const { COMMONJS } = require("./common/javascript");

const BASE =
  "./api/v1/platforms/nodejs/no_framework/selenium-webdriver/standard/";

(() => {
  const data = stringify(sort([COMMONJS]));
  writeFileSync(`${BASE}index.json`, data, "utf8");
})();

(() => {
  const data = stringify(sort([CUCUMBER, JASMINE, JEST, MOCHA, TAPE]));
  writeFileSync(`${BASE}commonjs/index.json`, data, "utf8");
})();

(() => {
  const data = stringify(sort([ASSERT, CHAI]));
  writeFileSync(`${BASE}commonjs/cucumber/index.json`, data, "utf8");
})();

(() => {
  const data = stringify(sort([ASSERT]));
  writeFileSync(`${BASE}commonjs/cucumber/assert/index.json`, data, "utf8");
})();

(() => {
  const data = stringify(sort([ASSERT, EXPECT, SHOULD]));
  writeFileSync(`${BASE}commonjs/cucumber/chai/index.json`, data, "utf8");
})();

(() => {
  const data = stringify(sort([ASSERT]));
  writeFileSync(
    `${BASE}commonjs/cucumber/chai/assert/index.json`,
    data,
    "utf8"
  );
})();

(() => {
  const data = stringify(sort([EXPECT]));
  writeFileSync(
    `${BASE}commonjs/cucumber/chai/expect/index.json`,
    data,
    "utf8"
  );
})();

(() => {
  const data = stringify(sort([SHOULD]));
  writeFileSync(
    `${BASE}commonjs/cucumber/chai/should/index.json`,
    data,
    "utf8"
  );
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
  const data = stringify(sort([ASSERT, EXPECT]));
  writeFileSync(`${BASE}commonjs/jest/index.json`, data, "utf8");
})();

(() => {
  const data = stringify(sort([ASSERT]));
  writeFileSync(`${BASE}commonjs/jest/assert/index.json`, data, "utf8");
})();

(() => {
  const data = stringify(sort([EXPECT]));
  writeFileSync(`${BASE}commonjs/jest/expect/index.json`, data, "utf8");
})();

(() => {
  const data = stringify(sort([ASSERT, CHAI]));
  writeFileSync(`${BASE}commonjs/mocha/index.json`, data, "utf8");
})();

(() => {
  const data = stringify(sort([ASSERT]));
  writeFileSync(`${BASE}commonjs/mocha/assert/index.json`, data, "utf8");
})();

(() => {
  const data = stringify(sort([ASSERT, SHOULD, EXPECT]));
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

(() => {
  const data = stringify(sort([TAPE]));
  writeFileSync(`${BASE}commonjs/tape/index.json`, data, "utf8");
})();
