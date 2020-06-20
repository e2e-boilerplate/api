const { writeFileSync } = require("fs");
const { stringify, sort } = require("../lib/common");
const { ASSERT, EXPECT, SHOULD } = require("./common/assertion");
const { CHAI, CUCUMBER, JEST, MOCHA } = require("./common/runner");
const { COMMONJS } = require("./common/javascript");
const { WEBDRIVERMANAGER } = require("./common/helpers");

const BASE = "./api/v1/platforms/nodejs/no_framework/wd/standard/";

(() => {
  const data = stringify(sort([COMMONJS]));
  writeFileSync(`${BASE}index.json`, data, "utf8");
})();

(() => {
  const data = stringify(sort([WEBDRIVERMANAGER]));
  writeFileSync(`${BASE}commonjs/index.json`, data, "utf8");
})();

(() => {
  const data = stringify(sort([CUCUMBER, JEST, MOCHA]));
  writeFileSync(`${BASE}commonjs/webdriver-manager/index.json`, data, "utf8");
})();

(() => {
  const data = stringify(sort([CHAI]));
  writeFileSync(
    `${BASE}commonjs/webdriver-manager/cucumber/chai/index.json`,
    data,
    "utf8"
  );
})();

(() => {
  const data = stringify(sort([ASSERT]));
  writeFileSync(
    `${BASE}commonjs/webdriver-manager/cucumber/chai/assert/index.json`,
    data,
    "utf8"
  );
})();

(() => {
  const data = stringify(sort([EXPECT]));
  writeFileSync(
    `${BASE}commonjs/webdriver-manager/cucumber/chai/expect/index.json`,
    data,
    "utf8"
  );
})();

(() => {
  const data = stringify(sort([SHOULD]));
  writeFileSync(
    `${BASE}commonjs/webdriver-manager/cucumber/chai/should/index.json`,
    data,
    "utf8"
  );
})();

(() => {
  const data = stringify(sort([ASSERT, EXPECT]));
  writeFileSync(
    `${BASE}commonjs/webdriver-manager/jest/index.json`,
    data,
    "utf8"
  );
})();

(() => {
  const data = stringify(sort([ASSERT]));
  writeFileSync(
    `${BASE}commonjs/webdriver-manager/jest/assert/index.json`,
    data,
    "utf8"
  );
})();

(() => {
  const data = stringify(sort([EXPECT]));
  writeFileSync(
    `${BASE}commonjs/webdriver-manager/jest/expect/index.json`,
    data,
    "utf8"
  );
})();

(() => {
  const data = stringify(sort([MOCHA]));
  writeFileSync(
    `${BASE}commonjs/webdriver-manager/mocha/index.json`,
    data,
    "utf8"
  );
})();

(() => {
  const data = stringify(sort([CHAI]));
  writeFileSync(
    `${BASE}commonjs/webdriver-manager/mocha/chai/index.json`,
    data,
    "utf8"
  );
})();

(() => {
  const data = stringify(sort([ASSERT]));
  writeFileSync(
    `${BASE}commonjs/webdriver-manager/mocha/chai/assert/index.json`,
    data,
    "utf8"
  );
})();

(() => {
  const data = stringify(sort([EXPECT]));
  writeFileSync(
    `${BASE}commonjs/webdriver-manager/mocha/chai/expect/index.json`,
    data,
    "utf8"
  );
})();

(() => {
  const data = stringify(sort([SHOULD]));
  writeFileSync(
    `${BASE}commonjs/webdriver-manager/mocha/chai/should/index.json`,
    data,
    "utf8"
  );
})();
