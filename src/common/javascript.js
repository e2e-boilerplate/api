const STANDARD = {
  id: "standard",
  title: "Standard JavaScript",
  subtitle: "ECMAScript Standard JavaScript",
  summary: "Current ECMAScript standard JavaScript",
  description: "Standard JavaScript is the current standard of JavaScript standardised by Ecma International . " +
      "Standard JavaScript is meant to ensure the interoperability of Web and server applications written in JavaScript.",
  link:
    "https://www.ecma-international.org/publications/standards/Stnindex.htm",
  domain: "ecma-international.org",
  maintained: "Ecma International",
  disable: false,
};

const NONSTANDARD = {
  id: "non_standard",
  title: "Non Standard JavaScript",
  subtitle: "ESNext and other JavaScript",
  summary: "Future ECMAScript standard and others",
  description: "Non-standard JavaScript includes ESNext (Ecma Script Next) is tomorrow's JavaScript today and others such as " +
      "TypeScript in the JavaScript ecosystem. ESNext uses a draft (not yet standardized) Ecma specifications.",
  link:
    "https://www.ecma-international.org/publications/standards/Stnindex.htm",
  domain: "ecma-international.org",
  maintained: "Ecma et al.",
  disable: false,
};

const COMMONJS = {
  id: "commonjs",
  title: "CommonJS",
  subtitle: "JavaScript module system",
  summary: "Module for JavaScript outside a browser",
  description: "CommonJS is a module system for JavaScript applications outside of the browser, " +
      "such as Web servers and desktop applications. " +
      "A CommonJS module exports a specific reusable JavaScript to any dependent code.",
  link: "https://requirejs.org/docs/commonjs.html",
  domain: "requirejs.org",
  maintained: "Andy Chung et al",
  disable: false,
};

const ESMODULES = {
  id: "es-modules",
  title: "ES Next",
  subtitle: "Standard JavaScript module system",
  summary: "JavaScript module system inside and outside browser",
  description: "JavaScript lacked one proper standard module definition format. " +
      "ES Modules is the ECMAScript standard for working with modules in JavaScript, proposed in ES6. " +
      "Major browsers and the Node modules working group is currently working on adding ES module support.",
  link:
    "http://www.ecma-international.org/ecma-262/6.0/",
  domain: "ecma-international.org",
  maintained: "Ecma International",
  disable: false,
};

const TYPESCRIPT = {
  id: "typescript",
  title: "TypeScript",
  subtitle: "A typed superset of JavaScript",
  summary: "A typed superset of JavaScript that compiles to plain JavaScript.",
  description: "TypeScript is a strict syntactical superset of JavaScript and adds optional static typing and compiles to plain JavaScript. " +
      "TypeScript may be used to develop JavaScript applications for both client-side and server-side execution.",
  link: "https://www.typescriptlang.org",
  domain: "typescriptlang.org",
  maintained: "Microsoft",
  disable: false,
};

module.exports = { STANDARD, NONSTANDARD, COMMONJS, ESMODULES, TYPESCRIPT };
