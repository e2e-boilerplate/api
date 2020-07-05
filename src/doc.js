const glob = require("glob");
const table = require("markdown-table");
const { writeFileSync } = require("fs");
const { logger } = require("./common");

glob("v1/**/*.json", (err, files) => {
  try {
    const readme = [["No", "Path"]];
    const data = [];
    files.forEach((file, index) => {
      readme.push([`${index + 1}`, file]);
      data.push(file);
    });

    const formatted = JSON.stringify(data, null, 2);

    writeFileSync("./README.md", table(readme, { align: "l" }), "utf8");
    writeFileSync("./src/swagger/paths.json", formatted, "utf8");
    writeFileSync("./v1/index.json", formatted, "utf8");
  } catch (error) {
    // eslint-disable-next-line no-undef
    logger.error(`${__filename}: ${error}`);
  }
});
