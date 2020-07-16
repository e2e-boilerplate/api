const BROWSERIFY = {
  id: "browserify",
  title: "Browserify",
  subtitle: "Organize your browser code and load modules",
  summary: "Compile Node.js modules for browser",
  description: "Browserify is a tool for compiling node-flavored modules for the browser. " +
      "Browserify lets you use require in the browser, the same way you'd use it in Node.js. " +
      "It brings resources from NPM ecosystem off of the server, and into the client.",
  link: "http://browserify.org",
  domain: "browserify.org",
  maintained: "James Halliday et al.",
  disable: false,
};

const WEBPACK = {
  id: "webpack",
  title: "Webpack",
  subtitle: "A static module bundler.",
  summary: "Webpack is an open-source JavaScript module bundler",
  description: "Webpack is a static module bundler for modern JavaScript applications. " +
      "When Webpack processes your application, it internally builds a dependency graph that maps " +
      "every module your project needs and generates one or more bundles.",
  link: "https://webpack.js.org",
  domain: "browserify.org",
  maintained: "Tobias Koppers et al.",
  disable: false,
};

const DEFAULT = {
  id: "default",
  title: "Default",
  subtitle: "Default ...",
  summary: "Default summary ...",
  description:
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore " +
      "et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut" +
      " aliquip ex ea commodo consequat.",
  link: "http://example.com",
  domain: "example.org",
  maintained: "Default et al.",
  disable: false,
};

const WEBDRIVERMANAGER = {
  id: "webdriver-manager",
  title: "webdriver-manager",
  subtitle: "A selenium server and browser driver manager.",
  summary: "Lorem ipsum dolor sit amet, consectetur ...",
  description:
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
  link: "https://github.com/angular/webdriver-manager",
  domain: "angular/webdriver-manager",
  maintained: "Google",
  disable: false,
};

module.exports = { BROWSERIFY, DEFAULT, WEBPACK, WEBDRIVERMANAGER };
