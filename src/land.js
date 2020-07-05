const { writeFileSync } = require("fs");

const { stringify, sort } = require("../lib/common");
const { BROWSER, NODEJS } = require("./common/land");

(() => {
  const data = stringify(sort([BROWSER, NODEJS]));
  writeFileSync("./api/v1/land/index.json", data, "utf8");
})();
