const CYPRESS = {
  id: "cypress",
  title: "Cypress",
  subtitle: "Testing for anything that runs in a browser",
  summary: "Cypress works on any front-end framework",
  description: "Cypress does not use Selenium. It runs in the same run-loop as your application inside a browser. " +
      "Debugging is done using familiar tools like Chrome DevTools. Time-travel is possible since it takes snapshots as your tests run.",
  link: "https://www.cypress.io",
  domain: "cypress.io",
  maintained: "cypress.io",
  disable: false,
};

const NIGHTWATCH = {
  id: "nightwatch",
  title: "Nightwatch.js",
  subtitle: "e2e testing, the easy way.",
  summary: "Use the W3C WebDriver API directly",
  description: "Nightwatch.js is written in Node.js and uses the W3C WebDriver API for interacting with browsers, in order to perform commands and assertions. " +
      "It uses a built-in command-line test runner and comes with its own cloud testing platform.",
  link: "https://nightwatchjs.org",
  domain: "nightwatchjs.org",
  maintained: "Pine View",
  disable: false,
};

const PLAYWRIGHT = {
  id: "playwright",
  title: "Playwright",
  subtitle: "Built to enable cross-browser web automation",
  summary: "Emulate mobile devices and have built-in auto-wait",
  description: "A Node.js library to automate Chromium, Firefox, and WebKit with a single API. " +
      "Using Playwrite, you can intercept network activity for stubbing and mocking network requests. " +
      "It emulates mobile devices, geolocation, permissions, and has a built-in auto-wait.",
  link: "https://playwright.dev",
  domain: "playwright.dev",
  maintained: "Microsoft",
  disable: false,
};

const PROTRACTOR = {
  id: "protractor",
  title: "Protractor",
  subtitle: "e2e test framework for Angular and AngularJS",
  summary: "Angular and AngularJ e2e test automation framework",
  description: "An end-to-end test framework for Angular and AngularJS applications. Protractor introduces Angular-specific locator strategies, " +
      "however it could be used for testing other frontend Web Application frameworks. It is built on top of WebDriverJS.",
  link: "https://www.protractortest.org/#/",
  domain: "protractortest.org",
  maintained: "Google",
  disable: false,
};

const PUPPETEER = {
  id: "puppeteer",
  title: "Puppeteer",
  subtitle: "High-level API to control Chrome or Chromium",
  summary: "API to control Chrome over the DevTools Protocol",
  description: "Puppeteer is a Node library that provides a high-level API to control Chrome or Chromium over the DevTools Protocol. " +
      "Puppeteer runs headless by default but can be configured to run full (non-headless) Chrome or Chromium.",
  link: "https://pptr.dev",
  domain: "pptr.dev",
  maintained: "Google",
  disable: false,
};

const TESTCAFE = {
  id: "testcafe",
  title: "TestCafé",
  subtitle: "Tool to automate e2e web testing",
  summary: "Write tests in JavaScript or TypeScript",
  description: "TestCafe supports the latest JavaScript features, including ES2017. You can also use TypeScript if you prefer a strongly typed language. " +
      "TestCafe reports JavaScript errors that it finds on the webpage. TestCafe is not built on Selenium.",
  link: "https://devexpress.github.io/testcafe/",
  domain: "devexpress.github.io",
  maintained: "ThoughtWorks",
  disable: false,
};

const WEBDRIVERIO = {
  id: "webdriverio",
  title: "WebdriverIO",
  subtitle: "Next-gen browser and mobile automation",
  summary: "1st Class WebDriver and Puppeteer Support",
  description: "WebdriverIO can be run on the WebDriver Protocol for true cross-browser testing as well as " +
      "Chrome DevTools Protocol for Chromium-based automation using Puppeteer. " +
      "WebdriverIO allows you to automate any modern web front-end frameworks.",
  link: "https://webdriver.io",
  domain: "webdriver.io",
  maintained: "OpenJS Foundation",
  disable: false,
};

const NOFRAMEWORK = {
  id: "no_framework",
  title: "No Framework",
  subtitle: "Use no framework",
  summary: "Use a WebDriver API directly",
  description:
      "A WebDriver API implementation could be used directly without specific guidance, on how the actual test automation should be implemented.",
  link: "",
  domain: "",
  maintained: "",
  disable: false,
};

module.exports = {
  CYPRESS,
  NIGHTWATCH,
  PLAYWRIGHT,
  PROTRACTOR,
  PUPPETEER,
  TESTCAFE,
  WEBDRIVERIO,
  NOFRAMEWORK,
};
