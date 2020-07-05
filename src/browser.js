const { writeFileSync } = require("fs");

const { stringify, sort } = require("../lib/common");
const { FRAMEWORK, NOFRAMEWORK } = require("./common/nodejs");

(() => {
  const data = stringify(sort([FRAMEWORK, { ...NOFRAMEWORK, disable: true }]));
  writeFileSync("./api/v1/land/browser/index.json", data, "utf8");
})();
