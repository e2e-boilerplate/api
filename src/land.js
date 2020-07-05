const { writeFileSync } = require("fs");

const { stringify, sort } = require("../lib/common");
const { BROWSER, NODEJS } = require("./common/platforms");

(() => {
  const data = stringify(sort([BROWSER, NODEJS]));
  writeFileSync("./v1/land/index.json", data, "utf8");
})();
