const { writeFileSync } = require("fs");
const { stringify, sort } = require("../lib/common");
const { ASSERT, EXPECT, SHOULD } = require("./common/assertion");
const { CHAI } = require("./common/runner");
const { ESMODULES, TYPESCRIPT } = require("./common/javascript");

const BASE = "./api/v1/platforms/nodejs/framework/testcafe/non_standard/";

(() => {
  const data = stringify(sort([ESMODULES, TYPESCRIPT]));
  writeFileSync(`${BASE}index.json`, data, "utf8");
})();

const items = ["es-modules", "typescript"];

items.forEach((item) => {
  (() => {
    const data = stringify(sort([ASSERT, CHAI]));
    writeFileSync(`${BASE}${item}/index.json`, data, "utf8");
  })();

  (() => {
    const data = stringify(sort([ASSERT]));
    writeFileSync(`${BASE}${item}/assert/index.json`, data, "utf8");
  })();

  (() => {
    const data = stringify(sort([ASSERT, SHOULD, EXPECT]));
    writeFileSync(`${BASE}${item}/chai/index.json`, data, "utf8");
  })();

  (() => {
    const data = stringify(sort([ASSERT]));
    writeFileSync(`${BASE}${item}/chai/assert/index.json`, data, "utf8");
  })();

  (() => {
    const data = stringify(sort([EXPECT]));
    writeFileSync(`${BASE}${item}/chai/expect/index.json`, data, "utf8");
  })();

  (() => {
    const data = stringify(sort([SHOULD]));
    writeFileSync(`${BASE}${item}/chai/should/index.json`, data, "utf8");
  })();
});
