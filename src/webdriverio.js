const { writeFileSync } = require("fs");
const { stringify, sort } = require("../lib/common");
const { ASSERT, EXPECT, SHOULD } = require("./common/assertion");
const { CHAI, CUCUMBER, MOCHA, JASMINE } = require("./common/runner");
const { JAVASCRIPT, ESMODULES, TYPESCRIPT } = require("./common/javascript");

const { BABEL, TSNODE } = require("./common/translator");

const BASE = "./api/v1/platforms/nodejs/webdriverio/";

(() => {
  const data = stringify(sort([JAVASCRIPT, ESMODULES, TYPESCRIPT]));
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

(() => {
  const data = stringify(sort([BABEL]));
  writeFileSync(`${BASE}es-modules/index.json`, data, "utf8");
})();

(() => {
  const data = stringify(sort([JASMINE, MOCHA]));
  writeFileSync(`${BASE}es-modules/babel/index.json`, data, "utf8");
})();

(() => {
  const data = stringify(sort([ASSERT, EXPECT]));
  writeFileSync(`${BASE}es-modules/babel/jasmine/index.json`, data, "utf8");
})();

(() => {
  const data = stringify(sort([ASSERT]));
  writeFileSync(
    `${BASE}es-modules/babel/jasmine/assert/index.json`,
    data,
    "utf8"
  );
})();

(() => {
  const data = stringify(sort([EXPECT]));
  writeFileSync(
    `${BASE}es-modules/babel/jasmine/expect/index.json`,
    data,
    "utf8"
  );
})();

(() => {
  const data = stringify(sort([ASSERT, CHAI]));
  writeFileSync(`${BASE}es-modules/babel/mocha/index.json`, data, "utf8");
})();

(() => {
  const data = stringify(sort([ASSERT]));
  writeFileSync(
    `${BASE}es-modules/babel/mocha/assert/index.json`,
    data,
    "utf8"
  );
})();

(() => {
  const data = stringify(sort([ASSERT, EXPECT, SHOULD]));
  writeFileSync(`${BASE}es-modules/babel/mocha/chai/index.json`, data, "utf8");
})();

(() => {
  const data = stringify(sort([ASSERT]));
  writeFileSync(
    `${BASE}es-modules/babel/mocha/chai/assert/index.json`,
    data,
    "utf8"
  );
})();

(() => {
  const data = stringify(sort([EXPECT]));
  writeFileSync(
    `${BASE}es-modules/babel/mocha/chai/expect/index.json`,
    data,
    "utf8"
  );
})();

(() => {
  const data = stringify(sort([SHOULD]));
  writeFileSync(
    `${BASE}es-modules/babel/mocha/chai/should/index.json`,
    data,
    "utf8"
  );
})();

(() => {
  const data = stringify(sort([TSNODE]));
  writeFileSync(`${BASE}typescript/index.json`, data, "utf8");
})();

(() => {
  const data = stringify(sort([JASMINE, MOCHA]));
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

(() => {
  const data = stringify(sort([ASSERT, CHAI]));
  writeFileSync(`${BASE}typescript/ts-node/mocha/index.json`, data, "utf8");
})();

(() => {
  const data = stringify(sort([ASSERT]));
  writeFileSync(
    `${BASE}typescript/ts-node/mocha/assert/index.json`,
    data,
    "utf8"
  );
})();

(() => {
  const data = stringify(sort([ASSERT, EXPECT, SHOULD]));
  writeFileSync(
    `${BASE}typescript/ts-node/mocha/chai/index.json`,
    data,
    "utf8"
  );
})();

(() => {
  const data = stringify(sort([ASSERT]));
  writeFileSync(
    `${BASE}typescript/ts-node/mocha/chai/assert/index.json`,
    data,
    "utf8"
  );
})();

(() => {
  const data = stringify(sort([EXPECT]));
  writeFileSync(
    `${BASE}typescript/ts-node/mocha/chai/expect/index.json`,
    data,
    "utf8"
  );
})();

(() => {
  const data = stringify(sort([SHOULD]));
  writeFileSync(
    `${BASE}typescript/ts-node/mocha/chai/should/index.json`,
    data,
    "utf8"
  );
})();
