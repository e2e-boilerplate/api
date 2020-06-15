const { writeFileSync } = require("fs");
const { stringify, sort } = require("../lib/common");
const { ASSERT, EXPECT, SHOULD } = require("./common/assertion");
const {
  CHAI,
  CUCUMBER,
  JEST,
  MOCHA,
  AVA,
  JASMINE,
} = require("./common/runner");
const { JAVASCRIPT, ESMODULES, TYPESCRIPT } = require("./common/javascript");
const { WEBDRIVERMANAGER } = require("./common/helpers");
const { BABEL, TSNODE, BABELJEST, TSJEST } = require("./common/translator");

const BASE = "./api/v1/platforms/nodejs/null/wd/";

(() => {
  const data = stringify(sort([JAVASCRIPT, ESMODULES, TYPESCRIPT]));
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

(() => {
  const data = stringify(sort([BABEL, BABELJEST]));
  writeFileSync(`${BASE}es-modules/index.json`, data, "utf8");
})();

(() => {
  const data = stringify(sort([WEBDRIVERMANAGER]));
  writeFileSync(`${BASE}es-modules/babel-jest/index.json`, data, "utf8");
})();

(() => {
  const data = stringify(sort([JEST]));
  writeFileSync(
    `${BASE}es-modules/babel-jest/webdriver-manager/index.json`,
    data,
    "utf8"
  );
})();

(() => {
  const data = stringify(sort([ASSERT, EXPECT]));
  writeFileSync(
    `${BASE}es-modules/babel-jest/webdriver-manager/jest/index.json`,
    data,
    "utf8"
  );
})();

(() => {
  const data = stringify(sort([ASSERT]));
  writeFileSync(
    `${BASE}es-modules/babel-jest/webdriver-manager/jest/assert/index.json`,
    data,
    "utf8"
  );
})();

(() => {
  const data = stringify(sort([EXPECT]));
  writeFileSync(
    `${BASE}es-modules/babel-jest/webdriver-manager/jest/expect/index.json`,
    data,
    "utf8"
  );
})();

(() => {
  const data = stringify(sort([WEBDRIVERMANAGER]));
  writeFileSync(`${BASE}es-modules/babel/index.json`, data, "utf8");
})();

(() => {
  const data = stringify(sort([AVA, JASMINE]));
  writeFileSync(
    `${BASE}es-modules/babel/webdriver-manager/index.json`,
    data,
    "utf8"
  );
})();

(() => {
  const data = stringify(sort([AVA]));
  writeFileSync(
    `${BASE}es-modules/babel/webdriver-manager/ava/index.json`,
    data,
    "utf8"
  );
})();

(() => {
  const data = stringify(sort([ASSERT]));
  writeFileSync(
    `${BASE}es-modules/babel/webdriver-manager/jasmine/assert/index.json`,
    data,
    "utf8"
  );
})();

(() => {
  const data = stringify(sort([EXPECT]));
  writeFileSync(
    `${BASE}es-modules/babel/webdriver-manager/jasmine/expect/index.json`,
    data,
    "utf8"
  );
})();

(() => {
  const data = stringify(sort([TSNODE, TSJEST]));
  writeFileSync(`${BASE}typescript/index.json`, data, "utf8");
})();

(() => {
  const data = stringify(sort([WEBDRIVERMANAGER]));
  writeFileSync(`${BASE}typescript/ts-node/index.json`, data, "utf8");
})();

(() => {
  const data = stringify(sort([AVA, JASMINE]));
  writeFileSync(
    `${BASE}typescript/ts-node/webdriver-manager/index.json`,
    data,
    "utf8"
  );
})();

(() => {
  const data = stringify(sort([AVA]));
  writeFileSync(
    `${BASE}typescript/ts-node/webdriver-manager/ava/index.json`,
    data,
    "utf8"
  );
})();

(() => {
  const data = stringify(sort([ASSERT, EXPECT]));
  writeFileSync(
    `${BASE}typescript/ts-node/webdriver-manager/jasmine/index.json`,
    data,
    "utf8"
  );
})();

(() => {
  const data = stringify(sort([ASSERT]));
  writeFileSync(
    `${BASE}typescript/ts-node/webdriver-manager/jasmine/assert/index.json`,
    data,
    "utf8"
  );
})();

(() => {
  const data = stringify(sort([EXPECT]));
  writeFileSync(
    `${BASE}typescript/ts-node/webdriver-manager/jasmine/expect/index.json`,
    data,
    "utf8"
  );
})();

(() => {
  const data = stringify(sort([WEBDRIVERMANAGER]));
  writeFileSync(`${BASE}typescript/ts-jest/index.json`, data, "utf8");
})();

(() => {
  const data = stringify(sort([ASSERT, EXPECT]));
  writeFileSync(`${BASE}typescript/ts-jest/jest/index.json`, data, "utf8");
})();

(() => {
  const data = stringify(sort([ASSERT]));
  writeFileSync(
    `${BASE}typescript/ts-jest/jest/assert/index.json`,
    data,
    "utf8"
  );
})();

(() => {
  const data = stringify(sort([EXPECT]));
  writeFileSync(
    `${BASE}typescript/ts-jest/jest/expect/index.json`,
    data,
    "utf8"
  );
})();
