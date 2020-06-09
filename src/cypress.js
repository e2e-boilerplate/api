const { readFileSync, writeFileSync } = require("fs");

const { stringify, sort } = require("../lib/common");
const { ASSERT, EXPECT, SHOULD } = require("./common/assertion");
const { BROWSERIFY, WEBPACK, WEBDRIVERMANAGER } = require('./common/helpers');
const { CHAI, CUCUMBER, JEST, JASMINE, AVA, MOCHA, TAPE } = require('./common/runner');
const { BABEL, TSC, ESM, TSJEST, TSNODE, BABELJEST } = require('./common/translator');

(function(){
    const pos = [ CHAI, CUCUMBER, JEST ];
    const data = stringify(sort(pos));
    writeFileSync('./api/v1/cypress/es-modules/index.json', data, "utf8");
})();

(function(){
    const pos = [ ASSERT, EXPECT, SHOULD ];
    const data = stringify(sort(pos));
    writeFileSync('./api/v1/cypress/es-modules/chai/index.json', data, "utf8");
    writeFileSync('./api/v1/cypress/es-modules/cucumber/index.json', data, "utf8");
})();

(function (){
    const pos = [ EXPECT ];
    const data = stringify(sort(pos));
    writeFileSync('./api/v1/cypress/es-modules/jest/index.json', data, "utf8");
})();

(function (){
    const pos = [ BROWSERIFY, WEBPACK ];
    const data = stringify(sort(pos));
    writeFileSync('./api/v1/cypress/es-modules/typescript/index.json', data, "utf8");
})();
