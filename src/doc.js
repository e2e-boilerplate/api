const glob = require("glob");
const { logger } = require("./common");
const table = require("markdown-table");
const { writeFileSync } = require("fs");

glob("api/**/*.json", (err, files) => {
  try {
    const data = [['No', 'Path']];
    const path = './README.md';
    files.forEach( (file, index) => {
      data.push([`${index+1}`, file]);
    });
    writeFileSync(path, table(data, { align: "l" }), "utf8");
  } catch( error){
    logger.error(error);
  }
});
