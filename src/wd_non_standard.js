const { writeFileSync } = require("fs");
const { stringify, sort } = require("../lib/common");
const { ASSERT, EXPECT } = require("./common/assertion");
const { JEST, AVA, JASMINE } = require("./common/runner");
const { ESMODULES, TYPESCRIPT } = require("./common/javascript");
const { WEBDRIVERMANAGER } = require("./common/helpers");
const { BABEL, TSNODE, BABELJEST, TSJEST } = require("./common/translator");

const BASE = "./v1/land/nodejs/no_framework/wd/non_standard/";

(() => {
  const data = stringify(sort([ESMODULES, TYPESCRIPT]));
  writeFileSync(`${BASE}index.json`, data, "utf8");
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
