/* eslint-disable no-unused-vars, no-shadow */
const { MongoClient } = require("mongodb");

const uri =
  "mongodb+srv://un:pw@cluster0-w7riv.mongodb.net/test?retryWrites=true&w=majority";
const client = new MongoClient(uri, { useUnifiedTopology: true });
const data = [
  { name: "browser", count: 0 },
  { name: "nodejs", count: 0 },
  { name: "javascript", count: 0 },
  { name: "esnext", count: 0 },
  { name: "typescript", count: 0 },
  { name: "nightwatch", count: 0 },
  { name: "playwright", count: 0 },
  { name: "protractor", count: 0 },
  { name: "puppeteer", count: 0 },
  { name: "testcafe", count: 0 },
  { name: "webdriverio", count: 0 },
  { name: "noframework", count: 0 },
  { name: "cypress", count: 0 },
  { name: "seleniumwebdriver", count: 0 },
  { name: "typescript", count: 0 },
  { name: "wd", count: 0 },
  { name: "assert", count: 0 },
  { name: "expect", count: 0 },
  { name: "should", count: 0 },
  { name: "browserify", count: 0 },
  { name: "webpack", count: 0 },
  { name: "webdriver-manager", count: 0 },
  { name: "chai", count: 0 },
  { name: "cucumber", count: 0 },
  { name: "jest", count: 0 },
  { name: "jasmine", count: 0 },
  { name: "ava", count: 0 },
  { name: "mocha", count: 0 },
  { name: "tape", count: 0 },
  { name: "babel", count: 0 },
  { name: "tsc", count: 0 },
  { name: "esm", count: 0 },
  { name: "ts-jest", count: 0 },
  { name: "ts-node", count: 0 },
  { name: "babel-jest", count: 0 },
];

/* disable-eslint */
// To reset db once development finished WIP
client.connect((err) => {
  const collection = client.db("picker").collection("click");
  collection.insertMany(data, (err, res) => {
    if (err) throw err;
    client.close();
  });
});

client.connect((err) => {
  const collection = client.db("picker").collection("click");
  collection.updateOne(
    { name: "nodejs" },
    { $inc: { count: 1 } },
    (err, res) => {
      if (err) throw err;
      client.close();
    }
  );
});
