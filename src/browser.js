const { writeFileSync } = require("fs");

const { stringify, sort } = require("../lib/common");
const { FRAMEWORK, NOFRAMEWORK } = require("./common/nodejs");

(() => {
  const data = stringify(sort([FRAMEWORK, NOFRAMEWORK]));
  writeFileSync("./v1/land/browser/index.json", data, "utf8");
})();
