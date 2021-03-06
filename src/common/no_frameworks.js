const SELENIUMWEBDRIVER = {
  id: "selenium-webdriver",
  title: "Selenium Webdriver",
  subtitle: "A browser automation library",
  summary: "Implementation of the W3C WebDriver specification",
  description: "Selenium Webdriver is a JavaScript implementation of the W3C WebDriver specification. " +
      "It is a browser automation library. Most often used for testing web-applications, " +
      "Selenium may be used for any task that requires automating interaction with the browser.",
  link: "https://www.selenium.dev",
  domain: "selenium.dev",
  maintained: "ThoughtWorks",
  disable: false,
};

const WD = {
  id: "wd",
  title: "WD.js",
  subtitle: "node.js Webdriver/Selenium 2 client",
  summary: "Implementation of the W3C WebDriver specification",
  description: "WD.js is a library that is designed to be a malleable implementation of the W3C WebDriver protocol in Node, " +
      "exposing functionality via a number of programming paradigms. " +
      "WD.js is simply implementing the Selenium JsonWireProtocol and the Mobile JsonWireProtocol draft.",
  link: "https://github.com/admc/wd",
  domain: "github.com/admc",
  maintained: "Adam Christian et al",
  disable: false,
};

module.exports = {
  SELENIUMWEBDRIVER,
  WD,
};
