const { writeFileSync } = require("fs");

const { stringify, sort } = require("../lib/common");
const {
  NIGHTWATCH,
  PLAYWRIGHT,
  PROTRACTOR,
  PUPPETEER,
  TESTCAFE,
  WEBDRIVERIO,
  NOFRAMEWORK,
} = require("./common/frameworks");

(() => {
  const data = stringify(
    sort([
      NIGHTWATCH,
      PLAYWRIGHT,
      PROTRACTOR,
      PUPPETEER,
      TESTCAFE,
      WEBDRIVERIO,
      NOFRAMEWORK,
    ])
  );
  writeFileSync("./api/v1/platforms/nodejs/index.json", data, "utf8");
})();
