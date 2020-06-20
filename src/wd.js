const { writeFileSync } = require("fs");
const { stringify, sort } = require("../lib/common");
const { NONSTANDARD, STANDARD } = require("./common/javascript");

const BASE = "./api/v1/platforms/nodejs/no_framework/wd/";

(() => {
  const data = stringify(sort([STANDARD, NONSTANDARD]));
  writeFileSync(`${BASE}index.json`, data, "utf8");
})();
