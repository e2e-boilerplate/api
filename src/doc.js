const glob = require("glob");
const { logger } = require("./common");

glob("api/**/*.json", (err, files) => {
  logger.info(files);
});
