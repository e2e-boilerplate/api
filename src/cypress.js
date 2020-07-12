const { writeFileSync } = require("fs");
const { stringify, sort } = require("../lib/common");
const { STANDARD, NONSTANDARD } = require("./common/javascript");

const BASE = "./api/v1/land/browser/framework/cypress/";

(() => {
  const data = stringify(sort([NONSTANDARD, { ...STANDARD, disable: true}]));
  writeFileSync(`${BASE}index.json`, data, "utf8");
})();
