const { writeFileSync } = require("fs");

const { stringify, sort } = require("../lib/common");
const { BROWSER, NODEJS } = require("./common/platforms");

(function(){
    const data = stringify(sort([ BROWSER, NODEJS ]));
    writeFileSync('./api/v1/platforms/index.json', data, "utf8");
})();

