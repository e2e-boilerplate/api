const { writeFileSync } = require("fs");

const { stringify, sort } = require("../lib/common");
const { SELENIUMWEBDRIVER, WD } = require("./common/non_frameworks");

(() => {
  const data = stringify(sort([SELENIUMWEBDRIVER, WD]));
  writeFileSync("./api/v1/platforms/nodejs/null/index.json", data, "utf8");
})();
