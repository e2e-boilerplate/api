const { readFileSync, writeFileSync } = require("fs");
const { userInfo } = require("os");
const YAML = require("json2yaml");

const user = userInfo().username;
const { logger } = require("../common");

const rootDir = `/Users/${user}/Documents/e2e-boilerplate`;

const swagger = {
  swagger: "2.0",
  info: {
    description:
      "A documentation for the static API for the e2e-boilerplate Picker application.",
    version: "1.0.0",
    title: "e2e Boilerplate",
    contact: {
      email: "e2eboilerplate@gmail.com",
    },
    license: {
      name: "MIT",
      url: "https://github.com/e2e-boilerplate/swagger/blob/master/LICENSE",
    },
  },
  host: "e2e-boilerplate.github.io",
  basePath: "/api/v1",
  tags: [],
  schemes: ["https"],
  paths: {},
  externalDocs: {
    description: "Find out more about e2e Boilerplate",
    url: "https://github.com/e2e-boilerplate",
  },
};

function buildTags() {
  const data = readFileSync("./src/swagger/tags.json");
  const tagsMeta = JSON.parse(data);

  tagsMeta.forEach((tag) => {
    const { name, description, url } = tag;
    const temp = {
      name,
      description,
      externalDocs: {
        description: "Find out more",
        url,
      },
    };

    swagger.tags.push(temp);
  });
}

buildTags();

function getFramework(path) {
  if (path === "/platforms/index.json") {
    return "platforms";
  }

  if (path === "/platforms/nodejs/index.json") {
    return "nodejs";
  }

  if (path === "/platforms/browser/index.json") {
    return "browser";
  }

  if (path === "/platforms/nodejs/framework/index.json") {
    return "framework";
  }

  if (path === "/platforms/nodejs/no_framework/index.json") {
    return "no_framework";
  }

  if (path === "/dependencies/index.json") {
    return "dependencies";
  }

  const framework = path.split("/");

  if (framework[2] === 'browser') {
    return framework.length >= 3 ? framework[3] : "";
  }

  return framework.length >= 4 ? framework[4] : "";
}

function buildPathKeys() {
  const data = readFileSync("./src/swagger/paths.json");
  const pathsMeta = JSON.parse(data);

  pathsMeta.forEach((path) => {
    if (path !== "api/index.json") {
      const shortPath = path.substring(6);
      const tags = getFramework(shortPath);
      console.log(shortPath + '   ' + tags);
      swagger.paths[shortPath] = {
        get: {
          tags: [tags],
          produces: ["application/json"],
          responses: {
            "200": {
              description: "OK",
            },
          },
        },
      };
    }
  });
}

buildPathKeys();

function convertToYml(json) {
  const yaml = YAML.stringify(json);
  writeFileSync(`${rootDir}/swagger/swagger.yaml`, yaml, "utf8");
}

try {
  const formatted = JSON.stringify(swagger, null, 2);
  writeFileSync("./src/swagger/swagger.json", formatted, "utf8");
  writeFileSync(`${rootDir}/swagger/swagger.json`, formatted, "utf8");
  convertToYml(swagger);
} catch (error) {
  logger.error(error);
}
