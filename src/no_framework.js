const { writeFileSync } = require("fs");

const { stringify, sort } = require("../lib/common");
const { SELENIUMWEBDRIVER, WD } = require("./common/no_frameworks");

(() => {
  const data = stringify(sort([SELENIUMWEBDRIVER, WD]));
  writeFileSync(
    "./api/v1/platforms/nodejs/no_framework/index.json",
    data,
    "utf8"
  );
})();

(() => {
  const data = stringify(sort([]));
  writeFileSync(
    "./api/v1/platforms/browser/no_framework/index.json",
    data,
    "utf8"
  );
})();
