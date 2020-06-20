const { writeFileSync } = require("fs");
const { stringify, sort } = require("../lib/common");
const { ASSERT, EXPECT, SHOULD } = require("./common/assertion");
const { JASMINE, MOCHA, CHAI, AVA, JEST } = require("./common/runner");
const { ESMODULES, TYPESCRIPT } = require("./common/javascript");
const { BABEL, ESM, TSNODE, TSJEST } = require("./common/translator");

const BASE = "./api/v1/land/nodejs/framework/puppeteer/non_standard/";

(() => {
  const data = stringify(sort([ESMODULES, TYPESCRIPT]));
  writeFileSync(`${BASE}index.json`, data, "utf8");
})();

(() => {
  const data = stringify(sort([BABEL, ESM]));
  writeFileSync(`${BASE}es-modules/index.json`, data, "utf8");
})();

(() => {
  const data = stringify(sort([AVA, JEST]));
  writeFileSync(`${BASE}es-modules/babel/index.json`, data, "utf8");
})();

(() => {
  const data = stringify(sort([AVA]));
  writeFileSync(`${BASE}es-modules/babel/ava/index.json`, data, "utf8");
})();

(() => {
  const data = stringify(sort([ASSERT, EXPECT]));
  writeFileSync(`${BASE}es-modules/babel/jest/index.json`, data, "utf8");
})();

(() => {
  const data = stringify(sort([ASSERT]));
  writeFileSync(`${BASE}es-modules/babel/jest/assert/index.json`, data, "utf8");
})();

(() => {
  const data = stringify(sort([EXPECT]));
  writeFileSync(`${BASE}es-modules/babel/jest/expect/index.json`, data, "utf8");
})();

(() => {
  const data = stringify(sort([MOCHA]));
  writeFileSync(`${BASE}es-modules/esm/index.json`, data, "utf8");
})();

(() => {
  const data = stringify(sort([ASSERT, CHAI]));
  writeFileSync(`${BASE}es-modules/esm/mocha/index.json`, data, "utf8");
})();

(() => {
  const data = stringify(sort([ASSERT]));
  writeFileSync(`${BASE}es-modules/esm/mocha/assert/index.json`, data, "utf8");
})();

(() => {
  const data = stringify(sort([ASSERT, EXPECT, SHOULD]));
  writeFileSync(`${BASE}es-modules/esm/mocha/chai/index.json`, data, "utf8");
})();

(() => {
  const data = stringify(sort([ASSERT]));
  writeFileSync(
    `${BASE}es-modules/esm/mocha/chai/assert/index.json`,
    data,
    "utf8"
  );
})();

(() => {
  const data = stringify(sort([EXPECT]));
  writeFileSync(
    `${BASE}es-modules/esm/mocha/chai/expect/index.json`,
    data,
    "utf8"
  );
})();

(() => {
  const data = stringify(sort([SHOULD]));
  writeFileSync(
    `${BASE}es-modules/esm/mocha/chai/should/index.json`,
    data,
    "utf8"
  );
})();

(() => {
  const data = stringify(sort([TSNODE, TSJEST]));
  writeFileSync(`${BASE}typescript/index.json`, data, "utf8");
})();

(() => {
  const data = stringify(sort([JEST]));
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

(() => {
  const data = stringify(sort([JASMINE]));
  writeFileSync(`${BASE}typescript/ts-node/index.json`, data, "utf8");
})();

(() => {
  const data = stringify(sort([ASSERT, EXPECT]));
  writeFileSync(`${BASE}typescript/ts-node/jasmine/index.json`, data, "utf8");
})();

(() => {
  const data = stringify(sort([ASSERT]));
  writeFileSync(
    `${BASE}typescript/ts-node/jasmine/assert/index.json`,
    data,
    "utf8"
  );
})();

(() => {
  const data = stringify(sort([EXPECT]));
  writeFileSync(
    `${BASE}typescript/ts-node/jasmine/expect/index.json`,
    data,
    "utf8"
  );
})();
