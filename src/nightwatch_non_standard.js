const { writeFileSync } = require("fs");
const { stringify, sort } = require("../lib/common");
const { ASSERT, EXPECT } = require("./common/assertion");
const { ESMODULES, TYPESCRIPT } = require("./common/javascript");
const { BABEL, TSC } = require("./common/translator");

const BASE = "./api/v1/land/nodejs/framework/nightwatch/non_standard/";

(() => {
  const data = stringify(sort([ESMODULES, TYPESCRIPT]));
  writeFileSync(`${BASE}index.json`, data, "utf8");
})();

(() => {
  const data = stringify(sort([BABEL]));
  writeFileSync(`${BASE}/es-modules/index.json`, data, "utf8");
})();

(() => {
  const data = stringify(sort([ASSERT, EXPECT]));
  writeFileSync(`${BASE}/es-modules/babel/index.json`, data, "utf8");
})();

(() => {
  const data = stringify(sort([ASSERT]));
  writeFileSync(`${BASE}/es-modules/babel/assert/index.json`, data, "utf8");
})();

(() => {
  const data = stringify(sort([EXPECT]));
  writeFileSync(`${BASE}/es-modules/babel/expect/index.json`, data, "utf8");
})();

(() => {
  const data = stringify(sort([TSC]));
  writeFileSync(`${BASE}/typescript/index.json`, data, "utf8");
})();

(() => {
  const data = stringify(sort([ASSERT, EXPECT]));
  writeFileSync(`${BASE}/typescript/tsc/index.json`, data, "utf8");
})();

(() => {
  const data = stringify(sort([ASSERT]));
  writeFileSync(`${BASE}/typescript/tsc/assert/index.json`, data, "utf8");
})();

(() => {
  const data = stringify(sort([EXPECT]));
  writeFileSync(`${BASE}/typescript/tsc/expect/index.json`, data, "utf8");
})();
