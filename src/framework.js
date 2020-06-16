const { writeFileSync } = require("fs");

const { stringify, sort } = require("../lib/common");
const {
  NIGHTWATCH,
  PLAYWRIGHT,
  PROTRACTOR,
  PUPPETEER,
  TESTCAFE,
  WEBDRIVERIO,
} = require("./common/frameworks");

(() => {
  const data = stringify(
    sort([NIGHTWATCH, PLAYWRIGHT, PROTRACTOR, PUPPETEER, TESTCAFE, WEBDRIVERIO])
  );
  writeFileSync("./api/v1/platforms/nodejs/framework/index.json", data, "utf8");
})();
