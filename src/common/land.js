const BROWSER = {
  id: "browser",
  title: "Browser",
  subtitle: "A Web browser",
  summary: "Run test inside a Browser",
  description:
    "Like conventional unit test, a JavaScript end-to-end test could run completely inside a browser environment. Debugging may require the use of the browser’s developer tools, such as the browser console. ",
  link: "https://en.wikipedia.org/wiki/Web_browser",
  domain: "wikipedia.org",
  maintained: "Not Applicable",
  disable: false,
};

const NODEJS = {
  id: "nodejs",
  title: "Node.js",
  subtitle: "A JavaScript runtime",
  summary: "Run test using Node.js runtime",
  description:
    "Node.js runs JavaScript outside the browser environment. When using Node.js, for end-to-end automation, except for the controlled browser, everything else runs within the Node.js runtime, outside the browser.",
  link: "https://nodejs.org/en/",
  domain: "nodejs.org",
  maintained: "OpenJS Foundation",
  disable: false,
};

module.exports = { BROWSER, NODEJS };
