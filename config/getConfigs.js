const GlobalConfig = require("../models/GlobalConfig");

module.exports = async () => {
  const configs = await GlobalConfig.findOne({ customId: "some-global-configs" });
  return configs;
};
