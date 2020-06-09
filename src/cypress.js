const { writeFileSync } = require("fs");

const { stringify, sort } = require("../lib/common");
const { ASSERT, EXPECT, SHOULD } = require("./common/assertion");
const { BROWSERIFY, DEFAULT, WEBPACK, WEBDRIVERMANAGER } = require('./common/helpers');
const { CHAI, CUCUMBER, JEST, JASMINE, AVA, MOCHA, TAPE } = require('./common/runner');
const { BABEL, TSC, ESM, TSJEST, TSNODE, BABELJEST } = require('./common/translator');

(function(){
    const data = stringify(sort([ CHAI, CUCUMBER, JEST ]));
    writeFileSync('./api/v1/cypress/es-modules/index.json', data, "utf8");
})();

(function(){
    const data = stringify(sort([ ASSERT, EXPECT, SHOULD ]));
    writeFileSync('./api/v1/cypress/es-modules/chai/index.json', data, "utf8");
    writeFileSync('./api/v1/cypress/es-modules/cucumber/index.json', data, "utf8");
})();

(function (){
    const data = stringify(sort([ EXPECT ]));
    writeFileSync('./api/v1/cypress/es-modules/jest/index.json', data, "utf8");
})();

(function (){
    const data = stringify(sort([ BROWSERIFY, DEFAULT, WEBPACK ]));
    writeFileSync('./api/v1/cypress/typescript/index.json', data, "utf8");
})();

(function(){
    const data = stringify(sort([ ASSERT, EXPECT, SHOULD ]));
    writeFileSync('./api/v1/cypress/typescript/chai/index.json', data, "utf8");
    writeFileSync('./api/v1/cypress/typescript/cucumber/index.json', data, "utf8");
})();

(function (){
    const data = stringify(sort([ EXPECT ]));
    writeFileSync('./api/v1/cypress/typescript/jest/index.json', data, "utf8");
})();

(function (){
    const data = stringify(sort([ CHAI, JEST ]));
    writeFileSync('./api/v1/cypress/typescript/browserify/index.json', data, "utf8");
    writeFileSync('./api/v1/cypress/typescript/webpack/index.json', data, "utf8");
})();

(function (){
    const data = stringify(sort([ ASSERT, EXPECT, SHOULD ]));
    writeFileSync('./api/v1/cypress/typescript/browserify/chai/index.json', data, "utf8");
    writeFileSync('./api/v1/cypress/typescript/webpack/chai/index.json', data, "utf8");
})();

(function (){
    const data = stringify(sort([ EXPECT ]));
    writeFileSync('./api/v1/cypress/typescript/browserify/jest/index.json', data, "utf8");
    writeFileSync('./api/v1/cypress/typescript/webpack/jest/index.json', data, "utf8");
})();
