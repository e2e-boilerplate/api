const FRAMEWORK = {
  id: "framework",
  title: "Framework",
  subtitle: "Use a framework",
  summary: "Use an existing framework",
  description:
    "A framework creates an abstraction to provided a generic functionality for test automation on top of a WebDriver API implementation.",
  link: "",
  domain: "",
  maintained: "",
  disable: false,
};

const NOFRAMEWORK = {
  id: "no_framework",
  title: "No Framework",
  subtitle: "Use no framework",
  summary: "Use a WebDriver API directly",
  description:
    "A WebDriver API implementation could be used directly without specific guidance (framework) on the actual test automation implementation.",
  link: "",
  domain: "",
  maintained: "",
  disable: false,
};

module.exports = { FRAMEWORK, NOFRAMEWORK };
