const { writeFileSync } = require("fs");
const { stringify, sort } = require("../lib/common");

const BASE = "./api/v1/land/browser/framework/cypress/standard/";

(() => {
  const data = stringify(sort([]));
  writeFileSync(`${BASE}index.json`, data, "utf8");
})();
