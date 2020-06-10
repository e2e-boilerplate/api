const gp = require("gh-pages");
const { logger } = require("./src/common/index");

gp.publish("api", (error) => {
  if (error) {
    logger.error(error);
  }
});
