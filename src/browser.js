const { writeFileSync } = require("fs");

const { stringify, sort } = require("../lib/common");
const { CYPRESS } = require("./common/frameworks");

(() => {
  const data = stringify(sort([CYPRESS]));
  writeFileSync("./api/v1/platforms/browsers/index.json", data, "utf8");
})();
