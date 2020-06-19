const { writeFileSync } = require("fs");

const { stringify, sort } = require("../lib/common");
const {
  NIGHTWATCH,
  PLAYWRIGHT,
  PROTRACTOR,
  PUPPETEER,
  TESTCAFE,
  WEBDRIVERIO,
  CYPRESS,
} = require("./common/frameworks");

(() => {
  const data = stringify(
    sort([NIGHTWATCH, PLAYWRIGHT, PROTRACTOR, PUPPETEER, TESTCAFE, WEBDRIVERIO])
  );
  writeFileSync("./api/v1/platforms/nodejs/framework/index.json", data, "utf8");
})();

(() => {
  const data = stringify(sort([CYPRESS]));
  writeFileSync(
    "./api/v1/platforms/browser/framework/index.json",
    data,
    "utf8"
  );
})();
