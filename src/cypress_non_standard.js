const { writeFileSync } = require("fs");
const { stringify, sort } = require("../lib/common");
const { ASSERT, EXPECT, SHOULD } = require("./common/assertion");
const { BROWSERIFY, DEFAULT, WEBPACK } = require("./common/helpers");
const { CHAI, CUCUMBER, JEST } = require("./common/runner");
const { ESMODULES, TYPESCRIPT } = require("./common/javascript");

const BASE = "./api/v1/land/browser/framework/cypress/non_standard/";

(() => {
  const data = stringify(sort([ESMODULES, TYPESCRIPT]));
  writeFileSync(`${BASE}index.json`, data, "utf8");
})();

(() => {
  const data = stringify(sort([CHAI, CUCUMBER, JEST]));
  writeFileSync(`${BASE}es-modules/index.json`, data, "utf8");
})();

(() => {
  const data = stringify(sort([ASSERT, EXPECT, SHOULD]));
  writeFileSync(`${BASE}es-modules/chai/index.json`, data, "utf8");
  writeFileSync(`${BASE}es-modules/cucumber/index.json`, data, "utf8");
})();

(() => {
  const data = stringify(sort([ASSERT]));
  writeFileSync(`${BASE}es-modules/chai/assert/index.json`, data, "utf8");
  writeFileSync(`${BASE}es-modules/cucumber/assert/index.json`, data, "utf8");
})();

(() => {
  const data = stringify(sort([EXPECT]));
  writeFileSync(`${BASE}es-modules/chai/expect/index.json`, data, "utf8");
  writeFileSync(`${BASE}es-modules/cucumber/expect/index.json`, data, "utf8");
})();

(() => {
  const data = stringify(sort([SHOULD]));
  writeFileSync(`${BASE}es-modules/chai/should/index.json`, data, "utf8");
  writeFileSync(`${BASE}es-modules/cucumber/should/index.json`, data, "utf8");
})();

(() => {
  const data = stringify(sort([EXPECT]));
  writeFileSync(`${BASE}es-modules/jest/index.json`, data, "utf8");
})();

(() => {
  const data = stringify(sort([EXPECT]));
  writeFileSync(`${BASE}es-modules/jest/expect/index.json`, data, "utf8");
})();

(() => {
  const data = stringify(sort([BROWSERIFY, DEFAULT, WEBPACK]));
  writeFileSync(`${BASE}typescript/index.json`, data, "utf8");
})();

(() => {
  const data = stringify(sort([CHAI, JEST, CUCUMBER]));
  writeFileSync(`${BASE}typescript/default/index.json`, data, "utf8");
})();

(() => {
  const data = stringify(sort([ASSERT, EXPECT, SHOULD]));
  writeFileSync(`${BASE}typescript/default/chai/index.json`, data, "utf8");
  writeFileSync(`${BASE}typescript/default/cucumber/index.json`, data, "utf8");
})();

(() => {
  const data = stringify(sort([EXPECT]));
  writeFileSync(`${BASE}typescript/default/jest/index.json`, data, "utf8");
})();

(() => {
  const data = stringify(sort([CHAI, JEST]));
  writeFileSync(`${BASE}typescript/browserify/index.json`, data, "utf8");
  writeFileSync(`${BASE}typescript/webpack/index.json`, data, "utf8");
})();

(() => {
  const data = stringify(sort([ASSERT, EXPECT, SHOULD]));
  writeFileSync(`${BASE}typescript/browserify/chai/index.json`, data, "utf8");
  writeFileSync(`${BASE}typescript/webpack/chai/index.json`, data, "utf8");
})();

(() => {
  const data = stringify(sort([ASSERT, EXPECT, SHOULD]));
  writeFileSync(`${BASE}typescript/browserify/chai/index.json`, data, "utf8");
  writeFileSync(`${BASE}typescript/webpack/chai/index.json`, data, "utf8");
})();

(() => {
  const data = stringify(sort([ASSERT]));
  writeFileSync(
    `${BASE}typescript/browserify/chai/assert/index.json`,
    data,
    "utf8"
  );
  writeFileSync(
    `${BASE}typescript/webpack/chai/assert/index.json`,
    data,
    "utf8"
  );
})();

(() => {
  const data = stringify(sort([EXPECT]));
  writeFileSync(
    `${BASE}typescript/browserify/chai/expect/index.json`,
    data,
    "utf8"
  );
  writeFileSync(
    `${BASE}typescript/webpack/chai/expect/index.json`,
    data,
    "utf8"
  );
})();

(() => {
  const data = stringify(sort([SHOULD]));
  writeFileSync(
    `${BASE}typescript/browserify/chai/should/index.json`,
    data,
    "utf8"
  );
  writeFileSync(
    `${BASE}typescript/webpack/chai/should/index.json`,
    data,
    "utf8"
  );
})();

(() => {
  const data = stringify(sort([EXPECT]));
  writeFileSync(`${BASE}typescript/browserify/jest/index.json`, data, "utf8");
  writeFileSync(`${BASE}typescript/webpack/jest/index.json`, data, "utf8");
})();

(() => {
  const data = stringify(sort([EXPECT]));
  writeFileSync(
    `${BASE}typescript/browserify/jest/expect/index.json`,
    data,
    "utf8"
  );
  writeFileSync(
    `${BASE}typescript/webpack/jest/expect/index.json`,
    data,
    "utf8"
  );
})();
