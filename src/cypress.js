const { writeFileSync } = require("fs");
const { stringify, sort } = require("../lib/common");
const { STANDARD, NONSTANDARD } = require("./common/javascript");

const BASE = "./v1/land/browser/framework/cypress/";

(() => {
  const data = stringify(sort([STANDARD, NONSTANDARD]));
  writeFileSync(`${BASE}index.json`, data, "utf8");
})();
