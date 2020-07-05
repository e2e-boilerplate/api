const gp = require("gh-pages");
const { logger } = require("./src/common/index");

gp.publish("v1", (error) => {
  if (error) {
    logger.error(error);
  }
});
