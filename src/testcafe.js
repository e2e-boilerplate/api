const { writeFileSync } = require("fs");
const { stringify, sort } = require("../lib/common");
const { STANDARD, NONSTANDARD } = require("./common/javascript");

const BASE = "./api/v1/platforms/nodejs/framework/testcafe/";

(() => {
  const data = stringify(sort([STANDARD, NONSTANDARD]));
  writeFileSync(`${BASE}index.json`, data, "utf8");
})();
