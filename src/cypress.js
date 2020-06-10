const { writeFileSync } = require("fs");

const { stringify, sort } = require("../lib/common");
const { ASSERT, EXPECT, SHOULD } = require("./common/assertion");
const { BROWSERIFY, DEFAULT, WEBPACK, WEBDRIVERMANAGER } = require('./common/helpers');
const { CHAI, CUCUMBER, JEST, JASMINE, AVA, MOCHA, TAPE } = require('./common/runner');
const { BABEL, TSC, ESM, TSJEST, TSNODE, BABELJEST } = require('./common/translator');

const BASE = './api/v1/platforms/browsers/cypress/';

(function(){
    const data = stringify(sort([ CHAI, CUCUMBER, JEST ]));
    writeFileSync(`${BASE}es-modules/index.json`, data, "utf8");
})();

(function(){
    const data = stringify(sort([ ASSERT, EXPECT, SHOULD ]));
    writeFileSync(`${BASE}es-modules/chai/index.json`, data, "utf8");
    writeFileSync(`${BASE}es-modules/cucumber/index.json`, data, "utf8");
})();

(function(){
    const data = stringify(sort([ ASSERT ]));
    writeFileSync(`${BASE}es-modules/chai/assert/index.json`, data, "utf8");
    writeFileSync(`${BASE}es-modules/cucumber/assert/index.json`, data, "utf8");
})();

(function(){
    const data = stringify(sort([ EXPECT ]));
    writeFileSync(`${BASE}es-modules/chai/expect/index.json`, data, "utf8");
    writeFileSync(`${BASE}es-modules/cucumber/expect/index.json`, data, "utf8");
})();

(function(){
    const data = stringify(sort([ SHOULD ]));
    writeFileSync(`${BASE}es-modules/chai/should/index.json`, data, "utf8");
    writeFileSync(`${BASE}es-modules/cucumber/should/index.json`, data, "utf8");
})();

(function (){
    const data = stringify(sort([ EXPECT ]));
    writeFileSync(`${BASE}es-modules/jest/index.json`, data, "utf8");
})();


(function (){
    const data = stringify(sort([ BROWSERIFY, DEFAULT, WEBPACK ]));
    writeFileSync(`${BASE}typescript/index.json`, data, "utf8");
})();

(function(){
    const data = stringify(sort([ ASSERT, EXPECT, SHOULD ]));
    writeFileSync(`${BASE}typescript/null/chai/index.json`, data, "utf8");
    writeFileSync(`${BASE}typescript/null/cucumber/index.json`, data, "utf8");
})();

(function (){
    const data = stringify(sort([ EXPECT ]));
    writeFileSync(`${BASE}typescript/null/jest/index.json`, data, "utf8");
})();

(function (){
    const data = stringify(sort([ CHAI, JEST ]));
    writeFileSync(`${BASE}typescript/browserify/index.json`, data, "utf8");
    writeFileSync(`${BASE}typescript/webpack/index.json`, data, "utf8");
})();

(function (){
    const data = stringify(sort([ ASSERT, EXPECT, SHOULD ]));
    writeFileSync(`${BASE}typescript/browserify/chai/index.json`, data, "utf8");
    writeFileSync(`${BASE}typescript/webpack/chai/index.json`, data, "utf8");
})();

(function (){
    const data = stringify(sort([ ASSERT, EXPECT, SHOULD ]));
    writeFileSync(`${BASE}typescript/browserify/chai/index.json`, data, "utf8");
    writeFileSync(`${BASE}typescript/webpack/chai/index.json`, data, "utf8");
})();

(function (){
    const data = stringify(sort([ EXPECT ]));
    writeFileSync(`${BASE}typescript/browserify/jest/index.json`, data, "utf8");
    writeFileSync(`${BASE}typescript/webpack/jest/index.json`, data, "utf8");
})();
