const { writeFileSync } = require("fs");
const { stringify, sort } = require("../lib/common");
const { ASSERT, EXPECT } = require("./common/assertion");
const { COMMONJS } = require("./common/javascript");

const BASE = "./api/v1/platforms/nodejs/framework/nightwatch/standard/";

(() => {
  const data = stringify(sort([COMMONJS]));
  writeFileSync(`${BASE}index.json`, data, "utf8");
})();

(() => {
  const data = stringify(sort([ASSERT, EXPECT]));
  writeFileSync(`${BASE}/commonjs/index.json`, data, "utf8");
})();

(() => {
  const data = stringify(sort([ASSERT]));
  writeFileSync(`${BASE}/commonjs/assert/index.json`, data, "utf8");
})();

(() => {
  const data = stringify(sort([EXPECT]));
  writeFileSync(`${BASE}/commonjs/expect/index.json`, data, "utf8");
})();
